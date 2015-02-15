/*** @jsx React.DOM */
var React = require('react');
var TopBar = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div className="panel panel-warning">
        <div className="panel-body">
          Welcome, {this.props.name}
          <div className="sideBar"
        </div>
      </div>
    );
  },

  /**
   * Event handler called within TodoTextInput.
   * Defining this here allows TodoTextInput to be used in multiple places
   * in different ways.
   * @param {string} text
   */
  _onSave: function(text) {
    // if (text.trim()){
    //   TodoActions.create(text);
    // }

  }

});

module.exports = TopBar;