export function normalizeVehicleData(input = {}) {
  return {
    vehicleId: input.vehicleId || "UNKNOWN",
    rpm: Number(input.rpm ?? 0),
    speed: Number(input.speed ?? 0),
    fuel: Number(input.fuel ?? 0),
    temperature: Number(input.temperature ?? 70),
    timestamp: Date.now()
  };
}
