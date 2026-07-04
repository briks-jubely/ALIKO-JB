export function calculateHealth(vehicle, warnings = []) {
  let score = 100;

  warnings.forEach(w => {
    if (w.level === "CRITICAL") score -= 25;
    if (w.level === "HIGH") score -= 15;
    if (w.level === "MEDIUM") score -= 8;
  });

  if (vehicle.rpm > 7000) score -= 10;
  if (vehicle.fuel < 5) score -= 15;
  if (vehicle.temperature > 110) score -= 20;

  return Math.max(0, Math.min(100, score));
}
