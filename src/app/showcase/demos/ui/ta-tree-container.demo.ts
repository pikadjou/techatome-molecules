import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TaTreeChildrenComponent, TaTreeContainerComponent, TaTreeItemComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-tree-container-regions",
  imports: [TaTreeChildrenComponent, TaTreeContainerComponent, TaTreeItemComponent],
  template: `
    <ta-tree-container>
      <ta-tree-item>
        Ardenne
        <ta-tree-children>
          <ta-tree-item>Bastogne</ta-tree-item>
          <ta-tree-item>
            Saint-Hubert
            <ta-tree-children>
              <ta-tree-item>Centre-ville</ta-tree-item>
            </ta-tree-children>
          </ta-tree-item>
        </ta-tree-children>
      </ta-tree-item>
      <ta-tree-item>Wallonie picarde</ta-tree-item>
    </ta-tree-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTreeContainerRegionsExample {}

export const DEMO: ComponentDemo = {
  id: "ta-tree-container",
  group: "Arbre",
  summary: "Conteneur racine d'un arbre : enveloppe une hiérarchie de `ta-tree-item`, sans logique propre.",
  examples: [{ title: "Hiérarchie de régions", layout: "stack", component: TaTreeContainerRegionsExample }],
};
