import { useAlikoNavStore } from "../../store/alikoNavStore";
import { ALIKO_MODULE_REGISTRY } from "../../core/moduleRegistry";


export default function AlikoModuleLoader() {

  const active = useAlikoNavStore(
    (state)=>state.active
  );


  const key = active.toLowerCase();


  const Module =
    ALIKO_MODULE_REGISTRY[key] ||
    ALIKO_MODULE_REGISTRY.home;


  return <Module />;

}
