import { ChangeDetectionStrategy, Component } from "@angular/core";

import { ButtonComponent, ContainerValidationComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-container-validation-confirm",
  imports: [ButtonComponent, ContainerValidationComponent],
  template: `
    <ta-container-validation
      title="Supprimer le document ?"
      subtitle="Cette action est définitive et ne peut pas être annulée."
      (validated)="this.confirmations = this.confirmations + 1"
    >
      <ta-button type="danger" icon="delete" [stopPropagationActivation]="false">Supprimer</ta-button>
    </ta-container-validation>
    <p>Suppressions confirmées : {{ this.confirmations }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaContainerValidationConfirmExample {
  // Le contenu projeté est lui-même le déclencheur : `openModal()` est appelé
  // par le `(click)` posé sur le conteneur, pas par un bouton dédié du composant.
  // `ta-button` porte sa propre directive `appStopPropagation`, active par
  // défaut (`stopPropagationActivation` vaut `true`) : sans la désactiver ici,
  // son `stopPropagation()` empêche le clic d'atteindre le conteneur englobant
  // et la modale ne s'ouvre jamais — vérifié à l'exécution.
  confirmations = 0;
}

@Component({
  standalone: true,
  selector: "app-ex-ta-container-validation-disabled",
  imports: [ButtonComponent, ContainerValidationComponent],
  template: `
    <ta-container-validation [disabled]="true" (validated)="this.confirmations = this.confirmations + 1">
      <ta-button type="danger" icon="delete" [stopPropagationActivation]="false">Supprimer (désactivé)</ta-button>
    </ta-container-validation>
    <p>Suppressions confirmées : {{ this.confirmations }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaContainerValidationDisabledExample {
  // `openModal()` retourne immédiatement quand `disabled()` est vrai : la modale
  // ne s'ouvre jamais. Le composant ne restyle pas son contenu projeté pour autant
  // — le bouton `danger` ci-dessus reste visuellement cliquable, seul le clic est ignoré.
  confirmations = 0;
}

export const DEMO: ComponentDemo = {
  id: "ta-container-validation",
  group: "Overlays",
  summary: "Enrobe un contenu projeté (typiquement un bouton) d'une modale de confirmation ouverte au clic.",
  examples: [
    {
      title: "Confirmation avant action",
      description:
        "Cliquer le bouton projeté ouvre `ta-modal` (taille `small`) avec `title`/`subtitle` ; le bouton `primary` (« OK ») émet `validated` puis referme la modale, le bouton `danger` (« Annuler »/« Cancel », voir notes) la referme sans émettre.",
      component: TaContainerValidationConfirmExample,
    },
    {
      title: "Désactivé",
      description: "`disabled` bloque l'ouverture de la modale (`openModal()` retourne immédiatement) sans changer l'apparence du contenu projeté.",
      component: TaContainerValidationDisabledExample,
    },
  ],
  notes:
    "La modale ouverte est un `ta-modal` classique : position `fixed`, centrée, avec un fond assombri qui recouvre toute la page (vérifié dans `modal.component.scss`), pas seulement la carte de cet exemple. Piège vérifié à l'exécution : si le contenu projeté est un `ta-button` (comme ci-dessus), son propre `appStopPropagation` (actif par défaut) empêche le clic d'atteindre le `(click)` du conteneur — la modale ne s'ouvre jamais tant que `[stopPropagationActivation]=\"false\"` n'est pas posé sur ce bouton projeté. Autre écart observé à l'exécution sur cette vitrine : les boutons de la modale affichent « Cancel »/« OK » plutôt que « Annuler »/« Confirmer », alors que `fr.json` porte bien `container.validation.modal.cta.cancel: \"Annuler\"` — la locale anglaise semble active pour cet espace de traduction lazy-chargé (`TaTranslationUI`, préfixe `ui.`) au moment du premier rendu de cette page ; comportement de la bibliothèque, non corrigé ici.",
};
