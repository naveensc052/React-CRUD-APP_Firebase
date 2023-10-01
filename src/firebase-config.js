// ADD YOUR CONFIG CODE FROM FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9GtT9fuAttiT7ofwOGN9hMBr5aEmUlDk",
  authDomain: "react-crud-1f7cc.firebaseapp.com",
  projectId: "react-crud-1f7cc",
  storageBucket: "react-crud-1f7cc.appspot.com",
  messagingSenderId: "842949032761",
  appId: "1:842949032761:web:73d3887661d9954a4d86e8",
  measurementId: "G-WVLDXCG07P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);