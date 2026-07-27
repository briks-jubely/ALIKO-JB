import AlikoHomeDashboard from "../modules/home/AlikoHomeDashboard";
import AlikoCommandCenter from "../modules/command/AlikoCommandCenter";
import AlikoFleetDashboard from "../modules/fleet/AlikoFleetDashboard";
import AlikoVehiclesPage from "../modules/vehicles/AlikoVehiclesPage";
import AlikoDiagnosticsPage from "../modules/diagnostics/AlikoDiagnosticsPage";
import AlikoWorkshopPage from "../modules/workshop/AlikoWorkshopPage";
import AlikoAcademyPage from "../modules/academy/AlikoAcademyPage";
import AlikoProfilePage from "../modules/profile/AlikoProfilePage";
import AlikoSettingsPage from "../modules/settings/AlikoSettingsPage";
import LoginModule from "../modules/auth/LoginModule";
import RegisterModule from "../modules/auth/RegisterModule";

export const ALIKO_MODULE_REGISTRY = {
  home: AlikoHomeDashboard,
  command: AlikoCommandCenter,
  fleet: AlikoFleetDashboard,
  vehicles: AlikoVehiclesPage,
  diagnostics: AlikoDiagnosticsPage,
  workshop: AlikoWorkshopPage,
  academy: AlikoAcademyPage,
  profile: AlikoProfilePage,
  settings: AlikoSettingsPage,
  login: LoginModule,
  register: RegisterModule,
};
