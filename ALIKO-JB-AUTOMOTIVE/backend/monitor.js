import WebSocket from "ws";
import { DiagnosticsEngine } from "./engine/diagnosticsEngine.js";
import net from "net";

const engine = new DiagnosticsEngine();

// ---- CONFIG ----
const WS_PORT = 8090;

// ---- CHECK WEBSOCKET SERVER ----
function checkWebSocket() {
  return new Promise((resolve) => {
    const socket = new WebSocket(`ws://localhost:${WS_PORT}`);

    let status = "❌ NOT RUNNING";

    socket.onopen = () => {
      status = "✅ RUNNING";
      socket.close();
    };

    socket.onerror = () => {
      status = "❌ NOT RUNNING";
    };

    setTimeout(() => {
      resolve(status);
    }, 500);
  });
}

// ---- CHECK PORT ----
function checkPort(port) {
  return new Promise((resolve) => {
    const tester = net.createServer()
      .once("error", () => resolve("❌ CLOSED"))
      .once("listening", () => {
        tester.close();
        resolve("✅ OPEN");
      })
      .listen(port);
  });
}

// ---- MOCK ENGINE SNAPSHOT ----
function getEngineSnapshot() {
  const result = engine.process({
    vehicleId: "MONITOR-TEST",
    rpm: 3000 + Math.random() * 3000,
    speed: 60 + Math.random() * 100,
    fuel: 20 + Math.random() * 80,
    temperature: 70 + Math.random() * 40
  });

  return result;
}

// ---- MAIN DASHBOARD ----
async function runMonitor() {
  console.clear();

  const wsStatus = await checkWebSocket();
  const portStatus = await checkPort(WS_PORT);
  const snapshot = getEngineSnapshot();

  console.log("====================================");
  console.log("⚡ ALIKO JB SYSTEM MONITOR");
  console.log("====================================\n");

  console.log("📡 WebSocket Server:", wsStatus);
  console.log("🔌 Port 8090:", portStatus);

  console.log("\n🧠 ENGINE STATUS:");
  console.log("- Vehicle:", snapshot.vehicleId);
  console.log("- RPM:", Math.floor(snapshot.telemetry.rpm));
  console.log("- Speed:", Math.floor(snapshot.telemetry.speed));
  console.log("- Fuel:", Math.floor(snapshot.telemetry.fuel));
  console.log("- Temp:", Math.floor(snapshot.telemetry.temperature));

  console.log("\n⚠️ Warnings:", snapshot.warnings.length);

  console.log("\n💡 HEALTH SCORE:", snapshot.healthScore);

  console.log("\n🚀 NEXT STEP SUGGESTION:");
  if (wsStatus.includes("NOT")) {
    console.log("👉 Start backend WebSocket: node backend/realtime/telemetryServer.js");
  } else {
    console.log("👉 Backend OK → move to frontend tuning / live UI fixes");
  }

  console.log("\n====================================\n");
}

setInterval(runMonitor, 2000);
