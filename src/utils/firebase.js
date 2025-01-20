// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKu8uX1kN5iK5FPg3_TKKYSCXQv6LYf48",
  authDomain: "netfilx-gpt-57207.firebaseapp.com",
  projectId: "netfilx-gpt-57207",
  storageBucket: "netfilx-gpt-57207.firebasestorage.app",
  messagingSenderId: "313927727332",
  appId: "1:313927727332:web:4c8a020ea653dac74e54f1",
  measurementId: "G-FKK4TKKP07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
