import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ExpandableTextComponent, TaExpansionPanelComponent, ToggleCardComponent } from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « interactive » @ta/ui.
 * Route: /e2e-harness/ui-interactive
 */
@Component({
  standalone: true,
  selector: "app-case-ui-interactive",
  imports: [ExpandableTextComponent, TaExpansionPanelComponent, ToggleCardComponent, TaTestIdDirective],
  template: `
    <ta-expansion-panel taTestId="ta-expansion-panel">
      Contenu du panneau extensible qui peut être ouvert et fermé par l'utilisateur.
    </ta-expansion-panel>
    <ta-expandable-text taTestId="ta-expandable-text">
      Un texte assez long pour être tronqué puis déplié via le composant expandable-text.
    </ta-expandable-text>
    <ta-toggle-card taTestId="ta-toggle-card">Carte à bascule</ta-toggle-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInteractiveCase {}
