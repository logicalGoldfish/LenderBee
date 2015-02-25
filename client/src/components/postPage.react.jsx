var React = require('react');

var PostPage = React.createClass({

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

  handlePostSubmit: function(e) {
    // e.preventDefault();
    // $this = $('.postForm');
    // $.ajax({
    //    type: "POST",
    //    url: "/api/items/christine",
    //    data: new FormData($this),
    //    success : function(){
    //       alert('Done');
    //    }
    // });
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      //later: plug in " + session.username + "
      <form className="postForm" action="/api/items/christine" method="POST">
        <div className="form-group">
          <label for="itemName">Enter Item</label>
          <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter Item Name (ie 'Hammer')" name="title" />
        </div>
        <div className="form-group">
        <label for="itemName">Enter Description</label>
        <textarea className="form-control" rows="3" placeholder="Describe Your Item" name="description"></textarea>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Enter Pollen Price</label>
          <input type="number" className="form-control" placeholder="$$$" name="pollenprice" />
        </div>
        <div className="form-group">
          <label for="exampleInputFile">Add Photos</label>
          <input type="file" name="photos" multiple="multiple" />
          <p className="help-block">Upload Item Photos</p>
        </div>
        <button type="submit" class="btn btn-warning" >Submit</button>
        </form>
    );
  },

  /**
   * Event handler for 'change' events coming from the TodoStore
   */
  _onChange: function() {
    // this.setState(getTodoState());
  }

});

module.exports = PostPage;