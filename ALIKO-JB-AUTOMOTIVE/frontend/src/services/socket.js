const SOCKET_URL = "ws://localhost:8090";

export function createSocket(onMessage) {
  const ws = new WebSocket(SOCKET_URL);

  ws.onopen = () => {
    console.log("✅ FRONTEND CONNECTED TO ALIKO JB STREAM");
  };

  ws.onmessage = (event) => {
    try {
      const data = JSON.parse(event.data);
      console.log("📡 RAW DATA:", data);
      onMessage(data);
    } catch (e) {
      console.error("Parse error:", e);
    }
  };

  ws.onerror = (err) => {
    console.error("❌ SOCKET ERROR:", err);
  };

  ws.onclose = () => {
    console.log("🔌 SOCKET CLOSED");
  };

  return ws;
}
