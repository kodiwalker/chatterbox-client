// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function () {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function (event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    let message = {
      username: App.username,
      text: $("#message").val(),
      roomname: $("#lobby").val()
    };

    Parse.create(message, (data) => {
      console.log(data);
    });
    //save the message (username, text, roomname)
    //send this message to the server
    //after sending to server, current message will display along with other messages from server

    console.log('click!');
  },

  setStatus: function (active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};