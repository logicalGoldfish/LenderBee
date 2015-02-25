var React = require('react');
var Reflux = require('reflux');
var messagingUsersStore = require('./../../stores/messagingUsersStore.js');
var Message = require('./message.react.jsx');
var MessageBox = require('./messageBox.react.jsx');
var actions = require('./../../actions/actions.js');

var SingleConversation = React.createClass({
  //listens to messagingStore
  mixins: [Reflux.connect(messagingUsersStore)],

  handleSubmit: function() {
    actions.messageFormSubmitted();
  },

  getDefaultProps: function() {
    return {
      to: window.location.href.split("/")[window.location.href.split("/").length -1]
    }
  },

  render: function(){
    //creates component for each message and loads them into the array messageGroup
    var that = this;
    // console.log('THIS IS PARTNER', this.props.partner)
    // console.log('CONVOS FROM COMPONENT', this.state.conversations)

    var messages = this.state.conversations.filter(function(singleMessage) {
      return (singleMessage.to === that.state.partner || singleMessage.from === that.state.partner);
    }).map(function(singleMessage) {
    return <div>{singleMessage.from + ":"}{" " +singleMessage.message}</div>
    })
    return (
      <div>
        <p>Chatting: {this.state.partner} </p>
        <div className="messageWindow">
          <ul>
            {messages}
          </ul>
        </div>
        <MessageBox to={this.props.to} from="samin" />
      </div>
    )
  }
});

module.exports = SingleConversation;
