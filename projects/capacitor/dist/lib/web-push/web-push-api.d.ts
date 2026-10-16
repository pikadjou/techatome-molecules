import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
/** Ce que le navigateur rend après `pushManager.subscribe`, tel que le serveur l'attend (base64url). */
export interface PushSubscriptionInput {
    endpoint: string;
    p256dh: string;
    auth: string;
    userAgent?: string | null;
}
export interface PushSubscriptionDto {
    id: string;
    lastSeenAt: string;
}
/** Code d'erreur du serveur quand aucune clé VAPID n'est configurée : la fonctionnalité se masque. */
export declare const WEB_PUSH_NOT_CONFIGURED = "WEB_PUSH_NOT_CONFIGURED";
/**
 * Le transport vers le serveur. `provideWebPush` fournit l'implémentation GraphQL ;
 * une application REST remplace ce jeton sans toucher au service.
 */
export interface ITaWebPushApi {
    /** Clé publique VAPID (base64url). Erreur `WEB_PUSH_NOT_CONFIGURED` si le serveur n'en a pas. */
    fetchPublicKey$(): Observable<string>;
    /** Upsert idempotent par `endpoint` ; réattribue l'appareil à l'utilisateur courant. */
    register$(input: PushSubscriptionInput): Observable<PushSubscriptionDto>;
    /** `false`, jamais une erreur, si rien n'a été supprimé. */
    unregister$(endpoint: string): Observable<boolean>;
}
export declare const TA_WEB_PUSH_API: InjectionToken<ITaWebPushApi>;
/** `clientName` GraphQL sous lequel l'implémentation par défaut enregistre son endpoint. */
export declare const WEB_PUSH_CLIENT_NAME: InjectionToken<string>;
/** Messages que le service worker partagé (`ta-push-sw.js`) envoie aux fenêtres ouvertes. */
export declare const TA_PUSH_MESSAGE: {
    readonly navigate: "ta-push:navigate";
    readonly received: "ta-push:received";
};
