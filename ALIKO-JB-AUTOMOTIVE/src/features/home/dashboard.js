export async function loadDashboard(){

const app=
document.getElementById(
"app"
);

const nav=
await fetch(
"./src/components/navbar/navbar.html"
);

const navbar=
await nav.text();

app.innerHTML=

`

<div class="card">

<div class="title">

ALIKO JB AUTOMOTIVE

</div>

<div class="subtitle">

Learn • Diagnose • Repair

</div>

</div>

<div class="card">

<h2>

Endelea Kujifunza

</h2>

<p>

Electrical Fundamentals

</p>

<button class="btn">

Continue

</button>

</div>

${navbar}

`;

}
