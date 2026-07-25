export function evaluateRules(v) {
  const warnings = [];

  if (v.rpm > 6500) {
    warnings.push({
      level: "HIGH",
      code: "ENGINE_OVER_REVVING",
      message: "Engine RPM is too high"
    });
  }

  if (v.fuel < 10) {
    warnings.push({
      level: "CRITICAL",
      code: "LOW_FUEL",
      message: "Fuel level critically low"
    });
  }

  if (v.temperature > 105) {
    warnings.push({
      level: "HIGH",
      code: "OVERHEATING",
      message: "Engine temperature too high"
    });
  }

  if (v.speed > 120 && v.rpm < 2000) {
    warnings.push({
      level: "MEDIUM",
      code: "GEAR_MISMATCH",
      message: "Possible gear inconsistency detected"
    });
  }

  return warnings;
}
