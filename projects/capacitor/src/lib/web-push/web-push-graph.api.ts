import { Injectable, inject } from '@angular/core';

import { Observable, filter, map } from 'rxjs';

import { TaBaseService } from '@ta/server';
import { isNonNullable } from '@ta/utils';

import { ITaWebPushApi, PushSubscriptionDto, PushSubscriptionInput, WEB_PUSH_CLIENT_NAME } from './web-push-api';
import { registerPushSubscription, unregisterPushSubscription, webPushPublicKey } from './web-push.queries';

/** Implémentation GraphQL du contrat Web Push (`webPushPublicKey`, `registerPushSubscription`, `unregisterPushSubscription`). */
@Injectable({
  providedIn: 'root',
})
export class TaWebPushGraphApi extends TaBaseService implements ITaWebPushApi {
  private readonly _clientName = inject(WEB_PUSH_CLIENT_NAME, { optional: true }) ?? 'webPushService';

  constructor() {
    super();
    super.registerRoutes({ graphEndpoint: { clientName: this._clientName, endpoint: '' } });
  }

  public fetchPublicKey$(): Observable<string> {
    return this._graphService
      .fetchQueryBuilder<string>(webPushPublicKey(), this._clientName, { fresh: true })
      .pipe(filter(isNonNullable));
  }

  public register$(input: PushSubscriptionInput): Observable<PushSubscriptionDto> {
    return this._graphService
      .mutate<PushSubscriptionDto>(registerPushSubscription(input), 'registerPushSubscription', this._clientName)
      .pipe(filter(isNonNullable));
  }

  public unregister$(endpoint: string): Observable<boolean> {
    return this._graphService
      .mutate<boolean>(unregisterPushSubscription(endpoint), 'unregisterPushSubscription', this._clientName)
      .pipe(map(result => result === true));
  }
}
