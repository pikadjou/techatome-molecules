import { ChangeDetectionStrategy, Component } from "@angular/core";

import { BulletComponent, NotificationBoxComponent, NotificationInlineComponent } from "@ta/notification";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « notification » @ta/notification.
 * Route: /e2e-harness/notification
 */
@Component({
  standalone: true,
  selector: "app-case-notification",
  imports: [BulletComponent, NotificationBoxComponent, NotificationInlineComponent, TaTestIdDirective],
  template: `
    <ta-notification-box taTestId="ta-notification-box"></ta-notification-box>
    <ta-notification-inline
      taTestId="ta-notification-inline"
      [message]="'Message de notification'"
    ></ta-notification-inline>
    <ta-notification-bullet taTestId="ta-notification-bullet"></ta-notification-bullet>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationCase {}
