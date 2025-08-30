import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';

import { Observable } from 'rxjs';

import { GRAPHQL_SERVER_CONFIG, IGraphConfig } from '../graphql/models/graphConfig';
import { TenantConfig } from './interface';
import { TENANT_CONFIG_TOKEN } from './token';

@Injectable()
export class TenantInterceptor implements HttpInterceptor {
  constructor(
    @Optional() @Inject(TENANT_CONFIG_TOKEN) private tenantConfig: TenantConfig,
    @Optional()
    @Inject(GRAPHQL_SERVER_CONFIG)
    private graphQlConfig: IGraphConfig
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.tenantConfig?.tenantId && this.graphQlConfig?.url && req.url.startsWith(this.graphQlConfig?.url)) {
      const tenantRequest = req.clone({
        headers: req.headers.set('TenantId', this.tenantConfig.tenantId.toString()),
      });
      return next.handle(tenantRequest);
    }

    return next.handle(req);
  }
}
