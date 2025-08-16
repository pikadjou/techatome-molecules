import { Location } from '@angular/common';
import { Component, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CamIconType } from '@ta/icons';
import { Subscription } from 'rxjs';

import { BreakpointDetection } from '../helpers/breakpoints/detection';
import { RequestState } from '../helpers/request/state';
import { SubscriberHandler } from '../helpers/subscriber/handler';

@Component({ template: '' })
export abstract class CamAbstractComponent implements OnDestroy {
  public breakpoints = new BreakpointDetection();
  public requestState = new RequestState();

  public icon: typeof CamIconType = CamIconType;

  get isMobile() {
    return this.breakpoints.isMobile;
  }
  get isDesktop() {
    return this.breakpoints.isDesktop;
  }

  protected _subscriberHandler = new SubscriberHandler();

  /* Routing */
  protected _route = inject(ActivatedRoute);
  protected _router = inject(Router);
  protected _location = inject(Location);

  constructor() {}

  ngOnDestroy() {
    this._subscriberHandler.destroy();
  }

  protected _registerSubscription(subscription: Subscription) {
    this._subscriberHandler.registerSubscription(subscription);
  }
}
