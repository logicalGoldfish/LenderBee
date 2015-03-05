var actions = require('../actions/actions.js');
var request = require('superagent');
var Reflux  = require('reflux');
var makeUrl = require('make-url');
var api     = require('../utils/url-paths');
var userStore = require('./user.js');

var postItemStore = Reflux.createStore({

  listenables: [actions],
  data: {items: []},
  
  init: function() {
  },

  onPostFormSubmitted: function(title, description, price, photos) {
    var userId = userStore.getProp('id');
    request.post(makeUrl(api.items.create, {userId: userId}))
     .send({'title': title, 'description': description, 'beebucks': price, 'imageurl': 'https://res.cloudinary.com/dnfsudmqq/image/upload/v1425334340/hxyw7ryvrg13uemy5b9e.png'})
     .end(function(err, res) {
        if(err) {
            console.log("error on post: ", err);
        } else {
            
        $('#itemPostTitle').val("");
        $('#itemPostDescription').val("");
        $('#itemPostBeeBucks').val("");

        alert('Your item is now posted!');
        }
     });
    }
});

module.exports = postItemStore;