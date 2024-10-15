// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE29NpFTwev6NuKJ-K9rLYJpe-UAk00ww",
  authDomain: "bankvalvet-suvnet23.firebaseapp.com",
  projectId: "bankvalvet-suvnet23",
  storageBucket: "bankvalvet-suvnet23.appspot.com",
  messagingSenderId: "470036789058",
  appId: "1:470036789058:web:202b54d17e7a39358d3adb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// export const auth = initializeAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
