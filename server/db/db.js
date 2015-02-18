module.exports = {};

module.exports.db = function() {
  var Sequelize = require('sequelize');
  var sequelize = new Sequelize('LenderBee', 'root', '', {
    dialect: 'mysql',
    port: 3306
  });

  // TODO: put models in each file under models
  var makeSchema = function() {
    // TODO: add further constraints
    var User = sequelize.define('User', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      username: Sequelize.STRING,
      firstname: Sequelize.STRING,
      lastname: Sequelize.STRING,
      reputation: Sequelize.INTEGER,
      beebucks: Sequelize.INTEGER,
      city: Sequelize.STRING,
      state: Sequelize.STRING,
      country: Sequelize.STRING
    });

    var Item = sequelize.define('Item', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      pollenprice: Sequelize.INTEGER,
      borrowed: Sequelize.BOOLEAN
    });

    var Message = sequelize.define('Message', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      message: Sequelize.TEXT
    });

    User.hasMany(Item, {foreignKey: 'borrower_id'});
    User.hasMany(Item, {foreignKey: 'lender_id'});
    User.hasMany(Message, {foreignKey: 'borrower_id'});
    User.hasMany(Message, {foreignKey: 'lender_id'});

    // Creates User, Message, and Item tables if they don't exist
    // Also inserts the following test data
    User.sync().then(function() {
      var newUser1 = User.build({
        username: 'bubblebee',
        firstname: 'Brixton',
        lastname: 'Humperdink',
        reputation: 100,
        beebucks: 300,
        city: 'Honey Pot',
        state: 'California',
        country: 'USA'
      });
      var newUser2 = User.build({
        username: 'criminycricket',
        firstname: 'Creighton',
        lastname: 'Crambleberry',
        reputation: 500,
        beebucks: 5000,
        city: 'Shrubbery',
        state: 'California',
        country: 'USA'
      });
      newUser1.save();
      newUser2.save().then(function() {
        User.findAll()
          .then(function(usrs) {
            for (var i = 0; i < usrs.length; i++) {
              console.log(usrs[i].username + ' exists');
            }
          })
          .then(function() {
            Message.sync().then(function() {
              var newMsg = Message.build({
                message: 'hello world',
                borrower_id: 1,
                lender_id: 2
              });
              newMsg.save();
            });
          })
          .then(function() {
            Item.sync().then(function() {
              var newItem = Item.build({
                title: 'Stinger',
                description: 'For when your stinger falls off defending the hive',
                pollenprice: 400,
                borrowed: true,
                borrower_id: 1,
                lender_id: 2
              });
              newItem.save();
            });
          })
      });
    });
  };
  
  sequelize
    .authenticate()
    .complete(function(err) {
      if (!!err) {
        console.log('Unable to connect to db:', err);
      } else {
        console.log('Connection to db successful!');
        makeSchema();
      }
    });

};

