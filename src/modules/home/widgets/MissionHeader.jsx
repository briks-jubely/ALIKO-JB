import { useEffect, useState } from "react";
import { useAuthStore } from "../../../store/authStore";
import "../../../assets/css/components/mission-header.css";

export default function MissionHeader(){

const profile = useAuthStore(s=>s.profile);

const [time,setTime]=useState("");

useEffect(()=>{

const timer=setInterval(()=>{

setTime(
new Date().toLocaleString()
);

},1000);

return ()=>clearInterval(timer);

},[]);

return(

<div className="mission-header">

<div className="mission-left">

<h2>
{" "}
{profile?.name || "Guest"}
</h2>

<p>
Hii ndiyo Mission Control Dashboard yako.
</p>

</div>

<div className="mission-right">

<div className="status-card">

<span>🟢 LIVE</span>

</div>

<div className="status-card">

{time}

</div>

</div>

</div>

);

}
