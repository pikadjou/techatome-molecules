import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TaTreeChildrenComponent, TaTreeContainerComponent, TaTreeItemComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-tree-item-nested",
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
export class TaTreeItemNestedExample {}

export const DEMO: ComponentDemo = {
  id: "ta-tree-item",
  group: "Arbre",
  summary: "Nœud d'un arbre : un `ta-tree-item` peut contenir un `ta-tree-children`, qui contient à son tour d'autres `ta-tree-item` — récursif par composition.",
  examples: [
    {
      title: "Nœuds racines et imbriqués",
      layout: "stack",
      description: "\"Bastogne\" et \"Wallonie picarde\" sont des feuilles ; \"Ardenne\" et \"Saint-Hubert\" imbriquent un `ta-tree-children` à leur suite.",
      component: TaTreeItemNestedExample,
    },
  ],
  notes: "Ni `ta-tree-item` ni les composants qu'il embarque ne portent d'input, d'output ou de logique de pliage/dépliage : la hiérarchie affichée est entièrement celle du markup projeté.",
};
