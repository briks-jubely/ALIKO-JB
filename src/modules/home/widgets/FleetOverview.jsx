import { useAlikoJBStore } from "../../../store/alikoJBStore";

export default function FleetOverview(){

const fleet = useAlikoJBStore(s=>s.fleet);

const vehicles = Object.values(fleet);

const online = vehicles.filter(v=>v?.online).length;

const moving = vehicles.filter(v=>(v?.speed||0)>0).length;

return(

<div className="aliko-card">

<h2>🚛 Fleet Overview</h2>

<div className="metric">
<span>Total Fleet</span>
<strong>{vehicles.length}</strong>
</div>

<div className="metric">
<span>Vehicles Online</span>
<strong>{online}</strong>
</div>

<div className="metric">
<span>Active Trips</span>
<strong>{moving}</strong>
</div>

<div
style={{
height:180,
marginTop:16,
borderRadius:10,
background:"#0f172a",
display:"flex",
alignItems:"center",
justifyContent:"center",
color:"#94a3b8",
border:"1px solid #334155"
}}
>


</div>

<button
style={{marginTop:15}}
>
Open Fleet Map
</button>

</div>

);

}
