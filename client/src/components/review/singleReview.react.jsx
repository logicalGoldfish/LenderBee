var React       = require('react');
var Reflux      = require('reflux');
var reviewStore = require('../../stores/reviewStore.js');
var actions     = require('../../actions/actions.js');
var Rating      = require('./rating.react.jsx');
var RatingStarStatic = require('./ratingStarStatic.react.jsx');

var review = React.createClass({

  mixins: [Reflux.connect(reviewStore)],

  render: function(){
    console.log('review from within single review', this.props.review);
    var user = this.props.review.reviewer;
    return (
      <div className="singleProfileReview">
        <div className="singleReviewPicDiv"><img src={user.fbpicture} className="singleReviewFBpic"></img></div>
        <div className="singleReviewContent">
        <RatingStarStatic rating={user.rating} />
        <p><b>{user.username}</b></p>
        </div>
        <div className="singleReviewReview"><p>{this.props.review.review}</p></div>
        <hr></hr>
        {/* insert rating component here with stars */}
      </div>
    );
  }
});

module.exports = review;