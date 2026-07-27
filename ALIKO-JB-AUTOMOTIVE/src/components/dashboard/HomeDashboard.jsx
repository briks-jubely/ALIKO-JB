import { useAlikoJBStore } from "../../store/alikoJBStore";
import HomeOverview from "../../modules/home/widgets/HomeOverview";
import AnalyticsSnapshot from "./AnalyticsSnapshot";
import RecentActivity from "./RecentActivity";

export default function HomeDashboard() {
  const fleet = useAlikoJBStore((s) => s.fleet);

  const stats = {
    total: Object.keys(fleet).length,
    moving: Object.values(fleet).filter(v => v?.speed > 0).length,
    overspeed: Object.values(fleet).filter(v => v?.speed > 100).length,
  };

  return (
    <div style={{ padding: 20 }}>

      <HomeOverview />

      <div style={{ marginTop: 24 }}>
        <h2>🚛 FLEET OVERVIEW</h2>

        <p>Total: {stats.total}</p>
        <p>Moving: {stats.moving}</p>
        <p>Overspeed: {stats.overspeed}</p>
      </div>

      <div style={{ marginTop: 24 }}>
        <AnalyticsSnapshot />
import RecentActivity from "./RecentActivity";
      </div>

    </div>
  );
}
