import { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  getDocs
} from "firebase/firestore";

import { db } from "../../../services/firebase";
import "../../../assets/css/components/recent-courses.css";

export default function RecentCourses(){

const [courses,setCourses]=useState([]);

useEffect(()=>{

async function load(){

try{

const q=query(
collection(db,"courses"),
where("published","==",true),
orderBy("createdAt","desc"),
limit(3)
);

const snap=await getDocs(q);

setCourses(
snap.docs.map(doc=>({
id:doc.id,
...doc.data()
}))
);

}catch(err){

console.error(err);

}

}

load();

},[]);

return(

<div className="recent-courses">

<h2>📚 Latest Courses</h2>

{
courses.length===0
?

<p>No published courses.</p>

:

courses.map(course=>(

<div
key={course.id}
className="course-item"
>

<img
src={course.image || "/placeholder-course.png"}
alt={course.title}
/>

<div>

<h4>{course.title}</h4>

<p>

{course.level || "Beginner"}

</p>

</div>

</div>

))

}

</div>

);

}
