var navActions = require('../actions/navActions');
var Reflux = require('reflux');

var navStore = Reflux.createStore({
    listenables: [navActions],
    onClickProfilePic: function() {
        console.log('PROFILE CLICKED');
    },
    onClickHamburger: function() {
        console.log('HAMBURGER CLICKED');
    },
    
    updateName: function(name){
        this.userName = name;
        this.trigger(name);
    }
});

module.exports = navStore;
