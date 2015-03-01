var React 						= require('react');
var Reflux						= require('reflux');
var Notification 			= require('./Notification.react.jsx');
var notificationsStore = require('../../stores/notificationsStore.js');
var actions = require("./../../actions/actions.js");

var Notifications = React.createClass({

	mixins: [Reflux.connect(notificationsStore)],

	// We need to be able to connect to the user store, the messages store, the notification store, the review store
	componentWillMount: function() {
		actions.getNotifications();
	},

	render: function() {
		var notifications = this.state.notifications.map(function(notification) {
			// TODO: Check to see if these properties are correct (userReq/username)
			return <Notification borrowerName={notification.Users[0].username} borrowerId={notification.Users[0].id} itemName={notification.title} itemId={notification.id} />
		});
		return (
			<div>
				<h1>Notifications</h1>
				{notifications}
			</div>
		)
	}

});

module.exports = Notifications;
