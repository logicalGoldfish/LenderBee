var db = require('../db/db.js');
var User = global.db.User;
var Item = global.db.Item;
var Messages = global.db.Message;
var controller = {};
var Sequelize = require('sequelize');

controller.create = function(req, res, next){
	//req.body will have the message
	//req.params.user will be borrower_id
	//We have to query the borrower for its id because we only have its username
	//however, the lender_id is already associated with the item so we have that already.
	var from = req.params.fromId;
	var to = req.params.toId;

	req.body.from_id = from;
	req.body.to_id = to;
	console.log(req.body.message);
	Messages.create(req.body).then(function(message){
		res.send(message);
	})

}

// controller.getMessages = function(req, res, next){
// 	//Again, we have to query the borrower for its id because we only have its username
// 	//the lender id is included with the item
// 	var response = {};
// 	var user = req.params.user;
// 	User.find({
// 		where: {
// 			username: user
// 		}
// 	}).then(function(user){
// 		response.firstname = user.firstname;
// 		response.lastname = user.lastname;
// 		response.user_id = user.id;
// 		console.log('this is the user.id        ***********', user.id);
// 		Messages.findAll({
// 			where: Sequelize.or(
// 				{from_id: user.id},
// 				{to_id: user.id}
// 			)
// 		}).then(function(messages){
// 			response.messages = messages;
// 			res.send(response);
// 		})
// 	})
// }

// controller.getMessages = function(req, res, next){
// 	//Again, we have to query the borrower for its id because we only have its username
// 	//the lender id is included with the item
// 	var response = {};
// 	var user = req.params.user;
// 	User.find({
// 		where: {
// 			username: user
// 		}
// 	}).then(function(user){
// 			Messages.findAll({
// 				where: Sequelize.or(
// 					{from_id: user.id},
// 					{to_id: user.id}
// 				)
// 			}).then(function(messages){
// 					console.log('response after getting messages!   ',messages);
// 					response.messages = messages.dataValues;
// 					response.users = {};
// 			//loop through all of the messages in this object and do a find all
// 				for(var i = 0; i < messages.length; i++){
// 					User.find({
// 						where: Sequelize.or(
// 								{id: messages[i].dataValues.to_id},
// 								{id: messages[i].dataValues.from_id}
// 							)	
// 						}).then(function(users){
// 							//this should be an array of users!
// 							console.log('users after querying from messages----------', users);
// 							for(var i = 0; i < users.length; i++){
// 								console.log('users[i].firstname', users[i].dataValues.firstname)
// 								response.users[users[i][id]] = user.dataValues.username;
// 							}
// 					}).then(function(response){
// 						res.send(response);
// 					})
// 					console.log('these are the usersssss result **********', response.users);
// 				}
// 			})
// 		})
// }

controller.getMessages = function(req, res, next){
	// console.log(req.params.user);
	// var response = {};
	// response.names = {};
	// console.log()
	// User.find({
	// 	where: {
	// 		username: req.params.user
	// 	}
	// }).then(function(user){
	// 	//find all messages associated with a user
		Messages.findAll({
			where: Sequelize.or(
				{to_id: req.params.userId},
				{from_id: req.params.userId}
			)
		}).then(function(messages){
			console.log(messages);
			res.send(messages);
		})
	}

// controller.getMessagesAsLender = function(req, res, next){
// 	//We have to query the lender for its id because we only have its username
// 	//the borrower_id is included with the item
// 	var lender = req.params.lender;
// 	User.find({
// 		where: {
// 			username: lender
// 		}
// 	}).then(function(user){
// 		console.log('user returned after ', user);
// 		Messages.findAll({
// 			where:
// 			{
// 				borrower_id: req.params.borrower,
// 				lender_id: user.id
// 			}
// 		}).then(function(messages){
// 			res.send(messages);
// 		})
// 	})
// }


module.exports = controller;
