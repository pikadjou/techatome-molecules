import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from "@angular/core";

import { ENotificationCode, NotificationInlineComponent } from "@ta/notification";
import { ButtonComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-notification-inline-types",
  imports: [NotificationInlineComponent],
  template: `
    <ta-notification-inline message="Une mise à jour est disponible." [code]="this.information"></ta-notification-inline>
    <ta-notification-inline message="Enregistrement effectué." [code]="this.success"></ta-notification-inline>
    <ta-notification-inline message="Vérifiez les champs avant de continuer." [code]="this.warning"></ta-notification-inline>
    <ta-notification-inline message="Échec de la sauvegarde." [code]="this.error"></ta-notification-inline>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaNotificationInlineTypesExample {
  information = ENotificationCode.information;
  success = ENotificationCode.success;
  warning = ENotificationCode.warning;
  error = ENotificationCode.error;

  // `showMessage`, qui commande l'affichage, est basculé par un `effect()` qui
  // écrit une propriété simple plutôt qu'un signal (voir
  // `notification-inline.component.ts`). Sur cette page statique `OnPush`, rien
  // ne redéclenche la détection de changements après ce premier `effect` : sans
  // ce second passage forcé, les quatre messages resteraient invisibles bien
  // que leurs données soient correctes — vérifié par inspection du DOM, pas
  // supposé.
  private _cdr = inject(ChangeDetectorRef);

  constructor() {
    setTimeout(() => this._cdr.detectChanges());
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-notification-inline-empty",
  imports: [NotificationInlineComponent],
  template: `
    <ta-notification-inline>
      <span>Aucune alerte pour le moment.</span>
    </ta-notification-inline>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaNotificationInlineEmptyExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-notification-inline-close",
  imports: [NotificationInlineComponent, ButtonComponent],
  template: `
    <div class="flex-column g-space-sm">
      @if (this.visible()) {
        <ta-notification-inline
          message="Cette bannière se ferme au clic sur la croix."
          [code]="this.warning"
          [showClose]="true"
          (askClose)="this.close()"
        ></ta-notification-inline>
      } @else {
        <ta-button size="small" (action)="this.reveal()">Réafficher</ta-button>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaNotificationInlineCloseExample {
  warning = ENotificationCode.warning;
  visible = signal(true);

  private _cdr = inject(ChangeDetectorRef);

  constructor() {
    setTimeout(() => this._cdr.detectChanges());
  }

  close() {
    this.visible.set(false);
  }

  reveal() {
    this.visible.set(true);
    // Le composant recréé retombe dans le même décalage d'un cycle que
    // l'exemple « Quatre types » : un second passage forcé le rend visible tout
    // de suite plutôt qu'au prochain clic ailleurs sur la page.
    setTimeout(() => this._cdr.detectChanges());
  }
}

@Component({
  standalone: true,
  selector: "app-ex-ta-notification-inline-error-details",
  imports: [NotificationInlineComponent],
  template: `
    <ta-notification-inline message="La synchronisation a échoué." [code]="this.error" [showClose]="false"></ta-notification-inline>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaNotificationInlineErrorDetailsExample {
  error = ENotificationCode.error;

  private _cdr = inject(ChangeDetectorRef);

  constructor() {
    setTimeout(() => this._cdr.detectChanges());
  }
}

export const DEMO: ComponentDemo = {
  id: "ta-notification-inline",
  group: "Notifications",
  summary: "Bannière d'alerte contextuelle, déclinée en quatre intentions, avec fermeture et détails d'erreur.",
  examples: [
    {
      title: "Quatre types",
      description: "Chaque code (`information`, `success`, `warning`, `error`) porte sa propre icône, sa couleur et son titre traduit.",
      component: TaNotificationInlineTypesExample,
    },
    {
      title: "Sans message : contenu projeté",
      description:
        "Sans `message`, `showMessage` reste à `false` dès le montage : le contenu projeté (`<ng-content>`) s'affiche à la place de la bannière — c'est l'état par défaut, il ne dépend d'aucun second passage de détection de changements.",
      component: TaNotificationInlineEmptyExample,
    },
    {
      title: "Fermeture",
      description: "`showClose` affiche la croix ; son clic émet `askClose`, que le parent traduit ici en un masquage.",
      component: TaNotificationInlineCloseExample,
    },
    {
      title: "Erreur avec détails",
      description: "Le code `error` ajoute un lien « Voir les détails » qui ouvre `ta-error-box`, une modale interne au composant.",
      component: TaNotificationInlineErrorDetailsExample,
    },
  ],
  notes:
    "`showMessage`, la propriété qui commande l'affichage de la bannière, est basculée par un `effect()` du constructeur qui écrit une propriété simple (`this.showMessage = …`) plutôt qu'un signal. Sur une page `OnPush` figée comme cette vitrine, l'effet s'exécute bien après le montage — vérifié via `ng.getComponent()` : `showMessage` vaut `true` en mémoire alors que le DOM reste vide — mais son écriture ne redéclenche aucune détection de changements, donc rien ne s'affiche tant qu'un événement Angular sans rapport ne survient pas ailleurs sur la page. Les exemples ci-dessus (hors « Sans message ») compensent en forçant explicitement un second passage (`ChangeDetectorRef.detectChanges()`, différé d'un tick) juste après le montage ou la réapparition du composant : c'est la façon la plus honnête de montrer un rendu qui, dans une application vivante (requêtes, minuteries, navigation), se produirait de toute façon sans intervention. Corriger `NotificationInlineComponent` lui-même est hors du périmètre de cette vitrine.",
};
