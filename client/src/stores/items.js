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

		// Listen for changes on the userStore so that when the user data is fetches, it will kick off the request to get items
		// this.listenTo(userStore, this.getItems);
	},

	/* Fetches Items from api endpoint */
	fetchItems: function(){
		
		request.get(makeUrl(api.items.fetch, {user: 1}), function(err, res){
			if ( err ) {
				console.err('Error trying to get item information for user', err);
			}
			else {
				console.log('items', res.body);
				this.filterItems(res.body);
			}
		}.bind(this));	
	},

	/* Filters Items into lent, borrowed, inventory */
	filterItems: function(items){
		/* Items is an array of item objects */
		// console.log(items);
		var filteredItems = {};
		var userId = userStore.getProp('user_id');
		console.log('userId', userStore.getProp('user_id'));
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


