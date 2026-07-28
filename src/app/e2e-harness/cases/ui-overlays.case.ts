import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  LayoutModalComponent,
  ModalParameter,
  TaModalComponent,
  TaOverlayPanelComponent,
  TemplateModalContainer,
  ValidationModal,
} from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « overlays » @ta/ui — modales (rendu inline via `[open]`) et overlay-panel.
 * Route: /e2e-harness/ui-overlays
 */
@Component({
  standalone: true,
  selector: "app-case-ui-overlays",
  imports: [
    LayoutModalComponent,
    TaModalComponent,
    TaOverlayPanelComponent,
    TemplateModalContainer,
    ValidationModal,
    TaTestIdDirective,
  ],
  template: `
    <ta-modal taTestId="ta-modal" [open]="true" [title]="'Modale'">
      <div modal-content>Contenu de la modale</div>
    </ta-modal>

    <ta-validation-modal taTestId="ta-validation-modal" [open]="true" [params]="validationParams"></ta-validation-modal>

    <ta-template-modal-container
      taTestId="ta-template-modal-container"
      [open]="true"
      [template]="modalTpl"
    ></ta-template-modal-container>
    <ng-template #modalTpl>Contenu projeté</ng-template>

    <ta-layout-modal taTestId="ta-layout-modal" [title]="'Layout modal'">Contenu</ta-layout-modal>

    <ta-overlay-panel taTestId="ta-overlay-panel" [panelConfig]="{}">
      <ng-template #panelTrigger><button type="button">Ouvrir le panneau</button></ng-template>
      <ng-template #panelContent>Contenu du panneau</ng-template>
    </ta-overlay-panel>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiOverlaysCase {
  readonly validationParams: ModalParameter = { title: "Confirmer", subtitle: "Êtes-vous sûr ?" };
}
