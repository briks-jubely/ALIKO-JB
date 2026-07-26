import { useState } from "react";
import "./aliko-ai.css";

export default function AlikoAIChat({onClose}){

const [messages,setMessages]=useState([
{
role:"assistant",
text:"👋 Welcome to ALIKO AI. AI backend will be connected soon."
}
]);

const [input,setInput]=useState("");

function send(){

if(!input.trim()) return;

setMessages(prev=>[
...prev,
{
role:"user",
text:input
},
{
role:"assistant",
text:"⏳ AI service is not connected yet."
}
]);

setInput("");

}

return(

<div className="ai-popup">

<div className="ai-top">

<h3>🤖 ALIKO AI</h3>

<button onClick={onClose}>✕</button>

</div>

<div className="ai-body">

{messages.map((m,i)=>(

<div
key={i}
className={m.role}
>

{m.text}

</div>

))}

</div>

<div className="ai-input">

<input
value={input}
onChange={e=>setInput(e.target.value)}
placeholder="Ask anything..."
/>

<button onClick={send}>

</button>

</div>

</div>

);

}
