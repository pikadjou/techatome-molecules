import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TimeAgoComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

// `ta-time-ago` passe la date par `DatePipe` ('shortDate'/'shortTime') dès que
// l'écart dépasse trois jours. L'application ne fait `registerLocaleData` pour
// aucune locale (vérifié dans `src/app/app.config.ts` et `src/main.ts`), alors
// que `provideTranslation({ default: 'fr', ... })` fournit `LOCALE_ID` via
// `TaTranslationService.getLanguage()`, qui vaut `fr` par défaut : sans cet
// enregistrement, `DatePipe` lève `NG0701: Missing locale data for the locale
// "fr"` dès qu'une date lointaine est affichée, et la page ne rend rien.
registerLocaleData(localeFr);

const daysFromNow = (days: number) => new Date(Date.now() + days * 86_400_000).toISOString();
const minutesAgo = (minutes: number) => new Date(Date.now() - minutes * 60_000).toISOString();

@Component({
  standalone: true,
  selector: "app-ex-ta-time-ago-close",
  imports: [TimeAgoComponent],
  template: `
    <ta-time-ago [date]="this.threeMinutesAgo"></ta-time-ago>
    <ta-time-ago [date]="this.yesterday"></ta-time-ago>
    <ta-time-ago [date]="this.twoDaysAgo"></ta-time-ago>
    <ta-time-ago [date]="this.tomorrow"></ta-time-ago>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTimeAgoCloseExample {
  readonly threeMinutesAgo = minutesAgo(3);
  readonly yesterday = daysFromNow(-1);
  readonly twoDaysAgo = daysFromNow(-2);
  readonly tomorrow = daysFromNow(1);
}

@Component({
  standalone: true,
  selector: "app-ex-ta-time-ago-far",
  imports: [TimeAgoComponent],
  template: `
    <ta-time-ago [date]="this.twoYearsAgo"></ta-time-ago>
    <ta-time-ago [date]="this.inFourDays"></ta-time-ago>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTimeAgoFarExample {
  readonly twoYearsAgo = new Date(Date.now() - 730 * 86_400_000).toISOString();
  readonly inFourDays = daysFromNow(4);
}

export const DEMO: ComponentDemo = {
  id: "ta-time-ago",
  group: "Affichage",
  summary: "Distance relative entre une date et aujourd'hui, en jours calendaires (`date-fns`).",
  examples: [
    {
      title: "Repères proches",
      description:
        "`_getTranslationKey()` compare des jours calendaires, pas des heures : une date vieille de trois minutes tombe dans le même jour et affiche `ui.common.today` (« Aujourd'hui »), sans précision d'heure. Hier, avant-hier et demain utilisent respectivement `ui.common.yesterday`, `ui.common.above` et `ui.common.tomorrow`, toutes traduites dans `projects/ui/src/i18n/fr.json`.",
      component: TaTimeAgoCloseExample,
    },
    {
      title: "Repères lointains",
      description:
        "Au-delà de trois jours dans le passé, la clé devient `ui.common.to-date` (« le {{date}} »), qui passe `date` par `DatePipe` en `'shortDate'` — c'est ce chemin qui déclenche `NG0701` sans `registerLocaleData`. Au-delà de trois jours dans le futur, la clé attendue est `ui.common.ahead` : absente de `projects/ui/src/i18n/fr.json` (seule `common.above`, son pendant passé, y est définie) — le second exemple affiche donc la clé brute `ui.common.ahead` plutôt qu'un texte, vérifié à l'exécution.",
      component: TaTimeAgoFarExample,
    },
  ],
  notes:
    "`withHours` (non démontré ici) ne change le rendu que dans la branche `to-date`, en visant la clé `ui.common.to-date-with-hours` : elle aussi absente de `projects/ui/src/i18n/fr.json`, donc `withHours=true` sur une date lointaine afficherait également une clé brute plutôt qu'une heure.",
};
