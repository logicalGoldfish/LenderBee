var React = require('react');
var Reflux = require('reflux');
var actions = require("./../../actions/actions.js");
var notificationStore = require("./../../stores/notificationsStore.js");

var Notification = React.createClass({

	// what information will be displayed in the notification?
	// img url for img tag
	// borrower name
	// item description
	mixins: [Reflux.connect(notificationStore)],

	handleAccept: function() {
		actions.itemRequestAccepted(this.props.borrowerId, this.props.itemId);
	}, 

	handleDecline: function() {
		actions.itemRequestDeclined(this.props.borrowerId, this.props.itemId);
	},

	render: function() {
		return (
			<div>
				<p>{this.props.borrowerName} wants to borrow your {this.props.itemName}</p>
				<button itemId={this.props.itemId} name={this.props.name} onClick={this.handleAccept}>Accept</button>
				<button itemId={this.props.itemId} name={this.props.name} onClick={this.handleDecline}>Decline</button>
			</div>
		);
	}

});

module.exports = Notification;