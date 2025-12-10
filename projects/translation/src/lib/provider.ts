import { APP_INITIALIZER, LOCALE_ID, Provider } from "@angular/core";

import { TranslateLoader, provideTranslateService } from "@ngx-translate/core";

import { TaTranslationLoader } from "./services/translation.loader";
import {
  TRANSLATION_SOURCE_CONFIG,
  ITranslationSourceConfig,
  TranslationSourceType,
} from "./services/translation-source.config";
import {
  TRANSLATION_CONFIG,
  TaTranslationService,
} from "./services/translation.service";

export function HttpLoaderFactory() {
  return new TaTranslationLoader();
}
export function initTranslation(service: TaTranslationService) {
  const fn = () => service.init();
  return fn;
}

export interface IProvideTranslationConfig {
  default: string;
  supportedLanguages: string[];
  source?: ITranslationSourceConfig;
}

export const provideTranslation = (
  data: IProvideTranslationConfig
): Provider => [
  provideTranslateService({
    loader: {
      provide: TranslateLoader,
      useClass: TaTranslationLoader,
    },
  }),
  {
    provide: LOCALE_ID,
    deps: [TaTranslationService],
    useFactory: (TranslationService: TaTranslationService) =>
      TranslationService.getLanguage(),
  },
  {
    provide: APP_INITIALIZER,
    useFactory: initTranslation,
    deps: [TaTranslationService],
    multi: true,
  },
  {
    provide: TRANSLATION_CONFIG,
    useValue: {
      default: data.default,
      supportedLanguages: data.supportedLanguages,
    },
  },
  {
    provide: TRANSLATION_SOURCE_CONFIG,
    useValue: data.source ?? {
      type: TranslationSourceType.GRAPHQL,
    },
  },
];
