// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
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

// Initialize Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const FIREBASE_AUTH = auth;
export const FIREBASE_DB = getFirestore(app);
