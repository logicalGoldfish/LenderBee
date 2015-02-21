var db = require('../db/db.js');
var User = global.db.User;
var Item = global.db.Item;
var Message = global.db.Message;
var Notification = global.db.Notification;
var controller = {};


controller.create = function(req, res, next){
	//get the item title out and the borrower name
	var item = req.params.item;
	var borrower = req.params.user;
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

// controller.getNotificationsByUser = function(req, res, next){
// 	//
// }

module.exports = controller;
