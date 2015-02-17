var searchActions = require('../actions/searchActions');
var Reflux = require('reflux');

var searchStore = Reflux.createStore({
    listenables: [searchActions],
    
    onSubmit: function() {
        console.log('SEARCH SUBMITTED');
        $('#searchBar').val('');
    }
});

module.exports = searchStore;