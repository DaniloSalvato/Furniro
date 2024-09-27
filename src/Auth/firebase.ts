import app from "./init";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();

export async function CreateNewUser(email: string, password: string) {
  if (!email) throw new Error("Email can not be empty");
  if (!password) throw new Error("Password can not be empty");

  try {
    return await createUserWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
}

export async function UserLogin(email: string, password: string) {
  if (!email || !password) {
    throw new Error("Email and password are required");
  }

  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
  }
}

export async function GoogleAuth() {
    return await signInWithPopup(auth, providerGoogle);
}

export async function FacebookAuth() {
  try {
    return await signInWithPopup(auth, providerFacebook);
  } catch (error) {
    console.log(error);
  }
}

export async function Logout() {
  try {
    signOut(auth);
  } catch (error) {
    console.log(error);
  }
}
