// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-6586c.firebaseapp.com",
  projectId: "mern-6586c",
  storageBucket: "mern-6586c.appspot.com",
  messagingSenderId: "215730264126",
  appId: "1:215730264126:web:7d32830633730ba6edd96f",
  measurementId: "G-2EZGEQVTVC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);