import { useState } from "react";
import "./auth.css";

import {
 registerUser
} from "./authService";


export default function Register(){


const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const [message,setMessage]=useState("");



async function handleRegister(e){

e.preventDefault();

setMessage("");


try{


await registerUser({

name,
email,
password

});


setMessage(
"✅ Account created successfully"
);


window.location.href="/";


}catch(err){

console.error(err);

setMessage(err.message);

}


}



return (

<div className="auth-page">


<h2>
</h2>


<form onSubmit={handleRegister}>


<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>



<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>



<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>



<button type="submit">
Register
</button>


</form>


<p>
{message}
</p>


</div>

);


}
