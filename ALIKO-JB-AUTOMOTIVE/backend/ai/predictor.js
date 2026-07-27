class Predictor {

constructor(){

this.history=[];

}

remember(sample){

this.history.push(sample);

if(this.history.length>50){

this.history.shift();

}

console.log("[AI] memory:",this.history.length);

}

predict(){

console.log("[AI] predict called:",this.history.length);

if(this.history.length<3){

return{

ready:false,

samples:this.history.length,

message:"warming up AI"

};

}

const avgTemp=

this.history.reduce((a,b)=>a+b.telemetry.coolantTempC,0)

/this.history.length;

const avgBattery=

this.history.reduce((a,b)=>a+b.telemetry.batteryV,0)

/this.history.length;

let p=5;

if(avgTemp>95) p+=35;
if(avgTemp>105) p+=25;
if(avgBattery<12.5) p+=25;

p=Math.min(p,95);

return{

ready:true,

samples:this.history.length,

avgTemp:Number(avgTemp.toFixed(2)),

avgBattery:Number(avgBattery.toFixed(2)),

failureProbability:p,

recommendation:

p>60
?"CRITICAL failure risk"
:p>30
?"WARNING: monitor system"
:"OK"

};

}

}

module.exports=new Predictor();
