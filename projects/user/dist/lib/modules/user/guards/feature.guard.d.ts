import { ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Level, TaPermissionsService } from "../services/permissions.service";
import * as i0 from "@angular/core";
export interface FeatureRouteData {
    feature: string;
    level: Level;
}
export declare class FeatureGuard {
    readonly _permissionsService: TaPermissionsService;
    private _router;
    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean;
    setRedirect(): void;
    private _isValidPermission;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FeatureGuard>;
}
