// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBqmr97rGiG50411kSQNJMckxN8r7bYSKU",
    authDomain: "synk-in.firebaseapp.com",
    projectId: "synk-in",
    storageBucket: "synk-in.firebasestorage.app",
    messagingSenderId: "719512986773",
    appId: "1:719512986773:web:3d23bdcfdce0ef15d4a79c"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
