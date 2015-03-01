var React = require('react');
var Reflux = require('reflux');
var messagingStore = require('./../../stores/messagingStore.js');
var Message = require('./message.react.jsx');
var MessageBox = require('./messageBox.react.jsx');
var actions = require('./../../actions/actions.js');

var Messaging = React.createClass({
  //listens to messagingStore
  mixins: [Reflux.connect(messagingStore)],

  // handleSubmit: function() {
  //   actions.messageFormSubmitted();
  // },

  render: function(){
    //creates component for each message and loads them into the array messageGroup
    var that = this;
    var fromName = this.state.userName;
    var messageGroup = this.state.messages.map(function(singleMessage) {
      return (<Message message={singleMessage.message} to={singleMessage.to_id} fromName={fromName}/>);
    });
    return (
      <div>
        <p>Messaging: {this.state.lenderName}</p>
        <div className="messageWindow">
          <ul>
            {messageGroup}
          </ul>
        </div>
        <MessageBox to={this.state.lenderId} from={this.state.userId} />
      </div>
    )
  }
});

module.exports = Messaging;
