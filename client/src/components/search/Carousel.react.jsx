var React = require('react');
var Reflux = require('reflux');
var carouselStore = require('../../stores/CarouselStore.js');
var actions = require('../../actions/actions.js');

var carousel = React.createClass({

  mixins: [Reflux.connect(carouselStore)],

  handleLeftArrowClick: function(evt){
    actions.prevCarousel();
  },

  handleRightArrowClick: function(evt){
    actions.nextCarousel();
  },

  render: function(){
    var first = "/#/item/"+this.state.items[0];
    if (this.state.items[1]){
      var second = "/#/item/"+this.state.items[1];
    }else{
      var second = null;
    }
    if (this.state.items[2]){
      var third = "/#/item/"+this.state.items[2];
    }else{
      var third = null;
    }
    return (
    <div className="carousel">
      <p>{this.state}</p>
      <img src="#" href="#" alt="previous item set" className="inline arrow" onClick={this.handleLeftArrowClick}/>
      <ul className="inline">
        <li><a href={first}><img src="#" href="#" alt="image A"/></a></li>
        <li><a href={second}><img src="#" href="#" alt="image B"/></a></li>
        <li><a href={third}><img src="#" href="#" alt="image C"/></a></li>
      </ul>
      <img src="#" href="#" alt="next item set" className="inline arrow" onClick={this.handleRightArrowClick}/>
    </div>
    )
  }
})

module.exports = carousel;
