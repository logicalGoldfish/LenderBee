var React = require('react');
var Reflux = require('reflux');
var messagingUsersStore = require('../stores/messagingUsersStore.js');
var actions = require('../actions/actions.js');
var Router = require('react-router');
var Link = Router.Link;

var User = React.createClass({
  propTypes: {
    userInfo: React.PropTypes.object
  },
  render: function(){
    return (
        <div><p><Link to="message">{this.props.userInfo.person}</Link></p></div>
      )
  }
});

var MessagingUsers = React.createClass({

  //listens to messagingUsersStore
  mixins: [Reflux.connect(messagingUsersStore)],

  render: function(){
    //creates component for each review and loads them into the array reviewGroup
    var messagedUsers = this.state.reviews.map(function(singleUser) {
     return (<div><User userInfo={singleUser} /></div>);
    });
    return (
      <div>
        <p>currently messaging</p>
        {messagedUsers}
      </div>
    )
  }
});

module.exports = MessagingUsers;
