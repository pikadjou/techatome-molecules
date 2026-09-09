import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ProgressBarDataComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-progress-bar-data-metrics",
  imports: [ProgressBarDataComponent],
  template: `
    <div class="flex-column g-space-md">
      <ta-progress-bar-data title="Stockage utilisé" titleIcon="storage" [current]="30" [max]="100"></ta-progress-bar-data>
      <ta-progress-bar-data title="Mémoire" titleIcon="memory" [current]="85" [max]="100" [rightText]="{ text: 'Proche de la limite' }"></ta-progress-bar-data>
      <ta-progress-bar-data title="Tâches restantes"></ta-progress-bar-data>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaProgressBarDataMetricsExample {}

export const DEMO: ComponentDemo = {
  id: "ta-progress-bar-data",
  group: "Progression",
  summary: "`ta-progress-bar` habillée d'un titre (avec icône Material optionnelle) et d'une valeur textuelle à droite.",
  examples: [
    {
      title: "Indicateurs",
      layout: "stack",
      description: "`progressValue` calcule le texte affiché : `current/max` si les deux sont fournis, sinon celui des deux qui est défini, sinon une chaîne vide (voir le troisième exemple, sans aucun des deux).",
      component: TaProgressBarDataMetricsExample,
    },
  ],
  notes:
    "`description` est marquée `@deprecated` dans le code (`progress-bar-data.component.ts`) : elle fonctionne encore (affichée sous le titre) mais n'est pas démontrée ici pour ne pas encourager son usage. `rightText.colorClass` est appliqué via `[ngClass]` tel quel : `@ta/styles` ne fournit aucune classe utilitaire de couleur de texte prête à l'emploi (vérifié) — c'est au consommateur de définir la classe qu'il y passe.",
};
