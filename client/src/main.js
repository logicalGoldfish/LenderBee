/** @jsx React.DOM */
$(document).ready(function() {
  var React = require('react');
  var HomePage = require('./components/HomePage.react');

  React.render(<HomePage />, document.getElementById('main'));

});