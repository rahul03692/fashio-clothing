import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAbgFGh2P7TqnJEzYNWrUqaTK4SIXVK_b8",
  authDomain: "fashio-db-dc342.firebaseapp.com",
  projectId: "fashio-db-dc342",
  storageBucket: "fashio-db-dc342.appspot.com",
  messagingSenderId: "734870812902",
  appId: "1:734870812902:web:9b29530155ef1cc1aee327",
  measurementId: "G-45FETWFKGB",
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const Provider=new firebase.auth.GoogleAuthProvider();
Provider.setCustomParameters({prompt:'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(Provider);

export default firestore;
