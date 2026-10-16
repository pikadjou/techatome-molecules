import { InjectionToken } from '@angular/core';

/**
 * Travail à finir tant que le jeton est encore valide (désinscrire l'appareil des
 * notifications push, par exemple). Best-effort : une erreur ou un silence ne bloque
 * jamais la déconnexion.
 */
export type TaBeforeLogoutHook = () => Promise<unknown> | void;

/** Jeton multi : chaque fournisseur ajoute un hook, le service d'authentification les injecte en tableau. */
export const TA_BEFORE_LOGOUT = new InjectionToken<TaBeforeLogoutHook[]>('ta_before_logout');

/** Exécute tous les hooks en parallèle, ignore leurs erreurs et rend la main au plus tard après `timeoutMs`. */
export function runBeforeLogoutHooks(hooks: TaBeforeLogoutHook[], timeoutMs = 3000): Promise<void> {
  if (hooks.length === 0) {
    return Promise.resolve();
  }
  const all = Promise.allSettled(hooks.map(hook => Promise.resolve().then(() => hook())));
  const timeout = new Promise<void>(resolve => setTimeout(resolve, timeoutMs));
  return Promise.race([all, timeout]).then(() => undefined);
}
