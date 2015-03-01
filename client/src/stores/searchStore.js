var actions     = require('../actions/actions');
var request     = require('superagent');
var Reflux      = require('reflux');
var userStore   = require('./user.js');
var makeUrl     = require('make-url');
var api         = require('../utils/url-paths.js');

var searchStore = Reflux.createStore({
    listenables: [actions],
    data: {items: [], searched: null},
    
    init: function() {
      // this.data.searched = $('#searchBar').val();
    },

    onSearchSubmit: function(searchedVal) {
      var that = this;
      var userId = userStore.getProp('id');
      request(makeUrl(api.items.searchByCity, {userId: userId, title: searchedVal}), function(res){
        // that.data.items = res;
        console.log('THE DATA RETURNED FROM THE SEARCH', JSON.parse(res.text))
        that.data.items = JSON.parse(res.text);
        that.trigger(that.data);
        actions.searchResComplete(that.data.items);
      });
    },

    getInitialState: function() {
        return this.data;
    }
});

module.exports = searchStore;