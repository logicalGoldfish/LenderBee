var db = require('../db/db.js');
var User = global.db.User;
var Item = global.db.Item;
var Message = global.db.Message;
var Notification = global.db.Notification;
var controller = {};

controller.create = function(req, res, next){
	//get the item title out and the borrower name
	var item = req.params.item;
	var borrower = req.params.borrower;
	User.find({
		where: {
			username: borrower
		}
	}).then(function(user){
		var userId = user.id;
		Item.find({
			where: {
				title: item
			}
		}).then(function(item){
			req.body.itemreq_id = item.id;
			req.body.userreq_id = user.id;
			Notification.create(req.body)
				.then(function(notification){
					res.send(notification);
				})
		})
	})
}

controller.getByUser = function(req, res, next){
	var user = req.params.user;
	User.find({
		where: {
			username: user
		}
	}).then(function(user){
		var userId = user.id;
		Item.find({
			where: {
				lender_id: user.id
			}
		}).then(function(items){
			console.log('items after a notifications search **********',items)
			Notification.find({
				itemreq_id: items.id
			}).then(function(notifications){
				res.json(notifications);
			})
		})
	})
}

module.exports = controller;
