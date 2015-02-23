var React 	= require('react');
var Reflux 	= require('reflux');

var mapStore = Reflux.createStore({
	
	// TODO: The mapStore needs to hold the data to be used for the map
	// The addresses from the results search need to be set here for rendering
	// MVP + 1/2 also display tooltip with information about what is at that location
	// MVP + 1, clicking on a specific location in the map will highlight that item in the search view  	
	init: function(){
	
	},

	getInitialState: function() {
		return {};
	}

});

module.exports = mapStore;