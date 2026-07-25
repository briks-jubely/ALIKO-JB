import { courses } from "../../data/academy/courses.js";

export function academy(){

return courses.map(c=>`

<div class="card">

<h2>${c.title}</h2>

<p>Progress ${c.progress}%</p>

</div>

`).join("");

}
