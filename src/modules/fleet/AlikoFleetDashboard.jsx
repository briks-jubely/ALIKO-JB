import AlikoWidgetCard from "../../components/widgets/AlikoWidgetCard";
import AlikoFleetMap from "./map/AlikoFleetMap";

export default function AlikoFleetDashboard() {
  return (
    <div>
      <AlikoWidgetCard title="Fleet Live Map">
        <AlikoFleetMap />
      </AlikoWidgetCard>
    </div>
  );
}
