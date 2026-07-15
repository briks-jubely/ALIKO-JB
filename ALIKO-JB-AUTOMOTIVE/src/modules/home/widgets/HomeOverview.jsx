import SystemHealthCard from "./SystemHealthCard";
import WorkshopCard from "./WorkshopCard";
import AcademyCard from "./AcademyCard";
import AlertsCard from "./AlertsCard";

export default function HomeOverview() {
  return (
    <div className="home-overview">

      <SystemHealthCard />

      <WorkshopCard />

      <AcademyCard />

      <AlertsCard />

    </div>
  );
}
