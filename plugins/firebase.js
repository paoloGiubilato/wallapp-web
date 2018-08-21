import firebase from "firebase/app";
import "firebase/storage";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyC1BbwsuqsmoFBpg6P1YPmHrg8s-10JKxc",
    authDomain: "wallapp-b7805.firebaseapp.com",
    databaseURL: "https://wallapp-b7805.firebaseio.com",
    projectId: "wallapp-b7805",
    storageBucket: "wallapp-b7805.appspot.com",
    messagingSenderId: "637150678980"
  });
}

export default firebase;
