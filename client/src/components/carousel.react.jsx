var React = require('react');
var Reflux = require('reflux');
var carouselStore = require('../stores/carouselStore.js');

var carousel = React.createClass({

  mixins: [Reflux.connect(carouselStore)],

  render: function(){
    return (
    <div className="carousel">
      <p>{this.state}</p>
      <img src="#" href="#" alt="previous item set" className="inline arrow"/>
      <ul className="inline">
        <li><img src="#" href="#" alt="image A"/></li>
        <li><img src="#" href="#" alt="image B"/></li>
        <li><img src="#" href="#" alt="image C"/></li>
      </ul>
      <img src="#" href="#" alt="next item set" className="inline arrow"/>
    </div>
    )
  }
})

module.exports = carousel;