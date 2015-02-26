var React = require('react');

var Login = React.createClass({

	render: function() {
		return (
			<div>
				<h5>Login</h5>
				<a href="/auth/facebook">
					<img src="/assets/login-with-facebook.png">
				</a>
			</div>
		);
	}
});

module.exports = Login;