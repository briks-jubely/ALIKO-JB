import { useAlikoJBStore } from "../../store/alikoJBStore";

export default function AlertPanel() {
  const alerts = useAlikoJBStore((s) => s.alerts);

  return (
    <div style={{ padding: 20 }}>
      <h3>🚨 LIVE ALERTS</h3>

      {alerts.length === 0 && <p>No alerts</p>}

      {alerts.map((a, i) => (
        <div key={i} style={{ marginBottom: 10 }}>
          <b>{a.type}</b> - {a.message}
        </div>
      ))}
    </div>
  );
}
