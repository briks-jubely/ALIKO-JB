import { useAlikoJBStore } from "../../store/alikoJBStore";
import AlikoWidgetCard from "../../components/widgets/AlikoWidgetCard";

export default function AlikoAlertsWidget() {
  const alerts = useAlikoJBStore((s) => s.alerts);

  return (
    <AlikoWidgetCard title="System Alerts">
      {alerts.length === 0 ? (
        <div>All systems normal</div>
      ) : (
        alerts.map((a, i) => (
          <div key={i} style={{ color: a.type === "DANGER" ? "red" : "orange" }}>
            {a.message}
          </div>
        ))
      )}
    </AlikoWidgetCard>
  );
}
