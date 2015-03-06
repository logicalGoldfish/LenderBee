var React         = require('react');
var Reflux        = require('reflux');

var Logout = React.createClass({

  render: function(){
    FB.logout(function(response) {
      document.location.href = "/login.html";
    });
    return (
      <div> </div>
    )
  }
});

module.exports = Logout;