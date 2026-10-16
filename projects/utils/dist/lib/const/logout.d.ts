import { InjectionToken } from '@angular/core';
/**
 * Travail à finir tant que le jeton est encore valide (désinscrire l'appareil des
 * notifications push, par exemple). Best-effort : une erreur ou un silence ne bloque
 * jamais la déconnexion.
 */
export type TaBeforeLogoutHook = () => Promise<unknown> | void;
/** Jeton multi : chaque fournisseur ajoute un hook, le service d'authentification les injecte en tableau. */
export declare const TA_BEFORE_LOGOUT: InjectionToken<TaBeforeLogoutHook[]>;
/** Exécute tous les hooks en parallèle, ignore leurs erreurs et rend la main au plus tard après `timeoutMs`. */
export declare function runBeforeLogoutHooks(hooks: TaBeforeLogoutHook[], timeoutMs?: number): Promise<void>;
