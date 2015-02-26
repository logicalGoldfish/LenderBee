var React = require('react');
var Reflux = require('reflux');
var request = require('superagent');
var actions = require('../actions/actions.js');

var messagingStore = Reflux.createStore({

  data: {messages: [], lender: null},

  //listens to actions
  listenables: [actions],

  onLenderMessaged: function(lenderId, lenderUsername) {
    
    this.data.lender = lenderUsername;
    this.trigger(this.data);
    var that = this;
    request("/api/messages/samin", function(res) {
      that.data.messages = JSON.parse(res.text).filter(function(message) { 
        return ((message.to === "samin" || message.from === "samin") && (message.from === lenderUsername || message.to === lenderUsername)) 
        })

        that.trigger(that.data);
    });
  },

  onMessageFormSubmitted: function(message, recipient) {
    var that = this;
      request
            .post("/api/messages/samin"+ "/" + recipient + "")
            .send({'message': message})
            .end(function(err, res) {
              if (err) {
                console.log("send message error", err);
              }
              else {
                $('#messageBoxText').val("");
                console.log('Your message was sent!');
                
              }

            });
  },
  

  //gets the item info from the database and sets the data to the item info
  init: function(){
   //  request.get("/api/items/:user", function(res){
   //    console.log(res.body);
   //    this.data.item = res.body;
   //    this.trigger(this.data);
   // })
  },

  //sets the state to the item data
  getInitialState: function(){
    return this.data;
  }

})

module.exports = messagingStore;
