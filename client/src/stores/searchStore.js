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
          
          // for (var i = 0; i < that.data.items.length; i++) {
          //   console.log('LENDER ID', that.data.items[i].lender_id)
          //   request("/api/users/" + "" + that.data.items[i].lender_id + "", function(resp) {
          //     that.data.items[i].city = JSON.parse(resp.text).city;
          //   });
          // }
          // console.log('CITIES IN HERE', that.data.items)
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