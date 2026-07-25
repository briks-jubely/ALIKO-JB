import { useAuthStore } from "../../store/authStore";
import "./profile.css";

export default function AlikoProfilePage(){

const user=useAuthStore(s=>s.user);
const profile=useAuthStore(s=>s.profile);

const initials=(profile?.name||"U")
.split(" ")
.map(v=>v[0])
.join("")
.toUpperCase();

return(

<div className="profile-page">

<div className="profile-card">

<div className="profile-header">

<div className="profile-avatar">
{initials}
</div>

<div className="profile-info">

<h2>{profile?.name}</h2>

<p>{user?.email}</p>

<p className="profile-role">
{profile?.role}
</p>

</div>

</div>

<div className="profile-grid">

<div className="info-box">
<h4>Account</h4>
<p>Email: {user?.email}</p>
<p>UID: {user?.uid}</p>
</div>

<div className="info-box">
<h4>Academy</h4>
<p>Courses: 0</p>
<p>Certificates: 0</p>
</div>

<div className="info-box">
<h4>Workshop</h4>
<p>Jobs: 0</p>
<p>Status: Ready</p>
</div>

<div className="info-box">
<h4>Fleet</h4>
<p>Vehicles: 0</p>
<p>Tracking: Enabled</p>
</div>

</div>

</div>

</div>

);

}
