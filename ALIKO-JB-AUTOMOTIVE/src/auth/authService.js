import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "firebase/firestore";

import { auth, db } from "../services/firebase";


export async function registerUser({
  name,
  email,
  password
}) {

  const cred =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );


  await setDoc(
    doc(db,"users",cred.user.uid),
    {
      name,
      email,
      role:"user",
      academyAccess:true,
      createdAt:serverTimestamp()
    }
  );


  return cred.user;
}



export async function loginUser({
 email,
 password
}){

 const cred =
 await signInWithEmailAndPassword(
   auth,
   email,
   password
 );


 const snap =
 await getDoc(
   doc(db,"users",cred.user.uid)
 );


 return {
   user:cred.user,
   profile:snap.exists()
      ? snap.data()
      : null
 };

}



export async function logoutUser(){

 await signOut(auth);

}



export function observeAuth(callback){

 return onAuthStateChanged(
   auth,
   callback
 );

}
