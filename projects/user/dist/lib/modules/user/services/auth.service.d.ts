import { InjectionToken } from '@angular/core';
import { CamBaseService, MappingApiType } from '@ta/server';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserProfile } from './dto/user-profile';
import { CamPermissionsService } from './permissions.service';
import * as i0 from "@angular/core";
export declare const CAM_AUTH_TOKEN: InjectionToken<CamAuthService<any>>;
export declare abstract class CamAuthService<T> extends CamBaseService {
    readonly _permissionsService: CamPermissionsService;
    isAuthenticated$: Observable<boolean>;
    user$: BehaviorSubject<T | null>;
    abstract get userProfile$(): BehaviorSubject<UserProfile | null>;
    abstract get trigram(): string | null | undefined;
    abstract get firstLetter(): string | null;
    abstract fetchUserProfile(): Observable<UserProfile>;
    abstract load(): void;
    abstract login(): void;
    abstract logout(): Promise<null>;
    private _applicationConfig;
    private _userService;
    constructor(apiRoutes?: MappingApiType);
    fetchUserContactIds(): Observable<string[]>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamAuthService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamAuthService<any>>;
}
