import { InjectionToken } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { MappingApiType, TaBaseService } from "@ta/server";
import { UserProfile } from "./dto/user-profile";
import { TaPermissionsService } from "./permissions.service";
import * as i0 from "@angular/core";
export declare const TA_AUTH_TOKEN: InjectionToken<TaAuthService>;
export declare abstract class TaAuthService extends TaBaseService {
    readonly _permissionsService: TaPermissionsService;
    isAuthenticated$: Observable<boolean>;
    user$: BehaviorSubject<unknown>;
    abstract get userProfile$(): Observable<UserProfile | null>;
    abstract fetchUserProfile$(): Observable<UserProfile>;
    abstract load(): void;
    abstract login(): void;
    abstract signin(): void;
    abstract logout(): Promise<null>;
    constructor(apiRoutes?: MappingApiType);
    static ɵfac: i0.ɵɵFactoryDeclaration<TaAuthService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaAuthService>;
}
