import { useEffect, useState } from "react";
import { createSocket } from "./services/socket";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const ws = createSocket(setData);
    return () => ws.close();
  }, []);

  return (
    <div className="dashboard">
      <h1>⚡ ALIKO JB AUTOMOTIVE DASHBOARD</h1>

      {!data && <p>Connecting to engine...</p>}

      {data && (
        <>
          <h2>Status: {data.status}</h2>

          <div className="grid">
            <div className="card"><h3>RPM</h3><p>{data.telemetry.rpm}</p></div>
            <div className="card"><h3>Speed</h3><p>{data.telemetry.speed} km/h</p></div>
            <div className="card"><h3>Fuel</h3><p>{data.telemetry.fuel}%</p></div>
            <div className="card"><h3>Temp</h3><p>{data.telemetry.temperature}°C</p></div>
            <div className="card"><h3>Health</h3><p>{data.healthScore}</p></div>
          </div>

          <div className="warnings">
            <h3>⚠️ Warnings</h3>
            {data.warnings.length === 0 ? (
              <p>All systems normal</p>
            ) : (
              data.warnings.map((w, i) => (
                <p key={i}>[{w.level}] {w.message}</p>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
