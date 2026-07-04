import { useAlikoJBStore } from "../store/alikoJBStore";
import { tokens } from "../design/tokens";

const items = [
  "home",
  "vehicles",
  "diagnostics",
  "workshop",
  "academy",
  "profile",
  "settings",
];

export default function AlikoSidebar() {
  const setModule = useAlikoJBStore((s) => s.setActiveModule);
  const active = useAlikoJBStore((s) => s.activeModule);

  return (
    <div style={{
      background: tokens.colors.panel,
      padding: tokens.spacing(2),
      display: "flex",
      flexDirection: "column",
      gap: "10px"
    }}>
      <h3>ALIKO JB</h3>

      {items.map((item) => (
        <div
          key={item}
          onClick={() => setModule(item)}
          style={{
            padding: "10px",
            cursor: "pointer",
            borderRadius: tokens.radius.md,
            background: active === item ? tokens.colors.primary : "transparent"
          }}
        >
          {item.toUpperCase()}
        </div>
      ))}
    </div>
  );
}
