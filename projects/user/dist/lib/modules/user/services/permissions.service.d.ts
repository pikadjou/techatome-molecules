import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export type Level = 'authenticated' | 'authorize' | 'reader' | 'contributor' | 'administrator' | 'read';
export type PermissionFeature = 'chift' | 'ticketing';
export type Domain = 'automation' | 'invoice' | 'contact' | 'task' | 'project' | 'quotation' | 'maintenance' | 'conversation' | 'user' | 'document' | 'organization';
export declare class CamPermissionsService {
    private _updated$;
    private _isFill;
    features: (string | PermissionFeature)[];
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
    canAccess$(feature: string | PermissionFeature, level: Level | string): Observable<boolean>;
    private _canYouUpdate;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamPermissionsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CamPermissionsService>;
}
