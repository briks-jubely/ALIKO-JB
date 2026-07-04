import { DiagnosticsEngine } from "./diagnosticsEngine.js";

const engine = new DiagnosticsEngine();

const result = engine.process({
  vehicleId: "TESLA-001",
  rpm: 7200,
  speed: 140,
  fuel: 8,
  temperature: 112
});

console.log("=== ALIKO JB DIAGNOSTICS ===");
console.log(JSON.stringify(result, null, 2));
