import { useAuthStore } from "../../store/authStore";

export default function SystemStatus(){

const user = useAuthStore(s=>s.user);

const cards = [
  {
    title:"Firebase",
    status:"ONLINE",
    color:"#22c55e"
  },
  {
    title:"WebSocket",
    status:"CONNECTED",
    color:"#22c55e"
  },
  {
    title:"Fleet GPS",
    status:"ACTIVE",
    color:"#22c55e"
  },
  {
    title:"AI Assistant",
    status:"COMING SOON",
    color:"#f59e0b"
  }
];

return(

<div
style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
gap:16,
marginBottom:20
}}
>

{cards.map(card=>(

<div
key={card.title}
style={{
background:"#111827",
padding:18,
borderRadius:14,
border:"1px solid #1f2937"
}}
>

<h3 style={{color:"#fff"}}>
{card.title}
</h3>

<p
style={{
color:card.color,
fontWeight:"bold"
}}
>
{card.status}
</p>

{card.title==="Firebase" && user && (
<p style={{color:"#9ca3af"}}>
Authenticated
</p>
)}

</div>

))}

</div>

);

}
