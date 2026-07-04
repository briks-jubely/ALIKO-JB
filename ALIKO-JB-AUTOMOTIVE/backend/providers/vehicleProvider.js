async function getVehicle(vehicle){

return {
vehicle: vehicle || "Toyota",
engine:"2.0L",
system:"OBD-II",
status:"connected"
};

}

module.exports={
getVehicle
};
