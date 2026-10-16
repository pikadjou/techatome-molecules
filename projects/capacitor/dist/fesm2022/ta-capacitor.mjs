import * as i0 from '@angular/core';
import { Injectable, Inject, InjectionToken, inject, signal, importProvidersFrom } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { Device } from '@capacitor/device';
import { BehaviorSubject, filter as filter$1, map as map$1, Subject, firstValueFrom } from 'rxjs';
import { Network } from '@capacitor/network';
import { Logger, createQuery, createMutation, TaBaseService } from '@ta/server';
import { Geolocation } from '@capacitor/geolocation';
import { isNonNullable, TA_BEFORE_LOGOUT } from '@ta/utils';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TaTranslationService } from '@ta/translation';
import { ApolloModule } from 'apollo-angular';

class TaDeviceInfoService {
    constructor() {
        this._getInfo$ = new BehaviorSubject(null);
        Device.getInfo().then((deviceInformation) => this._getInfo$.next(deviceInformation));
        this.os$ = this._getInfo$.pipe(filter((deviceInfo) => !!deviceInfo), map((deviceInfo) => deviceInfo?.operatingSystem ?? "unknown"));
        this.deviceClasses$ = this.os$.pipe(map((os) => {
            return [os, this._getMobileClass(os)];
        }));
    }
    isMobileOs$() {
        return this.os$.pipe(map((value) => this.isMobileOs(value)));
    }
    isWeb$() {
        return this.os$.pipe(map((value) => !this.isMobileOs(value)));
    }
    isMobileOs(os) {
        return os === "android" || os === "ios";
    }
    _getMobileClass(os) {
        return this.isMobileOs(os) ? "mobile-device" : "desktop-device";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceInfoService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceInfoService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceInfoService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });

