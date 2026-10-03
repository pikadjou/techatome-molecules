import { ChangeDetectionStrategy, Component } from "@angular/core";

import { CriticityComponent, CriticityStatus } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-criticity-values",
  imports: [CriticityComponent],
  template: `
    <ta-criticity [criticity]="this.CriticityStatus.Unknown"></ta-criticity>
    <ta-criticity [criticity]="this.CriticityStatus.P1"></ta-criticity>
    <ta-criticity [criticity]="this.CriticityStatus.P2"></ta-criticity>
    <ta-criticity [criticity]="this.CriticityStatus.P3"></ta-criticity>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaCriticityValuesExample {
  readonly CriticityStatus = CriticityStatus;
}

export const DEMO: ComponentDemo = {
  id: "ta-criticity",
  group: "Affichage",
  summary: "Badge de criticité (`ta-badge`), coloré selon le niveau `CriticityStatus`.",
  examples: [
    {
      title: "Niveaux",
      description:
        "`type()` mappe `P1` sur `danger`, `P2` sur `warning`, `P3` sur `success`, et `Unknown` (par défaut) sur `primary`. Le libellé vient de `criticityLabel()`, qui traduit `ui.criticity.<n>` — aucun fichier i18n de `@ta/ui` ne définit ces clés (recherche globale sur `criticity` dans `projects/ui/src/i18n/`) : le badge affiche donc la clé brute, par exemple `ui.criticity.1`, plutôt qu'un libellé, vérifié à l'exécution.",
      component: TaCriticityValuesExample,
    },
  ],
};
