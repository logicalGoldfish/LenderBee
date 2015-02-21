var React = require('react');

var Notification = React.createClass({

	// what information will be displayed in the notification?
	// img url for img tag
	// borrower name
	// item description
	render: function() {
		return (
			<div>
				<img src={this.props.src}/>
				<p>{this.props.name}</p>
				<p>{this.props.item}</p>
				<button>Accept</button>
				<button>Decline</button>
			</div>
		);
	}

});

module.exports = Notification;