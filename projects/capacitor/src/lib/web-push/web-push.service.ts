import { Injectable, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { Observable, Subject, filter, firstValueFrom, map } from 'rxjs';

import { Logger } from '@ta/server';
import { TaTranslationService } from '@ta/translation';

import { TA_PUSH_MESSAGE, TA_WEB_PUSH_API, WEB_PUSH_NOT_CONFIGURED } from './web-push-api';
import { writePushLanguage } from './web-push-language';
import {
  isIosDevice,
  isStandaloneDisplay,
  isWebPushSupported,
  sameApplicationServerKey,
  urlBase64ToUint8Array,
  withTimeout,
} from './web-push.utils';

export type WebPushPermission = NotificationPermission | 'unsupported';

/** Au-delà, le service worker ne s'installera plus : on rend la main plutôt que de figer le bouton. */
export const WEB_PUSH_REGISTRATION_TIMEOUT_MS = 10_000;

interface PushWorkerMessage {
  type?: string;
  notificationId?: string | null;
  url?: string;
}

/**
 * L'abonnement Web Push de cet appareil : état lisible en signaux, activation sur geste,
 * réenregistrement à chaque démarrage connecté, désinscription avant la déconnexion.
 *
 * Le transport vers le serveur est `TA_WEB_PUSH_API` (voir `provideWebPush`). L'application
 * appelle `refresh()` quand l'utilisateur est authentifié : ce service ne connaît pas `@ta/user`.
 * `enable()` et `refresh()` s'enchaînent toujours l'un après l'autre : deux souscriptions
 * concurrentes laisseraient un endpoint mort côté serveur.
 */
@Injectable({
  providedIn: 'root',
})
export class TaWebPushService {
  private readonly _api = inject(TA_WEB_PUSH_API);
  private readonly _translation = inject(TaTranslationService);

  public readonly isSupported = isWebPushSupported();
  public readonly isIos = isIosDevice();
  public readonly isStandalone = isStandaloneDisplay();

  /** Permission du navigateur, `unsupported` quand l'API manque (iOS hors PWA, vieux navigateur). */
  public readonly permission = signal<WebPushPermission>(this.isSupported ? Notification.permission : 'unsupported');
  /** Un abonnement existe côté navigateur et a été enregistré (ou retrouvé) pendant cette session. */
  public readonly isSubscribed = signal(false);
  /** `false` dès que le serveur répond `WEB_PUSH_NOT_CONFIGURED` : la fonctionnalité se masque. */
  public readonly isConfigured = signal(true);

  private readonly _messages$ = new Subject<PushWorkerMessage>();

  /** Un push vient d'être affiché par le service worker : la page peut rafraîchir ses listes. */
  public readonly received$: Observable<{ notificationId: string | null }> = this._messages$.pipe(
    filter(message => message.type === TA_PUSH_MESSAGE.received),
    map(message => ({ notificationId: message.notificationId ?? null }))
  );

  /** Clic sur une notification alors qu'une fenêtre est ouverte : URL absolue à ouvrir dans la SPA. */
  public readonly navigate$: Observable<string> = this._messages$.pipe(
    filter(message => message.type === TA_PUSH_MESSAGE.navigate && !!message.url),
    map(message => message.url as string)
  );

  /** La clé VAPID, demandée une seule fois par session (la promesse est mémorisée, pas son résultat). */
  private _publicKey$: Promise<string | null> | null = null;
  /** File des opérations d'abonnement : la suivante attend la fin de la précédente. */
  private _pending: Promise<unknown> = Promise.resolve();

  constructor() {
    void writePushLanguage(this._translation.getLanguage());
    this._translation.onLangChange$.pipe(takeUntilDestroyed()).subscribe(lang => void writePushLanguage(lang));

    if (this.isSupported) {
      navigator.serviceWorker.addEventListener('message', event =>
        this._messages$.next((event.data ?? {}) as PushWorkerMessage)
      );
      void this._syncSubscriptionState();
    }
  }

  /**
   * Bouton « Activer sur cet appareil » : à appeler dans le gestionnaire du clic, Safari refuse la
   * demande de permission hors geste utilisateur.
   */
  public async enable(): Promise<WebPushPermission> {
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
  public async refresh(): Promise<void> {
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
  public async unregisterCurrentDevice(): Promise<void> {
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
    } catch (error) {
      Logger.LogError('[WebPush] unregister failed', error);
    }
  }

  /**
   * Le service worker actif. `ready` ne se résout jamais quand aucun worker ne s'installe
   * (script en 404, mode développement) : on borne l'attente. Protégé pour être remplacé en test.
   */
  protected _getRegistration(): Promise<ServiceWorkerRegistration> {
    return withTimeout(
      navigator.serviceWorker.ready,
      WEB_PUSH_REGISTRATION_TIMEOUT_MS,
      '[WebPush] no active service worker'
    );
  }

  /** Le service worker s'il est déjà enregistré, sans attendre (la déconnexion ne doit pas bloquer). */
  protected _getExistingRegistration(): Promise<ServiceWorkerRegistration | undefined> {
    return navigator.serviceWorker.getRegistration();
  }

  private _queue<T>(operation: () => Promise<T>): Promise<T> {
    const next = this._pending.then(operation, operation);
    this._pending = next.catch(() => undefined);
    return next;
  }

  /** Abonnement valide pour la clé courante (réutilisé, renouvelé ou créé), puis enregistré côté serveur. */
  private async _subscribeAndRegister(origin: 'enable' | 'refresh'): Promise<void> {
    const key = await this._ensurePublicKey();
    if (!key) {
      return;
    }
    try {
      const registration = await this._getRegistration();
      const subscription = await this._ensureSubscription(registration, key);
      await this._register(subscription);
      this.isSubscribed.set(true);
    } catch (error) {
      Logger.LogError(`[WebPush] ${origin} failed`, error);
      this.isSubscribed.set(false);
    }
  }

  private async _ensureSubscription(registration: ServiceWorkerRegistration, key: string): Promise<PushSubscription> {
    let subscription = await registration.pushManager.getSubscription();
    if (subscription && !sameApplicationServerKey(subscription.options.applicationServerKey, key)) {
      await subscription.unsubscribe();
      subscription = null;
    }
    return (
      subscription ??
      registration.pushManager.subscribe({
        applicationServerKey: urlBase64ToUint8Array(key),
        userVisibleOnly: true,
      })
    );
  }

  private async _syncSubscriptionState(): Promise<void> {
    try {
      const registration = await this._getExistingRegistration();
      const subscription = await registration?.pushManager.getSubscription();
      this.isSubscribed.set(!!subscription && Notification.permission === 'granted');
    } catch {
      this.isSubscribed.set(false);
    }
  }

  private _ensurePublicKey(): Promise<string | null> {
    this._publicKey$ ??= firstValueFrom(this._api.fetchPublicKey$()).then(
      key => {
        this.isConfigured.set(true);
        return key;
      },
      error => {
        if (this._isNotConfigured(error)) {
          this.isConfigured.set(false);
        } else {
          Logger.LogError('[WebPush] public key unavailable', error);
          // Panne passagère : la prochaine opération redemandera la clé.
          this._publicKey$ = null;
        }
        return null;
      }
    );
    return this._publicKey$;
  }

  private _isNotConfigured(error: unknown): boolean {
    const graphErrors = (error as { graphQLErrors?: { message?: string; extensions?: { code?: string } }[] })
      ?.graphQLErrors;
    if (graphErrors?.some(e => e.extensions?.code === WEB_PUSH_NOT_CONFIGURED)) {
      return true;
    }
    const message = (error as { message?: string })?.message ?? '';
    return message.includes(WEB_PUSH_NOT_CONFIGURED);
  }

  private async _register(subscription: PushSubscription): Promise<void> {
    const { endpoint, keys } = subscription.toJSON();
    const p256dh = keys?.['p256dh'];
    const auth = keys?.['auth'];
    if (!endpoint || !p256dh || !auth) {
      throw new Error('[WebPush] subscription without endpoint or keys');
    }
    await firstValueFrom(this._api.register$({ auth, endpoint, p256dh, userAgent: navigator.userAgent }));
  }
}
