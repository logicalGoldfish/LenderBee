var React 			= require('react');
var actions 		= require('../../actions/actions.js');
var _						= require('lodash');
var userStore 	= require('../../stores/user.js');
var SuccessMessage = require('../app/successMessage.react.jsx');
var LentItem = React.createClass({
 

	returnItem: function(lender_id, borrower_id, item_id){
		console.log('attempts to return item from lent item component');
		$('#successMessage').addClass("success");
		actions.returnItem(lender_id, borrower_id, item_id);
	},

	render: function() {

		var lender_id = userStore.getProp('id');
		var borrower_id = this.props.item.borrower_id;
		var item_id = this.props.item.id;

		var borrower = this.props.item.borrower;

		var elementStyle = {
		  position: "absolute",
		  bottom: "10%",
		  textAlign: "left",
		  left: "7%",
		  color: "white",
		  backgroundColor: "black",
		  opacity: "0.75",
		  padding: "2%",
		  borderRadius: "5px"
		};

		return (
				<div className="column">
					<SuccessMessage message="Item Returned!" />
					<div className="ui segment">
						<div>
							<img className="ui fluid image crop" src={this.props.item.imageurl}></img>
							<div style={elementStyle}>
								<div>
									<i className="tiny user icon"></i>
									<span>{borrower.firstname + " " +borrower.lastname}</span>
								</div>
								<div>
									<i className="tiny money icon"></i>
									<span>{this.props.item.beebucks}</span>
								</div>
							</div>
						</div>	
					</div>
					<div className="ui green button" onClick={this.returnItem.bind(this, lender_id, borrower_id, item_id)}>Item Returned</div>
				</div>			
		);
	}
});

var Items_lent = React.createClass({

	// <div>
	// <h5>Lent Items</h5>
	// 	{LentItems}
	// </div>

	render: function() {

		var LentItems = _.map(this.props.item, function(item){
			return <LentItem item={item}/>;
		});

		return (
			<div>
				<h1 className="ui horizontal header divider">
					Lent
				</h1>
				<div className="ui center aligned stackable four column grid">
					{LentItems}
				</div>
			</div>
		);
	}

});

module.exports = Items_lent;