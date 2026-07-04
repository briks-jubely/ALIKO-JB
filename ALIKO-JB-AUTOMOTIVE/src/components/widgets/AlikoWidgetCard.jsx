import { tokens } from "../../design/tokens";

export default function AlikoWidgetCard({ title, children }) {
  return (
    <div style={{
      background: tokens.colors.panel,
      padding: tokens.spacing(2),
      borderRadius: tokens.radius.lg,
      marginBottom: "12px",
      border: "1px solid #1F2937"
    }}>
      <h4 style={{ marginBottom: "10px" }}>{title}</h4>
      {children}
    </div>
  );
}
