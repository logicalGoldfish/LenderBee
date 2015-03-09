var Reflux 	= require('reflux');
var React 	= require('react');
var request = require('superagent');
var actions = require('../actions/actions.js');
var api 		= require('../utils/url-paths.js');
var makeUrl = require('make-url');
var userStore = require('./user');

var itemStore = Reflux.createStore({
	items: null,

	init: function(){
		// Items Store listens for the action 'initializeUser and fetches items afterwards'
		this.listenTo(actions.fetchItems, this.fetchItems);
		this.listenTo(actions.returnItem, this.returnItem);

		// Listen for changes on the userStore so that when the user data is fetches, it will kick off the request to get items
		// this.listenTo(userStore, this.getItems);
	},

	/* Fetches Items from api endpoint */
	fetchItems: function(){
		var userId = userStore.getProp('id');
		
		request.get(makeUrl(api.items.fetch, {user: userId}), function(err, res){
			if ( err ) {
				console.err('error trying to get item information for user', err);
			}
			else {
				console.log('items', res.body);
				this.filterItems(res.body);
			}
		}.bind(this));	
	},

	// [How] Do we pass in the itemsId?
	// [Refactor] Could use promises to make this more modular or use next pattern
	returnItem: function(lender_id, borrower_id, itemsId){
		
		console.log('item attemping to be returned');

		request.put(makeUrl(api.items.update, {itemsId: itemsId}), function(err, res){
			// [Note] Was throwing error even though it updating the DB
			// if(err){
			// 	console.error('[error] returning item', err);
			// } else {
			// }
				console.log('successfully returned items');
				this.createReviews(lender_id, borrower_id, itemsId);
		}.bind(this));
	},

	createReviews: function(lender_id, borrower_id, item_id){
		
		console.log('attempting to create reviews');

		request.post(makeUrl(api.reviews.createPending, {lender_id: lender_id, borrower_id: borrower_id, item_id: item_id}), function(err, res){
			if (err) {
				console.error('[error] creating reviews');
			} else {
				console.log('successfully created reviews', res);
				this.fetchItems();
			}
		}.bind(this));
	},

	/* Filters Items into lent, borrowed, inventory */
	filterItems: function(items){
		/* Items is an array of item objects */
		// console.log(items);
		var filteredItems = {};
		var userId = userStore.getProp('id');
		// console.log('userId', userStore.getProp('userId'));
		items.forEach(function(item){
			/* if the item's lender_id is the same as the current user */
			if (userId === item.lender_id) {
				if (item.borrowed) {
					filteredItems.lent = filteredItems.lent || [];
					filteredItems.lent.push(item);
				} else {
					filteredItems.inventory = filteredItems.inventory || [];
					filteredItems.inventory.push(item);
				}
			}
			else if (userId === item.borrower_id) {
				filteredItems.borrowed = filteredItems.borrowed || [];
				filteredItems.borrowed.push(item);
			}
		});

		this.items = filteredItems;
		console.log('filtered items', this.items);
		this.trigger(this.items);
	},


	getInitialState: function() {
		return {
			items : this.items 
		};
	}
	
});

module.exports = itemStore;


