$(document).ready(function() {
  var React = require('react');
  var HomePage = require('./components/HomePage.react.jsx');

  React.render(<HomePage />, document.getElementById('main'));

});