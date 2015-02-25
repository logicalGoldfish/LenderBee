var React       = require('react');
var Reflux      = require('reflux');
var reviewStore = require('../../stores/reviewStore.js');
var actions     = require('../../actions/actions.js');

// TODO: On the controller for fetching pending reviews, we need to look-up the reviewee-id and append all the users data (name, avatar etc.)
// TODO: Should render:
      // 1) Name of Reviewee
      // 2) Avatar of Reviewee
      // 3) Item Description
      // 4) Item Picture (Requires cloudinary --> POST MVP)
var review = React.createClass({

  render: function(){
    console.log('review was rendered');
    return (
      <div>
        {/*<p>{this.props.reviews.user.userName}</p>*/}
        <p>review</p>
        <p>{this.props.review.reviewee_id}</p>
      </div>
    )
  }
});

module.exports = review;