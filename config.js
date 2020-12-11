import * as firebase from 'firebase'
require('@firebase/firestore')

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyC7uwCu3nlQ0adZKKWfN9NBevyWhAafbmQ",
  authDomain: "wily-app-38ff1.firebaseapp.com",
  projectId: "wily-app-38ff1",
  storageBucket: "wily-app-38ff1.appspot.com",
  messagingSenderId: "36294947758",
  appId: "1:36294947758:web:f1305c88a3f64054838e3f",
  measurementId: "G-NLYZ8GEGY7"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
