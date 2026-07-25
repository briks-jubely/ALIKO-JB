import { useEffect, useState } from "react";
import { getAcademyStats } from "../../../services/academyService";
import "../../../assets/css/components/academy-overview.css";

export default function AcademyOverview(){

const [stats,setStats]=useState({
totalCourses:0
});

const [loading,setLoading]=useState(true);

useEffect(()=>{

async function load(){

try{

const data = await getAcademyStats();

setStats(data);

}catch(err){

console.error(err);

}finally{

setLoading(false);

}

}

load();

},[]);

return(

<div className="academy-overview">

<div className="academy-header">

<h2>🎓 Academy Overview</h2>

<button>
View All
</button>

</div>

<div className="academy-grid">

<div className="academy-box">

<h3>
{loading ? "..." : stats.totalCourses}
</h3>

<p>Published Courses</p>

</div>

<div className="academy-box">

<h3>
Ready
</h3>

<p>Academy Status</p>

</div>

</div>

<div className="academy-empty">

<h3>
</h3>

<p>

{loading
? "Loading courses..."
: `${stats.totalCourses} published course(s) available.`}

</p>

<button>
Open Academy
</button>

</div>

</div>

);

}
