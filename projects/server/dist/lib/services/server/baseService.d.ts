import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CamGraphService, GraphEndpoint, GraphOptions } from '../graphql/public-api';
import { MappingApiType } from './api/requestMap';
import { CamServerSevice } from './api/server.service';
import * as i0 from "@angular/core";
export declare abstract class CamBaseService implements OnDestroy {
    protected _subscriptionList: Subscription[];
    protected _serverService: CamServerSevice;
    protected _graphService: CamGraphService;
    constructor(apiRoutes?: MappingApiType);
    registerRoutes(routes: {
        apiRoutes?: MappingApiType;
        graphEndpoint?: GraphEndpoint;
    }, options?: GraphOptions): void;
    ngOnDestroy(): void;
    protected _registerSubscription(subscription: Subscription): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamBaseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamBaseService>;
}
