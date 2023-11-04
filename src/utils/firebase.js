// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvM9Q2bmCoUorHyujvBqbwJj8BOTtqVuY",
  authDomain: "mychef-aea41.firebaseapp.com",
  projectId: "mychef-aea41",
  storageBucket: "mychef-aea41.appspot.com",
  messagingSenderId: "528774195104",
  appId: "1:528774195104:web:7a37465823b90124fc26c5",
  measurementId: "G-F04PCB1T5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);