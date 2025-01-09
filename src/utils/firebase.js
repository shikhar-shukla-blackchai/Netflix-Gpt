// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWBsOKjjS_hsZVO89TdQ-fNf_qVbbydWA",
  authDomain: "netflix-gpt-dbd8d.firebaseapp.com",
  projectId: "netflix-gpt-dbd8d",
  storageBucket: "netflix-gpt-dbd8d.firebasestorage.app",
  messagingSenderId: "747087045921",
  appId: "1:747087045921:web:6bec7c9487765fc6e24a60",
  measurementId: "G-YGQQ5ELR8E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// npm install -g firebase-tools
// firebase login
// firebase init
// firebase deploy

export const auth = getAuth();
