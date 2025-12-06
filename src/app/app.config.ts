import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { provideServer } from '@ta/server';
import { provideTranslation, TranslationSourceType } from '@ta/translation';

import { environment } from '../environments/environment';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideAnimationsAsync('noop'),
    provideServer({
      graphQlConfig: environment.GRAPHQL_SERVER_CONFIG,
      // strapiConfig: environment.STRAPI_CONFIG,
    }),
    provideTranslation({
      default: 'fr',
      supportedLanguages: ['fr', 'en'],
      source: {
        type: TranslationSourceType.FILE,
        filePath: 'assets/i18n/',
      },
    }),
  ],
};
