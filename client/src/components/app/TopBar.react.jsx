var React = require('react');
var Reflux = require('reflux');
var actions = require('../../actions/actions');
var navStore = require('../../stores/navStore');
var SideNavBar = require('./SideNavBar.react.jsx');
var Router = require('react-router');
var Link = Router.Link;

var TopBar = React.createClass({
  mixins: [Reflux.connect(navStore)],
  
  handleSideNavClick: function(evt) {
    actions.toggleSideNav();
  },

  render: function() {

    return (
        <div className="panel-body">
          <div className="glyphicon glyphicon-menu-hamburger" onClick={this.props.toggleSideNavBar}></div>
        </div>
    );
  }
});

module.exports = TopBar;