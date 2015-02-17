var React = require('react');
var Reflux = require('reflux');
var actions = require('../actions/actions');
var searchStore = require('../stores/searchStore');

var searchResults = React.createClass({
 
 mixins: [Reflux.connect(searchStore)],
 
  handleSearch: function() {
    actions.searchSubmit();
  //TODO: Connect to DB and display items
 },

  render: function() {
    return (<div className="searchResults">
      {this.state.items.map(function(item){
         return (<div><p>{item.name}</p></div>)
      })}
    </div>)
  }

});

module.exports = searchResults;

