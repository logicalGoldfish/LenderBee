var React 						= require('react');
var Reflux						= require('reflux');
var Notification 			= require('./Notification.react.jsx');
var notificationsStore = require('../../stores/notificationsStore.js');
var actions = require("./../../actions/actions.js");

var Notifications = React.createClass({
	// this will cause setState({list:updatedlist}) whenever the store does trigger(updatedlist)
	mixins: [Reflux.connect(notificationsStore)],

	// We need to be able to connect to the user store, the messages store, the notification store, the review store
	componentWillMount: function() {
		actions.getNotifications();
	},

	render: function() {
		var notifications = this.state.notifications.map(function(notification){
			return <Notification borrowerName={notification.userreq_username} borrowerId={notification.userreq_id} itemName={notification.itemreq_title} itemId={notification.itemreq_id} 
			itemId={notification.itemreq_id}/>
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
