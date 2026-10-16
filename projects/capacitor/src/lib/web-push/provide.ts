import { Provider, inject } from '@angular/core';

import { TA_BEFORE_LOGOUT, TaBeforeLogoutHook } from '@ta/utils';

import { TA_WEB_PUSH_API, WEB_PUSH_CLIENT_NAME } from './web-push-api';
import { TaWebPushGraphApi } from './web-push-graph.api';
import { TaWebPushService } from './web-push.service';

export interface ITaWebPushConfig {
  /** `clientName` GraphQL de l'endpoint Web Push (le serveur par défaut de `provideServer`). */
  clientName: string;
}

/**
 * Branche le Web Push : transport GraphQL du contrat standard et désinscription de l'appareil
 * avant la déconnexion (`TA_BEFORE_LOGOUT`). Reste à l'application d'appeler
 * `TaWebPushService.refresh()` quand l'utilisateur est authentifié.
 */
export const provideWebPush = (config: ITaWebPushConfig): Provider[] => [
  { provide: WEB_PUSH_CLIENT_NAME, useValue: config.clientName },
  { provide: TA_WEB_PUSH_API, useClass: TaWebPushGraphApi },
  {
    provide: TA_BEFORE_LOGOUT,
    multi: true,
    useFactory: (): TaBeforeLogoutHook => {
      const webPush = inject(TaWebPushService);
      return () => webPush.unregisterCurrentDevice();
    },
  },
];
