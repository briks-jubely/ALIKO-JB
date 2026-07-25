import { ALIKO_NAVIGATION } from "../../core/navigation";
import { useAlikoJBStore } from "../../store/alikoJBStore";

export default function AlikoSidebar() {

  const activeModule = useAlikoJBStore(
    (state) => state.activeModule
  );

  const setActiveModule = useAlikoJBStore(
    (state) => state.setActiveModule
  );

  return (
    <aside className="aliko-sidebar">

      <nav className="aliko-navigation">

        {ALIKO_NAVIGATION.map((item) => (

          <button
            key={item.id}
            type="button"
            onClick={() => setActiveModule(item.module)}
            className={
              activeModule === item.module
                ? "aliko-navigation-button active"
                : "aliko-navigation-button"
            }
          >
            <span>{item.icon}</span>

            <span>{item.label}</span>

          </button>

        ))}

      </nav>

    </aside>
  );

}
