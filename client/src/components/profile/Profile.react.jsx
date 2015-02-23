var React = require('react');
var Reflux = require('reflux');
var profileStore = require('../../stores/profileStore.js');
var actions = require('../../actions/actions.js');
var Review = require('../review/review.react.jsx');
var Router = require('react-router');
var Link = Router.Link;

var Profile = React.createClass({

  componentWillMount: function() {
    // alert('switching to profile view');
  },

  //listens to profileStore
  mixins: [Reflux.connect(profileStore)],

  render: function(){
    //creates component for each review and loads them into the array reviewGroup
     var reviewGroup = this.state.reviews.map(function(singleReview) {
      return (<div><Review reviewInfo={singleReview} /></div>);
     });
    return (
      <div>
        <img src="#" href="#" alt="user"/>
        <p>{this.state.item.userName}</p>
        <p>{this.state.item.userRating}</p>
        <p>{this.state.item.about}</p>
        <p><Link to="reviews">Reviews</Link></p>
        <div>{reviewGroup}</div>
      </div>
    )
  }
});

module.exports = Profile;
