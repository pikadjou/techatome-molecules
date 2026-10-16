/**
 * Le service worker n'a ni `localStorage` ni jeton : la page lui laisse la langue de
 * l'utilisateur dans IndexedDB. Même base, même magasin et même clé que `ta-push-sw.js`.
 */
export declare const WEB_PUSH_DB = "ta-web-push";
export declare const WEB_PUSH_STORE = "settings";
export declare const WEB_PUSH_LANGUAGE_KEY = "lang";
export declare function writePushLanguage(lang: string | null | undefined): Promise<void>;
