var React = require('react');
var Reflux = require('reflux');
var messagingUsersStore = require('./../../stores/messagingUsersStore.js');
var actions = require('./../../actions/actions.js');
var Router = require('react-router');
var Link = Router.Link;

var User = React.createClass({
  propTypes: {
    userInfo: React.PropTypes.object
  },

  handleClick: function() {
    actions.conversationCalled(this.props.partner);
  },
  
  render: function(){
    return (
        <div><Link to="messageUser" partner={this.props.partner} onClick={this.handleClick}>{this.props.partner}</Link></div>
        //onClick, call handler with this.props.partner
        //on store, save state's current user as partner. 
        //trigger current user.
      )
  }
});

var MessagingUsers = React.createClass({

  //listens to messagingUsersStore
  mixins: [Reflux.connect(messagingUsersStore)],

  render: function(){
    //creates component for each review and loads them into the array reviewGroup
    var messagedUsers = this.state.conversations.map(function(conversation) {
     return (<User message={conversation.message} partner={conversation.to_id} />);
    });

    var partners = this.state.partners.map(function(partner) {
      return (<User partner={partner} />);
    });

    return (
      <div>
        <p>Your Messages</p>
        <ul>
        {partners}
        </ul>
      </div>
    )
  }
});

module.exports = MessagingUsers;
