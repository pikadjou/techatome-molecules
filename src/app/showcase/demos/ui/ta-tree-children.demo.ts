import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TaTreeChildrenComponent, TaTreeContainerComponent, TaTreeItemComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-tree-children-connector",
  imports: [TaTreeChildrenComponent, TaTreeContainerComponent, TaTreeItemComponent],
  template: `
    <ta-tree-container>
      <ta-tree-item>
        Ardenne
        <ta-tree-children>
          <ta-tree-item>Bastogne</ta-tree-item>
          <ta-tree-item>Saint-Hubert</ta-tree-item>
        </ta-tree-children>
      </ta-tree-item>
    </ta-tree-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaTreeChildrenConnectorExample {}

export const DEMO: ComponentDemo = {
  id: "ta-tree-children",
  group: "Arbre",
  summary: "Regroupe les `ta-tree-item` enfants d'un nœud, décalés et reliés à leur parent par un connecteur vertical.",
  examples: [{ title: "Enfants d'un nœud", layout: "stack", component: TaTreeChildrenConnectorExample }],
  notes:
    "Le trait qui relie les enfants à leur parent est un pseudo-élément CSS (`::before`) porté par `ta-tree-children` lui-même (`tree-children.component.scss`), pas une logique applicative : ce composant n'a ni input ni méthode, les enfants projetés sont toujours rendus.",
};
