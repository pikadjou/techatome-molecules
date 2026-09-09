import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent, ModalParameter, ValidationModal } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-validation-modal-external",
  imports: [ButtonComponent, ValidationModal],
  template: `
    <ta-button type="danger" icon="delete" (action)="this.isOpen = true">Supprimer le compte</ta-button>

    <ta-validation-modal
      [open]="this.isOpen"
      [params]="this.params"
      (validated)="this.confirmations = this.confirmations + 1"
      (closeEvent)="this.isOpen = false"
    ></ta-validation-modal>
    <p>Suppressions confirmées : {{ this.confirmations }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaValidationModalExternalExample {
  readonly params: ModalParameter = { title: "Supprimer le compte ?", subtitle: "Toutes les données associées seront perdues." };

  isOpen = false;
  confirmations = 0;
}

export const DEMO: ComponentDemo = {
  id: "ta-validation-modal",
  group: "Overlays",
  summary: "Modale de confirmation Oui/Non, entièrement pilotée depuis l'extérieur par `[open]` et `[params]`.",
  examples: [
    {
      title: "Confirmation externe",
      description:
        "`onYesClick()` émet `validated` puis `closeEvent` ; `onNoClick()` émet seulement `closeEvent`. Sans `params`, `title`/`subtitle` retombent sur les clés `validation.modal.title`/`.content`.",
      component: TaValidationModalExternalExample,
    },
  ],
  notes:
    "À la différence de `ta-container-validation`, qui enrobe un contenu projeté et gère lui-même son état d'ouverture au clic, `ta-validation-modal` n'a ni contenu projeté ni état interne : c'est au consommateur de porter le booléen `open` (ici `isOpen`) et de le remettre à faux sur `closeEvent`. La modale affichée est un `ta-modal` de taille `small` : position `fixed`, centrée, fond assombri qui recouvre toute la page — pas seulement la carte de cet exemple. Comme pour `ta-container-validation` (mêmes clés `ui.container.validation.modal.cta.cancel`/`.ok`), les boutons de cette vitrine affichent « Cancel »/« OK » plutôt que « Annuler »/« OK » en français — vérifié à l'exécution, comportement de la bibliothèque non corrigé ici.",
};
