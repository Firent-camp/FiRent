// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBe87KGe855GhzCNBSnbVYY3dhH9RIsWU",
  authDomain: "thesis-8d239.firebaseapp.com",
  projectId: "thesis-8d239",
  storageBucket: "thesis-8d239.appspot.com",
  messagingSenderId: "407985190690",
  appId: "1:407985190690:web:5c86e7c818bab4eb81977b"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const FIREBASE_AUTH = getAuth(app)
export const FIREBASE_DB = getFirestore(app)