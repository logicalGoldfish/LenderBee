var React = require('react');
var Reflux = require('reflux');
var actions = require('../actions/actions.js');

var userStore = Reflux.createStore({
	listenables: [actions],

	init: function(){

	},

	// TODO: This is currently hard-coded and needs to be updated to be dynamic based on login/auth
	user_id: 1,
	
	getProp: function(prop) {
		return this[prop] ? this[prop] : null;
	},

	getInitialState: function() {
		return this.user_id;
	}
});

module.exports = userStore;