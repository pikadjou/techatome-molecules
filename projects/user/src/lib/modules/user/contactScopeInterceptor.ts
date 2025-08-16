import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { GRAPHQL_SERVER_CONFIG, IGraphConfig } from '@camelot/server';
import { APPLICATION_CONFIG, IApplicationConfig } from '@camelot/utils';

import { CamUsersService } from './services/users.service';

@Injectable()
export class ContactScopeInterceptor implements HttpInterceptor {
  private _applicationConfig: IApplicationConfig = inject(APPLICATION_CONFIG);

  constructor(
    @Optional()
    @Inject(GRAPHQL_SERVER_CONFIG)
    private graphQlConfig: IGraphConfig,
    private _userService: CamUsersService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.endsWith('.json')) {
      return next.handle(req);
    }
    if (!this._applicationConfig.isCustomerApplication) {
      return next.handle(req);
    }

    if (
      !this.graphQlConfig?.config?.url ||
      !req.url.startsWith(this.graphQlConfig?.config?.url) ||
      req.url.endsWith('user')
    ) {
      return next.handle(req);
    }

    if (this.graphQlConfig?.config?.visitor && req.url.startsWith(this.graphQlConfig?.config?.visitor)) {
      return next.handle(req);
    }

    return this._setContactToHeader(req, next);
  }

  private _setContactToHeader(req: HttpRequest<any>, next: HttpHandler) {
    const contactIds = this._userService.currentUserContactIds.get()?.join(';') ?? '';
    const contactIdsRequest = req.clone({
      headers: req.headers.set('ContactIds', contactIds),
    });
    return next.handle(contactIdsRequest);
  }
}
