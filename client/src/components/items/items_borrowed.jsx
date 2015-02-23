var React = require('react');
var _			= require('lodash');

var ItemBorrowed = React.createClass({
	render: function(){
		return (
			<div>
				{/* I want to be able to show lender information including avatar and name, so we need our endpoint to also fetch user data */}
				<p>{this.props.item.title}</p>
				<p>{this.props.item.description}</p>
				<p>{this.props.item.pollenprice}</p>
				<p>{this.props.item.lender_id}</p>
			</div>
		);
	}
});


var AllItemsBorrowed = React.createClass({

	render: function() {
		// console.log('Items container with props', this.props.item);
		var borrowedItems = _.map(this.props.item, function(item){
			return <ItemBorrowed item={item}/>;
		});

		return (
			<div>
				{borrowedItems}
			</div>
		);
	}

});

module.exports = AllItemsBorrowed;