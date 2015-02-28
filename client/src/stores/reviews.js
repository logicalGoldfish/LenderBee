var React 			= require('react');
var Reflux 			= require('reflux');
var request 		= require('superagent');
var actions 		= require('../actions/actions.js');
var userStore		= require('./user.js');
var makeUrl			= require('make-url');
var api					= require('../utils/url-paths.js');

var reviewStore = Reflux.createStore({

	data: {
		reviews: null,
		pendingReviews: null
	},

	init: function(){
		this.listenTo(actions.fetchReviews, this.onFetchReviews);
		this.listenTo(actions.fetchPendingReviews, this.onFetchPendingReviews);
	},

	// [Note] Should fetch all pending reviews where the user needs to complete the reviews
	onFetchPendingReviews: function(){
		// [Note] Uncomment this when controller is done
		console.log('fetching pending reviews');
		var userId = userStore.getProp('userId');
		request.get(makeUrl(api.reviews.fetchOutstandingReviews, {user: userId}), function(err, res){
			if (err) {
				console.error('error: fetching pending reviews for user', err);
			}
			else {
				// console.log(res);
				this.data.pendingReviews = res.body;
				// console.log(this.reviews);
				this.trigger(this.data);
			}
		}.bind(this));
	},

	onFetchReviews: function(){
	  var userId = userStore.getProp('userId');
	  console.log('fetching reviews for userId ', userId);
	  request.get(makeUrl(api.reviews.getReviews, {user: userId}), function(err, res){
	    if(err) {console.error('error fetching reivew information', err);}
	    else {
	      this.data.reviews = res.body;
	      console.log('reviews from review store', res.body);
	      this.trigger(this.data.reviews);
	    }
	  }.bind(this));
	},

	getInitialState: function() {
		// console.log('initial state: ', this.reviews);
		return this.data;
	}


});

module.exports = reviewStore;