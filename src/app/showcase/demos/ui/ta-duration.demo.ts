import { ChangeDetectionStrategy, Component } from "@angular/core";

import { DurationComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-duration-short",
  imports: [DurationComponent],
  template: `<ta-duration [startDate]="'2026-09-08T09:00:00'" [endDate]="'2026-09-08T09:40:00'"></ta-duration>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDurationShortExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-duration-long",
  imports: [DurationComponent],
  template: `<ta-duration [startDate]="'2023-04-15'" [endDate]="'2026-09-08'"></ta-duration>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaDurationLongExample {}

export const DEMO: ComponentDemo = {
  id: "ta-duration",
  group: "Affichage",
  summary: "Durée entre deux dates, exprimée en années/mois/jours/heures via `date-fns`.",
  examples: [
    {
      title: "Moins d'une heure",
      description: "Sous une heure, seule la traduction `ui.duration.less-than-one` (« Moins d'un ») existe, et s'affiche correctement.",
      component: TaDurationShortExample,
    },
    {
      title: "Plusieurs unités",
      description:
        "Au-delà d'une heure, chaque unité non nulle passe par `pluralTranslate` (@ta/utils), qui ajoute `.one` ou `.plural` à la clé (ex. `ui.duration.years.plural`). Aucune de ces clés — `duration.years`, `.months`, `.days`, `.hours`, avec leurs suffixes — n'existe dans `projects/ui/src/i18n/` : seule `duration.less-than-one` y est définie. Le rendu affiche donc les clés brutes concaténées plutôt qu'un texte, vérifié en confrontant le composant à `projects/ui/src/i18n/fr.json`.",
      component: TaDurationLongExample,
    },
  ],
};
