// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10); //^ sets username prop

    FormView.initialize(); //^ sets up submit button handler
    RoomsView.initialize(); //^ renders lobby
    // MessagesView.initialize(); //^ renders feed

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    // TODO: Make sure the app loads data from the API continually, instead of just once at the start.

  },

  fetch: function (callback = () => { }) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      //console.log(data);
      Messages._data = data;
      console.log(Messages._data);

      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
      MessagesView.initialize();


      callback();
    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
