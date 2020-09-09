import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA6oD8xe1iUVROgcsav0ec20kAunZijW-U",
  authDomain: "clone-ae657.firebaseapp.com",
  databaseURL: "https://clone-ae657.firebaseio.com",
  projectId: "clone-ae657",
  storageBucket: "clone-ae657.appspot.com",
  messagingSenderId: "128539640838",
  appId: "1:128539640838:web:b28cdec13236bf72c76f87",
  measurementId: "G-4EHCE1WXEX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};