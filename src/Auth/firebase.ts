import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBE__6EYu3jDKmCjA1dh1f4kmJc7reLh5s",
  authDomain: "furniro-6e40a.firebaseapp.com",
  projectId: "furniro-6e40a",
  storageBucket: "furniro-6e40a.appspot.com",
  messagingSenderId: "961505437234",
  appId: "1:961505437234:web:39f5e81fd238682d277e2b",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore(app)

export default app;
