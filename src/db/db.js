import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtWFv1kcr14EqYs_KwDIESsDLm24U2aoI",
  authDomain: "ecommerce-pesciullesi.firebaseapp.com",
  projectId: "ecommerce-pesciullesi",
  storageBucket: "ecommerce-pesciullesi.firebasestorage.app",
  messagingSenderId: "932858292165",
  appId: "1:932858292165:web:592e0d8a224f5c8cae4dac",
  measurementId: "G-7KGFZRQ7ZD"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db