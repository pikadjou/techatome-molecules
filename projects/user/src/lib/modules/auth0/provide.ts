import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Provider } from '@angular/core';

import { AuthConfig, AuthHttpInterceptor, provideAuth0 as provideBaseAuth0 } from '@auth0/auth0-angular';

import { CAM_AUTH_TOKEN } from '../user/services/auth.service';
import { CamAuth0Service } from './services/auth0.service';

export interface CamAuth0Environment extends AuthConfig {}

export const provideAuth0 = (data: { config: CamAuth0Environment }): Provider => [
  provideBaseAuth0(data.config),
  { provide: CAM_AUTH_TOKEN, useClass: CamAuth0Service },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true,
  },
];
