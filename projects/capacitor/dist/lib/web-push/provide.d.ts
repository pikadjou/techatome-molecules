import { Provider } from '@angular/core';
export interface ITaWebPushConfig {
    /** `clientName` GraphQL de l'endpoint Web Push (le serveur par défaut de `provideServer`). */
    clientName: string;
}
/**
 * Branche le Web Push : transport GraphQL du contrat standard et désinscription de l'appareil
 * avant la déconnexion (`TA_BEFORE_LOGOUT`). Reste à l'application d'appeler
 * `TaWebPushService.refresh()` quand l'utilisateur est authentifié.
 */
export declare const provideWebPush: (config: ITaWebPushConfig) => Provider[];
