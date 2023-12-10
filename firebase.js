// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvlW8iTiDg6YcN1ar463xU5CIMW-mJUvE",
  authDomain: "twitter-clone-f945c.firebaseapp.com",
  projectId: "twitter-clone-f945c",
  storageBucket: "twitter-clone-f945c.appspot.com",
  messagingSenderId: "479432467498",
  appId: "1:479432467498:web:26a547918ef88ee76ccf53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

