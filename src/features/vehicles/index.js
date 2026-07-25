import { vehicles } from "../../data/vehicles/list.js";

export function vehiclesView(){

return vehicles.map(v=>`

<div class="card">

<h2>${v.name}</h2>

<p>Engine: ${v.engine}</p>

<p>Fuel: ${v.fuel}</p>

<p>Drive: ${v.drive}</p>

</div>

`).join("");

}

window.vehiclesView=vehiclesView;
