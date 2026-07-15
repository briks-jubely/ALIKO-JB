import { useAlikoJBStore } from "../../store/alikoJBStore";
import AlikoWidgetCard from "../../components/widgets/AlikoWidgetCard";
import AlikoAlertsWidget from "./AlikoAlertsWidget";

export default function AlikoHomeDashboard() {
    const fleet = useAlikoJBStore((s) => s.fleet);

    const vehicles = Object.values(fleet);

    return (
        <div>
            <AlikoWidgetCard title="Fleet Live Data">
                Vehicles: {vehicles.length}<br/>
                Active Vehicles: {vehicles.filter(v => v?.speed > 0).length}
            </AlikoWidgetCard>

            <AlikoAlertsWidget />
        </div>
    );
}
