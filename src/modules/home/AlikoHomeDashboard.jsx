import { useAlikoJBStore } from "../../store/alikoJBStore";

import MissionHeader from "./widgets/MissionHeader";
import HomeOverview from "./widgets/HomeOverview";
import SystemHealthCard from "./widgets/SystemHealthCard";
import FleetOverview from "./widgets/FleetOverview";
import AcademyOverview from "./widgets/AcademyOverview";
import WorkshopOverview from "./widgets/WorkshopOverview";
import RecentActivity from "./widgets/RecentActivity";
import QuickActions from "./widgets/QuickActions";
import RecentCourses from "./widgets/RecentCourses";
import AIAssistantCard from "./widgets/AIAssistantCard";

import AlikoWidgetCard from "../../components/widgets/AlikoWidgetCard";
import AlikoAlertsWidget from "./AlikoAlertsWidget";

export default function AlikoHomeDashboard(){

const fleet = useAlikoJBStore(s=>s.fleet);

const vehicles = Object.values(fleet);

return(

<div>

<MissionHeader/>

<HomeOverview/>

<SystemHealthCard/>

<FleetOverview/>

<AcademyOverview/>

<WorkshopOverview/>

<RecentActivity/>

<QuickActions/>

<RecentCourses/>

<AIAssistantCard/>
import AIAssistantCard from "./widgets/AIAssistantCard";

<AlikoWidgetCard title="Fleet Live Data">

<p>Total Vehicles: {vehicles.length}</p>

<p>
Active Vehicles:
{" "}
{vehicles.filter(v=>v?.speed>0).length}
</p>

</AlikoWidgetCard>

<AlikoAlertsWidget/>

</div>

);

}
