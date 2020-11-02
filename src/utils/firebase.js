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

export const createUserProfileDoc = async (userAuth, additonalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData,
      });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }
  return userRef;
};

// firestore examples :
firestore
  .collection("users")
  .doc("7y3uKAABvlJjg5s5Coti")
  .collection("cardItems")
  .doc("5hjKFypGSi8Km04WixDg");
firestore.doc("/users/7y3uKAABvlJjg5s5Coti/cardItems/5hjKFypGSi8Km04WixDg");
firestore.collection("/users/7y3uKAABvlJjg5s5Coti/cardItems");

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
