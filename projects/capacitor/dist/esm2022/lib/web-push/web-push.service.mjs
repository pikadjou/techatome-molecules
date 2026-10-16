import { Injectable, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, filter, firstValueFrom, map } from 'rxjs';
import { Logger } from '@ta/server';
import { TaTranslationService } from '@ta/translation';
import { TA_PUSH_MESSAGE, TA_WEB_PUSH_API, WEB_PUSH_NOT_CONFIGURED } from './web-push-api';
import { writePushLanguage } from './web-push-language';
import { isIosDevice, isStandaloneDisplay, isWebPushSupported, sameApplicationServerKey, urlBase64ToUint8Array, withTimeout, } from './web-push.utils';
import * as i0 from "@angular/core";
/** Au-delà, le service worker ne s'installera plus : on rend la main plutôt que de figer le bouton. */
export const WEB_PUSH_REGISTRATION_TIMEOUT_MS = 10_000;
/**
 * L'abonnement Web Push de cet appareil : état lisible en signaux, activation sur geste,
 * réenregistrement à chaque démarrage connecté, désinscription avant la déconnexion.
 *
 * Le transport vers le serveur est `TA_WEB_PUSH_API` (voir `provideWebPush`). L'application
 * appelle `refresh()` quand l'utilisateur est authentifié : ce service ne connaît pas `@ta/user`.
 * `enable()` et `refresh()` s'enchaînent toujours l'un après l'autre : deux souscriptions
 * concurrentes laisseraient un endpoint mort côté serveur.
 */
