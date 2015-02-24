var db = require('../db/db.js');
var User = global.db.User;
var Item = global.db.Item;
var Message = global.db.Message;
var Review = global.db.Review;
var controller = {};
var Sequelize = require('sequelize');

controller.create = function(req, res, next){
  // view not built yet for posting. GITHUB ISSUE #111
  // POSTING REVIEWS: request should have the following
  // rating, review, reviewee_id, reviewer_id
  console.log('reviews ctrl req.body:', req.body);
  console.log('reviews ctrl req.params', req.params);
  // assume reviewer_id are in req.params (url)
  // assume reviewee_id, rating and review are in req.body (form)
  
  // create that table row
  // add rating to reputation
  
  // create new Review:
    // rating, review, reviewee_id, reviewer_id
  // save that new review
  // look up user that is reviewee_id
    // update their reputation by adding rating
  // res.send(created review)

  var newReview = {
    rating: req.body.rating,
    review: req.body.review,
    reviewee_id: req.body.reviewee_id,
    reviewer_id: req.params.user,
    item_id: req.body.item_id
  };
  console.log('\n',newReview+'\n');

  Review.create(newReview)
    .catch(function(err) {
      console.log('\nCreate Review Error:', err);
    })
    .then(function(review) {
      User.find({ 
        where: {id: review.reviewee_id}
      }).then(function(user) {
        console.log('\nTHIS IS USER:', user, '\n');
        user.update({
          reputation: user['reputation'] + parseInt(review.rating)
        });
      }).catch(function(err) {
        console.log('\nUser reputation update error:', err);
      }).then(function() {
        res.send(review);
      })
    });
}

controller.getReviews = function(req, res, next){
  //Again, we have to query the borrower for its id because we only have its username
  //the lender id is included with the item

  // Current user's reviews
  Review.findAll({
    include: [ User ]
  })
  .then(function(reviews) {
    console.log(JSON.stringify(reviews));
  });

  // var user = req.params.user;
  // User.find({
  //   where: {
  //     username: user
  //   }
  // }).then(function(user){
  //   console.log('this is the user.id        ***********', user.id);
  //   Messages.findAll({
  //     where: Sequelize.or(
  //       {lender_id: user.id},
  //       {borrower_id: user.id}
  //     )
  //   }).then(function(messages){
  //     console.log(messages);
  //     res.send(messages);
  //   })
  // })
}

module.exports = controller;
