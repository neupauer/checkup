import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCx0UGc3NXVqqci-rJnE1hUiz7aOjJymIk",
  authDomain: "checkup-ec216.firebaseapp.com",
  databaseURL: "https://checkup-ec216.firebaseio.com",
  projectId: "checkup-ec216",
  storageBucket: "checkup-ec216.appspot.com",
  messagingSenderId: "309416068444",
  appId: "1:309416068444:web:5f0d76a9f4a9b878566d99",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
