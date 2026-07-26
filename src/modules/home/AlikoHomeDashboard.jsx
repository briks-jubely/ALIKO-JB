import "../../assets/css/layouts/dashboard.css";

import MissionHeader from "./widgets/MissionHeader";
import HomeOverview from "./widgets/HomeOverview";
import FleetOverview from "./widgets/FleetOverview";
import AcademyOverview from "./widgets/AcademyOverview";
import WorkshopOverview from "./widgets/WorkshopOverview";
import RecentActivity from "./widgets/RecentActivity";
import SystemHealthCard from "./widgets/SystemHealthCard";
import QuickActions from "./widgets/QuickActions";
import AIAssistantCard from "./widgets/AIAssistantCard";

export default function AlikoHomeDashboard(){

return(

<div className="dashboard">

    <MissionHeader/>

    <HomeOverview/>

    <div className="dashboard-grid">

        <div className="dashboard-left">

            <FleetOverview/>

            <AcademyOverview/>

            <WorkshopOverview/>

            <RecentActivity/>

        </div>

        <div className="dashboard-right">

            <SystemHealthCard/>

            <QuickActions/>

            <AIAssistantCard/>

        </div>

    </div>

</div>

);

}
