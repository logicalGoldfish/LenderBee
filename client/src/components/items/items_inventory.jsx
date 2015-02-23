var React = require('react');
var _ 		= require('lodash');

var InventoryItem = React.createClass({
	// TODO: I want to be able to show lender information including avatar and name, so we need our endpoint to also fetch user data
	// TODO: We need to be able to adjust the pollen price as needed
	render: function() {
		return (
			<div>
				<p>{this.props.item.title}</p>
				<p>{this.props.item.description}</p>
				<p>{this.props.item.pollenprice}</p>
			</div>
		);
	}
});

var Items_inventory = React.createClass({

	render: function() {
		var InventoryItems = _.map(this.props.item, function(item){
			return <InventoryItem item={item}/>
		});

		return (
			<div>
				{InventoryItems}
			</div>
		);
	}

});

module.exports = Items_inventory;
