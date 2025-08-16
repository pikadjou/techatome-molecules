import { APP_INITIALIZER, LOCALE_ID, Provider } from '@angular/core';

import { TranslateLoader, provideTranslateService } from '@ngx-translate/core';

import { CamTranslationLoader } from './services/translation.loader';
import { CamTranslationService, TRANSLATION_CONFIG } from './services/translation.service';

export function HttpLoaderFactory() {
  return new CamTranslationLoader();
}
export function initTranslation(service: CamTranslationService) {
  const fn = () => service.init();
  return fn;
}

export const provideTranslation = (data: { default: string; supportedLanguages: string[] }): Provider => [
  provideTranslateService({
    loader: {
      provide: TranslateLoader,
      useClass: CamTranslationLoader,
    },
  }),
  {
    provide: LOCALE_ID,
    deps: [CamTranslationService],
    useFactory: (TranslationService: CamTranslationService) => TranslationService.getLanguage(),
  },
  {
    provide: APP_INITIALIZER,
    useFactory: initTranslation,
    deps: [CamTranslationService],
    multi: true,
  },
  {
    provide: TRANSLATION_CONFIG,
    useValue: {
      default: data.default,
      supportedLanguages: data.supportedLanguages,
    },
  },
];
