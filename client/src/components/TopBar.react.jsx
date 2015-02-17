var React = require('react');
var Reflux = require('reflux');
var navActions = require('../actions/navActions');
var navStore = require('../stores/navStore');

var TopBar = React.createClass({
  mixins: [Reflux.connect(navStore)],
  
  handleHamburgerClick: function(evt) {
      navActions.clickHamburger();
  },

  handleProfileClick: function(evt) {
    navActions.clickProfilePic();
  },

  render: function() {
    return (
        <div className="panel-body">
          <a href="#" className="glyphicon glyphicon-menu-hamburger" onClick={this.handleHamburgerClick}></a>
          <span>Welcome, {this.props.name}
          <a href="#" ><img className="profilePicture" src="../css/images/profilePlaceholder.png" onClick={this.handleProfileClick} /></a>
          </span>
        </div>
    );
  },

  _onSave: function(text) {

  }

});

module.exports = TopBar;