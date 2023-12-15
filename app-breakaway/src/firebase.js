// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1ScztHD1zq_jQQ1DCHYgjAUDxtO13bj0",
  authDomain: "app-breakaway.firebaseapp.com",
  projectId: "app-breakaway",
  storageBucket: "app-breakaway.appspot.com",
  messagingSenderId: "103141924757",
  appId: "1:103141924757:web:836b813c85fc01ea75209c",
  measurementId: "G-0L8NL9TSG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);