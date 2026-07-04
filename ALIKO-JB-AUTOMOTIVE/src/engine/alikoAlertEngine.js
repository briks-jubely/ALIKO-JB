export function evaluateAlerts(telemetry) {
  const alerts = [];

  if (telemetry.engineTemp > 95) {
    alerts.push({
      type: "DANGER",
      message: "Engine overheating detected!"
    });
  }

  if (telemetry.battery < 20) {
    alerts.push({
      type: "WARNING",
      message: "Battery level critically low"
    });
  }

  if (telemetry.speed > 120) {
    alerts.push({
      type: "WARNING",
      message: "Overspeed detected"
    });
  }

  return alerts;
}
