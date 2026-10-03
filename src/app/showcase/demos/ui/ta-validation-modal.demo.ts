import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ButtonComponent, ModalParameter, ValidationModal } from '@ta/ui';
import { ModalState } from '@ta/utils';

import { ComponentDemo } from '../../demo.types';

@Component({
  standalone: true,
  selector: 'app-ex-ta-validation-modal-external',
  imports: [ButtonComponent, ValidationModal],
  template: `
    <ta-button type="danger" icon="delete" (action)="this.deleteModal.asked(this.params)"
      >Supprimer le compte</ta-button
    >

    <ta-validation-modal
      [modalState]="this.deleteModal"
      (closeEvent)="this.confirmations = this.confirmations + 1"
    ></ta-validation-modal>
    <p>Suppressions confirmées : {{ this.confirmations }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaValidationModalExternalExample {
  readonly params: ModalParameter = {
    title: 'Supprimer le compte ?',
    subtitle: 'Toutes les données associées seront perdues.',
  };

  deleteModal = new ModalState<ModalParameter | undefined, boolean>();
  confirmations = 0;
}

export const DEMO: ComponentDemo = {
  id: 'ta-validation-modal',
  group: 'Overlays',
  summary: 'Modale de confirmation Oui/Non pilotée par un `ModalState<ModalParameter | undefined, boolean>`.',
  examples: [
    {
      title: 'Confirmation externe',
      description:
        "Le parent crée un `ModalState` et l'ouvre par `asked(params)`. Oui appelle `confirm(true)` : `output()` passe à `true` et `closeEvent` émet ; Non appelle `dismiss()` : la modale se ferme sans résultat ni événement. Sans `params`, `title`/`subtitle` retombent sur les clés `validation.modal.title`/`.content`.",
      component: TaValidationModalExternalExample,
    },
  ],
  notes:
    "À la différence de `ta-container-validation`, qui enrobe un contenu projeté et gère lui-même son état d'ouverture au clic, `ta-validation-modal` n'a ni contenu projeté ni état interne : c'est le `ModalState` du parent qui porte l'ouverture, l'entrée et le résultat (pattern `TaBaseModal<In, Out>`). La modale affichée est un `ta-modal` de taille `small` : position `fixed`, centrée, fond assombri qui recouvre toute la page — pas seulement la carte de cet exemple. Comme pour `ta-container-validation` (mêmes clés `ui.container.validation.modal.cta.cancel`/`.ok`), les boutons de cette vitrine affichent « Cancel »/« OK » plutôt que « Annuler »/« OK » en français — vérifié à l'exécution, comportement de la bibliothèque non corrigé ici.",
};
