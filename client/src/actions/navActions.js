var Reflux = require('reflux');

var navActions = Reflux.createActions([
    "clickProfilePic",     // called by button in TodoItem
    "clickHamburger" // called by button in TodoMain (even though you'd think TodoHeader)
]);

module.exports = navActions;
