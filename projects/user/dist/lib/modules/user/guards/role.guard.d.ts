import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { TaPermissionsService } from "../services/permissions.service";
import * as i0 from "@angular/core";
export interface RoleRouteData {
    role: string;
}
export declare class RoleGuard {
    private router;
    readonly _permissionsService: TaPermissionsService;
    constructor(router: Router);
    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean;
    setRedirect(): void;
    private _isValidPermission;
    static ɵfac: i0.ɵɵFactoryDeclaration<RoleGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RoleGuard>;
}
