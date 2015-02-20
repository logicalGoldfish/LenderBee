exports.User = sequelize.define('User', {
	firstname: {
		type: Sequelize.STRING
	},
	lastname: {
		type: Sequelize.STRING
	},
	reputation: {
		type: Sequelize.STRING
	},
	beebucks: {
		type: Sequelize.STRING
	},
	city: {
		type: Sequelize.STRING
	},
	state: {
		type: Sequelize.STRING
	},
	country: {
		type: Sequelize.STRING
	},
	username: {
		type: Sequelize.STRING
	}
})