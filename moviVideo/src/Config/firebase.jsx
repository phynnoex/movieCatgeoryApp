// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBX52Y8qusvKDKgfljAAQMBDbCZMqsChKc",
    authDomain: "movicategoriz.firebaseapp.com",
    projectId: "movicategoriz",
    storageBucket: "movicategoriz.firebasestorage.app",
    messagingSenderId: "303046264542",
    appId: "1:303046264542:web:aae2813c76d924c773e44f"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
