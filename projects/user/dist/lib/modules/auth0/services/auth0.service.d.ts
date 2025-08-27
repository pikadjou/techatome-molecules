import { AuthService, User } from '@auth0/auth0-angular';
import { CamConfigurationService } from '@ta/services';
import { CamAuthService } from '../../user/services/auth.service';
import { CamUserService } from '../../user/services/user.service';
import * as i0 from "@angular/core";
export declare class CamAuth0Service extends CamAuthService<User> {
    auth: AuthService;
    userService: CamUserService;
    configurationService: CamConfigurationService;
    get trigram(): string;
    get firstLetter(): string;
    get userProfile$(): import("rxjs").BehaviorSubject<import("@ta/user").UserProfile | null>;
    constructor(auth: AuthService, userService: CamUserService, configurationService: CamConfigurationService);
    fetchUserProfile(): import("rxjs").Observable<import("@ta/user").UserProfile>;
    load(): void;
    login(): void;
    logout(): Promise<null>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamAuth0Service, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamAuth0Service>;
}
