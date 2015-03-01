var React     = require('react');
var Reflux    = require('reflux');
var request   = require('superagent');
var actions   = require('../actions/actions.js');
var makeUrl   = require('make-url');
var api       = require('../utils/url-paths');
var userStore = require('./user.js');
var reviewStore = require('./reviews.js');

var profileStore = Reflux.createStore({

  data: {
    user: null,
    reviews: null
  },

  listenables: [actions],

  //gets the item info from the database and sets the data to the item info
  init: function(){
    this.listenTo(userStore, this.updateUserData);
    this.listenTo(reviewStore, this.updateReviewData);     
  },

  // [Note] listens for triggers from userStore and updates it's own state
  updateUserData: function(user){
    console.log("profile store just updated its user data ", user);
    this.data.user = user;
    this.trigger(this.data);
  },

  // [Note] listens for triggers from the reviewStore and updates it's own state
  updateReviewData: function(reviews){
    console.log('profile store just updated its reviews data', reviews);
    this.data.reviews = reviews;
    this.trigger(this.data);
  },

  // TODO: The Profile Store needs to trigger a fetch reviews actions on CWM
  // [Question] Can multiple stores have handlers for the same action? (action = fetchReviews, multiple stores have onFetchReviews)?    
  // TODO: Possibly move this to review's store and just listen to that store
  onFetchReviews: function(){
    console.log('fetching reviews from profile store');
    var userId = userStore.getProp('id');
    request.get(makeUrl(api.reviews.getReviews, {user: userId}), function(err, res){
      if(err) {console.error('error fetching reivew information', err);}
      else {
        this.data.reviews = res.body;
        console.log('REVIEWS FROM ZEEE PROFILE', res.body);
        this.trigger(this.data);
      }
    }.bind(this));
  },

  //sets the state to the item data
  // does this even do anything from the store???? dunno.....
  getInitialState: function(){
    return this.data;
  }

})

module.exports = profileStore;