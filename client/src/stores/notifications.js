var React 		= require('react');
var Reflux 		= require('reflux');
var actions 	= require('../actions/actions.js');
var faker 		= require('faker');
var request 	= require('superagent');

/* Dummy Data until we can get this wired up to back-end */
_fake_notifications = [
	{
		src: faker.image.imageUrl(),
		name: faker.name.firstName() + faker.name.lastName(),
		item: 'Bicycle'
	},
	{
		src: faker.image.imageUrl(),
		name: faker.name.firstName() + faker.name.lastName(),
		item: 'Hammock'
	},
	{
		src: faker.image.imageUrl(),
		name: faker.name.firstName() + faker.name.lastName(),
		item: 'Honda Accord'
	}
];

var notificationStore = Reflux.createStore({
	// might have to also connect this store to userstore to get the username/user_id info for get request
	listenables: [actions],

	init: function(){
		// this.getNotifications();
	},

	// this will be asynchronous, how do we handle this?
	getNotifications: function(){
		request.get('/api/some-endpoint', function(res){
			// store this data in the store's state somehow
		});
	},

	getInitialState: function() {
		return {
			notifications: _fake_notifications
		};
	}
});


module.exports = notificationStore;