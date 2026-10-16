import { TestBed } from '@angular/core/testing';

import { EMPTY, of } from 'rxjs';

import { TaTranslationService } from '@ta/translation';
import { TA_BEFORE_LOGOUT } from '@ta/utils';

import { provideWebPush } from '@lib/capacitor/web-push/provide';
import { TA_WEB_PUSH_API, WEB_PUSH_CLIENT_NAME } from '@lib/capacitor/web-push/web-push-api';
import { TaWebPushGraphApi } from '@lib/capacitor/web-push/web-push-graph.api';
import { TaWebPushService } from '@lib/capacitor/web-push/web-push.service';

describe('provideWebPush', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideWebPush({ clientName: 'webPushService' }),
        { provide: TaTranslationService, useValue: { getLanguage: () => 'fr', onLangChange$: EMPTY } },
        // L'implémentation GraphQL réelle tire Apollo : on la remplace après coup.
        {
          provide: TA_WEB_PUSH_API,
          useValue: { fetchPublicKey$: () => of('k'), register$: () => of(null), unregister$: () => of(true) },
        },
      ],
    });
  });

  it('expose le clientName et choisit l’implémentation GraphQL par défaut', () => {
    expect(TestBed.inject(WEB_PUSH_CLIENT_NAME)).toBe('webPushService');
    const providers = provideWebPush({ clientName: 'x' }) as { provide: unknown; useClass?: unknown }[];
    expect(providers.find(p => p.provide === TA_WEB_PUSH_API)?.useClass).toBe(TaWebPushGraphApi);
  });

  it('enregistre un hook de déconnexion qui désinscrit l’appareil', async () => {
    const service = TestBed.inject(TaWebPushService);
    const spy = spyOn(service, 'unregisterCurrentDevice').and.resolveTo();

    const hooks = TestBed.inject(TA_BEFORE_LOGOUT);
    expect(hooks.length).toBe(1);
    await hooks[0]();

    expect(spy).toHaveBeenCalled();
  });
});
