import { registerLocaleData } from "@angular/common";
import localeFr from "@angular/common/locales/fr";
import { ChangeDetectionStrategy, Component } from "@angular/core";

import { HourDateLineComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

// `ta-hour-date-line` passe `startDate`/`endDate` par `DatePipe` en `'shortDate'`
// et `'HH:mm'`. L'application ne fait `registerLocaleData` pour aucune locale
// (vérifié dans `src/app/app.config.ts` et `src/main.ts`), alors que
// `provideTranslation({ default: 'fr', ... })` fournit `LOCALE_ID` via
// `TaTranslationService.getLanguage()`, qui vaut `fr` par défaut : sans cet
// enregistrement, `DatePipe` lève `NG0701: Missing locale data for the locale
// "fr"` dès qu'une date est fournie, et la page ne rend rien.
registerLocaleData(localeFr);

@Component({
  standalone: true,
  selector: "app-ex-ta-hour-date-line-full",
  imports: [HourDateLineComponent],
  template: `<ta-hour-date-line [startDate]="this.start" [endDate]="this.end"></ta-hour-date-line>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaHourDateLineFullExample {
  readonly start = new Date("2026-09-08T09:00:00");
  readonly end = new Date("2026-09-08T17:30:00");
}

@Component({
  standalone: true,
  selector: "app-ex-ta-hour-date-line-no-end",
  imports: [HourDateLineComponent],
  template: `<ta-hour-date-line [startDate]="this.start" [endDate]="null"></ta-hour-date-line>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaHourDateLineNoEndExample {
  readonly start = new Date("2026-09-08T09:00:00");
}

export const DEMO: ComponentDemo = {
  id: "ta-hour-date-line",
  group: "Affichage",
  summary: "Ligne date + plage horaire, formatée via `DatePipe`.",
  examples: [
    { title: "Date et plage complètes", component: TaHourDateLineFullExample },
    {
      title: "Sans heure de fin",
      description:
        "Le tiret séparateur (`\" - \"`) est un littéral du template, pas conditionné par `endDate` : `endDate=null` masque l'heure de fin mais laisse le tiret final visible, sans rien après. Vérifié dans `hour-date-line.component.html`.",
      component: TaHourDateLineNoEndExample,
    },
  ],
};
