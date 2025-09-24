import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export type Level = 'authenticated' | 'unauthenticated' | 'authorize' | 'administrator';
export type GuardInfo = {
    guards?: string[];
    roles?: string[];
    features?: string[];
};
export declare class TaPermissionsService {
    private _updated$;
    private _isFill;
    features: string[];
    guards: string[];
    roles: string[];
    isAuthenticated: boolean;
    updated$: Observable<number>;
    get received(): boolean;
    constructor();
    set(info: GuardInfo | null, isAuthenticated: boolean): void;
    setGuard(info: GuardInfo | null): void;
    setSilentAuthenticated(isAuthenticated: boolean): void;
    setAuthenticated(isAuthenticated: boolean): void;
    hasRole$(role: string): Observable<boolean>;
    hasRole(role: string): boolean;
    canDirectAccess(feature: string, level: Level): boolean;
    canAccess$(feature: string, level: Level): Observable<boolean>;
    private _canYouUpdate;
    static ɵfac: i0.ɵɵFactoryDeclaration<TaPermissionsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TaPermissionsService>;
}
