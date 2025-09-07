import { InjectionToken } from '@angular/core';
import { HandleSimpleRequest } from '@ta/server';
import { TaBaseService } from '@ta/server';
import { UserProfile } from './dto/user-profile';
import * as i0 from "@angular/core";
export declare const TA_USER_SERVICE: InjectionToken<TaUserService<UserProfile>>;
export declare class TaUserService<T = UserProfile> extends TaBaseService {
    userProfile: HandleSimpleRequest<T>;
    constructor();
    fetchUserProfile$(props?: string): import("rxjs").Observable<T & {}>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaUserService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaUserService<any>>;
}
