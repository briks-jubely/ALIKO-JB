import { useAuthStore } from "../../../store/authStore";
import "../../../assets/css/components/recent-activity.css";

export default function RecentActivity(){

const profile = useAuthStore(s=>s.profile);

const activities = [

{
title:"Login Successful",
time:"Just now",
icon:"🟢"
},

{
title:"Fleet Module Ready",
time:"Today",
icon:"🚛"
},

{
title:"Academy Connected",
time:"Today",
icon:"🎓"
},

{
title:"Workshop Ready",
time:"Today",
icon:"🔧"
}

];

return(

<div className="recent-activity">

<h2>📝 Recent Activity</h2>

<div className="activity-user">

Welcome back,

<strong>
 {profile?.name || "Guest"}
</strong>

</div>

{activities.map((item,index)=>(

<div
key={index}
className="activity-item"
>

<div className="activity-icon">

{item.icon}

</div>

<div>

<h4>{item.title}</h4>

<p>{item.time}</p>

</div>

</div>

))}

</div>

);

}
