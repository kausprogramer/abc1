// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWETdCxIdBUM1uAZOc_-vOQfBBeEpyuYk",
  authDomain: "agentssoft.firebaseapp.com",
  projectId: "agentssoft",
  storageBucket: "agentssoft.appspot.com",
  messagingSenderId: "53642393721",
  appId: "1:53642393721:web:f750b083f3c9873d477ca8",
  measurementId: "G-XYX9S90C2Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth();
 export {app, auth, db};