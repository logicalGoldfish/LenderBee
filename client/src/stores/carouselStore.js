var React = require('react');
var Reflux = require('reflux');
var request = require('superagent');

var carouselStore = Reflux.createStore({
  
  data: {items: ["lol"]},

  init: function(){
    request.get("/api/items/:user", function(res){
      console.log(res.body);
      this.data.items[0] = res.body.hi;
      this.trigger(this.data);
   })
    // request("#", res => {
    //   this.data.items = res.body;
    //   this.trigger(this.data);
    // })
  },

  getInitialState: function() {
    // var first = [];
    // for (var i=0; i<3; i++){
    //   first.push(this.data.items[i]);
    // }
    // return first;
    return this.data;
  }
})

module.exports = carouselStore;