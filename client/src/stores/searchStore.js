var actions = require('../actions/actions');
var request = require('superagent');
var Reflux = require('reflux');

var searchStore = Reflux.createStore({
    listenables: [actions],
    data: {items: [], searched: null},
    
    init: function() {
      // this.data.searched = $('#searchBar').val();
      var that = this;
        request("/api/items/city/samin/" + "" + this.data.searched + "", function(res){
          // that.data.items = res;
          that.data.items = JSON.parse(res.text);
          that.trigger(that.data);
          });
      },

    onSearchSubmit: function(searchedVal) {
        // this.searchInput = $('#searchBar').val();
        // console.log('SEARCHINP', this.searchInput);
        // $('#searchBar').val('');
        this.data.searched = searchedVal;
        this.init();
    },

    getInitialState: function() {
        return this.data;
    }
});

module.exports = searchStore;