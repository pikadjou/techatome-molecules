import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TaPermissionsService } from '../services/permissions.service';
import * as i0 from "@angular/core";
export declare class AuthGuard {
    private router;
    readonly _permissionsService: TaPermissionsService;
    constructor(router: Router);
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean;
    setRedirect(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AuthGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AuthGuard>;
}
