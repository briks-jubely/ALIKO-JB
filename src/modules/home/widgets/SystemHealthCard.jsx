export default function SystemHealthCard() {
  return (
    <div className="aliko-card">
      <h3>💚 System Health</h3>

      <div className="metric">
        <span>Status</span>
        <strong style={{color:"#22c55e"}}>ONLINE</strong>
      </div>

      <div className="metric">
        <span>Services</span>
        <strong>6 Running</strong>
      </div>

      <div className="metric">
        <span>Database</span>
        <strong>Connected</strong>
      </div>

    </div>
  );
}
