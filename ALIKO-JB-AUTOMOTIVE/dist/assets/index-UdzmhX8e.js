(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();async function c(){const i=document.getElementById("app"),n=await(await fetch("./src/components/navbar/navbar.html")).text();i.innerHTML=`

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

${n}

`}function a(){c()}a();
