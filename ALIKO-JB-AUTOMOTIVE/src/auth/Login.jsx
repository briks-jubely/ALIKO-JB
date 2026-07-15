import { useState } from "react";
import "./auth.css";

import {
  loginUser
} from "./authService";


export default function Login(){

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [message,setMessage] = useState("");


async function handleLogin(e){

e.preventDefault();

setMessage("");

try{

await loginUser({
 email,
 password
});

setMessage("✅ Login successful");

window.location.href="/";

}catch(err){

console.error(err);

setMessage("❌ Email au password sio sahihi");

}

}


return (

<div className="auth-page">

<h2>
</h2>


<form onSubmit={handleLogin}>


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
Login
</button>


</form>


<p>
{message}
</p>


</div>

);


}
