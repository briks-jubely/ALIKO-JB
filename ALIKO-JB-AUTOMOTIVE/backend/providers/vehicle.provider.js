async function getVehicle(vehicle){

return {
vehicle: vehicle || "Generic Vehicle",
engine: "1.8L",
system: "OBD-II",
status: "ready"
};

}

module.exports={
getVehicle
};
