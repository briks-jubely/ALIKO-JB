import { normalizeVehicleData } from "./vehicleNormalizer.js";
import { evaluateRules } from "./rulesEngine.js";
import { calculateHealth } from "./healthCalculator.js";

export class DiagnosticsEngine {
  constructor() {
    this.state = new Map();
  }

  process(rawInput) {
    const vehicle = normalizeVehicleData(rawInput);
    const warnings = evaluateRules(vehicle);
    const healthScore = calculateHealth(vehicle, warnings);

    const result = {
      status: "LIVE CONNECTED",
      vehicleId: vehicle.vehicleId,
      telemetry: {
        rpm: vehicle.rpm,
        speed: vehicle.speed,
        fuel: vehicle.fuel,
        temperature: vehicle.temperature
      },
      warnings,
      healthScore,
      timestamp: vehicle.timestamp
    };

    this.state.set(vehicle.vehicleId, result);
    return result;
  }

  getVehicleState(vehicleId) {
    return this.state.get(vehicleId) || null;
  }

  clearState() {
    this.state.clear();
  }
}
