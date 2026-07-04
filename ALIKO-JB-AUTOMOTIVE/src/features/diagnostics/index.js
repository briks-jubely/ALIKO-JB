import { scans } from "../../data/diagnostics/history.js";

export function diagnostics(){

return scans.map(s=>`

<div class="card">

<h2>${s.vehicle}</h2>

<p>Health ${s.health}%</p>

<p>DTC ${s.code}</p>

</div>

`).join("");

}
