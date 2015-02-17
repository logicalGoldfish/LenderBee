var actions = require('../actions/actions');
var request = require('superagent');
var Reflux = require('reflux');

var searchStore = Reflux.createStore({
    listenables: [actions],
    data: {items: []},
    
    init: function() {
      var that = this;
        request("/api/items/:user", function(res){
          console.log(JSON.parse(res.text));
          that.data.items = JSON.parse(res.text);
          that.trigger(that.items);
        })
      },

    onSearchSubmit: function() {
        console.log('SEARCH SUBMITTED');
        $('#searchBar').val('');
        this.init();
    },

    getInitialState: function() {
        return this.data;
    }
});

module.exports = searchStore;