var React 						= require('react');
var Reflux						= require('reflux');
var Notification 			= require('./Notification.react.jsx');
var notificationStore = require('../../stores/notifications.js');

var Notifications = React.createClass({
	// this will cause setState({list:updatedlist}) whenever the store does trigger(updatedlist)
	mixins: [Reflux.connect(notificationStore)],

	render: function() {
		var notifications = this.state.notifications.map(function(notification){
			return <Notification src={notification.src} name={notification.name} item={notification.item}/>
		});

		return (
			<div>
				<h1>Notifications</h1>
				{notifications}
			</div>
		);
	}

});

module.exports = Notifications;
