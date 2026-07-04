import { useAlikoJBStore } from "../../store/alikoJBStore";
import { ALIKO_MODULE_REGISTRY } from "../../core/moduleRegistry";

export default function AlikoModuleLoader() {
  const activeModule = useAlikoJBStore(
    (state) => state.activeModule
  );

  const ActiveComponent =
    ALIKO_MODULE_REGISTRY[activeModule] ||
    ALIKO_MODULE_REGISTRY.home;

  return <ActiveComponent />;
}
