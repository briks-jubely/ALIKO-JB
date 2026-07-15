import { io } from "socket.io-client";

const socket = io("http://localhost:8082");

const vehicleId = "TRK_SIM_001";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

setInterval(() => {
  const data = {
    id: vehicleId,
    lat: -6.8 + Math.random() * 0.01,
    lng: 39.2 + Math.random() * 0.01,
    speed: random(0, 120),
    ignition: true,
    engineTemp: random(60, 120),
    battery: random(10, 100),
  };

  console.log("📡 Sending:", data);
  socket.emit("vehicle:update", data);
}, 3000);

socket.on("vehicle:alert", (alert) => {
  console.log("🚨 ALERT:", alert);
});

socket.on("vehicle:update", (data) => {
  console.log("🟢 UPDATE:", data.id, data.status);
});
