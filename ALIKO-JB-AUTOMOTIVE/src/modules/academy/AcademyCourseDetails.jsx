import { useAcademyStore } from "../../store/academyStore";
import { resolveCourseImage } from "./utils/assetResolver";
import CourseSection from "./components/CourseSection";


export default function AcademyCourseDetails(){

  const course =
    useAcademyStore(
      (state)=>state.selectedCourse
    );

  const closeCourse =
    useAcademyStore(
      (state)=>state.closeCourse
    );


  if(!course){
    return null;
  }


  const renderList = (items)=>{

    if(!items || !Array.isArray(items)){
      return <p>No content available</p>;
    }

    return (
      <ul>
        {
          items.map((item,index)=>(
            <li key={index}>
              {
                typeof item === "string"
                ? item
                : item.name || item.title || JSON.stringify(item)
              }
            </li>
          ))
        }
      </ul>
    );
  };


  return (

    <div className="course-card academy-course-details">


      <button
        className="course-back-btn"
        onClick={closeCourse}
      >
        ← Back Courses
      </button>



      {
        course.image &&
        <img
          src={resolveCourseImage(course.image)}
          alt={course.title}
          onError={(e)=>{
            e.currentTarget.src =
            resolveCourseImage("hero.png");
          }}
        />
      }



      <h2>
        🎓 {course.title}
      </h2>



      <p>
        {course.description}
      </p>



      <div className="course-meta">

        Level: {course.level || "All"}

        {" • "}

        {course.duration || ""}

      </div>



      {
        course.fulldescription &&
        <CourseSection title="📖 Full Description">
          <p>{course.fulldescription}</p>
        </CourseSection>
      }



      {
        course.objectives &&
        <CourseSection title="🎯 Objectives">
          {renderList(course.objectives)}
        </CourseSection>
      }



      {
        course.systemOverview &&
        <CourseSection title="⚙️ System Overview">
          <p>{course.systemOverview}</p>
        </CourseSection>
      }



      {
        course.sensors &&
        <CourseSection title="🔌 Sensors">
          {renderList(course.sensors)}
        </CourseSection>
      }



      {
        course.actuators &&
        <CourseSection title="⚡ Actuators">
          {renderList(course.actuators)}
        </CourseSection>
      }



      {
        course.diagnostics &&
        <CourseSection title="🛠 Diagnostics">
          {renderList(course.diagnostics)}
        </CourseSection>
      }



      {
        course.lessons &&
        <CourseSection title="📚 Lessons">
          {renderList(course.lessons)}
        </CourseSection>
      }



      {
        course.instructor &&
        <CourseSection title="👨‍🏫 Instructor">
          <p>{course.instructor}</p>
        </CourseSection>
      }




      {
        course.free ? (

          <CourseSection title="🎥 Course Media">


            {
              course.video &&
              <video
                controls
                style={{
                  width:"100%",
                  borderRadius:"12px"
                }}
              >
                <source src={course.video}/>
                Your browser does not support video.
              </video>
            }



            {
              course.pdf &&
              <iframe
                src={course.pdf}
                title="Course PDF"
                width="100%"
                height="700"
                style={{
                  border:"none",
                  borderRadius:"12px",
                  marginTop:"20px"
                }}
              />
            }


          </CourseSection>


        ) : (


          <div className="locked-box">

            <h3>
              🔒 Premium Course
            </h3>

            <p>
              This course requires payment before access.
            </p>


            <button
              onClick={()=>
                alert(
`Contact Admin

0750 198 672

WhatsApp

0620 198 672`
                )
              }
            >
              Lipia Course
            </button>


          </div>

        )

      }


    </div>

  );

}
