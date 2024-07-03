// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQOQTISEuwb5vbZCOnHVWnFcxBkcuZEtU",
  authDomain: "test-c2d6e.firebaseapp.com",
  projectId: "test-c2d6e",
  storageBucket: "test-c2d6e.appspot.com",
  messagingSenderId: "928073754664",
  appId: "1:928073754664:web:616be3c9894a122ee22d1d",
  measurementId: "G-SF8K42ZJRR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
