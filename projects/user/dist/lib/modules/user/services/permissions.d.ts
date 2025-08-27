import { Observable } from 'rxjs';
/** @deprecated */
export declare class PermissionsCore {
    private _updated$;
    private _isFill;
    guards: {
        [index: string]: string[];
    };
    roles: string[];
    isAuthenticated: boolean;
    updated$: Observable<number>;
    get received(): boolean;
    constructor();
    set(info: {
        permissions: string[];
        roles: string[];
    }, isAuthenticated: boolean): void;
    setSilentAuthenticated(isAuthenticated: boolean): void;
    setAuthenticated(isAuthenticated: boolean): void;
    hasRole(role: string): boolean;
    canDirectAccess(feature: string, level: string): boolean;
    canAccess(feature: string, level: string | 'authenticated' | 'authorize'): Observable<boolean>;
    private _canYouUpdate;
}
/** @deprecated */
export declare const Permissions: PermissionsCore;
