var React 		= require('react');
var Reflux 		= require('reflux');
var actions 	= require('../actions/actions.js');
var faker 		= require('faker');
var request 	= require('superagent');

/* Dummy Data until we can get this wired up to back-end */
// _fake_notifications = [
// 	{
// 		src: faker.image.imageUrl(),
// 		name: faker.name.firstName() + faker.name.lastName(),
// 		item: 'Bicycle'
// 	},
// 	{
// 		src: faker.image.imageUrl(),
// 		name: faker.name.firstName() + faker.name.lastName(),
// 		item: 'Hammock'
// 	},
// 	{
// 		src: faker.image.imageUrl(),
// 		name: faker.name.firstName() + faker.name.lastName(),
// 		item: 'Honda Accord'
// 	}
// ];

var notificationStore = Reflux.createStore({
	// might have to also connect this store to userstore to get the username/user_id info for get request
	listenables: [actions],
	data: {notifications: []},

	init: function(){
		// this.getNotifications();
	},

	// this will be asynchronous, how do we handle this?
	onGetNotifications: function(){
		var that = this;
		request("/api/notifications/christine", function(res) {
			console.log('HERE ARE THE NOTIFICATIONS', JSON.parse(res.text));
			that.data.notifications = JSON.parse(res.text);
			that.trigger(that.data);
		})
	},

	onItemRequestAccepted: function(borrower, item) {
		var that = this;
		request.del("/api/notifications/accept/" + "" + item + "/" + borrower + "", function(res) {
			console.log('item is now borrowed');
			actions.getNotifications();
			that.trigger(that.data);
		});
		// request("/")
	},

	onItemRequestDeclined: function(borrower, item) {
		var that = this;
		request.del("/api/notifications/accept/" + "" + borrower + "/" + item + "", function(res) {
			console.log('item not borrowerd');
			actions.getNotifications();
			that.trigger(that.data);
		});
	},

	 getInitialState: function() {
        return this.data;
    }
});


module.exports = notificationStore;