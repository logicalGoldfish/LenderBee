var React = require('react');
var Reflux = require('reflux');
var reviewStore = require('./../../stores/reviews.js');
var actions = require('./../../actions/actions.js');

var ReviewBox = React.createClass({
  //listens to messagingStore
  mixins: [Reflux.connect(reviewStore)],

  handleSubmit: function(e) {
    e.preventDefault();
    actions.reviewFormSubmitted(this.props.reviewId, $('#reviewBoxText').val(), $('#reviewRating').val());
    // console.log('submitted rev')
  },

  // storeRating: function(e){
  //     e.preventDefault();
  //     this.props.rating = $(this).text();
  //   });
  // },

  render: function(){
    //creates component for each message and loads them into the array messageGroup
    // var url = "/api/messages/samin"+ "/" + this.props.to + ""
    return (
    <div>
    <form className="reviewBox" onSubmit={this.handleSubmit}>
      <div className="form-group">
        <input type="number" min="1" max="5" step="1" id="reviewRating" name="reviewRating" />
        <textarea className="form-control" id="reviewBoxText" rows="3" placeholder="Review Your Lender" name="review"></textarea>
      </div>
      <button type="submit" className="btn btn-warning" onClick={this.handleSubmit}>Submit</button>
    </form>
    </div>
    )
  }
});

module.exports = ReviewBox;
