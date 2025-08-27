import { CamBaseService } from '@ta/server';
import { BehaviorSubject } from 'rxjs';
import { UserProfile } from './dto/user-profile';
import * as i0 from "@angular/core";
export declare class CamUserService extends CamBaseService {
    userProfile$: BehaviorSubject<UserProfile | null>;
    constructor();
    fetchUserProfile(): import("rxjs").Observable<UserProfile>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamUserService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamUserService>;
}
