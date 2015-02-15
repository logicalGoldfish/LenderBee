/*** @jsx React.DOM */
var React = require('react');

var searchBar = React.createClass({
  render: function() {
    return (
    <div className="form-group">
      <div className="icon-addon addon-sm">
        <input type="text" placeholder="Search..." className="form-control" id="search" />
      </div>
    </div>
    )
  }
});

module.exports = searchBar;






