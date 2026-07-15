import { useAlikoNavStore } from "../store/alikoNavStore";
import { useAuthStore } from "../store/authStore";
import { logoutUser } from "../auth/authService";


export default function AlikoSidebar(){

const setActive =
useAlikoNavStore(
 s=>s.setActive
);


const active =
useAlikoNavStore(
 s=>s.active
);


const user =
useAuthStore(
 s=>s.user
);


const menu = [

"HOME",
"COMMAND",
"FLEET",
"VEHICLES",
"DIAGNOSTICS",
"WORKSHOP",
"ACADEMY"

];


if(user){

menu.push(
"PROFILE",
"SETTINGS"
);

}


return (

<div style={{padding:10}}>

<h3>
ALIKO JB
</h3>


{menu.map(item=>(

<div
key={item}
onClick={()=>setActive(item)}

style={{
padding:10,
cursor:"pointer",
background:
active===item
?"#333"
:"transparent",
color:
active===item
?"white"
:"#aaa",
marginBottom:5
}}

>

{item}

</div>

))}



{
!user &&

<>

<div
onClick={()=>setActive("LOGIN")}
style={{padding:10,cursor:"pointer"}}
>
</div>


<div
onClick={()=>setActive("REGISTER")}
style={{padding:10,cursor:"pointer"}}
>
</div>

</>

}



{
user &&

<div
onClick={logoutUser}
style={{
padding:10,
cursor:"pointer",
color:"red"
}}
>


</div>

}


</div>

);

}
