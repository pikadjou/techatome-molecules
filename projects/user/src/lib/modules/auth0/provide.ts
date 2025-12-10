import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { Provider } from "@angular/core";

import {
  AuthConfig,
  AuthHttpInterceptor,
  provideAuth0 as provideBaseAuth0,
} from "@auth0/auth0-angular";

import { TA_AUTH_TOKEN } from "../user/services/auth.service";
import { TaAuth0Service } from "./services/auth0.service";

export interface TaAuth0Environment extends AuthConfig {}

export const provideAuth0 = (data: {
  config: TaAuth0Environment;
}): Provider => [
  provideBaseAuth0(data.config),
  { provide: TA_AUTH_TOKEN, useClass: TaAuth0Service },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true,
  },
];
