import { TestBed } from '@angular/core/testing';

import { EMPTY, of, throwError } from 'rxjs';

import { TaTranslationService } from '@ta/translation';

import { ITaWebPushApi, TA_WEB_PUSH_API } from '@lib/capacitor/web-push/web-push-api';
import { TaWebPushService } from '@lib/capacitor/web-push/web-push.service';
import { urlBase64ToUint8Array } from '@lib/capacitor/web-push/web-push.utils';

const VAPID = 'AQID';
const OTHER_VAPID = 'AQIE';

function fakeSubscription(key: string | null, endpoint = 'https://push.example/abc') {
  return {
    endpoint,
    options: { applicationServerKey: key ? urlBase64ToUint8Array(key).buffer : null },
    toJSON: () => ({ endpoint, keys: { auth: 'a', p256dh: 'p' } }),
    unsubscribe: jasmine.createSpy('unsubscribe').and.resolveTo(true),
  } as unknown as PushSubscription & { unsubscribe: jasmine.Spy };
}

function fakeRegistration(current: PushSubscription | null) {
  const pushManager = {
    getSubscription: jasmine.createSpy('getSubscription').and.resolveTo(current),
    subscribe: jasmine.createSpy('subscribe').and.resolveTo(fakeSubscription(VAPID, 'https://push.example/new')),
  };
  return { pushManager } as unknown as ServiceWorkerRegistration & { pushManager: typeof pushManager };
}

type WithRegistration = {
  _getRegistration: () => Promise<ServiceWorkerRegistration>;
  _getExistingRegistration: () => Promise<ServiceWorkerRegistration | undefined>;
};

