/** Fonctions pures du Web Push : détection de la plateforme et manipulation de la clé VAPID. */

export function isWebPushSupported(): boolean {
  return (
    typeof window !== 'undefined' && 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window
  );
}

/** PWA lancée depuis l'écran d'accueil (seul mode où iOS expose `PushManager`). */
export function isStandaloneDisplay(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }
  const standalone = (navigator as Navigator & { standalone?: boolean }).standalone === true;
  return standalone || window.matchMedia?.('(display-mode: standalone)').matches === true;
}

export function isIosDevice(userAgent: string = typeof navigator === 'undefined' ? '' : navigator.userAgent): boolean {
  return /iPhone|iPad|iPod/i.test(userAgent);
}

/** Clé publique VAPID (base64url) → octets attendus par `pushManager.subscribe`. */
export function urlBase64ToUint8Array(base64Url: string): Uint8Array {
  const padding = '='.repeat((4 - (base64Url.length % 4)) % 4);
  const base64 = (base64Url + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(base64);
  const output = new Uint8Array(new ArrayBuffer(raw.length));
  for (let i = 0; i < raw.length; i++) {
    output[i] = raw.charCodeAt(i);
  }
  return output;
}

/**
 * L'abonnement courant a-t-il été créé avec cette clé ? Quand le navigateur n'expose pas la clé
 * (`applicationServerKey` nul), on la suppose identique : re-souscrire sans raison coûterait l'abonnement.
 */
export function sameApplicationServerKey(current: ArrayBuffer | null | undefined, vapidPublicKey: string): boolean {
  if (!current) {
    return true;
  }
  const expected = urlBase64ToUint8Array(vapidPublicKey);
  const actual = new Uint8Array(current);
  return actual.length === expected.length && actual.every((byte, i) => byte === expected[i]);
}

/** Rejette après `ms` si la promesse n'a pas répondu (ex. `serviceWorker.ready` sans worker actif). */
export function withTimeout<T>(promise: Promise<T>, ms: number, message: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(message)), ms);
    promise.then(
      value => {
        clearTimeout(timer);
        resolve(value);
      },
      error => {
        clearTimeout(timer);
        reject(error);
      }
    );
  });
}
