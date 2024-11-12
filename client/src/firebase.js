// Import the functions you need from the SDKs you need
// firebase.js

import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  sendPasswordResetEmail, 
  signInWithPopup, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  GoogleAuthProvider
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjlvf1BVxfsO44X1KvF23xR7HgU4pN_dQ",
  authDomain: "principalpoll-eef43.firebaseapp.com",
  projectId: "principalpoll-eef43",
  storageBucket: "principalpoll-eef43.firebasestorage.app",
  messagingSenderId: "19354433633",
  appId: "1:19354433633:web:fe07d47e0e1671de5b9220",
  measurementId: "G-6TL0XLS87T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

// Export the specific methods used in your application
export {
  sendPasswordResetEmail,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  doc,
  setDoc,
  getDoc,
  ref,
  uploadBytes,
  getDownloadURL
};
