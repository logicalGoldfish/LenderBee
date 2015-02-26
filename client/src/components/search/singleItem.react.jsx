var React = require('react');
var Reflux = require('reflux');
var singleItemStore = require('./../../stores/singleItemStore.js');
var actions = require('./../../actions/actions.js');
var Messaging = require('../message/messaging.react.jsx');
var Router = require('react-router');

var singleItem = React.createClass({
  //listens to singleItemStore
  mixins: [Reflux.connect(singleItemStore), Router.Navigation],

  handleItemRequest: function() {
    actions.itemRequestSubmitted(this.state.item.id, "samin");
  },

  handleMessageLender: function() {
    actions.lenderMessaged(this.state.item.lender, this.state.lender.username);
     this.transitionTo('Messaging')
  },

  render: function(){
    return (
      <div>
        <img src="#" href="#" alt="item"/>

        <p>Item: {this.state.item.name}</p>
        <p>Description: {this.state.item.description}</p>
        <p>Pollen Price: {this.state.item.price}</p>
        <span>Lender: {this.state.lender.username+ " "}</span>
        <span>{this.state.lender.firstname + " "}</span>
        <span>{this.state.lender.lastname + " "}</span>
        <span>Lender Community: {this.state.lender.city+ " " + this.state.lender.state}</span>
        <button name="messageLender" onClick={this.handleMessageLender}>Message Lender</button>
        <button name="requestItem" onClick={this.handleItemRequest}>Request Item</button>
      </div>
    )
  }
});

module.exports = singleItem;
