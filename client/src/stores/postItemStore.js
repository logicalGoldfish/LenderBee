var actions = require('../actions/actions');
var request = require('superagent');
var Reflux = require('reflux');

var postItemStore = Reflux.createStore({
    listenables: [actions],
    data: {items: []},
    
    onPostFormSubmitted: function() {
      
    },

    // onSearchSubmit: function() {
    //     // this.searchInput = $('#searchBar').val();
    //     // console.log('SEARCHINP', this.searchInput);
    //     // $('#searchBar').val('');
    //     this.init();
    // },

    getInitialState: function() {
        return this.data;
    }
});

module.exports = borrowedStore;