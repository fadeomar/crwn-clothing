import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

const config = {
  apiKey: "AIzaSyCWE4vHbW7CIgBoWNDIZZNcqOp-6uiga40",
  authDomain: "crown-clothing-69ccc.firebaseapp.com",
  databaseURL: "https://crown-clothing-69ccc.firebaseio.com",
  projectId: "crown-clothing-69ccc",
  storageBucket: "crown-clothing-69ccc.appspot.com",
  messagingSenderId: "698452941760",
  appId: "1:698452941760:web:70d32d974a5c5fc9ce8625",
  measurementId: "G-03C018683E",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
