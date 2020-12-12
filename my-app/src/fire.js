// Initialize Firebase

const firebase = require('firebase/app');
require("firebase/auth");
require("firebase/firestore");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIE2bQq5VnLks-c3sIW5O-YEQghUb_5dw",
  authDomain: "uoftinder.firebaseapp.com",
  databaseURL: "https://uoftinder.firebaseio.com",
  projectId: "uoftinder",
  storageBucket: "uoftinder.appspot.com",
  messagingSenderId: "169113743182",
  appId: "1:169113743182:web:977eba9f9928403152781f",
  measurementId: "G-PVXFJ4N63C"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
