import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ProgressCircleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-progress-circle-values",
  imports: [ProgressCircleComponent],
  template: `
    <div class="flex-row g-space-lg">
      <ta-progress-circle [progress]="25" upTitle="Téléchargements" downTitle="25 %"></ta-progress-circle>
      <ta-progress-circle [progress]="60" upTitle="Stockage" downTitle="60 %"></ta-progress-circle>
      <ta-progress-circle [progress]="90" upTitle="CPU" downTitle="90 %"></ta-progress-circle>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaProgressCircleValuesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-progress-circle",
  group: "Progression",
  summary: "Anneau de progression SVG, avec un pourcentage centré et un libellé optionnel au-dessus et en dessous.",
  examples: [
    {
      title: "Valeurs",
      description: "`stroke-dashoffset` de l'anneau est calculé à partir de `progress` (0-100) ; le texte centré n'apparaît que si `progress` est un nombre valide (`canDisplayText`).",
      component: TaProgressCircleValuesExample,
    },
  ],
};
