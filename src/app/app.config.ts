import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideServer } from '@ta/server';
import { environment } from '../environments/environment';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideAnimationsAsync('noop'),
    provideServer({
      graphQlConfig: environment.GRAPHQL_SERVER_CONFIG,
      httpConfig: environment.HTTP_SERVER_CONFIG,
      strapiConfig: environment.STRAPI_CONFIG,
    }),
  ],
};
