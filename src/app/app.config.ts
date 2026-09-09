import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideNativeDateAdapter } from "@angular/material/core";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideRouter } from "@angular/router";

import { LAZY_SERVICE_TOKEN, TaNotificationService } from "@ta/notification";
import { provideServer } from "@ta/server";
import { provideHarnessCases } from "@ta/testing";
import { provideTranslation, TranslationSourceType } from "@ta/translation";

import { environment } from "../environments/environment";
import { HARNESS_CASES } from "./e2e-harness/harness-cases";
import { harnessCasesFromRegistry } from "./e2e-harness/registry-harness-cases";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    provideAnimationsAsync("noop"),
    // `InputDatePicker` s'appuie sur MatDatepicker, qui exige qu'un DateAdapter
    // soit fourni par l'application hôte : @ta/form-input n'en embarque aucun.
    provideNativeDateAdapter(),
    provideServer({
      graphQlConfig: environment.GRAPHQL_SERVER_CONFIG,
      // strapiConfig: environment.STRAPI_CONFIG,
    }),
    provideTranslation({
      default: "fr",
      supportedLanguages: ["fr", "en"],
      source: {
        type: TranslationSourceType.FILE,
        filePath: "assets/i18n/",
      },
    }),
    { provide: LAZY_SERVICE_TOKEN, useExisting: TaNotificationService },
    // Les deux catalogues coexistent le temps de la migration : les 166 specs
    // Playwright existantes visent des cas groupés (`/e2e-harness/core`), le
    // registre produit un cas par exemple (`ta-button--types`). Les identifiants
    // ne peuvent pas entrer en collision.
    provideHarnessCases([...HARNESS_CASES, ...harnessCasesFromRegistry()]),
  ],
};
