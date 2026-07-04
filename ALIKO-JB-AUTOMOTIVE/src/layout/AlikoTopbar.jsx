import { tokens } from "../design/tokens";

export default function AlikoTopbar() {
  return (
    <div style={{
      height: "60px",
      background: tokens.colors.panel2,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 16px",
      borderBottom: "1px solid #1F2937"
    }}>
      <div>🚗 ALIKO JB AUTOMOTIVE</div>
      <div style={{ color: tokens.colors.success }}>
        ● Live Ready (WebSocket later)
      </div>
    </div>
  );
}
