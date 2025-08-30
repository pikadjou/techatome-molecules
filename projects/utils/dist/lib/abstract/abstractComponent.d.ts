import { Location } from '@angular/common';
import { OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CamIconType } from '@ta/icons';
import { BreakpointDetection } from '../helpers/breakpoints/detection';
import { RequestState } from '../helpers/request/state';
import { SubscriberHandler } from '../helpers/subscriber/handler';
import * as i0 from "@angular/core";
export declare abstract class TaAbstractComponent implements OnDestroy {
    breakpoints: BreakpointDetection;
    requestState: RequestState;
    icon: typeof CamIconType;
    get isMobile(): boolean;
    get isDesktop(): boolean;
    protected _subscriberHandler: SubscriberHandler;
    protected _route: ActivatedRoute;
    protected _router: Router;
    protected _location: Location;
    constructor();
    ngOnDestroy(): void;
    protected _registerSubscription(subscription: Subscription): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaAbstractComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TaAbstractComponent, "ng-component", never, {}, {}, never, never, false, never>;
}
