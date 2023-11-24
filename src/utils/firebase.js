// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCc0hnMRF8t6B2owTr0o_yZG1Sjm1llbEs",
  authDomain: "netflixgpt-aa6e0.firebaseapp.com",
  projectId: "netflixgpt-aa6e0",
  storageBucket: "netflixgpt-aa6e0.appspot.com",
  messagingSenderId: "95772175297",
  appId: "1:95772175297:web:666f88b91941b4e5e29d40",
  measurementId: "G-6CLQM43PL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);