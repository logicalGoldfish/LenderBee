/*** @jsx React.DOM */
var React = require('react');
var TopBar = React.createClass({

  /**
   * @return {object}
   */
  render: function() {
    return (
        <div className="panel-body">
          <a href="#" className="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></a>
          <span>Welcome, {this.props.name}
          <a href="#"><img className="profilePicture" src="../css/images/profilePlaceholder.png" /></a>
          </span>
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