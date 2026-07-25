import { io } from "socket.io-client";

const socket = io("http://localhost:3001");

const vehicleId = "TRUCK-001";

socket.emit("joinVehicle", vehicleId);

let lat = -6.7924;
let lng = 39.2083;

setInterval(() => {
  lat += 0.0001;
  lng += 0.0001;

  socket.emit("gpsUpdate", {
    vehicleId,
    lat,
    lng,
    speed: Math.floor(Math.random() * 80),
  });

  console.log("📡 GPS:", lat, lng);
}, 2000);
