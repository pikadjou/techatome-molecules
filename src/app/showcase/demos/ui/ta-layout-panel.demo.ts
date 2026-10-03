import { ChangeDetectionStrategy, Component } from "@angular/core";

import { LayoutContentComponent, LayoutPanelComponent, LayoutWithPanelComponent, TextComponent, TitleComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-layout-panel-in-drawer",
  imports: [LayoutWithPanelComponent, LayoutContentComponent, LayoutPanelComponent, TitleComponent, TextComponent],
  template: `
    <div style="height: 280px;">
      <ta-layout-with-panel [open]="true">
        <ta-layout-content>
          <div class="p-space-md">
            <ta-text size="sm">Zone principale (hors sujet ici — voir la démo de ta-layout-content).</ta-text>
          </div>
        </ta-layout-content>
        <ta-layout-panel>
          <div class="p-space-md flex-column g-space-sm">
            <ta-title [level]="4">Filtres</ta-title>
            <ta-text size="sm">ta-layout-panel n'ajoute aucun style propre (fichier SCSS vide, vérifié) : le fond, le padding et la largeur visibles ici viennent du tiroir Material (mat-drawer) de ta-layout-with-panel qui le contient.</ta-text>
          </div>
        </ta-layout-panel>
      </ta-layout-with-panel>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaLayoutPanelInDrawerExample {}

export const DEMO: ComponentDemo = {
  id: "ta-layout-panel",
  group: "Mise en page",
  summary: "Enveloppe de contenu sans mise en forme propre — `<ng-content></ng-content>` seul, SCSS vide (vérifié dans layout-panel.component.ts/.scss) — destinée au tiroir de `ta-layout-with-panel`.",
  examples: [
    {
      title: "Contenu du tiroir de ta-layout-with-panel",
      layout: "stack",
      description:
        "`ta-layout-with-panel` est le seul composant qui sélectionne `ta-layout-panel` par sélecteur nommé (`ng-content select=\"ta-layout-panel\"`, projeté dans son `mat-drawer`) : c'est là que ce composant prend tout son sens visuel. `[open]=\"true\"` est fixé ici pour garder le tiroir en permanence ouvert et montrer directement le contenu — voir la démo de `ta-layout-with-panel` pour la bascule ouverte/fermée. Vérifié à l'exécution : `.drawer` porte `width: 100%` (layout-with-panel.component.scss) et son fond est transparent, donc le contenu de `ta-layout-panel` se superpose visuellement à celui de `ta-layout-content` plutôt que de s'afficher à côté.",
      component: TaLayoutPanelInDrawerExample,
    },
  ],
};
