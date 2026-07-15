import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

export default function AlikoCoursePage() {

  const [course, setCourse] = useState(null);

  useEffect(() => {

    const id = window.location.pathname.split("/").pop();

    async function loadCourse() {

      const ref = doc(db, "courses", id);

      const snap = await getDoc(ref);

      if (snap.exists()) {
        setCourse({
          id: snap.id,
          ...snap.data()
        });
      }

    }

    loadCourse();

  }, []);


  if (!course) {
    return <p>Loading course...</p>;
  }


  return (
    <div>

      <h2>
        🎓 {course.title}
      </h2>


      <p>
        {course.description}
      </p>


      {course.video && (
        <button
          onClick={() =>
            window.open(course.video,"_blank")
          }
        >
          ▶ Watch Video
        </button>
      )}


      {course.pdf && (
        <button
          onClick={() =>
            window.open(course.pdf,"_blank")
          }
        >
          📄 Open PDF
        </button>
      )}


    </div>
  );
}
