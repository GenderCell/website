// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ3zRJwVXG0rJF8hfHW0HiY6jTYRRmDHk",
  authDomain: "gender-cell-iitk.firebaseapp.com",
  projectId: "gender-cell-iitk",
  storageBucket: "gender-cell-iitk.firebasestorage.app",
  messagingSenderId: "697862074223",
  appId: "1:697862074223:web:3698ed296fe2139a23c29a",
  measurementId: "G-CPS6FJECPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);