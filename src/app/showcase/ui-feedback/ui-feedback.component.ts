import { ChangeDetectionStrategy, Component, inject } from "@angular/core";

import {
  BannerComponent,
  BulletComponent,
  ButtonComponent,
  NotificationBadgeComponent,
  TextComponent,
  TitleComponent,
  ToastComponent,
} from "@ta/ui";
import { NotificationInlineComponent, TaNotificationService } from "@ta/notification";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [
    BannerComponent,
    BulletComponent,
    ButtonComponent,
    NotificationBadgeComponent,
    NotificationInlineComponent,
    PageLayoutComponent,
    TextComponent,
    TitleComponent,
    ToastComponent,
  ],
  templateUrl: "./ui-feedback.component.html",
  styleUrl: "./ui-feedback.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiFeedbackPage {
  private _notificationService = inject(TaNotificationService);

  showToast(): void {
    this._notificationService.pushSuccess("Operation completed successfully");
  }

  showErrorToast(): void {
    this._notificationService.pushError("Something went wrong");
  }
}
