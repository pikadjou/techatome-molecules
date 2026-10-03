import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from "@angular/core";

import { ENotificationCode, NotificationBoxComponent, TaNotificationService } from "@ta/notification";
import { ButtonComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-notification-box-stack",
  imports: [NotificationBoxComponent, ButtonComponent],
  template: `
    <div class="flex-column g-space-md">
      <div class="flex-row g-space-sm">
        <ta-button size="small" type="secondary" (action)="this.push(this.information, 'Nouvelle version disponible.')">
          Information
        </ta-button>
        <ta-button size="small" type="secondary" (action)="this.push(this.success, 'Enregistrement effectué.')">
          Succès
        </ta-button>
        <ta-button size="small" type="secondary" (action)="this.push(this.warning, 'Vérifiez les champs avant de continuer.')">
          Attention
        </ta-button>
        <ta-button size="small" type="danger" (action)="this.push(this.error, 'Échec de la sauvegarde.')">Erreur</ta-button>
      </div>
      <ta-notification-box></ta-notification-box>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaNotificationBoxStackExample {
  private _notificationService = inject(TaNotificationService);

  // `NotificationBoxComponent` rend chaque entrée avec `ta-notification-inline`,
  // dont la visibilité est basculée par un `effect()` qui écrit une propriété
  // simple plutôt qu'un signal (voir `notification-inline.component.ts`). Sur
  // cette page statique `OnPush`, rien ne redéclenche la détection de
  // changements après ce premier `effect` : sans le passage forcé ci-dessous, le
  // toast resterait invisible jusqu'au clic suivant ailleurs sur la page — un
  // comportement confirmé par inspection du DOM, pas supposé.
  private _cdr = inject(ChangeDetectorRef);

  information = ENotificationCode.information;
  success = ENotificationCode.success;
  warning = ENotificationCode.warning;
  error = ENotificationCode.error;

  push(code: ENotificationCode, message: string) {
    this._notificationService.addNotification(message, code);
    setTimeout(() => this._cdr.detectChanges());
  }
}

export const DEMO: ComponentDemo = {
  id: "ta-notification-box",
  group: "Notifications",
  summary:
    "Pile de notifications, alimentée par `TaNotificationService` et retirée automatiquement après trois secondes — sauf les erreurs, qui restent jusqu'à fermeture manuelle.",
  examples: [
    {
      title: "Empilement de toasts",
      layout: "stack",
      description:
        "Chaque bouton pousse une notification via `TaNotificationService.addNotification(message, code)`. `addNotification` ne rend le toast persistant par défaut que pour le code `error` ; les trois autres se retirent d'eux-mêmes après trois secondes (`AUTO_DISMISS_DELAY` dans `notification-box.component.ts`).",
      component: TaNotificationBoxStackExample,
    },
  ],
  notes:
    "`NotificationBoxComponent` n'a aucune entrée : il s'abonne directement à `TaNotificationService.newNotification$` / `removeNotification$` et expose une seule méthode publique, `dismiss(id)`. Chaque toast affiché est un `ta-notification-inline`, dont la bascule de visibilité passe par un `effect()` écrivant une propriété simple plutôt qu'un signal — sur une page figée comme celle-ci, rien ne redéclenche spontanément la détection de changements après ce premier `effect`. L'exemple ci-dessus force un second passage (`ChangeDetectorRef.detectChanges()`) juste après l'ajout, seul moyen honnête de montrer le toast immédiatement plutôt que de le laisser invisible jusqu'à un clic sans rapport ; dans une application réelle, la moindre activité asynchrone ambiante (requête, minuterie, navigation) produit le même effet sans intervention explicite.",
};
