// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //^ call render?
  },

  render: function () {
    // TODO: Render _all_ the messages/ feed
    //^ iterates over messages data strucure, calls on renderMessage for each, appends to body
  },

  renderMessage: function (message) {
    // TODO: Render a single message.
    //^ call render method of messageView.js and put the message in a feed div.
  },

  handleClick: function (event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};