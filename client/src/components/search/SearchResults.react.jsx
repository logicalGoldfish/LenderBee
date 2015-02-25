var React = require('react');
var Reflux = require('reflux');
var actions = require('../../actions/actions');
var searchStore = require('../../stores/searchStore');
var SingleItem = require('./singleItem.react.jsx');
var SearchBar = require('./SearchBar.react.jsx');
var Map = require('../map/map.react.jsx');
var Router = require('react-router');
var Link = Router.Link;

var ResultDiv = React.createClass({

  mixins: [Router.Navigation],
  proptypes: {
    itemName: React.PropTypes.string,
    itemId: React.PropTypes.number,
    itemPrice: React.PropTypes.number,
    itemDescription: React.PropTypes.string,
    lenderId: React.PropTypes.number,
  },

  handleClick: function() {
   actions.selectItem(this.props.itemName, this.props.itemId, this.props.itemPrice, this.props.itemDescription, this.props.lenderId);
   // this.transitionTo('SingleItem');
  },
  
  //onClick = change Route;
      //trigger action that takes current item, createsActiveItem in store, 
      //singleItem listening to store, 
  render: function() {
    return (
      <div className="searchresultDiv">
      <Link to="SingleItem" onClick={this.handleClick}>{this.props.itemName}</Link>
      </div>
      )
  }
});

var searchResults = React.createClass({
 
 mixins: [Reflux.connect(searchStore)],

  handleSearch: function() {
    actions.searchSubmit();
  //TODO: Connect to DB and display items
 },

  render: function() {
    var matchedItems = this.state.items.map(function(item) 
      {return <ResultDiv itemName={item.title} itemId={item.id} itemPrice={item.pollenprice} itemDescription={item.description}
      lenderId={item.lender_id} itemId={item.id} onClick={ResultDiv.handleClick} />});
    return (
      <div>
      <h1>Results</h1>
      {matchedItems}
      </div>
    )
  }

});

module.exports = searchResults;