class TaDeviceNetworkService {
    constructor() {
        this.isConnected$ = new BehaviorSubject(false);
        this._delayToDisplayNewNotification = 10 * 1000; // in ms
        this._state = true;
        this._timeoutActive = null;
    }
    async observeNetworkStateChanges() {
        // save the current
        this._state = await this._getCurrentNetworkState();
        Network.addListener("networkStatusChange", async (currentState) => {
            if (this._state === currentState.connected) {
                return;
            }
            this._logNetworkStateChanged(currentState.connected);
            this._state = currentState.connected;
            if (this._timeoutActive) {
                clearTimeout(this._timeoutActive);
                this._timeoutActive = null;
                return;
            }
            this._timeoutActive = setTimeout(async () => {
                this.isConnected$.next(currentState.connected);
                this._logNetworkStateChanged(currentState.connected, true);
                this._timeoutActive = null;
            }, this._delayToDisplayNewNotification);
        });
    }
    async _getCurrentNetworkState() {
        return (await Network.getStatus()).connected;
    }
    _logNetworkStateChanged(isConnected, canDisplayNotification = false) {
        if (isConnected)
            Logger.LogWarning(`[Network] connection restored ${canDisplayNotification ? "[notification] send" : ""}`);
        else
            Logger.LogWarning(`[Network] connection lost ${canDisplayNotification ? "[notification] send" : ""}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceNetworkService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceNetworkService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDeviceNetworkService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });

class TaDevicePositionService {
    get currentPosition() {
        return this._currentPosition$.getValue();
    }
    get canAccessPosition() {
        return this._canAccessPosition$.getValue();
    }
    constructor() {
        this._currentPosition$ = new BehaviorSubject(null);
        this._canAccessPosition$ = new BehaviorSubject(false);
    }
    fetchCanAccessPosition() {
        Geolocation.checkPermissions().then((permissionStatus) => this._canAccessPosition$.next(permissionStatus.location !== "denied"));
    }
    fetchCurrentPosition() {
        Geolocation.getCurrentPosition().then((position) => {
            this._currentPosition$.next(position);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDevicePositionService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDevicePositionService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaDevicePositionService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [] });

const PWA_CONFIG_KEY = "config_pwa";
class TaPwaService {
    constructor(_config) {
        this._config = _config;
        this.isPWaCapability$ = new BehaviorSubject(false);
        if (this._config.active) {
            window.addEventListener("beforeinstallprompt", (event) => {
                this._promptEvent = event;
                this.isPWaCapability$.next(true);
            });
        }
    }
    isPWaCapability() {
        return !!this._promptEvent;
    }
    launchInstall() {
        if (this._promptEvent) {
            this._promptEvent.prompt();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaPwaService, deps: [{ token: PWA_CONFIG_KEY }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaPwaService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaPwaService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Inject,
                    args: [PWA_CONFIG_KEY]
                }] }] });

/** Code d'erreur du serveur quand aucune clé VAPID n'est configurée : la fonctionnalité se masque. */
const WEB_PUSH_NOT_CONFIGURED = 'WEB_PUSH_NOT_CONFIGURED';
const TA_WEB_PUSH_API = new InjectionToken('ta_web_push_api');
/** `clientName` GraphQL sous lequel l'implémentation par défaut enregistre son endpoint. */
const WEB_PUSH_CLIENT_NAME = new InjectionToken('ta_web_push_client_name');
/** Messages que le service worker partagé (`ta-push-sw.js`) envoie aux fenêtres ouvertes. */
const TA_PUSH_MESSAGE = {
    navigate: 'ta-push:navigate',
    received: 'ta-push:received',
};

function webPushPublicKey() {
    return createQuery('webPushPublicKey');
}
function registerPushSubscription(input) {
    return createMutation('registerPushSubscription', {
        argument: 'input',
        props: 'id lastSeenAt',
        type: 'RegisterPushSubscriptionInput!',
        value: input,
    });
}
function unregisterPushSubscription(endpoint) {
    return createMutation('unregisterPushSubscription', {
        argument: 'endpoint',
        props: '',
        type: 'String!',
        value: endpoint,
    });
}

/** Implémentation GraphQL du contrat Web Push (`webPushPublicKey`, `registerPushSubscription`, `unregisterPushSubscription`). */
class TaWebPushGraphApi extends TaBaseService {
    constructor() {
        super();
        this._clientName = inject(WEB_PUSH_CLIENT_NAME, { optional: true }) ?? 'webPushService';
        super.registerRoutes({ graphEndpoint: { clientName: this._clientName, endpoint: '' } });
    }
    fetchPublicKey$() {
        return this._graphService
            .fetchQueryBuilder(webPushPublicKey(), this._clientName, { fresh: true })
            .pipe(filter$1(isNonNullable));
    }
    register$(input) {
        return this._graphService
            .mutateBuilder(registerPushSubscription(input), this._clientName)
            .pipe(filter$1(isNonNullable));
    }
    unregister$(endpoint) {
        return this._graphService
            .mutateBuilder(unregisterPushSubscription(endpoint), this._clientName)
            .pipe(map$1(result => result === true));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWebPushGraphApi, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWebPushGraphApi, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWebPushGraphApi, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

/**
 * Le service worker n'a ni `localStorage` ni jeton : la page lui laisse la langue de
 * l'utilisateur dans IndexedDB. Même base, même magasin et même clé que `ta-push-sw.js`.
 */
const WEB_PUSH_DB = 'ta-web-push';
const WEB_PUSH_STORE = 'settings';
const WEB_PUSH_LANGUAGE_KEY = 'lang';
function writePushLanguage(lang) {
    if (!lang || typeof indexedDB === 'undefined') {
        return Promise.resolve();
    }
    return new Promise(resolve => {
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
                }
                catch {
                    resolve();
                }
            };
        }
        catch {
            resolve();
        }
    });
}

/** Fonctions pures du Web Push : détection de la plateforme et manipulation de la clé VAPID. */
function isWebPushSupported() {
    return (typeof window !== 'undefined' && 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window);
}
/** PWA lancée depuis l'écran d'accueil (seul mode où iOS expose `PushManager`). */
function isStandaloneDisplay() {
    if (typeof window === 'undefined') {
        return false;
    }
    const standalone = navigator.standalone === true;
    return standalone || window.matchMedia?.('(display-mode: standalone)').matches === true;
}
function isIosDevice(userAgent = typeof navigator === 'undefined' ? '' : navigator.userAgent) {
    return /iPhone|iPad|iPod/i.test(userAgent);
}
/** Clé publique VAPID (base64url) → octets attendus par `pushManager.subscribe`. */
function urlBase64ToUint8Array(base64Url) {
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
function sameApplicationServerKey(current, vapidPublicKey) {
    if (!current) {
        return true;
    }
    const expected = urlBase64ToUint8Array(vapidPublicKey);
    const actual = new Uint8Array(current);
    return actual.length === expected.length && actual.every((byte, i) => byte === expected[i]);
}
/** Rejette après `ms` si la promesse n'a pas répondu (ex. `serviceWorker.ready` sans worker actif). */
function withTimeout(promise, ms, message) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error(message)), ms);
        promise.then(value => {
            clearTimeout(timer);
            resolve(value);
        }, error => {
            clearTimeout(timer);
            reject(error);
        });
    });
}

/** Au-delà, le service worker ne s'installera plus : on rend la main plutôt que de figer le bouton. */
const WEB_PUSH_REGISTRATION_TIMEOUT_MS = 10_000;
/**
 * L'abonnement Web Push de cet appareil : état lisible en signaux, activation sur geste,
 * réenregistrement à chaque démarrage connecté, désinscription avant la déconnexion.
 *
 * Le transport vers le serveur est `TA_WEB_PUSH_API` (voir `provideWebPush`). L'application
 * appelle `refresh()` quand l'utilisateur est authentifié : ce service ne connaît pas `@ta/user`.
 * `enable()` et `refresh()` s'enchaînent toujours l'un après l'autre : deux souscriptions
 * concurrentes laisseraient un endpoint mort côté serveur.
 */
class TaWebPushService {
    constructor() {
        this._api = inject(TA_WEB_PUSH_API);
        this._translation = inject(TaTranslationService);
        this.isSupported = isWebPushSupported();
        this.isIos = isIosDevice();
        this.isStandalone = isStandaloneDisplay();
        /** Permission du navigateur, `unsupported` quand l'API manque (iOS hors PWA, vieux navigateur). */
        this.permission = signal(this.isSupported ? Notification.permission : 'unsupported');
        /** Un abonnement existe côté navigateur et a été enregistré (ou retrouvé) pendant cette session. */
        this.isSubscribed = signal(false);
        /** `false` dès que le serveur répond `WEB_PUSH_NOT_CONFIGURED` : la fonctionnalité se masque. */
        this.isConfigured = signal(true);
        this._messages$ = new Subject();
        /** Un push vient d'être affiché par le service worker : la page peut rafraîchir ses listes. */
        this.received$ = this._messages$.pipe(filter$1(message => message.type === TA_PUSH_MESSAGE.received), map$1(message => ({ notificationId: message.notificationId ?? null })));
        /** Clic sur une notification alors qu'une fenêtre est ouverte : URL absolue à ouvrir dans la SPA. */
        this.navigate$ = this._messages$.pipe(filter$1(message => message.type === TA_PUSH_MESSAGE.navigate && !!message.url), map$1(message => message.url));
        /** La clé VAPID, demandée une seule fois par session (la promesse est mémorisée, pas son résultat). */
        this._publicKey$ = null;
        /** File des opérations d'abonnement : la suivante attend la fin de la précédente. */
        this._pending = Promise.resolve();
        void writePushLanguage(this._translation.getLanguage());
        this._translation.onLangChange$.pipe(takeUntilDestroyed()).subscribe(lang => void writePushLanguage(lang));
        if (this.isSupported) {
            navigator.serviceWorker.addEventListener('message', event => this._messages$.next((event.data ?? {})));
            void this._syncSubscriptionState();
        }
    }
    /**
     * Bouton « Activer sur cet appareil » : à appeler dans le gestionnaire du clic, Safari refuse la
     * demande de permission hors geste utilisateur.
     */
    async enable() {
        if (!this.isSupported) {
            return 'unsupported';
        }
        const permission = await Notification.requestPermission();
        this.permission.set(permission);
        if (permission !== 'granted') {
            return permission;
        }
        await this._queue(() => this._subscribeAndRegister('enable'));
        return permission;
    }
    /**
     * À chaque démarrage et à chaque connexion : charge la clé VAPID, re-souscrit si l'abonnement a été
     * perdu ou créé avec une autre clé (permission déjà accordée, aucun geste requis), réenregistre.
     */
    async refresh() {
        if (!this.isSupported) {
            return;
        }
        await this._queue(async () => {
            const key = await this._ensurePublicKey();
            this.permission.set(Notification.permission);
            if (!key || Notification.permission !== 'granted') {
                return;
            }
            await this._subscribeAndRegister('refresh');
        });
    }
    /**
     * Avant la déconnexion : retire la ligne serveur de cet appareil. L'abonnement navigateur reste,
     * le prochain compte connecté réenregistrera le même endpoint.
     */
    async unregisterCurrentDevice() {
        if (!this.isSupported) {
            return;
        }
        try {
            const registration = await this._getExistingRegistration();
            const subscription = await registration?.pushManager.getSubscription();
            if (!subscription) {
                return;
            }
            await firstValueFrom(this._api.unregister$(subscription.endpoint));
            this.isSubscribed.set(false);
        }
        catch (error) {
            Logger.LogError('[WebPush] unregister failed', error);
        }
    }
    /**
     * Le service worker actif. `ready` ne se résout jamais quand aucun worker ne s'installe
     * (script en 404, mode développement) : on borne l'attente. Protégé pour être remplacé en test.
     */
    _getRegistration() {
        return withTimeout(navigator.serviceWorker.ready, WEB_PUSH_REGISTRATION_TIMEOUT_MS, '[WebPush] no active service worker');
    }
    /** Le service worker s'il est déjà enregistré, sans attendre (la déconnexion ne doit pas bloquer). */
    _getExistingRegistration() {
        return navigator.serviceWorker.getRegistration();
    }
    _queue(operation) {
        const next = this._pending.then(operation, operation);
        this._pending = next.catch(() => undefined);
        return next;
    }
    /** Abonnement valide pour la clé courante (réutilisé, renouvelé ou créé), puis enregistré côté serveur. */
    async _subscribeAndRegister(origin) {
        const key = await this._ensurePublicKey();
        if (!key) {
            return;
        }
        try {
            const registration = await this._getRegistration();
            const subscription = await this._ensureSubscription(registration, key);
            await this._register(subscription);
            this.isSubscribed.set(true);
        }
        catch (error) {
            Logger.LogError(`[WebPush] ${origin} failed`, error);
            this.isSubscribed.set(false);
        }
    }
    async _ensureSubscription(registration, key) {
        let subscription = await registration.pushManager.getSubscription();
        if (subscription && !sameApplicationServerKey(subscription.options.applicationServerKey, key)) {
            await subscription.unsubscribe();
            subscription = null;
        }
        return (subscription ??
            registration.pushManager.subscribe({
                applicationServerKey: urlBase64ToUint8Array(key),
                userVisibleOnly: true,
            }));
    }
    async _syncSubscriptionState() {
        try {
            const registration = await this._getExistingRegistration();
            const subscription = await registration?.pushManager.getSubscription();
            this.isSubscribed.set(!!subscription && Notification.permission === 'granted');
        }
        catch {
            this.isSubscribed.set(false);
        }
    }
    _ensurePublicKey() {
        this._publicKey$ ??= firstValueFrom(this._api.fetchPublicKey$()).then(key => {
            this.isConfigured.set(true);
            return key;
        }, error => {
            if (this._isNotConfigured(error)) {
                this.isConfigured.set(false);
            }
            else {
                Logger.LogError('[WebPush] public key unavailable', error);
                // Panne passagère : la prochaine opération redemandera la clé.
                this._publicKey$ = null;
            }
            return null;
        });
        return this._publicKey$;
    }
    _isNotConfigured(error) {
        const graphErrors = error
            ?.graphQLErrors;
        if (graphErrors?.some(e => e.extensions?.code === WEB_PUSH_NOT_CONFIGURED)) {
            return true;
        }
        const message = error?.message ?? '';
        return message.includes(WEB_PUSH_NOT_CONFIGURED);
    }
    async _register(subscription) {
        const { endpoint, keys } = subscription.toJSON();
        const p256dh = keys?.['p256dh'];
        const auth = keys?.['auth'];
        if (!endpoint || !p256dh || !auth) {
            throw new Error('[WebPush] subscription without endpoint or keys');
        }
        await firstValueFrom(this._api.register$({ auth, endpoint, p256dh, userAgent: navigator.userAgent }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWebPushService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWebPushService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaWebPushService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

/**
 * Branche le Web Push : transport GraphQL du contrat standard et désinscription de l'appareil
 * avant la déconnexion (`TA_BEFORE_LOGOUT`). Reste à l'application d'appeler
 * `TaWebPushService.refresh()` quand l'utilisateur est authentifié.
 */
const provideWebPush = (config) => [
    { provide: WEB_PUSH_CLIENT_NAME, useValue: config.clientName },
    { provide: TA_WEB_PUSH_API, useClass: TaWebPushGraphApi },
    {
        provide: TA_BEFORE_LOGOUT,
        multi: true,
        useFactory: () => {
            const webPush = inject(TaWebPushService);
            return () => webPush.unregisterCurrentDevice();
        },
    },
];

const providePwa = (data) => [
    importProvidersFrom(ApolloModule),
    {
        provide: PWA_CONFIG_KEY,
        useValue: data,
    },
];

/*
 * Public API Surface of capacitor
 */

/**
 * Generated bundle index. Do not edit.
 */

export { PWA_CONFIG_KEY, TA_PUSH_MESSAGE, TA_WEB_PUSH_API, TaDeviceInfoService, TaDeviceNetworkService, TaDevicePositionService, TaPwaService, TaWebPushGraphApi, TaWebPushService, WEB_PUSH_CLIENT_NAME, WEB_PUSH_DB, WEB_PUSH_LANGUAGE_KEY, WEB_PUSH_NOT_CONFIGURED, WEB_PUSH_REGISTRATION_TIMEOUT_MS, WEB_PUSH_STORE, isIosDevice, isStandaloneDisplay, isWebPushSupported, providePwa, provideWebPush, registerPushSubscription, sameApplicationServerKey, unregisterPushSubscription, urlBase64ToUint8Array, webPushPublicKey, withTimeout, writePushLanguage };
//# sourceMappingURL=ta-capacitor.mjs.map
