var React = require('react');
var Reflux = require('reflux');
var request = require('superagent');
var actions = require('../actions/actions.js');

var messagingUsersStore = Reflux.createStore({

  data: {conversations: [], partners: []},

  //listens to actions
  listenables: [actions],

  onConversationCalled: function(partner) {
    this.data.partner = partner;
    this.trigger(this.data);
  },

  //gets the item info from the database and sets the data to the item info
  init: function(){
    var that = this;
    request("/api/messages/samin", function(res) {
      that.data.conversations = JSON.parse(res.text);
      that.data.conversations.forEach(function(conversation) { 
        if (that.data.partners.indexOf(conversation.to) === -1 && conversation.to !== "null") {
          that.data.partners.push(conversation.to);
        }
      })
      that.trigger(that.data);
    })
  },

  //sets the state to the item data
  getInitialState: function(){
    return this.data;
  }

})

module.exports = messagingUsersStore;
