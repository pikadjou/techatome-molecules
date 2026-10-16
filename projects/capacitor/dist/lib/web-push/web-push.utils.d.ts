/** Fonctions pures du Web Push : détection de la plateforme et manipulation de la clé VAPID. */
export declare function isWebPushSupported(): boolean;
/** PWA lancée depuis l'écran d'accueil (seul mode où iOS expose `PushManager`). */
export declare function isStandaloneDisplay(): boolean;
export declare function isIosDevice(userAgent?: string): boolean;
/** Clé publique VAPID (base64url) → octets attendus par `pushManager.subscribe`. */
export declare function urlBase64ToUint8Array(base64Url: string): Uint8Array;
/**
 * L'abonnement courant a-t-il été créé avec cette clé ? Quand le navigateur n'expose pas la clé
 * (`applicationServerKey` nul), on la suppose identique : re-souscrire sans raison coûterait l'abonnement.
 */
export declare function sameApplicationServerKey(current: ArrayBuffer | null | undefined, vapidPublicKey: string): boolean;
/** Rejette après `ms` si la promesse n'a pas répondu (ex. `serviceWorker.ready` sans worker actif). */
export declare function withTimeout<T>(promise: Promise<T>, ms: number, message: string): Promise<T>;
