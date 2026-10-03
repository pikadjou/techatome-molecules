import { ChangeDetectionStrategy, Component } from "@angular/core";

import { NotificationBadgeComponent, NotificationBadgeContainerComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-notification-badge-container-icon",
  imports: [NotificationBadgeComponent, NotificationBadgeContainerComponent],
  template: `
    <ta-notification-badge-container style="display: inline-flex; width: 40px; height: 40px; background: #eee; border-radius: 50%">
      <ta-notification-badge [number]="9" style="semantic-token-alert"></ta-notification-badge>
    </ta-notification-badge-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaNotificationBadgeContainerIconExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-notification-badge-container-text",
  imports: [NotificationBadgeComponent, NotificationBadgeContainerComponent],
  template: `
    <ta-notification-badge-container style="display: inline-block; padding: 8px 16px; background: #eee; border-radius: 8px">
      Messages
      <ta-notification-badge [number]="12" style="semantic-token-warning"></ta-notification-badge>
    </ta-notification-badge-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaNotificationBadgeContainerTextExample {}

export const DEMO: ComponentDemo = {
  id: "ta-notification-badge-container",
  group: "Bases",
  summary: "Conteneur générique en `position: relative`, dont le seul rôle est d'ancrer un `ta-notification-badge` projeté en son coin.",
  examples: [
    {
      title: "Autour d'une icône",
      description: "Le contenu par défaut (`ng-content` sans sélecteur) et le badge (`ng-content select=\"ta-notification-badge\"`) se projettent chacun dans leur emplacement, quel que soit leur ordre dans le template source.",
      component: TaNotificationBadgeContainerIconExample,
    },
    { title: "Autour d'un libellé", component: TaNotificationBadgeContainerTextExample },
  ],
  notes:
    "Le composant ne déclare aucun input : sa seule responsabilité est le `position: relative` de `.notification-badge-container` (notification-badge-container.component.scss), qui donne au `ta-notification-badge` projeté un ancrage pour son `position: absolute` par défaut.",
};
