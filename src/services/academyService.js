import {
  collection,
  getDocs,
  query,
  where
} from "firebase/firestore";

import { db } from "./firebase";

export async function getAcademyStats(){

  const q = query(
    collection(db,"courses"),
    where("published","==",true)
  );

  const snap = await getDocs(q);

  return {
    totalCourses: snap.size
  };

}
