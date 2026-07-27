export default function RecentActivity() {
  const activities = [
    {
      time: "Now",
      text: "System initialized successfully"
    },
    {
      time: "2 min ago",
      text: "Fleet telemetry synchronized"
    },
    {
      time: "5 min ago",
      text: "GPS service connected"
    },
    {
      time: "10 min ago",
      text: "Workshop module ready"
    }
  ];

  return (
    <div className="aliko-card">
      <h3>📜 Recent Activity</h3>

      {activities.map((item, index) => (
        <div
          key={index}
          style={{
            padding: "10px 0",
            borderBottom:
              index === activities.length - 1
                ? "none"
                : "1px solid #1f2937"
          }}
        >
          <strong>{item.time}</strong>
          <div>{item.text}</div>
        </div>
      ))}
    </div>
  );
}
