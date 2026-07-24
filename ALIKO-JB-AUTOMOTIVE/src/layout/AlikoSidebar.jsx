import { useAlikoNavStore } from "../store/alikoNavStore";
import { useAuthStore } from "../store/authStore";
import { logoutUser } from "../auth/authService";

export default function AlikoSidebar() {

  const active = useAlikoNavStore((s) => s.active);
  const setActive = useAlikoNavStore((s) => s.setActive);

  const user = useAuthStore((s) => s.user);
  const profile = useAuthStore((s) => s.profile);
  const clearAuth = useAuthStore((s) => s.clearAuth);

  const menu = [
    "HOME",
    "COMMAND",
    "FLEET",
    "VEHICLES",
    "DIAGNOSTICS",
    "WORKSHOP",
    "ACADEMY"
  ];

  if (user) {
    menu.push("PROFILE");
    menu.push("SETTINGS");
  } else {
    menu.push("LOGIN");
    menu.push("REGISTER");
  }

  async function handleLogout() {
    await logoutUser();
    clearAuth();
    setActive("LOGIN");
  }

  return (
    <div
      style={{
        padding:16,
        background:"#111827",
        color:"#fff",
        height:"100%",
        display:"flex",
        flexDirection:"column"
      }}
    >

      <h2
        style={{
          textAlign:"center",
          marginBottom:20
        }}
      >
        ALIKO JB
      </h2>

      {user && (
        <div
          style={{
            marginBottom:20,
            padding:12,
            background:"#1f2937",
            borderRadius:10
          }}
        >
          <strong>
            {profile?.name || "User"}
          </strong>

          <br/>

          <small>
            {profile?.role || "customer"}
          </small>
        </div>
      )}

      {menu.map((item)=>(
        <div
          key={item}
          onClick={()=>setActive(item)}
          style={{
            padding:"12px",
            marginBottom:8,
            borderRadius:8,
            cursor:"pointer",
            background:
              active===item
                ? "#2563eb"
                : "transparent"
          }}
        >
          {item}
        </div>
      ))}

      <div style={{flex:1}} />

      {user && (
        <button
          onClick={handleLogout}
          style={{
            padding:12,
            border:"none",
            borderRadius:8,
            background:"#dc2626",
            color:"#fff",
            cursor:"pointer"
          }}
        >
          LOGOUT
        </button>
      )}

    </div>
  );
}
