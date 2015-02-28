var React       = require('react');
var Reflux      = require('reflux');
var reviewStore = require('../../stores/reviewStore.js');
var actions     = require('../../actions/actions.js');
var Router      = require('react-router');

// TODO: On the controller for fetching pending reviews, we need to look-up the reviewee-id and append all the users data (name, avatar etc.)
// TODO: Should render:
      // 1) Name of Reviewee
      // 2) Avatar of Reviewee
      // 3) Item Description
      // 4) Item Picture (Requires cloudinary --> POST MVP)
var review = React.createClass({

  render: function(){
    // TODO: Clicking on any of element needs to route to writeReview Page and pass review data as props
    var firstName = this.props.review.reviewee.firstname;
    var lastName  = this.props.review.reviewee.lastname;
    firstName[0]  = firstName[0].toUpperCase();
    lastName[0]   = lastName[0].toUpperCase();
    return (
      <div>
        {/* <img href={this.props.review.reviewee.imgurl}> */}
        <p>{firstName + " " + lastName}</p>
        <p>{this.props.review.item.title}</p>
      </div>
    )
  }
});

module.exports = review;