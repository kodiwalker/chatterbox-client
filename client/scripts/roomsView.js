// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //^ call render, renderRoom (lobby),
    //default room to render: lobby
  },

  render: function () {
    // TODO: Render out the list of rooms.
    //^ populates drop down list?
  },

  renderRoom: function (roomname) {
    // TODO: Render out a single room.
  },

  handleChange: function (event) {
    // TODO: Handle a user selecting a different room.
    //^ calls other methods to get the messages of that room property
  },

  handleClick: function (event) {
    // TODO: Handle the user clicking the "Add Room" button.
    //^ on click event that calls handleChange
  }

};
