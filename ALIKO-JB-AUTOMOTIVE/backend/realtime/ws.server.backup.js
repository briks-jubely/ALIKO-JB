const WebSocket = require("ws");

let wss;

function init(server) {
  wss = new WebSocket.Server({ server });

  console.log("WS running...");

  wss.on("connection", (ws) => {
    console.log("Client connected");

    ws.send(JSON.stringify({
      type: "telemetry",
      payload: null
    }));
  });
}

function broadcast(data) {
  const msg = JSON.stringify({ type: "telemetry", payload: data });
  if (!wss) return;

  const msg = JSON.stringify({
    type: "telemetry",
    payload: data
  });

  wss.clients.forEach(client => {
    if (client.readyState === 1) {
      client.send(msg);
    }
  });
}

module.exports = { init, broadcast };
