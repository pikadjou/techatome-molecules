import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  BulletComponent,
  NotificationBadgeComponent,
  NotificationBadgeContainerComponent,
  ToastComponent,
} from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « notification » (composants @ta/ui).
 * Route: /e2e-harness/ui-notification
 */
@Component({
  standalone: true,
  selector: "app-case-ui-notification",
  imports: [
    BulletComponent,
    NotificationBadgeComponent,
    NotificationBadgeContainerComponent,
    ToastComponent,
    TaTestIdDirective,
  ],
  template: `
    <ta-toast taTestId="ta-toast"></ta-toast>
    <ta-notification-badge taTestId="ta-notification-badge" [number]="3"></ta-notification-badge>
    <ta-notification-badge-container taTestId="ta-notification-badge-container"></ta-notification-badge-container>
    <ta-bullet taTestId="ta-bullet"></ta-bullet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiNotificationCase {}
