var React = require('react');
var _			= require('lodash');

var ItemBorrowed = React.createClass({
	render: function(){
		return (
			<div className="ui vertical segment">
				{/* I want to be able to show lender information including avatar and name, so we need our endpoint to also fetch user data */}
				<div>
					<i className="circular gift icon"></i>
					<span>{this.props.item.title}</span>
					<div>
						<span>Description: {this.props.item.description}</span>
					</div>
					<div>
						<i className="circular money icon"></i>
						<span>{this.props.item.beebucks}</span>
					</div>
					<p>Lender: {this.props.item.lender_id}</p>
				</div>
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
			<div className="ui center aligned segment">
				<h2 className="ui horizontal header divider">
			  	Currently Borrowed
				</h2>
				{borrowedItems}
			</div>
		);
	}

});

module.exports = AllItemsBorrowed;