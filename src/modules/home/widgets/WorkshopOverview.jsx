import "../../../assets/css/components/workshop-overview.css";

export default function WorkshopOverview(){

return(

<div className="workshop-overview">

<div className="workshop-header">

<h2>🔧 Workshop Overview</h2>

<button>
View All
</button>

</div>

<div className="workshop-grid">

<div className="workshop-box">
<h3>0</h3>
<p>Open Jobs</p>
</div>

<div className="workshop-box">
<h3>0</h3>
<p>Completed</p>
</div>

<div className="workshop-box">
<h3>0</h3>
<p>Pending</p>
</div>

<div className="workshop-box">
<h3>Ready</h3>
<p>Workshop Status</p>
</div>

</div>

<div className="workshop-footer">

<h3>🛠 Workshop Management</h3>

<p>
Vehicle diagnostics, repair orders and maintenance history will appear here.
</p>

<button>
Open Workshop
</button>

</div>

</div>

);

}
