import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ProgressBarComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-progress-bar-values",
  imports: [ProgressBarComponent],
  template: `
    <div class="flex-column g-space-md full-width">
      <ta-progress-bar [current]="30" [max]="100"></ta-progress-bar>
      <ta-progress-bar [current]="75" [max]="100"></ta-progress-bar>
      <ta-progress-bar [current]="12" [max]="12"></ta-progress-bar>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaProgressBarValuesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-progress-bar",
  group: "Progression",
  summary: "Barre de progression minimale : un élément HTML `<progress>` natif, sans libellé ni couleur configurable.",
  examples: [
    {
      title: "Avancement",
      layout: "stack",
      description: "`current`/`max` alimentent directement les attributs `value`/`max` du `<progress>` natif — aucune autre mise en forme.",
      component: TaProgressBarValuesExample,
    },
  ],
  notes:
    "C'est le composant sous-jacent de `ta-progress-bar-data`, qui lui ajoute un titre, une icône et une valeur textuelle. Utilisé seul, sans habillage, sa hauteur (2px) et sa couleur viennent de `progress-bar.component.scss` (piste `neutral-300`, remplissage `surface-brand-primary`) et ne sont pas personnalisables par entrée.",
};
