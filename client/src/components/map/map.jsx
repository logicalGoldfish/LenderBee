var React = require('react');

var map = React.createClass({

	// [Note] These are hard-coded properties, but we need to get the lat/long from the current address
	// TODO: Figure out how to get lat-long from address or use address with maps api for centering
	getDefaultProps: function() {
		return {
			initialZoom: 8,
			mapCenterLat: 37.7688362,
			mapCenterLng: -122.4151127
		};
	},

	// [Tip] Invoked once immediately after initial rendering, has DOM rep with this.getDOMNode()
	componentDidMount: function() {
		// [Note] Define Map Options needed for rendering map
		var mapOptions = {
			center: this.mapCenterLatLng(),
			zoom: this.props.initialZoom
		};
		var map = new google.maps.Map(this.getDOMNode(), mapOptions);		

		// [Note] Set the state after the component mounts (google maps api requires an active DOM node) 
		this.setState({map:map});
	},

	mapCenterLatLng: function(){
		var props = this.props;
		return new google.maps.LatLng(props.mapCenterLat, props.mapCenterLng);
	},

	render: function() {
		return (
			<div className="map-container"/>
		);
	}
});

module.exports = map;