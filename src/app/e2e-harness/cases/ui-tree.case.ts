import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TaTreeChildrenComponent, TaTreeContainerComponent, TaTreeItemComponent } from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « tree » @ta/ui — arbre composé.
 * Route: /e2e-harness/ui-tree
 */
@Component({
  standalone: true,
  selector: "app-case-ui-tree",
  imports: [TaTreeChildrenComponent, TaTreeContainerComponent, TaTreeItemComponent, TaTestIdDirective],
  template: `
    <ta-tree-container taTestId="ta-tree-container">
      <ta-tree-item taTestId="ta-tree-item">
        Racine
        <ta-tree-children taTestId="ta-tree-children">
          <ta-tree-item>Enfant</ta-tree-item>
        </ta-tree-children>
      </ta-tree-item>
    </ta-tree-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiTreeCase {}
