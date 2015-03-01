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

<<<<<<< HEAD
=======
  // handleProfileClick: function(evt) {
  //   actions.clickProfilePic();
  // },

  logOut: function(){
    FB.logout(function(response) {
    document.location.href = "/login";
        // Person is now logged out
    });
  },

>>>>>>> logout button is in nav bar
  render: function() {

    return (
        <div className="panel-body">
          <div className="glyphicon glyphicon-menu-hamburger" onClick={this.props.toggleSideNavBar}></div>
<<<<<<< HEAD
=======
          <span>Welcome, {this.props.name}
          <a href="#" ><Link to="profile"><img className="profilePicture" src="../css/images/profilePlaceholder.png" onClick={this.handleProfileClick} /></Link></a>
          </span>
          <input type="button" onClick={this.logOut} href="/login" value="Log out"/>
>>>>>>> logout button is in nav bar
        </div>
    );
  }
});

module.exports = TopBar;