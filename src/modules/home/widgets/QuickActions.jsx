import { useAlikoNavStore } from "../../../store/alikoNavStore";
import "../../../assets/css/components/quick-actions.css";

export default function QuickActions(){

const setActive = useAlikoNavStore(s=>s.setActive);

const actions=[

{
title:"Fleet",
icon:"🚛",
page:"FLEET"
},

{
title:"Workshop",
icon:"🔧",
page:"WORKSHOP"
},

{
title:"Academy",
icon:"🎓",
page:"ACADEMY"
},

{
title:"GPS",
icon:"📍",
page:"FLEET"
}

];

return(

<div className="quick-actions">

<h2>⚡ Quick Actions</h2>

<div className="quick-grid">

{actions.map(action=>(

<button
key={action.title}
onClick={()=>setActive(action.page)}
>

<div>

{action.icon}

</div>

<span>

{action.title}

</span>

</button>

))}

</div>

</div>

);

}
