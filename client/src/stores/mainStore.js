var React = require('react');
var Reflux = require('reflux');
var actions = require('../actions/actions.js');

var userStore = Reflux.createStore({
  listenables: [actions],

  data: {loggedIn: false},

  onLoginToggle: function(status){
    if(status===true){
      // console.log("IN THE SYSTEM");
      this.data.loggedIn = true;
      this.trigger(this.data)
    }else{
      // console.log("OUT OF IT");
      this.data.loggedIn = false;
      this.trigger(this.data)
    }
  },

  getInitialState: function(){
   return this.data;
  },
});

module.exports = userStore;