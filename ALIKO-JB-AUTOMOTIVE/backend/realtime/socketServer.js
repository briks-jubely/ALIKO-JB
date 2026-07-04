import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8082 });

console.log("⚡ ALIKO Fleet GPS Server running");

let clients = [];

wss.on("connection", (ws) => {
  clients.push(ws);

  ws.on("close", () => {
    clients = clients.filter(c => c !== ws);
  });
});

// 🟢 Base GPS positions (London area example)
const vehicles = {
  V1: { lat: 51.5074, lng: -0.1278 },
  V2: { lat: 51.5174, lng: -0.1378 },
  V3: { lat: 51.5274, lng: -0.1478 },
};

// 🟢 simulate movement
function moveRandom(pos) {
  return {
    lat: pos.lat + (Math.random() - 0.5) * 0.001,
    lng: pos.lng + (Math.random() - 0.5) * 0.001,
  };
}

setInterval(() => {
  Object.keys(vehicles).forEach((id) => {

    vehicles[id] = moveRandom(vehicles[id]);

    const payload = JSON.stringify({
      type: "FLEET_GPS",
      id,
      data: {
        ...vehicles[id],
        speed: Math.floor(Math.random() * 120),
        engineTemp: Math.floor(70 + Math.random() * 30),
        battery: Math.floor(20 + Math.random() * 80),
        timestamp: Date.now(),
      }
    });

    clients.forEach(ws => {
      if (ws.readyState === 1) {
        ws.send(payload);
      }
    });

  });
}, 2000);
