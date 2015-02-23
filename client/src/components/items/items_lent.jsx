var React = require('react');
var _			= require('lodash');

var LentItem = React.createClass({
	render: function() {
		return (
			<div>
				{/* I want to be able to show lender information including avatar and name, so we need our endpoint to also fetch user data */}
				<p>{this.props.item.title}</p>
				<p>{this.props.item.description}</p>
				<p>{this.props.item.pollenprice}</p>
				<p>{this.props.item.borrower_id}</p>
			</div>
		);
	}
});

var Items_lent = React.createClass({
	render: function() {

		var LentItems = _.map(this.props.item, function(item){
			return <LentItem item={item}/>;
		});

		return (
			<div>
				{LentItems}
			</div>
		);
	}

});

module.exports = Items_lent;