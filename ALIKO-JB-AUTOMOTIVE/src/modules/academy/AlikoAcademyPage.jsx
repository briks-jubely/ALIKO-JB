import { useAcademyStore } from "../../store/academyStore";
import AcademyCourses from "./components/AcademyCourses";
import AcademyCourseDetails from "./AcademyCourseDetails";
import "./styles/academy.css";

export default function AlikoAcademyPage(){

  const selectedCourse =
    useAcademyStore(
      (state)=>state.selectedCourse
    );

  return (
    <div className="academy-container">

      {
        selectedCourse
        ?
        <AcademyCourseDetails />
        :
        <AcademyCourses />
      }

    </div>
  );
}
