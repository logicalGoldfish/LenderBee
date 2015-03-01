var React = require('react');
var Reflux = require('reflux');
var reviewStore = require('../../stores/reviewStore.js');
var actions = require('../../actions/actions.js');

var review = React.createClass({

  //listens to reviewStore
  mixins: [Reflux.connect(reviewStore)],

  render: function(){
    // console.log('review from within single review', this.props.review);
    var user = this.props.review.reviewer;
    return (
      <div>
        <img src={user.fbpicture}></img>
        <p><b>{user.username}</b></p>
        <p>{this.props.review.review}</p>
        {/* insert rating component here with stars */}
      </div>
    );
  }
});

module.exports = review;