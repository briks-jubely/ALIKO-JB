import { useAlikoJBStore } from "../../../store/alikoJBStore";
import "../../../assets/css/components/fleet-overview.css";

export default function FleetOverview(){

const fleet = useAlikoJBStore(s=>s.fleet);

const vehicles = Object.values(fleet);

const total = vehicles.length;

const moving = vehicles.filter(v=>v?.speed>0).length;

const parked = vehicles.filter(v=>v?.speed===0).length;

const offline = Math.max(0,total-moving-parked);

return(

<div className="fleet-overview">

<div className="fleet-header">

<h2>🚛 Fleet Overview</h2>

<button>
View All
</button>

</div>

<div className="fleet-grid">

<div className="fleet-box">
<h3>{total}</h3>
<p>Total Vehicles</p>
</div>

<div className="fleet-box">
<h3>{moving}</h3>
<p>Moving</p>
</div>

<div className="fleet-box">
<h3>{parked}</h3>
<p>Parked</p>
</div>

<div className="fleet-box">
<h3>{offline}</h3>
<p>Offline</p>
</div>

</div>

<div className="fleet-map-placeholder">

<h3>🗺 Fleet Live Map</h3>

<p>GPS Tracking Ready</p>

<button>
Open Live Map
</button>

</div>

</div>

);

}
