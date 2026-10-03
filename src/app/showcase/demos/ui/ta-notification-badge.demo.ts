import { ChangeDetectionStrategy, Component } from "@angular/core";

import { NotificationBadgeComponent, NotificationBadgeContainerComponent } from "@ta/ui";

import { ComponentDemo } from "../../demo.types";

@Component({
  standalone: true,
  selector: "app-ex-ta-notification-badge-container",
  imports: [NotificationBadgeComponent, NotificationBadgeContainerComponent],
  template: `
    <ta-notification-badge-container style="display: inline-flex; width: 48px; height: 48px; background: #eee; border-radius: 8px">
      <ta-notification-badge [number]="4" style="semantic-token-alert"></ta-notification-badge>
    </ta-notification-badge-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaNotificationBadgeContainerExample {}

@Component({
  standalone: true,
  selector: "app-ex-ta-notification-badge-fontsizes",
  imports: [NotificationBadgeComponent],
  template: `
    <ta-notification-badge [number]="1" [relative]="true" fontSize="xs" style="semantic-token-success"></ta-notification-badge>
    <ta-notification-badge [number]="2" [relative]="true" fontSize="sm" style="semantic-token-success"></ta-notification-badge>
    <ta-notification-badge [number]="3" [relative]="true" fontSize="md" style="semantic-token-success"></ta-notification-badge>
    <ta-notification-badge [number]="4" [relative]="true" fontSize="lg" style="semantic-token-success"></ta-notification-badge>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaNotificationBadgeFontSizesExample {}

export const DEMO: ComponentDemo = {
  id: "ta-notification-badge",
  group: "Bases",
  summary: "Pastille de comptage, positionnée en absolu sur son conteneur par défaut ou en flux avec `relative`.",
  examples: [
    {
      title: "Dans un conteneur",
      description: "Sans `relative`, la pastille est en `position: absolute` (haut-droit) : elle s'ancre au coin du plus proche ancêtre positionné, ici `ta-notification-badge-container`.",
      component: TaNotificationBadgeContainerExample,
    },
    {
      title: "Tailles de police",
      description: "`relative=true` remet la pastille dans le flux normal ; `fontSize` en règle la taille de texte.",
      component: TaNotificationBadgeFontSizesExample,
    },
  ],
  notes:
    "`style` (par défaut non renseigné) retombe sur la classe `bgc-semantic-token-info` (badge.getClass()) — or `$semantic-token` (projects/styles/src/style/ta/_vars.scss) ne définit que `success`, `alert`, `warning` et `link`, pas `info` : sans `style` explicite, aucune classe de fond réelle ne correspond et la pastille reste sans couleur de fond. Les exemples ci-dessus fixent donc `style` explicitement (`semantic-token-*` ou tout autre token generé en `bgc-<groupe>-<clé>`, ex. `brand-500`).",
};
