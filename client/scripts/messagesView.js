// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //^ call model method
    MessagesView.render();

  },

  render: function () {
    // TODO: Render _all_ the messages/ feed
    //^ iterates over messages data strucure, calls on renderMessage for each, appends to body


    var renderedMsg = MessageView.render(Messages._data[0]);
    console.log(renderedMsg);
    MessagesView.$chats.empty();
    for (var i = 0; i < Messages._data.length; i++) {
      MessagesView.$chats.append(MessagesView.renderMessage(Messages._data[i]));
    }
  },

  renderMessage: function (message) {
    // TODO: Render a single message.
    //^ call render method of messageView.js and put the message in a feed div.

    //call render template function from messageView.js
    return MessageView.render(message);
    //store each template into a string
    //append each string template into $chats

  },

  handleClick: function (event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};