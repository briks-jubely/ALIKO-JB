function rand(min,max){
return Math.floor(
Math.random()*(max-min+1)
)+min;
}

async function streamVehicle(vehicle){

return{
vehicle: vehicle || "Generic Vehicle",

live:true,

telemetry:{
rpm: rand(750,3200),
speedKmh: rand(0,140),
coolantTempC: rand(78,108),
batteryV:(rand(121,146)/10),
fuelLevel: rand(10,100)
},

timestamp:Date.now()
};

}

module.exports={
streamVehicle
};
