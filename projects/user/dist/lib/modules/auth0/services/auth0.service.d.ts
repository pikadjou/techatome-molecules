import { AuthService } from '@auth0/auth0-angular';
import { TaAuthService } from '../../user/services/auth.service';
import * as i0 from "@angular/core";
export declare class TaAuth0Service extends TaAuthService {
    get userProfile$(): import("rxjs").Observable<import("@ta/user").UserProfile | null>;
    auth: AuthService<any>;
    userService: import("../../user/services/user.service").TaUserService<import("@ta/user").UserProfile>;
    constructor();
    fetchUserProfile$(): import("rxjs").Observable<import("@ta/user").UserProfile>;
    load(): void;
    login(): void;
    logout(): Promise<null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaAuth0Service, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaAuth0Service>;
}
