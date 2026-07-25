import { useAuthStore } from "../../../store/authStore";
import { useAlikoJBStore } from "../../../store/alikoJBStore";
import "../../../assets/css/components/home-overview.css";

export default function HomeOverview(){

const profile = useAuthStore(s=>s.profile);
const fleet = useAlikoJBStore(s=>s.fleet);

const vehicles = Object.values(fleet);
const active = vehicles.filter(v=>v?.speed>0).length;

return(

<div className="home-overview">

<div className="aliko-card">

<h3>
</h3>

<h2>
{profile?.name || "Guest"}
</h2>

<p>
Role: {profile?.role || "guest"}
</p>

</div>

<div className="aliko-card">

<h3>
</h3>

<div className="metric">
<span>Total Vehicles</span>
<strong>{vehicles.length}</strong>
</div>

<div className="metric">
<span>Moving</span>
<strong>{active}</strong>
</div>

</div>

<div className="aliko-card">

<h3>
</h3>

<div className="metric">
<span>Courses</span>
<strong>0</strong>
</div>

<div className="metric">
<span>Certificates</span>
<strong>0</strong>
</div>

</div>

<div className="aliko-card">

<h3>
</h3>

<div className="metric">
<span>Jobs</span>
<strong>0</strong>
</div>

<div className="metric">
<span>Status</span>
<strong>Ready</strong>
</div>

</div>

</div>

);

}
