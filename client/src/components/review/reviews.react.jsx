var React 				= require('react');
var Reflux 				= require('reflux');
var actions 			= require('../../actions/actions.js');
var reviewsStore 	= require('../../stores/reviews.js');
var Review 				= require('./review.react.jsx');

var Reviews = React.createClass({
	// TODO: We need to listen to the review store and anytime it is triggered we need to call update which sets the state
	// [Warning] Currently we can only have one callback registered to triggered events from the reviewsStore, need other listening pattern for different callbacks
	mixins: [Reflux.listenTo(reviewsStore, "onFetchReviews")],
	/**
	 * [onFetchReviews description]
	 * @param  {[Array]} reviews [Pending Reviews for User to Complete]
	 */
	onFetchReviews: function(reviews){
		console.log('reviews component attempts to set state with: ', reviews);
		this.setState({
			reviews: reviews
		});
	},

	// [Tip] Called once before render
	componentWillMount: function() {
		console.log('store should fetch pending reviews');
		actions.fetchPendingReviews();		
	},

	getInitialState: function() {
		return {};
	},

	render: function() {
		var reviews;
		if (this.state.reviews) {
			reviews = this.state.reviews.map(function(review, index){
				return <Review review={review} />
			});
		}

		return (
			<div>
				<h1>MY PENDING REVIEWS</h1>
				{reviews}
			</div>
		);
	}

});

module.exports = Reviews;