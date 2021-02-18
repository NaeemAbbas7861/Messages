const firebase = require('firebase');

var firebaseConfig = {
    apiKey: "AIzaSyB03uXj4djfEFpYKppSnjopgjE6O5l8-YE",
    authDomain: "symbolic-datum-233317.firebaseapp.com",
    databaseURL: "https://symbolic-datum-233317.firebaseio.com",
    // projectId: "PROJECT_ID",
    // storageBucket: "PROJECT_ID.appspot.com",
    // messagingSenderId: "SENDER_ID",
    // appId: "APP_ID",
    // measurementId: "G-MEASUREMENT_ID",
  };

  var app= firebase.initializeApp(firebaseConfig);

  module.exports = app;