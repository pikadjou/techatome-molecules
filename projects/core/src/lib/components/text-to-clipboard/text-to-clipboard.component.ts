import { Component, Input, inject } from "@angular/core";

import { FontIconComponent } from "@ta/icons";
import { ENotificationCode, LAZY_SERVICE_TOKEN } from "@ta/notification";
import { TaBaseComponent, copyTextToClipboard } from "@ta/utils";

@Component({
  selector: "ta-text-to-clipboard",
  templateUrl: "./text-to-clipboard.component.html",
  styleUrls: ["./text-to-clipboard.component.scss"],
  standalone: true,
  imports: [FontIconComponent],
})
export class TextToClipboardComponent extends TaBaseComponent {
  @Input()
  value!: string;

  protected _notificationService = inject(LAZY_SERVICE_TOKEN);

  public copyContent = async () => {
    const successNotification = (message: string) => {
      this._notificationService.addNotification(
        message,
        ENotificationCode.success
      );
    };
    const errorNotification = (message: string) => {
      this._notificationService.addNotification(
        message,
        ENotificationCode.error
      );
    };

    await copyTextToClipboard(
      this.value,
      successNotification,
      errorNotification
    );
  };
}
