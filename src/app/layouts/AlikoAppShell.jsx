import AlikoTopNavigation from "../../components/navigation/AlikoTopNavigation";
import AlikoSidebar from "../../components/navigation/AlikoSidebar";
import AlikoMainContent from "../../components/layout/AlikoMainContent";
import AlikoStatusBar from "../../components/layout/AlikoStatusBar";

export default function AlikoAppShell() {

  return (
    <div className="aliko-app-shell">

      <AlikoTopNavigation />

      <div className="aliko-app-body">

        <AlikoSidebar />

        <AlikoMainContent />

      </div>

      <AlikoStatusBar />

    </div>
  );

}
