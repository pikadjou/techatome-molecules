/**
 * Le service worker n'a ni `localStorage` ni jeton : la page lui laisse la langue de
 * l'utilisateur dans IndexedDB. Même base, même magasin et même clé que `ta-push-sw.js`.
 */
export const WEB_PUSH_DB = 'ta-web-push';
export const WEB_PUSH_STORE = 'settings';
export const WEB_PUSH_LANGUAGE_KEY = 'lang';

export function writePushLanguage(lang: string | null | undefined): Promise<void> {
  if (!lang || typeof indexedDB === 'undefined') {
    return Promise.resolve();
  }
  return new Promise<void>(resolve => {
    try {
      const request = indexedDB.open(WEB_PUSH_DB, 1);
      request.onupgradeneeded = () => {
        if (!request.result.objectStoreNames.contains(WEB_PUSH_STORE)) {
          request.result.createObjectStore(WEB_PUSH_STORE);
        }
      };
      request.onerror = () => resolve();
      request.onblocked = () => resolve();
      request.onsuccess = () => {
        try {
          const db = request.result;
          const transaction = db.transaction(WEB_PUSH_STORE, 'readwrite');
          transaction.objectStore(WEB_PUSH_STORE).put(lang, WEB_PUSH_LANGUAGE_KEY);
          transaction.oncomplete = () => {
            db.close();
            resolve();
          };
          transaction.onerror = () => {
            db.close();
            resolve();
          };
          transaction.onabort = () => {
            db.close();
            resolve();
          };
        } catch {
          resolve();
        }
      };
    } catch {
      resolve();
    }
  });
}
