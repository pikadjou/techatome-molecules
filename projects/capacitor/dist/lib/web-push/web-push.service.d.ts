import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export type WebPushPermission = NotificationPermission | 'unsupported';
/** Au-delà, le service worker ne s'installera plus : on rend la main plutôt que de figer le bouton. */
export declare const WEB_PUSH_REGISTRATION_TIMEOUT_MS = 10000;
/**
 * L'abonnement Web Push de cet appareil : état lisible en signaux, activation sur geste,
 * réenregistrement à chaque démarrage connecté, désinscription avant la déconnexion.
 *
 * Le transport vers le serveur est `TA_WEB_PUSH_API` (voir `provideWebPush`). L'application
 * appelle `refresh()` quand l'utilisateur est authentifié : ce service ne connaît pas `@ta/user`.
 * `enable()` et `refresh()` s'enchaînent toujours l'un après l'autre : deux souscriptions
 * concurrentes laisseraient un endpoint mort côté serveur.
 */
export declare class TaWebPushService {
    private readonly _api;
    private readonly _translation;
    readonly isSupported: boolean;
    readonly isIos: boolean;
    readonly isStandalone: boolean;
    /** Permission du navigateur, `unsupported` quand l'API manque (iOS hors PWA, vieux navigateur). */
    readonly permission: import("@angular/core").WritableSignal<WebPushPermission>;
    /** Un abonnement existe côté navigateur et a été enregistré (ou retrouvé) pendant cette session. */
    readonly isSubscribed: import("@angular/core").WritableSignal<boolean>;
    /** `false` dès que le serveur répond `WEB_PUSH_NOT_CONFIGURED` : la fonctionnalité se masque. */
    readonly isConfigured: import("@angular/core").WritableSignal<boolean>;
    private readonly _messages$;
    /** Un push vient d'être affiché par le service worker : la page peut rafraîchir ses listes. */
    readonly received$: Observable<{
        notificationId: string | null;
    }>;
    /** Clic sur une notification alors qu'une fenêtre est ouverte : URL absolue à ouvrir dans la SPA. */
    readonly navigate$: Observable<string>;
    /** La clé VAPID, demandée une seule fois par session (la promesse est mémorisée, pas son résultat). */
    private _publicKey$;
    /** File des opérations d'abonnement : la suivante attend la fin de la précédente. */
    private _pending;
    constructor();
    /**
     * Bouton « Activer sur cet appareil » : à appeler dans le gestionnaire du clic, Safari refuse la
     * demande de permission hors geste utilisateur.
     */
    enable(): Promise<WebPushPermission>;
    /**
     * À chaque démarrage et à chaque connexion : charge la clé VAPID, re-souscrit si l'abonnement a été
     * perdu ou créé avec une autre clé (permission déjà accordée, aucun geste requis), réenregistre.
     */
    refresh(): Promise<void>;
    /**
     * Avant la déconnexion : retire la ligne serveur de cet appareil. L'abonnement navigateur reste,
     * le prochain compte connecté réenregistrera le même endpoint.
     */
    unregisterCurrentDevice(): Promise<void>;
    /**
     * Le service worker actif. `ready` ne se résout jamais quand aucun worker ne s'installe
     * (script en 404, mode développement) : on borne l'attente. Protégé pour être remplacé en test.
     */
    protected _getRegistration(): Promise<ServiceWorkerRegistration>;
    /** Le service worker s'il est déjà enregistré, sans attendre (la déconnexion ne doit pas bloquer). */
    protected _getExistingRegistration(): Promise<ServiceWorkerRegistration | undefined>;
    private _queue;
    /** Abonnement valide pour la clé courante (réutilisé, renouvelé ou créé), puis enregistré côté serveur. */
    private _subscribeAndRegister;
    private _ensureSubscription;
    private _syncSubscriptionState;
    private _ensurePublicKey;
    private _isNotConfigured;
    private _register;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaWebPushService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaWebPushService>;
}
