// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkmEE5yX8To_2mxMDnDoWgrbszA2LlZ9o",
  authDomain: "netflixgpt-f86ab.firebaseapp.com",
  projectId: "netflixgpt-f86ab",
  storageBucket: "netflixgpt-f86ab.firebasestorage.app",
  messagingSenderId: "156055285083",
  appId: "1:156055285083:web:63bdd1016b2ec958a9fe7e",
  measurementId: "G-RYWRYXYTT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();