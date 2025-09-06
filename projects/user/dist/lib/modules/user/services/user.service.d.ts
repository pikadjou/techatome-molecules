import { InjectionToken } from '@angular/core';
import { HandleSimpleRequest } from '@ta/server';
import { TaBaseService } from '@ta/server';
import { UserProfile } from './dto/user-profile';
import * as i0 from "@angular/core";
export declare const TA_USER_SERVICE: InjectionToken<TaUserService>;
export declare class TaUserService extends TaBaseService {
    userProfile: HandleSimpleRequest<UserProfile>;
    userDetail: HandleSimpleRequest<UserProfile>;
    constructor();
    fetchUserProfile$(props?: string): import("rxjs").Observable<UserProfile>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaUserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaUserService>;
}
