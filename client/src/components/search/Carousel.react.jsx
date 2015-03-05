var React = require('react');
var Reflux = require('reflux');
var carouselStore = require('../../stores/CarouselStore.js');
var actions = require('../../actions/actions.js');
var searchStore = require('../../stores/searchStore');
var Router = require('react-router');
var Link = Router.Link;

var InnerImage = React.createClass({

  propTypes: {
    itemInfo: React.PropTypes.object
  },

  handleClick: function() {
   actions.selectItem(this.props.itemInfo, this.props.itemInfo.lender);
  },

  render: function(){
    return (
      <div className="randomItem">
        <Link to="SingleItem" onClick={this.handleClick}>
          <p className="highText"><span className="greyback">{this.props.itemInfo.title}</span></p>
          <p className="lowText"><span className="greyback">Beebucks: {this.props.itemInfo.beebucks}</span></p>
          <img className="randomImage" src={this.props.itemInfo.imageurl} />
        </Link>
      </div>
    )
  }
})

var carousel = React.createClass({

  mixins: [Reflux.connect(carouselStore)],

  handleLeftArrowClick: function(evt){
    actions.prevCarousel();
  },

  handleRightArrowClick: function(evt){
    actions.nextCarousel();
  },

  render: function() {
    var items = this.state.items.map(function(item) {
      return (<InnerImage itemInfo={item} />);
    });
    return (
    <div className="randomWrapper">
      {items}
    </div>
    )
  }
})

module.exports = carousel;

// <p>{this.state}</p>
// <img src="#" href="#" alt="previous item set" className="inline arrow" onClick={this.handleLeftArrowClick}/>
// <ul className="inline">
//   <li><img src="#" href="#" alt="image A"/></li>
//   <li><img src="#" href="#" alt="image B"/></li>
//   <li><img src="#" href="#" alt="image C"/></li>
// </ul>
// <img src="#" href="#" alt="next item set" className="inline arrow" onClick={this.handleRightArrowClick}/>
