var React = require('react');
var Reflux = require('reflux');
var singleItemStore = require('../../stores/singleItemStore.js');
var actions = require('../../actions/actions.js');
var Router = require('react-router');

var singleItem = React.createClass({

  //listens to singleItemStore
  mixins: [Reflux.connect(singleItemStore), Router.State],

  componentWillMount: function() {
    var info = this.getParams().itemId;
    actions.loadItem(info);
  },

  render: function(){
    return (
      <div>
        <img src="#" href="#" alt="item"/>
        <p>{this.state.itemName}</p>
        <p>{this.state.itemDescription}</p>
        <button name="messageOwner">Message owner</button>
        <img src="#" href="#" alt="owner"/>
        <p><a href={"/#/profile/"+this.state.ownerName}>{this.state.ownerName}</a></p>
        <p>{this.state.ownerRating}</p>
      </div>
    )
  }
});

module.exports = singleItem;
