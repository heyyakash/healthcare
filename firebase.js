// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYwExZcsbxK5-6tIuqybZCwA9k-o23aPs",
  authDomain: "healthcare-9f289.firebaseapp.com",
  projectId: "healthcare-9f289",
  storageBucket: "healthcare-9f289.appspot.com",
  messagingSenderId: "724732091273",
  appId: "1:724732091273:web:e8668c43e37ca7c79a9f58",
  measurementId: "G-YE8HQ5J9ZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
// const analytics = getAnalytics(app);

module.exports = {db}