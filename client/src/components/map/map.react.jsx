// var React = require('react');

// var map = React.createClass({

// 	// [Note] These are hard-coded properties, but we need to get the lat/long from the current address
// 	// TODO: Figure out how to get lat-long from address or use address with maps api for centering
// 	mixins: [Reflux.connect(searchStore)],

// 	// [Tip] Invoked once immediately after initial rendering, has DOM rep with this.getDOMNode()
// 	componentDidMount: function() {
// 		// [Note] Define Map Options needed for rendering map
// 		var address = "San Francisco, CA, USA"
// 		var mapCenter;
// 		var mapOptions = {center: null, zoom: 13};

// 		geocoder.geocode({'address': address}, function(results, status) {
// 		    if (status == google.maps.GeocoderStatus.OK) {
// 		    	mapCenter = results[0].geometry.location;
// 		      // map.setCenter(results[0].geometry.location);
// 		      // var marker = new google.maps.Marker({
// 		      //     map: map,
// 		      //     position: results[0].geometry.location
// 		      // });
// 		    } else {
// 		      console.log('Geocode was not successful for the following reason: ' + status);
// 		    }
//   	});

// 		var map = new google.maps.Map(this.getDOMNode(), mapOptions);
// 		var geocoder = new google.maps.Geocoder();

// 		var marker = new google.maps.Marker({position: this.mapCenterLatLng(), title: 'Hi', map: map});

// 		// [Note] Set the state after the component mounts (google maps api requires an active DOM node) 
// 		this.setState({map:map});

// 		function codeAddress() {
//   		var address = "185 Caselli Avenue, California, USA"
//   		geocoder.geocode({ 'address': address}, function(results, status) {
// 		    if (status == google.maps.GeocoderStatus.OK) {
// 		      map.setCenter(results[0].geometry.location);
// 		      var marker = new google.maps.Marker({
// 		          map: map,
// 		          position: results[0].geometry.location
// 		      });
// 		    } else {
// 		      console.log('Geocode was not successful for the following reason: ' + status);
// 		    }
//   	});
// }

// 	},

// 	// mapCenterLatLng: function(){
// 	// 	return new google.maps.LatLng(this.props.mapCenterLat, this.props.mapCenterLng);
// 	// },

// 	render: function() {
// 		return (
// 			<div className="map-container"/>
// 		);
// 	}
// });

// module.exports = map;