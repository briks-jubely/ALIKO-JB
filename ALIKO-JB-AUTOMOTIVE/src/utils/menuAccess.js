import { MODULE_ACCESS, ROLES } from "../core/accessControl";

export function getUserRole(profile) {
  return profile?.role || ROLES.GUEST;
}

export function canAccess(moduleName, role) {
  return MODULE_ACCESS[moduleName]?.includes(role);
}
