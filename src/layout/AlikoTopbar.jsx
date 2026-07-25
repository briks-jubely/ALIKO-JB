import { useEffect, useState } from "react";
import { useAuthStore } from "../store/authStore";
import "./alikoTopbar.css";

export default function AlikoTopbar(){

const profile = useAuthStore(s=>s.profile);

const [time,setTime]=useState("");

useEffect(()=>{

const timer=setInterval(()=>{

setTime(
new Date().toLocaleTimeString()
);

},1000);

return ()=>clearInterval(timer);

},[]);

const initials=(profile?.name || "A")
.split(" ")
.map(v=>v[0])
.join("")
.toUpperCase();

return(

<header className="aliko-topbar">

<div className="topbar-left">

<div className="topbar-title">
ALIKO JB
</div>

<input
className="topbar-search"
placeholder="Search vehicles, courses, diagnostics..."
/>

</div>

<div className="topbar-right">

<div
style={{
display:"flex",
alignItems:"center",
gap:8
}}
>

<div className="live-dot"></div>

<span>
LIVE
</span>

</div>

<div className="notification-btn">
</div>

<div className="system-time">
{time}
</div>

<div className="topbar-avatar">
{initials}
</div>

</div>

</header>

);

}
