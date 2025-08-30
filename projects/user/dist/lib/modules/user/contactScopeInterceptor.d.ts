import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGraphConfig } from '@ta/server';
import { TaUsersService } from './services/users.service';
import * as i0 from "@angular/core";
export declare class ContactScopeInterceptor implements HttpInterceptor {
    private graphQlConfig;
    private _userService;
    private _applicationConfig;
    constructor(graphQlConfig: IGraphConfig, _userService: TaUsersService);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    private _setContactToHeader;
    static ɵfac: i0.ɵɵFactoryDeclaration<ContactScopeInterceptor, [{ optional: true; }, null]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ContactScopeInterceptor>;
}
