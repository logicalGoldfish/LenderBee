var React = require('react');
var Reflux = require('reflux');
var messagingUsersStore = require('./../../stores/messagingUsersStore.js');
var Message = require('./message.react.jsx');
var MessageBox = require('./messageBox.react.jsx');
var actions = require('./../../actions/actions.js');
var userStore = require('./../../stores/user.js');

var SingleConversation = React.createClass({
  //listens to messagingStore
  mixins: [Reflux.connect(messagingUsersStore)],

  handleSubmit: function() {
    actions.messageFormSubmitted();
  },

  render: function(){
    //creates component for each message and loads them into the array messageGroup
    var that = this;
    // console.log('CONVOS FROM COMPONENT', this.state.conversations)
    var userId = userStore.getProp("id");
    // console.log('USERNAME FROM THE SINGLE CONVO', userName);

    var messages = this.state.conversations.filter(function(singleMessage) {
      return (singleMessage.to.username === that.state.partnerName || singleMessage.from.username === that.state.partnerName);
    }).map(function(singleMessage) {
    return <div>{singleMessage.from.username + ":"}{" " +singleMessage.message}</div>
    })
    return (
      <div>
        <p>Chatting: {this.state.partnerName} </p>
        <div className="messageWindow">
          <ul>
            {messages}
          </ul>
        </div>
        <MessageBox to={this.state.partnerId} from={userId} />
      </div>
    )
  }
});

module.exports = SingleConversation;
