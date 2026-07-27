const { Server } = require("socket.io");

const io = new Server(8082, {
  cors: {
    origin: "*",
  },
});

console.log("⚡ ALIKO Socket.IO Server running on 8082");

io.on("connection", (socket) => {
  console.log("🟢 Client connected:", socket.id);

  socket.on("vehicle:update", (data) => {
    console.log("📡 VEHICLE UPDATE:", data);

    // broadcast to all clients
    io.emit("vehicle:update", {
      ...data,
      timestamp: Date.now(),
    });

    // simple alert rules
    const alerts = [];

    if (data.speed > 100) alerts.push("OVERSPEED");
    if (data.engineTemp > 100) alerts.push("OVERHEAT");
    if (data.battery < 20) alerts.push("LOW_BATTERY");

    if (alerts.length > 0) {
      io.emit("vehicle:alert", {
        vehicleId: data.id,
        alerts,
        timestamp: Date.now(),
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("🔴 Client disconnected:", socket.id);
  });
});
