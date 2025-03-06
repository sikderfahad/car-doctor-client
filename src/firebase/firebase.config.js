// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0rCHtZsjsPXJYkZnHkxtI2e6cibAid8w",
  authDomain: "sample-app-with-gemini.firebaseapp.com",
  projectId: "sample-app-with-gemini",
  storageBucket: "sample-app-with-gemini.firebasestorage.app",
  messagingSenderId: "603105493070",
  appId: "1:603105493070:web:d819018a263c7668dcc31f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
