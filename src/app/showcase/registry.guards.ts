import { CanMatchFn } from "@angular/router";

import { REGISTRY } from "./registry";

/**
 * N'active la page composant que pour une paire paquet/sélecteur connue du
 * registre. Sans cette garde, `/:pkg/:component` capterait les routes
 * thématiques héritées comme `/ui/basics`.
 */
export const canMatchComponentPage: CanMatchFn = (_route, segments) => {
  if (segments.length !== 2) {
    return false;
  }
  const [short, id] = segments.map((segment) => segment.path);
  return REGISTRY.some((entry) => entry.short === short && entry.id === id);
};

/** N'active l'index de paquet que pour un paquet ayant au moins une démo. */
export const canMatchPackageIndex: CanMatchFn = (_route, segments) => {
  if (segments.length !== 1) {
    return false;
  }
  return REGISTRY.some((entry) => entry.short === segments[0].path);
};
