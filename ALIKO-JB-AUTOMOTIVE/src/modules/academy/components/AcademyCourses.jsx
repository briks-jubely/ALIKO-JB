import { useEffect } from "react";
import {
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../../../services/firebase";
import { useAcademyStore } from "../../../store/academyStore";
import { resolveCourseImage } from "../utils/assetResolver";


export default function AcademyCourses() {

  const courses = useAcademyStore(
    (state) => state.courses
  );

  const setCourses = useAcademyStore(
    (state) => state.setCourses
  );

  const openCourse = useAcademyStore(
    (state) => state.openCourse
  );


  useEffect(() => {

    const q = query(
      collection(db, "courses"),
      where("published", "==", true)
    );


    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {

        const data =
          snapshot.docs.map(
            (doc) => ({
              id: doc.id,
              ...doc.data()
            })
          );


        console.log("COURSES DATA:", data);
        console.log("ACADEMY COURSES:", data);
        setCourses(data);

      },
      (error) => {
        console.error(
          "Firestore error:",
          error
        );
      }
    );


    return () => unsubscribe();

  }, []);


  return (

    <div className="courses-container">

      {
        courses.length === 0 &&
        <p>
          Loading courses...
        </p>
      }


      {
        courses.map((course)=>(

          <div
          className="course-card"
          key={course.id}
          >

            <img
            src={resolveCourseImage(course.image)}
            alt={course.title}
            onError={(e)=>{e.currentTarget.src=resolveCourseImage("hero.png");}}
            />


            <h3>
              {course.title}
            </h3>


            <p>
              {course.description}
            </p>


            <div className="course-meta">

              Level:
              {
                course.level ||
                "All"
              }

              {" • "}

              {
                course.duration ||
                ""
              }

            </div>



            <div className="course-actions">


              {
                course.video &&
                <button
                onClick={() =>
                  window.open(
                    course.video,
                    "_blank"
                  )
                }
                >
                  Watch Video
                </button>
              }



              {
                course.pdf &&
                <button
                onClick={() =>
                  window.open(
                    course.pdf,
                    "_blank"
                  )
                }
                >
                  View PDF
                </button>
              }



              <button
              onClick={() =>
                console.log(
                  "Like:",
                  course.id
                )
              }
              >
                👍 Like
              </button>



              <button
              onClick={() =>
                openCourse(course)
              }
              >
                Fungua Kozi
              </button>


            </div>

          </div>

        ))
      }


    </div>

  );

}