describe('TaWebPushService', () => {
  let service: TaWebPushService;
  let api: jasmine.SpyObj<ITaWebPushApi>;
  let permission: NotificationPermission;

  beforeEach(() => {
    api = jasmine.createSpyObj<ITaWebPushApi>('api', ['fetchPublicKey$', 'register$', 'unregister$']);
    api.fetchPublicKey$.and.returnValue(of(VAPID));
    api.register$.and.returnValue(of({ id: '1', lastSeenAt: '2026-10-16T00:00:00Z' }));
    api.unregister$.and.returnValue(of(true));
    permission = 'granted';
    spyOnProperty(Notification, 'permission', 'get').and.callFake(() => permission);

    TestBed.configureTestingModule({
      providers: [
        { provide: TA_WEB_PUSH_API, useValue: api },
        { provide: TaTranslationService, useValue: { getLanguage: () => 'fr', onLangChange$: EMPTY } },
      ],
    });
    service = TestBed.inject(TaWebPushService);
  });

  function stubRegistration(registration: ServiceWorkerRegistration) {
    const target = service as unknown as WithRegistration;
    spyOn(target, '_getRegistration').and.resolveTo(registration);
    spyOn(target, '_getExistingRegistration').and.resolveTo(registration);
  }

  describe('refresh', () => {
    it('re-souscrit et enregistre quand la permission est accordée mais l’abonnement perdu', async () => {
      const registration = fakeRegistration(null);
      stubRegistration(registration);

      await service.refresh();

      expect(registration.pushManager.subscribe).toHaveBeenCalledWith(
        jasmine.objectContaining({ userVisibleOnly: true })
      );
      expect(api.register$).toHaveBeenCalledWith(
        jasmine.objectContaining({ auth: 'a', endpoint: 'https://push.example/new', p256dh: 'p' })
      );
      expect(service.isSubscribed()).toBeTrue();
    });

    it('se désabonne puis re-souscrit quand la clé VAPID a changé', async () => {
      const stale = fakeSubscription(OTHER_VAPID);
      const registration = fakeRegistration(stale);
      stubRegistration(registration);

      await service.refresh();

      expect(stale.unsubscribe).toHaveBeenCalled();
      expect(registration.pushManager.subscribe).toHaveBeenCalled();
      expect(api.register$).toHaveBeenCalledTimes(1);
    });

    it('garde l’abonnement courant quand la clé est la même', async () => {
      const current = fakeSubscription(VAPID);
      const registration = fakeRegistration(current);
      stubRegistration(registration);

      await service.refresh();

      expect(current.unsubscribe).not.toHaveBeenCalled();
      expect(registration.pushManager.subscribe).not.toHaveBeenCalled();
      expect(api.register$).toHaveBeenCalledWith(jasmine.objectContaining({ endpoint: 'https://push.example/abc' }));
    });

    it('ne souscrit jamais sans permission accordée', async () => {
      permission = 'default';
      const registration = fakeRegistration(null);
      stubRegistration(registration);

      await service.refresh();

      expect(registration.pushManager.subscribe).not.toHaveBeenCalled();
      expect(api.register$).not.toHaveBeenCalled();
      expect(service.permission()).toBe('default');
    });

    it('masque la fonctionnalité quand le serveur n’a pas de clé', async () => {
      api.fetchPublicKey$.and.returnValue(
        throwError(() => ({ graphQLErrors: [{ extensions: { code: 'WEB_PUSH_NOT_CONFIGURED' } }] }))
      );
      const registration = fakeRegistration(null);
      stubRegistration(registration);

      await service.refresh();

      expect(service.isConfigured()).toBeFalse();
      expect(registration.pushManager.subscribe).not.toHaveBeenCalled();
    });

    it('ne redemande la clé qu’une fois', async () => {
      stubRegistration(fakeRegistration(fakeSubscription(VAPID)));

      await service.refresh();
      await service.refresh();

      expect(api.fetchPublicKey$).toHaveBeenCalledTimes(1);
    });
  });

  describe('enable', () => {
    it('ne souscrit pas quand la permission est refusée', async () => {
      permission = 'denied';
      spyOn(Notification, 'requestPermission').and.resolveTo('denied');
      const registration = fakeRegistration(null);
      stubRegistration(registration);

      const result = await service.enable();

      expect(result).toBe('denied');
      expect(service.permission()).toBe('denied');
      expect(registration.pushManager.subscribe).not.toHaveBeenCalled();
    });

    it('souscrit et enregistre quand la permission est accordée', async () => {
      spyOn(Notification, 'requestPermission').and.resolveTo('granted');
      const registration = fakeRegistration(null);
      stubRegistration(registration);

      const result = await service.enable();

      expect(result).toBe('granted');
      expect(registration.pushManager.subscribe).toHaveBeenCalled();
      expect(api.register$).toHaveBeenCalled();
      expect(service.isSubscribed()).toBeTrue();
    });
  });

  describe('unregisterCurrentDevice', () => {
    it('retire la ligne serveur sans toucher à l’abonnement navigateur', async () => {
      const current = fakeSubscription(VAPID);
      stubRegistration(fakeRegistration(current));

      await service.unregisterCurrentDevice();

      expect(api.unregister$).toHaveBeenCalledWith('https://push.example/abc');
      expect(current.unsubscribe).not.toHaveBeenCalled();
      expect(service.isSubscribed()).toBeFalse();
    });

    it('ne fait rien sans abonnement', async () => {
      stubRegistration(fakeRegistration(null));

      await service.unregisterCurrentDevice();

      expect(api.unregister$).not.toHaveBeenCalled();
    });
  });

  describe('concurrence et robustesse', () => {
    it('enable renouvelle un abonnement créé avec une autre clé', async () => {
      spyOn(Notification, 'requestPermission').and.resolveTo('granted');
      const stale = fakeSubscription(OTHER_VAPID);
      const registration = fakeRegistration(stale);
      stubRegistration(registration);

      await service.enable();

      expect(stale.unsubscribe).toHaveBeenCalled();
      expect(registration.pushManager.subscribe).toHaveBeenCalled();
      expect(api.register$).toHaveBeenCalledWith(jasmine.objectContaining({ endpoint: 'https://push.example/new' }));
    });

    it('deux refresh en parallèle ne demandent la clé qu’une fois et s’enchaînent', async () => {
      const registration = fakeRegistration(fakeSubscription(VAPID));
      stubRegistration(registration);

      await Promise.all([service.refresh(), service.refresh()]);

      expect(api.fetchPublicKey$).toHaveBeenCalledTimes(1);
      expect(api.register$).toHaveBeenCalledTimes(2);
    });

    it('redemande la clé après une panne passagère', async () => {
      api.fetchPublicKey$.and.returnValues(
        throwError(() => new Error('network')),
        of(VAPID)
      );
      const registration = fakeRegistration(fakeSubscription(VAPID));
      stubRegistration(registration);

      await service.refresh();
      expect(service.isConfigured()).toBeTrue();
      expect(api.register$).not.toHaveBeenCalled();

      await service.refresh();
      expect(api.fetchPublicKey$).toHaveBeenCalledTimes(2);
      expect(api.register$).toHaveBeenCalledTimes(1);
    });

    it('enable rend la main quand aucun service worker ne devient actif', async () => {
      spyOn(Notification, 'requestPermission').and.resolveTo('granted');
      const target = service as unknown as WithRegistration;
      spyOn(target, '_getRegistration').and.rejectWith(new Error('[WebPush] no active service worker'));

      const result = await service.enable();

      expect(result).toBe('granted');
      expect(service.isSubscribed()).toBeFalse();
      expect(api.register$).not.toHaveBeenCalled();
    });
  });
});
