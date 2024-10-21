// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJVEOwrUWBrKu2iJGQiSZDGLRMOoD3wRM",
  authDomain: "favbook-29d36.firebaseapp.com",
  projectId: "favbook-29d36",
  storageBucket: "favbook-29d36.appspot.com",
  messagingSenderId: "4058438754",
  appId: "1:4058438754:web:991af7d2995fdd7c78853b",
  measurementId: "G-SRTL71JJKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);