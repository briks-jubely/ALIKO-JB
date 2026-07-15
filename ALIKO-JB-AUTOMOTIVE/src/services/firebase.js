import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZDwTWKduwhVD9lDNcin_ZCur4kMlWkUA",
  authDomain: "aliko-jb-academy.firebaseapp.com",
  projectId: "aliko-jb-academy",
  storageBucket: "aliko-jb-academy.appspot.com",
  messagingSenderId: "282712708896",
  appId: "1:282712708896:web:c526d620f468a233f82945"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
