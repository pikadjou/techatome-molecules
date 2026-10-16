import { Observable } from 'rxjs';
import { TaBaseService } from '@ta/server';
import { ITaWebPushApi, PushSubscriptionDto, PushSubscriptionInput } from './web-push-api';
import * as i0 from "@angular/core";
/** Implémentation GraphQL du contrat Web Push (`webPushPublicKey`, `registerPushSubscription`, `unregisterPushSubscription`). */
export declare class TaWebPushGraphApi extends TaBaseService implements ITaWebPushApi {
    private readonly _clientName;
    constructor();
    fetchPublicKey$(): Observable<string>;
    register$(input: PushSubscriptionInput): Observable<PushSubscriptionDto>;
    unregister$(endpoint: string): Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaWebPushGraphApi, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaWebPushGraphApi>;
}
