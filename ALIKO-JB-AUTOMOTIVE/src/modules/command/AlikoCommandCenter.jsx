import AlikoWidgetCard from "../../components/widgets/AlikoWidgetCard";
import AlikoFleetMap from "../fleet/map/AlikoFleetMap";

export default function AlikoCommandCenter() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "280px 1fr 320px",
        gap: "16px",
      }}
    >
      <AlikoWidgetCard title="Fleet">
        Fleet List
      </AlikoWidgetCard>

      <AlikoWidgetCard title="Live Fleet Map">
        <AlikoFleetMap />
      </AlikoWidgetCard>

      <AlikoWidgetCard title="Alerts">
        No active alerts
      </AlikoWidgetCard>
    </div>
  );
}
