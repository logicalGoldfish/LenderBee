var React = require('react');
var Reflux = require('reflux');
var actions = require('../actions/actions');
var searchStore = require('../stores/searchStore');

var searchResults = React.createClass({
 
 mixins: [Reflux.connect(searchStore)],
 
 searchInput: function() {
  console.log($('#searchBar').val())
  // return $('#searchBar').val();
 },
 // matchedItems: function() {

 //  console.log('fitler', this.state.items.filter(function(item) {
 //    return item.name === searchInput;
 //  }));
 // },
 
  handleSearch: function() {
    actions.searchSubmit();
  //TODO: Connect to DB and display items
 },

  render: function() {
    var matchedItems = this.state.items.filter(function(item){
      return item.name === $('#searchBar').val();
    })
      .map(function(item) {return <li> {item} </li>});

    return (
      <div>
        <ul>
          {matchedItems}
        </ul>
      </div>
    )
  }

});

module.exports = searchResults;

