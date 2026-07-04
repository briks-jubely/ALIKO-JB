import AlikoHomeDashboard from "../modules/home/AlikoHomeDashboard";
import AlikoFleetDashboard from "../modules/fleet/AlikoFleetDashboard";
import AlikoVehiclesPage from "../modules/vehicles/AlikoVehiclesPage";
import AlikoDiagnosticsPage from "../modules/diagnostics/AlikoDiagnosticsPage";
import AlikoWorkshopPage from "../modules/workshop/AlikoWorkshopPage";
import AlikoAcademyPage from "../modules/academy/AlikoAcademyPage";
import AlikoProfilePage from "../modules/profile/AlikoProfilePage";
import AlikoSettingsPage from "../modules/settings/AlikoSettingsPage";

export const ALIKO_MODULE_REGISTRY = {
  home: AlikoHomeDashboard,
  fleet: AlikoFleetDashboard,
  vehicles: AlikoVehiclesPage,
  diagnostics: AlikoDiagnosticsPage,
  workshop: AlikoWorkshopPage,
  academy: AlikoAcademyPage,
  profile: AlikoProfilePage,
  settings: AlikoSettingsPage,
};
