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
const provider = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();

export async function CreateNewUser(email: string, password: string) {
  if (!email) throw new Error("Email can not be empty");
  if (!password) throw new Error("Password can not be empty");

  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function UserLogin(email: string, password: string) {
  if (!email) throw new Error("Email can not be empty");
  if (!password) throw new Error("Password can not be empty");

  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

export async function GoogleAuth() {
  const result = await signInWithPopup(auth, provider);

  return result;
  //.then((result) => {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   const credential = GoogleAuthProvider.credentialFromResult(result);
  //   const token = credential.accessToken;
  //   // The signed-in user info.
  //   const user = result.user;
  //   // IdP data available using getAdditionalUserInfo(result)
  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   // The email of the user's account used.
  //   const email = error.customData.email;
  //   // The AuthCredential type that was used.
  //   const credential = GoogleAuthProvider.credentialFromError(error);
  //   // ...
  // });
}

export async function FacebookAuth() {
  const result = await signInWithPopup(auth, providerFacebook);
  return result;
}

export async function Logout() {
  signOut(auth)
    .then(() => {console.log('Logout')})
    .catch((error) => { console.log(error);
    });
}
