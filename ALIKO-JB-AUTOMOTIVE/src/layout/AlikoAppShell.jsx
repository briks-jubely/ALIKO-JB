import { useAlikoJBStore } from "../store/alikoJBStore";
import { tokens } from "../design/tokens";
import AlikoSidebar from "./AlikoSidebar";
import AlikoTopbar from "./AlikoTopbar";
import AlikoModuleLoader from "../components/layout/AlikoModuleLoader";

export default function AlikoAppShell() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "260px 1fr",
      height: "100vh",
      background: tokens.colors.bg,
      color: tokens.colors.text,
      fontFamily: "Arial"
    }}>
      
      <AlikoSidebar />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <AlikoTopbar />

        <main style={{
          padding: tokens.spacing(2),
          overflowY: "auto"
        }}>
          <AlikoModuleLoader />
        </main>
      </div>

    </div>
  );
}
