import React, { useEffect, useState } from "react";

export default function LiveDashboard() {
  const [connected, setConnected] = useState(false);
  const [latest, setLatest] = useState(null);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const protocol = location.protocol === "https:" ? "wss" : "ws";
    const socket = new WebSocket(`${protocol}://${location.host}/ws`);

    socket.onopen = () => setConnected(true);
    socket.onclose = () => setConnected(false);

    socket.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);

        if (msg.type === "telemetry") {
          const data = msg.payload;

          setLatest(data);
          setHistory((prev) => [...prev.slice(-8), data]);
        }
      } catch (e) {}
    };

    return () => socket.close();
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>

      <h2>🚗 ALIKO JB TESLA DASHBOARD</h2>

      <p>
        Status:{" "}
        <b style={{ color: connected ? "limegreen" : "red" }}>
          {connected ? "LIVE CONNECTED" : "OFFLINE"}
        </b>
      </p>

      <div style={{ marginTop: 20, padding: 10, background: "#111", color: "#0f0" }}>
        <h3>⚡ LIVE VEHICLE DATA</h3>

        {latest ? (
          <>
            <p>Stage: {latest.stage}</p>
            <p>RPM: {latest.vehicle?.rpm}</p>
            <p>Speed: {latest.vehicle?.speedKmh} km/h</p>
            <p>Fuel: {latest.vehicle?.fuelLevel}%</p>
          </>
        ) : (
          <p>Waiting for data...</p>
        )}
      </div>

      <h3 style={{ marginTop: 20 }}>📡 LIVE STREAM</h3>

      <div style={{
        background: "#000",
        color: "#0f0",
        padding: 10,
        height: 250,
        overflow: "auto"
      }}>
        {history.map((h, i) => (
          <div key={i}>
            {h.stage} | RPM: {h.vehicle?.rpm} | SPEED: {h.vehicle?.speedKmh}
          </div>
        ))}
      </div>

    </div>
  );
}
