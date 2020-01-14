import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCEqmt9HJ_Z8kdhtWtGs7jE--dfveRiLyg",
  authDomain: "hg-db-a5c82.firebaseapp.com",
  databaseURL: "https://hg-db-a5c82.firebaseio.com",
  projectId: "hg-db-a5c82",
  storageBucket: "hg-db-a5c82.appspot.com",
  messagingSenderId: "370885860015",
  appId: "1:370885860015:web:15639114ed86547979525a"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
