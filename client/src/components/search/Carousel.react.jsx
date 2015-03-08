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

  // <div>
  //   <Link to="SingleItem" onClick={this.handleClick}>
  //     <p>{this.props.itemInfo.title}</p>
  //     <img src={this.props.itemInfo.imageurl} alt={this.props.itemInfo.title} />
  //     <p>{this.props.itemInfo.beebucks}</p>
  //   </Link>
  // </div>

  render: function(){
    return (
      <div className="column">
            <div className="ui segment">
              <Link to="SingleItem" onClick={this.handleClick}>
              <p>{this.props.itemInfo.title}</p>
              <img className="ui huge image" src={this.props.itemInfo.imageurl} alt={this.props.itemInfo.title} />
              </Link>
              <i className="fa fa-tag"/><span>{"   " + this.props.itemInfo.beebucks}</span>
              <i className="fa fa-user"/><span>{"   " + this.props.itemInfo.lender.username}</span>
              <i className="fa fa-star"/><span>{"   " + this.props.itemInfo.lender.rating}</span>
            </div>
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

  // componentDidMount: function(){
  //   actions.randomItems("ha");
  // },

  render: function() {
    var items = this.state.items.map(function(item) {
      return (<InnerImage itemInfo={item} />);
    });
    return (
   <div className="ui stackable four column page grid carousel">
   <h2 className="ui centered teal header">Browse Items Near You</h2>
      {items}
    </div>
    )
  }
})

module.exports = carousel;
