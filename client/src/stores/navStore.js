var navActions = require('../actions/navActions');
var Reflux = require('reflux');


var navStore = Reflux.createStore({
        // this will set up listeners to all publishers in TodoActions, using onKeyname (or keyname) as callbacks
        listenables: [navActions],
        onClickProfilePic: function() {
            console.log('PROFILE CLICKED');
            // this.updateName('YoYo');
        },
        onClickHamburger: function() {
            console.log('HAMBURGER CLICKED');
        },
        
        // called whenever we change a list. normally this would mean a database API call
        updateName: function(name){
            this.userName = name;
            this.trigger(name); // sends the updated list to all listening components (TodoApp)
        }
        // this will be called by all listening components as they register their listeners
        // getInitialState: function() {
        //     var userName = 'Nullee'
        //     return this.userName;
        // }
    });

module.exports = navStore;