export class TaWebPushService {
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
        this.received$ = this._messages$.pipe(filter(message => message.type === TA_PUSH_MESSAGE.received), map(message => ({ notificationId: message.notificationId ?? null })));
        /** Clic sur une notification alors qu'une fenêtre est ouverte : URL absolue à ouvrir dans la SPA. */
        this.navigate$ = this._messages$.pipe(filter(message => message.type === TA_PUSH_MESSAGE.navigate && !!message.url), map(message => message.url));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXB1c2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saWIvd2ViLXB1c2gvd2ViLXB1c2guc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV4RSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDeEQsT0FBTyxFQUNMLFdBQVcsRUFDWCxtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ2xCLHdCQUF3QixFQUN4QixxQkFBcUIsRUFDckIsV0FBVyxHQUNaLE1BQU0sa0JBQWtCLENBQUM7O0FBSTFCLHVHQUF1RztBQUN2RyxNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBRyxNQUFNLENBQUM7QUFRdkQ7Ozs7Ozs7O0dBUUc7QUFJSCxNQUFNLE9BQU8sZ0JBQWdCO0lBa0MzQjtRQWpDaUIsU0FBSSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvQixpQkFBWSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBRTdDLGdCQUFXLEdBQUcsa0JBQWtCLEVBQUUsQ0FBQztRQUNuQyxVQUFLLEdBQUcsV0FBVyxFQUFFLENBQUM7UUFDdEIsaUJBQVksR0FBRyxtQkFBbUIs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LElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7UUFDckUsQ0FBQztRQUNELE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEcsQ0FBQzsrR0E3TVUsZ0JBQWdCO21IQUFoQixnQkFBZ0IsY0FGZixNQUFNOzs0RkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaW5qZWN0LCBzaWduYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHRha2VVbnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcnhqcy1pbnRlcm9wJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgZmlsdGVyLCBmaXJzdFZhbHVlRnJvbSwgbWFwIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJ0B0YS9zZXJ2ZXInO1xuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xuXG5pbXBvcnQgeyBUQV9QVVNIX01FU1NBR0UsIFRBX1dFQl9QVVNIX0FQSSwgV0VCX1BVU0hfTk9UX0NPTkZJR1VSRUQgfSBmcm9tICcuL3dlYi1wdXNoLWFwaSc7XG5pbXBvcnQgeyB3cml0ZVB1c2hMYW5ndWFnZSB9IGZyb20gJy4vd2ViLXB1c2gtbGFuZ3VhZ2UnO1xuaW1wb3J0IHtcbiAgaXNJb3NEZXZpY2UsXG4gIGlzU3RhbmRhbG9uZURpc3BsYXksXG4gIGlzV2ViUHVzaFN1cHBvcnRlZCxcbiAgc2FtZUFwcGxpY2F0aW9uU2VydmVyS2V5LFxuICB1cmxCYXNlNjRUb1VpbnQ4QXJyYXksXG4gIHdpdGhUaW1lb3V0LFxufSBmcm9tICcuL3dlYi1wdXNoLnV0aWxzJztcblxuZXhwb3J0IHR5cGUgV2ViUHVzaFBlcm1pc3Npb24gPSBOb3RpZmljYXRpb25QZXJtaXNzaW9uIHwgJ3Vuc3VwcG9ydGVkJztcblxuLyoqIEF1LWRlbMOgLCBsZSBzZXJ2aWNlIHdvcmtlciBuZSBzJ2luc3RhbGxlcmEgcGx1cyA6IG9uIHJlbmQgbGEgbWFpbiBwbHV0w7R0IHF1ZSBkZSBmaWdlciBsZSBib3V0b24uICovXG5leHBvcnQgY29uc3QgV0VCX1BVU0hfUkVHSVNUUkFUSU9OX1RJTUVPVVRfTVMgPSAxMF8wMDA7XG5cbmludGVyZmFjZSBQdXNoV29ya2VyTWVzc2FnZSB7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIG5vdGlmaWNhdGlvbklkPzogc3RyaW5nIHwgbnVsbDtcbiAgdXJsPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEwnYWJvbm5lbWVudCBXZWIgUHVzaCBkZSBjZXQgYXBwYXJlaWwgOiDDqXRhdCBsaXNpYmxlIGVuIHNpZ25hdXgsIGFjdGl2YXRpb24gc3VyIGdlc3RlLFxuICogcsOpZW5yZWdpc3RyZW1lbnQgw6AgY2hhcXVlIGTDqW1hcnJhZ2UgY29ubmVjdMOpLCBkw6lzaW5zY3JpcHRpb24gYXZhbnQgbGEgZMOpY29ubmV4aW9uLlxuICpcbiAqIExlIHRyYW5zcG9ydCB2ZXJzIGxlIHNlcnZldXIgZXN0IGBUQV9XRUJfUFVTSF9BUElgICh2b2lyIGBwcm92aWRlV2ViUHVzaGApLiBMJ2FwcGxpY2F0aW9uXG4gKiBhcHBlbGxlIGByZWZyZXNoKClgIHF1YW5kIGwndXRpbGlzYXRldXIgZXN0IGF1dGhlbnRpZmnDqSA6IGNlIHNlcnZpY2UgbmUgY29ubmHDrnQgcGFzIGBAdGEvdXNlcmAuXG4gKiBgZW5hYmxlKClgIGV0IGByZWZyZXNoKClgIHMnZW5jaGHDrm5lbnQgdG91am91cnMgbCd1biBhcHLDqHMgbCdhdXRyZSA6IGRldXggc291c2NyaXB0aW9uc1xuICogY29uY3VycmVudGVzIGxhaXNzZXJhaWVudCB1biBlbmRwb2ludCBtb3J0IGPDtHTDqSBzZXJ2ZXVyLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVGFXZWJQdXNoU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2FwaSA9IGluamVjdChUQV9XRUJfUFVTSF9BUEkpO1xuICBwcml2YXRlIHJlYWRvbmx5IF90cmFuc2xhdGlvbiA9IGluamVjdChUYVRyYW5zbGF0aW9uU2VydmljZSk7XG5cbiAgcHVibGljIHJlYWRvbmx5IGlzU3VwcG9ydGVkID0gaXNXZWJQdXNoU3VwcG9ydGVkKCk7XG4gIHB1YmxpYyByZWFkb25seSBpc0lvcyA9IGlzSW9zRGV2aWNlKCk7XG4gIHB1YmxpYyByZWFkb25seSBpc1N0YW5kYWxvbmUgPSBpc1N0YW5kYWxvbmVEaXNwbGF5KCk7XG5cbiAgLyoqIFBlcm1pc3Npb24gZHUgbmF2aWdhdGV1ciwgYHVuc3VwcG9ydGVkYCBxdWFuZCBsJ0FQSSBtYW5xdWUgKGlPUyBob3JzIFBXQSwgdmlldXggbmF2aWdhdGV1cikuICovXG4gIHB1YmxpYyByZWFkb25seSBwZXJtaXNzaW9uID0gc2lnbmFsPFdlYlB1c2hQZXJtaXNzaW9uPih0aGlzLmlzU3VwcG9ydGVkID8gTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gOiAndW5zdXBwb3J0ZWQnKTtcbiAgLyoqIFVuIGFib25uZW1lbnQgZXhpc3RlIGPDtHTDqSBuYXZpZ2F0ZXVyIGV0IGEgw6l0w6kgZW5yZWdpc3Ryw6kgKG91IHJldHJvdXbDqSkgcGVuZGFudCBjZXR0ZSBzZXNzaW9uLiAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaXNTdWJzY3JpYmVkID0gc2lnbmFsKGZhbHNlKTtcbiAgLyoqIGBmYWxzZWAgZMOocyBxdWUgbGUgc2VydmV1ciByw6lwb25kIGBXRUJfUFVTSF9OT1RfQ09ORklHVVJFRGAgOiBsYSBmb25jdGlvbm5hbGl0w6kgc2UgbWFzcXVlLiAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaXNDb25maWd1cmVkID0gc2lnbmFsKHRydWUpO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX21lc3NhZ2VzJCA9IG5ldyBTdWJqZWN0PFB1c2hXb3JrZXJNZXNzYWdlPigpO1xuXG4gIC8qKiBVbiBwdXNoIHZpZW50IGQnw6p0cmUgYWZmaWNow6kgcGFyIGxlIHNlcnZpY2Ugd29ya2VyIDogbGEgcGFnZSBwZXV0IHJhZnJhw65jaGlyIHNlcyBsaXN0ZXMuICovXG4gIHB1YmxpYyByZWFkb25seSByZWNlaXZlZCQ6IE9ic2VydmFibGU8eyBub3RpZmljYXRpb25JZDogc3RyaW5nIHwgbnVsbCB9PiA9IHRoaXMuX21lc3NhZ2VzJC5waXBlKFxuICAgIGZpbHRlcihtZXNzYWdlID0+IG1lc3NhZ2UudHlwZSA9PT0gVEFfUFVTSF9NRVNTQUdFLnJlY2VpdmVkKSxcbiAgICBtYXAobWVzc2FnZSA9PiAoeyBub3RpZmljYXRpb25JZDogbWVzc2FnZS5ub3RpZmljYXRpb25JZCA/PyBudWxsIH0pKVxuICApO1xuXG4gIC8qKiBDbGljIHN1ciB1bmUgbm90aWZpY2F0aW9uIGFsb3JzIHF1J3VuZSBmZW7DqnRyZSBlc3Qgb3V2ZXJ0ZSA6IFVSTCBhYnNvbHVlIMOgIG91dnJpciBkYW5zIGxhIFNQQS4gKi9cbiAgcHVibGljIHJlYWRvbmx5IG5hdmlnYXRlJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5fbWVzc2FnZXMkLnBpcGUoXG4gICAgZmlsdGVyKG1lc3NhZ2UgPT4gbWVzc2FnZS50eXBlID09PSBUQV9QVVNIX01FU1NBR0UubmF2aWdhdGUgJiYgISFtZXNzYWdlLnVybCksXG4gICAgbWFwKG1lc3NhZ2UgPT4gbWVzc2FnZS51cmwgYXMgc3RyaW5nKVxuICApO1xuXG4gIC8qKiBMYSBjbMOpIFZBUElELCBkZW1hbmTDqWUgdW5lIHNldWxlIGZvaXMgcGFyIHNlc3Npb24gKGxhIHByb21lc3NlIGVzdCBtw6ltb3Jpc8OpZSwgcGFzIHNvbiByw6lzdWx0YXQpLiAqL1xuICBwcml2YXRlIF9wdWJsaWNLZXkkOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHwgbnVsbCA9IG51bGw7XG4gIC8qKiBGaWxlIGRlcyBvcMOpcmF0aW9ucyBkJ2Fib25uZW1lbnQgOiBsYSBzdWl2YW50ZSBhdHRlbmQgbGEgZmluIGRlIGxhIHByw6ljw6lkZW50ZS4gKi9cbiAgcHJpdmF0ZSBfcGVuZGluZzogUHJvbWlzZTx1bmtub3duPiA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHZvaWQgd3JpdGVQdXNoTGFuZ3VhZ2UodGhpcy5fdHJhbnNsYXRpb24uZ2V0TGFuZ3VhZ2UoKSk7XG4gICAgdGhpcy5fdHJhbnNsYXRpb24ub25MYW5nQ2hhbmdlJC5waXBlKHRha2VVbnRpbERlc3Ryb3llZCgpKS5zdWJzY3JpYmUobGFuZyA9PiB2b2lkIHdyaXRlUHVzaExhbmd1YWdlKGxhbmcpKTtcblxuICAgIGlmICh0aGlzLmlzU3VwcG9ydGVkKSB7XG4gICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZXZlbnQgPT5cbiAgICAgICAgdGhpcy5fbWVzc2FnZXMkLm5leHQoKGV2ZW50LmRhdGEgPz8ge30pIGFzIFB1c2hXb3JrZXJNZXNzYWdlKVxuICAgICAgKTtcbiAgICAgIHZvaWQgdGhpcy5fc3luY1N1YnNjcmlwdGlvblN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEJvdXRvbiDCqyBBY3RpdmVyIHN1ciBjZXQgYXBwYXJlaWwgwrsgOiDDoCBhcHBlbGVyIGRhbnMgbGUgZ2VzdGlvbm5haXJlIGR1IGNsaWMsIFNhZmFyaSByZWZ1c2UgbGFcbiAgICogZGVtYW5kZSBkZSBwZXJtaXNzaW9uIGhvcnMgZ2VzdGUgdXRpbGlzYXRldXIuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgZW5hYmxlKCk6IFByb21pc2U8V2ViUHVzaFBlcm1pc3Npb24+IHtcbiAgICBpZiAoIXRoaXMuaXNTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVybiAndW5zdXBwb3J0ZWQnO1xuICAgIH1cbiAgICBjb25zdCBwZXJtaXNzaW9uID0gYXdhaXQgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XG4gICAgdGhpcy5wZXJtaXNzaW9uLnNldChwZXJtaXNzaW9uKTtcbiAgICBpZiAocGVybWlzc2lvbiAhPT0gJ2dyYW50ZWQnKSB7XG4gICAgICByZXR1cm4gcGVybWlzc2lvbjtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fcXVldWUoKCkgPT4gdGhpcy5fc3Vic2NyaWJlQW5kUmVnaXN0ZXIoJ2VuYWJsZScpKTtcbiAgICByZXR1cm4gcGVybWlzc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiDDgCBjaGFxdWUgZMOpbWFycmFnZSBldCDDoCBjaGFxdWUgY29ubmV4aW9uIDogY2hhcmdlIGxhIGNsw6kgVkFQSUQsIHJlLXNvdXNjcml0IHNpIGwnYWJvbm5lbWVudCBhIMOpdMOpXG4gICAqIHBlcmR1IG91IGNyw6nDqSBhdmVjIHVuZSBhdXRyZSBjbMOpIChwZXJtaXNzaW9uIGTDqWrDoCBhY2NvcmTDqWUsIGF1Y3VuIGdlc3RlIHJlcXVpcyksIHLDqWVucmVnaXN0cmUuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgcmVmcmVzaCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuaXNTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5fcXVldWUoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gYXdhaXQgdGhpcy5fZW5zdXJlUHVibGljS2V5KCk7XG4gICAgICB0aGlzLnBlcm1pc3Npb24uc2V0KE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uKTtcbiAgICAgIGlmICgha2V5IHx8IE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uICE9PSAnZ3JhbnRlZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXdhaXQgdGhpcy5fc3Vic2NyaWJlQW5kUmVnaXN0ZXIoJ3JlZnJlc2gnKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBdmFudCBsYSBkw6ljb25uZXhpb24gOiByZXRpcmUgbGEgbGlnbmUgc2VydmV1ciBkZSBjZXQgYXBwYXJlaWwuIEwnYWJvbm5lbWVudCBuYXZpZ2F0ZXVyIHJlc3RlLFxuICAgKiBsZSBwcm9jaGFpbiBjb21wdGUgY29ubmVjdMOpIHLDqWVucmVnaXN0cmVyYSBsZSBtw6ptZSBlbmRwb2ludC5cbiAgICovXG4gIHB1YmxpYyBhc3luYyB1bnJlZ2lzdGVyQ3VycmVudERldmljZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuaXNTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlZ2lzdHJhdGlvbiA9IGF3YWl0IHRoaXMuX2dldEV4aXN0aW5nUmVnaXN0cmF0aW9uKCk7XG4gICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSBhd2FpdCByZWdpc3RyYXRpb24/LnB1c2hNYW5hZ2VyLmdldFN1YnNjcmlwdGlvbigpO1xuICAgICAgaWYgKCFzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXdhaXQgZmlyc3RWYWx1ZUZyb20odGhpcy5fYXBpLnVucmVnaXN0ZXIkKHN1YnNjcmlwdGlvbi5lbmRwb2ludCkpO1xuICAgICAgdGhpcy5pc1N1YnNjcmliZWQuc2V0KGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgTG9nZ2VyLkxvZ0Vycm9yKCdbV2ViUHVzaF0gdW5yZWdpc3RlciBmYWlsZWQnLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExlIHNlcnZpY2Ugd29ya2VyIGFjdGlmLiBgcmVhZHlgIG5lIHNlIHLDqXNvdXQgamFtYWlzIHF1YW5kIGF1Y3VuIHdvcmtlciBuZSBzJ2luc3RhbGxlXG4gICAqIChzY3JpcHQgZW4gNDA0LCBtb2RlIGTDqXZlbG9wcGVtZW50KSA6IG9uIGJvcm5lIGwnYXR0ZW50ZS4gUHJvdMOpZ8OpIHBvdXIgw6p0cmUgcmVtcGxhY8OpIGVuIHRlc3QuXG4gICAqL1xuICBwcm90ZWN0ZWQgX2dldFJlZ2lzdHJhdGlvbigpOiBQcm9taXNlPFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24+IHtcbiAgICByZXR1cm4gd2l0aFRpbWVvdXQoXG4gICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWFkeSxcbiAgICAgIFdFQl9QVVNIX1JFR0lTVFJBVElPTl9USU1FT1VUX01TLFxuICAgICAgJ1tXZWJQdXNoXSBubyBhY3RpdmUgc2VydmljZSB3b3JrZXInXG4gICAgKTtcbiAgfVxuXG4gIC8qKiBMZSBzZXJ2aWNlIHdvcmtlciBzJ2lsIGVzdCBkw6lqw6AgZW5yZWdpc3Ryw6ksIHNhbnMgYXR0ZW5kcmUgKGxhIGTDqWNvbm5leGlvbiBuZSBkb2l0IHBhcyBibG9xdWVyKS4gKi9cbiAgcHJvdGVjdGVkIF9nZXRFeGlzdGluZ1JlZ2lzdHJhdGlvbigpOiBQcm9taXNlPFNlcnZpY2VXb3JrZXJSZWdpc3RyYXRpb24gfCB1bmRlZmluZWQ+IHtcbiAgICByZXR1cm4gbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuZ2V0UmVnaXN0cmF0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9xdWV1ZTxUPihvcGVyYXRpb246ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBjb25zdCBuZXh0ID0gdGhpcy5fcGVuZGluZy50aGVuKG9wZXJhdGlvbiwgb3BlcmF0aW9uKTtcbiAgICB0aGlzLl9wZW5kaW5nID0gbmV4dC5jYXRjaCgoKSA9PiB1bmRlZmluZWQpO1xuICAgIHJldHVybiBuZXh0O1xuICB9XG5cbiAgLyoqIEFib25uZW1lbnQgdmFsaWRlIHBvdXIgbGEgY2zDqSBjb3VyYW50ZSAocsOpdXRpbGlzw6ksIHJlbm91dmVsw6kgb3UgY3LDqcOpKSwgcHVpcyBlbnJlZ2lzdHLDqSBjw7R0w6kgc2VydmV1ci4gKi9cbiAgcHJpdmF0ZSBhc3luYyBfc3Vic2NyaWJlQW5kUmVnaXN0ZXIob3JpZ2luOiAnZW5hYmxlJyB8ICdyZWZyZXNoJyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGtleSA9IGF3YWl0IHRoaXMuX2Vuc3VyZVB1YmxpY0tleSgpO1xuICAgIGlmICgha2V5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWdpc3RyYXRpb24gPSBhd2FpdCB0aGlzLl9nZXRSZWdpc3RyYXRpb24oKTtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGF3YWl0IHRoaXMuX2Vuc3VyZVN1YnNjcmlwdGlvbihyZWdpc3RyYXRpb24sIGtleSk7XG4gICAgICBhd2FpdCB0aGlzLl9yZWdpc3RlcihzdWJzY3JpcHRpb24pO1xuICAgICAgdGhpcy5pc1N1YnNjcmliZWQuc2V0KHRydWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBMb2dnZXIuTG9nRXJyb3IoYFtXZWJQdXNoXSAke29yaWdpbn0gZmFpbGVkYCwgZXJyb3IpO1xuICAgICAgdGhpcy5pc1N1YnNjcmliZWQuc2V0KGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9lbnN1cmVTdWJzY3JpcHRpb24ocmVnaXN0cmF0aW9uOiBTZXJ2aWNlV29ya2VyUmVnaXN0cmF0aW9uLCBrZXk6IHN0cmluZyk6IFByb21pc2U8UHVzaFN1YnNjcmlwdGlvbj4ge1xuICAgIGxldCBzdWJzY3JpcHRpb24gPSBhd2FpdCByZWdpc3RyYXRpb24ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XG4gICAgaWYgKHN1YnNjcmlwdGlvbiAmJiAhc2FtZUFwcGxpY2F0aW9uU2VydmVyS2V5KHN1YnNjcmlwdGlvbi5vcHRpb25zLmFwcGxpY2F0aW9uU2VydmVyS2V5LCBrZXkpKSB7XG4gICAgICBhd2FpdCBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICBzdWJzY3JpcHRpb24gPz9cbiAgICAgIHJlZ2lzdHJhdGlvbi5wdXNoTWFuYWdlci5zdWJzY3JpYmUoe1xuICAgICAgICBhcHBsaWNhdGlvblNlcnZlcktleTogdXJsQmFzZTY0VG9VaW50OEFycmF5KGtleSksXG4gICAgICAgIHVzZXJWaXNpYmxlT25seTogdHJ1ZSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3N5bmNTdWJzY3JpcHRpb25TdGF0ZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVnaXN0cmF0aW9uID0gYXdhaXQgdGhpcy5fZ2V0RXhpc3RpbmdSZWdpc3RyYXRpb24oKTtcbiAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGF3YWl0IHJlZ2lzdHJhdGlvbj8ucHVzaE1hbmFnZXIuZ2V0U3Vic2NyaXB0aW9uKCk7XG4gICAgICB0aGlzLmlzU3Vic2NyaWJlZC5zZXQoISFzdWJzY3JpcHRpb24gJiYgTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT09ICdncmFudGVkJyk7XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aGlzLmlzU3Vic2NyaWJlZC5zZXQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2Vuc3VyZVB1YmxpY0tleSgpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICB0aGlzLl9wdWJsaWNLZXkkID8/PSBmaXJzdFZhbHVlRnJvbSh0aGlzLl9hcGkuZmV0Y2hQdWJsaWNLZXkkKCkpLnRoZW4oXG4gICAgICBrZXkgPT4ge1xuICAgICAgICB0aGlzLmlzQ29uZmlndXJlZC5zZXQodHJ1ZSk7XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgICB9LFxuICAgICAgZXJyb3IgPT4ge1xuICAgICAgICBpZiAodGhpcy5faXNOb3RDb25maWd1cmVkKGVycm9yKSkge1xuICAgICAgICAgIHRoaXMuaXNDb25maWd1cmVkLnNldChmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgTG9nZ2VyLkxvZ0Vycm9yKCdbV2ViUHVzaF0gcHVibGljIGtleSB1bmF2YWlsYWJsZScsIGVycm9yKTtcbiAgICAgICAgICAvLyBQYW5uZSBwYXNzYWfDqHJlIDogbGEgcHJvY2hhaW5lIG9ww6lyYXRpb24gcmVkZW1hbmRlcmEgbGEgY2zDqS5cbiAgICAgICAgICB0aGlzLl9wdWJsaWNLZXkkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiB0aGlzLl9wdWJsaWNLZXkkO1xuICB9XG5cbiAgcHJpdmF0ZSBfaXNOb3RDb25maWd1cmVkKGVycm9yOiB1bmtub3duKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZ3JhcGhFcnJvcnMgPSAoZXJyb3IgYXMgeyBncmFwaFFMRXJyb3JzPzogeyBtZXNzYWdlPzogc3RyaW5nOyBleHRlbnNpb25zPzogeyBjb2RlPzogc3RyaW5nIH0gfVtdIH0pXG4gICAgICA/LmdyYXBoUUxFcnJvcnM7XG4gICAgaWYgKGdyYXBoRXJyb3JzPy5zb21lKGUgPT4gZS5leHRlbnNpb25zPy5jb2RlID09PSBXRUJfUFVTSF9OT1RfQ09ORklHVVJFRCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBtZXNzYWdlID0gKGVycm9yIGFzIHsgbWVzc2FnZT86IHN0cmluZyB9KT8ubWVzc2FnZSA/PyAnJztcbiAgICByZXR1cm4gbWVzc2FnZS5pbmNsdWRlcyhXRUJfUFVTSF9OT1RfQ09ORklHVVJFRCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZWdpc3RlcihzdWJzY3JpcHRpb246IFB1c2hTdWJzY3JpcHRpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB7IGVuZHBvaW50LCBrZXlzIH0gPSBzdWJzY3JpcHRpb24udG9KU09OKCk7XG4gICAgY29uc3QgcDI1NmRoID0ga2V5cz8uWydwMjU2ZGgnXTtcbiAgICBjb25zdCBhdXRoID0ga2V5cz8uWydhdXRoJ107XG4gICAgaWYgKCFlbmRwb2ludCB8fCAhcDI1NmRoIHx8ICFhdXRoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1tXZWJQdXNoXSBzdWJzY3JpcHRpb24gd2l0aG91dCBlbmRwb2ludCBvciBrZXlzJyk7XG4gICAgfVxuICAgIGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMuX2FwaS5yZWdpc3RlciQoeyBhdXRoLCBlbmRwb2ludCwgcDI1NmRoLCB1c2VyQWdlbnQ6IG5hdmlnYXRvci51c2VyQWdlbnQgfSkpO1xuICB9XG59XG4iXX0=