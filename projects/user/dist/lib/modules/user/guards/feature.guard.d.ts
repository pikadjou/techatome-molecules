import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Domain, Level, PermissionFeature, TaPermissionsService } from '../services/permissions.service';
import * as i0 from "@angular/core";
export interface FeatureRouteData {
    feature: PermissionFeature | Domain;
    level: Level;
}
export declare class FeatureGuard {
    private router;
    readonly _permissionsService: TaPermissionsService;
    constructor(router: Router);
    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean;
    setRedirect(): void;
    private _isValidPermission;
    static ɵfac: i0.ɵɵFactoryDeclaration<FeatureGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FeatureGuard>;
}
