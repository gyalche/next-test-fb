import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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

export const auth = getAuth(app);
