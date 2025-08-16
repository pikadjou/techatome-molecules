import { Injectable, OnDestroy, inject } from '@angular/core';

import { Subscription } from 'rxjs';

import {
  CamGraphService,
  GraphEndpoint,
  GraphOptions,
} from '../graphql/public-api';
import { MappingApiType } from './api/requestMap';
import { CamServerSevice } from './api/server.service';

@Injectable({
  providedIn: 'root',
})
export abstract class CamBaseService implements OnDestroy {
  protected _subscriptionList: Subscription[] = [];
  protected _serverService = inject(CamServerSevice);
  protected _graphService = inject(CamGraphService);

  constructor(apiRoutes?: MappingApiType) {
    this.registerRoutes({ apiRoutes });
  }

  public registerRoutes(
    routes: { apiRoutes?: MappingApiType; graphEndpoint?: GraphEndpoint },
    options?: GraphOptions
  ) {
    if (routes.apiRoutes) this._serverService.registerRoutes(routes.apiRoutes);
    if (routes.graphEndpoint)
      this._graphService.registerGraphEndpoint(routes.graphEndpoint, options);
  }

  ngOnDestroy() {
    this._subscriptionList.forEach((subscription) =>
      subscription.unsubscribe()
    );
  }

  protected _registerSubscription(subscription: Subscription) {
    this._subscriptionList.push(subscription);
  }
}
