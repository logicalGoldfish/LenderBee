var React       = require('react');
var Reflux      = require('reflux');
var reviewStore = require('../../stores/reviewStore.js');
var actions     = require('../../actions/actions.js');
var Router      = require('react-router');
var ReviewBox = require('./reviewBox.react.jsx');

// TODO: On the controller for fetching pending reviews, we need to look-up the reviewee-id and append all the users data (name, avatar etc.)
// TODO: Should render:
      // 1) Name of Reviewee
      // 2) Avatar of Reviewee
      // 3) Item Description
      // 4) Item Picture (Requires cloudinary --> POST MVP)
var review = React.createClass({

  mixins: [Router.Navigation],

  // handleReviewSubmit: function(rating, review) {
  //   actions.reviewSubmit(rating, review);
  // },

  render: function() {
    // TODO: Add stars above ReviewBox to record user's rating.
    var firstName = this.props.review.reviewee.firstname;
    var lastName  = this.props.review.reviewee.lastname;
    firstName[0]  = firstName[0].toUpperCase();
    lastName[0]   = lastName[0].toUpperCase();
    return (
      <div className="pendingReviewDiv">
        {/* <img href={this.props.review.reviewee.imgurl}> */}
        <p>{firstName + " " + lastName}</p>
        <img src={this.props.review.reviewee.fbpicture} />
        <p>{this.props.review.item.title}</p>
        <ReviewBox reviewId={this.props.review.id}/>
      </div>
    )
  }
});

module.exports = review;