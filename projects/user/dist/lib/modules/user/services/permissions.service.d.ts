import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export type Level = 'authenticated' | 'unauthenticated' | 'authorize' | 'administrator';
export type PermissionFeature = 'tenant' | 'onwer' | 'premium';
export type Domain = 'tenant' | 'onwer';
export declare class TaPermissionsService {
    private _updated$;
    private _isFill;
    features: (PermissionFeature | string)[];
    guards: {
        [index: string]: Level;
    };
    roles: string[];
    isAuthenticated: boolean;
    updated$: Observable<number>;
    get received(): boolean;
    constructor();
    set(info: {
        permissions: string[];
        roles: string[];
        features: PermissionFeature[];
    }, isAuthenticated: boolean): void;
    setSilentAuthenticated(isAuthenticated: boolean): void;
    setAuthenticated(isAuthenticated: boolean): void;
    hasRole(role: string): boolean;
    canDirectAccess(feature: PermissionFeature | Domain | string, level: Level | string): boolean;
    canAccess$(feature: PermissionFeature | string, level: Level | string): Observable<boolean>;
    private _canYouUpdate;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaPermissionsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaPermissionsService>;
}
