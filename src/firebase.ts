// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwCsn_s3GfYGkEZvFEKlIf_32xRirdLdg",
  authDomain: "acting-deadend4.firebaseapp.com",
  projectId: "acting-deadend4",
  storageBucket: "acting-deadend4.appspot.com",
  messagingSenderId: "2215524454",
  appId: "1:2215524454:web:835d43a3e8ac98a295d5a7",
  measurementId: "G-7P78BVH1MN",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(firebaseApp);

export default firestoreDB;
