/*** @jsx React.DOM */
var React = require('react');
var TopBar = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
      <nav id="topBar">
        <a href="#">Link</a>
      </nav>
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