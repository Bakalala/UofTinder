// Initialize Firebase
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDIE2bQq5VnLks-c3sIW5O-YEQghUb_5dw",
  authDomain: "uoftinder.firebaseapp.com",
  databaseURL: "https://uoftinder.firebaseio.com",
  projectId: "uoftinder",
  storageBucket: "uoftinder.appspot.com",
  messagingSenderId: "169113743182",
  appId: "1:169113743182:web:4fa5174b1ef88e3452781f",
  measurementId: "G-J686RH1BBL",
};

firebase.initializeApp(firebaseConfig);
