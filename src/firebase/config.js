import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDGNXcqOldcvv3sJIfyMiL1ZRsc6-ybk2E",
  authDomain: "thedojosite-422f1.firebaseapp.com",
  projectId: "thedojosite-422f1",
  storageBucket: "thedojosite-422f1.appspot.com",
  messagingSenderId: "1089022654597",
  appId: "1:1089022654597:web:ec3911bfdb281048e251ec",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
