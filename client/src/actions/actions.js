var Reflux = require('reflux');

var actions = Reflux.createActions([
  "nextCarousel",
  "prevCarousel",
  "clickProfilePic", 
  "requestLentPage",
  "requestBorrowedPage",
  "toggleSideNav",
  "searchSubmit",
  "loadMessages",
  "loadItem",
  "loadUser"
]);

module.exports = actions;

