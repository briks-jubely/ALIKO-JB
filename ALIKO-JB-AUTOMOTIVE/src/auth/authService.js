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

  const cred = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  const profile = {
    name,
    email,
    role: "customer",
    academyAccess: true,
    createdAt: serverTimestamp()
  };

  await setDoc(
    doc(db, "users", cred.user.uid),
    profile
  );

  return {
    user: cred.user,
    profile
  };
}

export async function loginUser({
  email,
  password
}) {

  const cred = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  const profile = await getUserProfile(
    cred.user.uid
  );

  return {
    user: cred.user,
    profile
  };
}

export async function getUserProfile(uid){

  const snap = await getDoc(
    doc(db,"users",uid)
  );

  if(!snap.exists()) return null;

  return snap.data();

}

export async function logoutUser(){
  await signOut(auth);
}

export function observeAuth(callback){
  return onAuthStateChanged(auth, callback);
}
