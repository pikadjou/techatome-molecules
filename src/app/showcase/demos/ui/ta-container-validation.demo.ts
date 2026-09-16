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

@Component({
  standalone: true,
  selector: "app-ex-ta-container-validation-inline",
  imports: [ButtonComponent, ContainerValidationComponent],
  template: `
    <div class="card-like">
      <p><strong>Sophie Lenoir</strong> — sophie.lenoir&#64;mail.be</p>
      <ta-container-validation
        variant="inline"
        title="Retirer ce représentant ?"
        subtitle="La personne perdra l'accès aux biens de la société."
        (validated)="this.confirmations = this.confirmations + 1"
      >
        <ta-button type="danger" icon="person_remove" size="small" [stopPropagationActivation]="false">
          Retirer
        </ta-button>
      </ta-container-validation>
    </div>
    <p>Retraits confirmés : {{ this.confirmations }}</p>
  `,
  styles: [
    `.card-like {
      max-width: 380px;
      padding: 16px;
      border: 1px solid #e2e0da;
      border-radius: 16px;
      background: #fff;
    }`,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaContainerValidationInlineExample {
  confirmations = 0;
}

export const DEMO: ComponentDemo = {
  id: "ta-container-validation",
  group: "Overlays",
  summary: "Enrobe un contenu projeté (typiquement un bouton) d'une confirmation ouverte au clic — en modale, ou dans le flux.",
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
    {
      title: "Confirmation dans le flux",
      layout: "stack",
      description:
        "`variant=\"inline\"` remplace le déclencheur par un encart de confirmation posé à sa place : ce qui l'entoure — ici la ligne du représentant — reste visible pendant qu'on tranche, là où une modale l'aurait recouvert. Aucune modale n'est rendue dans cette variante. Le contenu projeté reste soumis au même piège de propagation que ci-dessus.",
      component: TaContainerValidationInlineExample,
    },
  ],
  notes:
    "La modale ouverte est un `ta-modal` classique : position `fixed`, centrée, avec un fond assombri qui recouvre toute la page (vérifié dans `modal.component.scss`), pas seulement la carte de cet exemple. Piège vérifié à l'exécution : si le contenu projeté est un `ta-button` (comme ci-dessus), son propre `appStopPropagation` (actif par défaut) empêche le clic d'atteindre le `(click)` du conteneur — la modale ne s'ouvre jamais tant que `[stopPropagationActivation]=\"false\"` n'est pas posé sur ce bouton projeté. Autre écart observé à l'exécution sur cette vitrine : les boutons de la modale affichent « Cancel »/« OK » plutôt que « Annuler »/« Confirmer », alors que `fr.json` porte bien `container.validation.modal.cta.cancel: \"Annuler\"` — la locale anglaise semble active pour cet espace de traduction lazy-chargé (`TaTranslationUI`, préfixe `ui.`) au moment du premier rendu de cette page ; comportement de la bibliothèque, non corrigé ici.",
};
