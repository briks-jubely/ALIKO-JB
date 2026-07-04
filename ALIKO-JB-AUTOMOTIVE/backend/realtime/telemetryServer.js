import { WebSocketServer } from "ws";
import { DiagnosticsEngine } from "../engine/diagnosticsEngine.js";

const wss = new WebSocketServer({ port: 8090 });
const engine = new DiagnosticsEngine();

console.log("⚡ ALIKO JB LIVE STREAM RUNNING on ws://localhost:8090");

function generateFakeTelemetry() {
  return {
    vehicleId: "TESLA-STREAM-001",
    rpm: Math.floor(800 + Math.random() * 6500),
    speed: Math.floor(20 + Math.random() * 180),
    fuel: Math.floor(5 + Math.random() * 95),
    temperature: Math.floor(60 + Math.random() * 60)
  };
}

function broadcast(data) {
  const payload = JSON.stringify(data);

  wss.clients.forEach(client => {
    if (client.readyState === 1) {
      client.send(payload);
    }
  });
}

wss.on("connection", (ws) => {
  console.log("📡 Client connected to ALIKO JB stream");

  ws.send(JSON.stringify({
    status: "CONNECTED",
    message: "ALIKO JB LIVE STREAM ACTIVE"
  }));
});

setInterval(() => {
  const rawData = generateFakeTelemetry();
  const processed = engine.process(rawData);

  broadcast(processed);
}, 1000);
