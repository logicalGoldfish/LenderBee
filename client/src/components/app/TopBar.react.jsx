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


      // <div id="topbar" className="ui menu">
      //   <div className="item">
      //   </div>          
      // </div>

  render: function() {

    return (
      <div id="topbar" className="ui segment">
        <i className="align justify icon large" onClick={this.props.toggleSideNavBar}></i>     
      </div>
    );
  }
});

module.exports = TopBar;