var React 			= require('react');
var actions 		= require('../../actions/actions.js');
var _						= require('lodash');
var userStore 	= require('../../stores/user.js');

var LentItem = React.createClass({

	// [Note] ReturnItem Needs to do the following:
			// make a put request to server which updates the item record with the following:
					// borrowed set to false
					// sets borrower_id to null
			//  
	returnItem: function(lender_id, borrower_id, item_id){
		actions.returnItem(lender_id, borrower_id, item_id);
	},

	// TODO: I want to be able to show lender information including avatar and name, so we need our endpoint to also fetch user data 
	render: function() {
		var lender_id = userStore.getProp('id');
		var borrower_id = this.props.item.borrower_id;
		var item_id = this.props.item.id;
		// console.log(lender_id, borrower_id, item_id);
		
		return (
			<div>
				<p>Item: {this.props.item.title}</p>
				<p>Item_ID: {this.props.item.id}</p>
				<p>Description: {this.props.item.description}</p>
				<p>Pollen Price: {this.props.item.pollenprice}</p>
				<p>Borrower: {this.props.item.borrower_id}</p>
				{/* [Warning] somehow we need to pass props to this.returnItem using bind, not sure how to handle with jsx*/}
				<button onClick={this.returnItem.bind(this, lender_id, borrower_id, item_id)}>Item Was Returned</button>
				<hr></hr>
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
			<h5>Lent Items</h5>
				{LentItems}
			</div>
		);
	}

});

module.exports = Items_lent;