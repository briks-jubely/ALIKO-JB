import { useAlikoNavStore } from "../store/alikoNavStore";
import { useAuthStore } from "../store/authStore";
import { logoutUser } from "../auth/authService";


export default function AlikoSidebar({collapsed}){

const setActive = useAlikoNavStore(
s=>s.setActive
);

const active = useAlikoNavStore(
s=>s.active
);

const user = useAuthStore(
s=>s.user
);


const menu=[
"HOME",
"COMMAND",
"FLEET",
"VEHICLES",
"DIAGNOSTICS",
"WORKSHOP",
"ACADEMY"
];


if(user){
menu.push("PROFILE","SETTINGS");
}


return (

<div
style={{
padding:16,
background:"#111827",
height:"100vh",
overflowY:"auto"
}}
>

<h3
style={{
color:"#fff",
marginBottom:20,
textAlign:"center"
}}
>
{collapsed ? "AJB" : "ALIKO JB"}
</h3>


{
menu.map(item=>(

<div
key={item}
onClick={()=>setActive(item)}

style={{
padding:"12px 14px",
cursor:"pointer",
background:
active===item
?"#2563eb"
:"transparent",
color:
active===item
?"#fff"
:"#cbd5e1",
marginBottom:8,
borderRadius:10
}}
>

{collapsed ? item.charAt(0) : item}

</div>

))
}


{
user &&
<div
onClick={logoutUser}
style={{
padding:12,
color:"red",
cursor:"pointer"
}}
>
{collapsed ? "L" : "LOGOUT"}
</div>
}


</div>

);

}
