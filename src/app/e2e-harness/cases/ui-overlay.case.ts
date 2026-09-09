import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TaDefaultPanelComponent } from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « overlay » @ta/ui — panneau par défaut (contenu projeté).
 * Route: /e2e-harness/ui-overlay
 */
@Component({
  standalone: true,
  selector: "app-case-ui-overlay",
  imports: [TaDefaultPanelComponent, TaTestIdDirective],
  template: ` <ta-default-panel taTestId="ta-default-panel">Contenu du panneau</ta-default-panel> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiOverlayCase {}
