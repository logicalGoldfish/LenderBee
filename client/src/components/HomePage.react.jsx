var TopBar = require('./topBar.react.jsx');
var searchBar = require('./searchBar.react.jsx');
var carousel = require('./carousel.react.jsx');
var searchResults = require('./searchResults.react.jsx');
var PostPage = require('./postPage.react.jsx');

var React = require('react');

var HomePage = React.createClass({

  // getInitialState: function() {
  //   return null;
  //   // return getTodoState();
  // },

  componentDidMount: function() {
    // HomePageStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    // TodoStore.removeChangeListener(this._onChange);
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div>
        <TopBar name="User" />
        <searchBar />
        <carousel />
        <searchResults />
        <PostPage />
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    // this.setState(getTodoState());
  }

});

module.exports = HomePage;