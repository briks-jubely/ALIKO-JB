export class VehicleSnapshot {
  constructor({
    vehicleId,
    rpm,
    speed,
    fuel,
    temperature,
    timestamp = Date.now()
  }) {
    this.vehicleId = vehicleId;
    this.rpm = rpm;
    this.speed = speed;
    this.fuel = fuel;
    this.temperature = temperature;
    this.timestamp = timestamp;
  }
}
