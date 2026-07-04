
const {
getVehicle
}=require("../providers/vehicleProvider");

async function scan(vehicle){

const info=
await getVehicle(vehicle);

return{

success:true,

timestamp:Date.now(),

vehicle:info,

diagnostics:[

{
code:"ENG-001",
severity:"ok",
message:"Engine normal"
},

{
code:"ELE-101",
severity:"low",
message:"Electrical check recommended"
}

]

};

}

module.exports={
scan
};

