console.log("RUN_DIAGNOSTICS_CALLED")
const { broadcast } = require("../realtime/ws.server");
const {
streamVehicle
}=require(
"../providers/obd.live.provider"
);

const ws=
require(
"../realtime/ws.server"
);

function analyze(v){

const d=[];

if(v.telemetry.coolantTempC>100){

d.push({
code:"TEMP-201",
severity:"high",
message:"Engine temperature high"
});

}

if(v.telemetry.batteryV<12.2){

d.push({
code:"BAT-302",
severity:"medium",
message:"Battery voltage low"
});

}

if(v.telemetry.fuelLevel<15){

d.push({
code:"FUEL-101",
severity:"low",
message:"Fuel level low"
});

}

if(!d.length){

d.push({
code:"SYS-000",
severity:"ok",
message:"Vehicle systems normal"
});

}

return d;

}

function score(list){

let s=100;

for(const x of list){

if(x.severity==="high")
s-=40;

if(x.severity==="medium")
s-=20;

if(x.severity==="low")
s-=10;

}

return Math.max(s,0);

}

async function runDiagnostics(vehicle){

const data=
await streamVehicle(vehicle);

const diagnostics=
analyze(data);

const result={

success:true,

vehicle:data,

diagnostics,

healthScore:
score(diagnostics),

riskLevel:
score(diagnostics)>80
?"good"
:score(diagnostics)>50
?"warning"
:"critical",

timestamp:
Date.now()

};

broadcast({ type: "telemetry", payload: result });

return result;

}

module.exports={
runDiagnostics
};
