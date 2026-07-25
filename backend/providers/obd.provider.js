async function scanVehicle(vehicle){

return {
vehicle: vehicle || "Generic Vehicle",
engine: "1.8L",
system: "OBD-II",
status: "ready",
live:false
};

}

module.exports={
scanVehicle
};
