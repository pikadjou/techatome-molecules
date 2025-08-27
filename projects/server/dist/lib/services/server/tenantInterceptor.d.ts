import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGraphConfig } from '../graphql/models/graphConfig';
import { TenantConfig } from './interface';
import * as i0 from "@angular/core";
export declare class TenantInterceptor implements HttpInterceptor {
    private tenantConfig;
    private graphQlConfig;
    constructor(tenantConfig: TenantConfig, graphQlConfig: IGraphConfig);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantInterceptor, [{ optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TenantInterceptor>;
}
