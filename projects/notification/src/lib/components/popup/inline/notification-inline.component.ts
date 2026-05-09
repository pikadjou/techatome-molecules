import { NgClass } from "@angular/common";
import {
  Component,
  effect,
  input,
  output,
  signal,
} from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { FontIconComponent } from "@ta/icons";
import { LinkComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";

import { ENotificationCode } from "../../../enum";
import { TaTranslationNotification } from "../../../translation.service";
import { ErrorBoxModal } from "../../error-box/error-box.component";

@Component({
  selector: "ta-notification-inline",
  templateUrl: "./notification-inline.component.html",
  styleUrls: ["./notification-inline.component.scss"],
  standalone: true,
  imports: [ErrorBoxModal, FontIconComponent, LinkComponent, NgClass, TranslateModule],
})
export class NotificationInlineComponent extends TaBaseComponent {
  messageInput = input<string>("", { alias: "message" });

  code = input<ENotificationCode>(ENotificationCode.information);

  showClose = input<boolean>(true);

  askClose = output<void>();

  public showMessage = false;

  public isErrorModalOpen = signal(false);

  get message(): string {
    return this.messageInput();
  }
  get isError(): boolean {
    return this.code() === ENotificationCode.error;
  }
  get isWarning(): boolean {
    return this.code() === ENotificationCode.warning;
  }
  get isInformation(): boolean {
    return this.code() === ENotificationCode.information;
  }
  get isSuccess(): boolean {
    return this.code() === ENotificationCode.success;
  }

  constructor() {
    super();
    TaTranslationNotification.getInstance();
    effect(() => {
      this.showMessage = !!this.messageInput();
    });
  }

  public close = () => {
    this.askClose.emit();
  };

  public getIcon(): string {
    if (this.isError) {
      return "close-tool";
    }
    if (this.isWarning) {
      return "warning";
    }
    if (this.isSuccess) {
      return "checked";
    }
    return "help";
  }

  public getTypeClass(): string {
    if (this.isError) {
      return "danger";
    } else if (this.isWarning) {
      return "warning";
    } else if (this.isInformation) {
      return "info";
    } else if (this.isSuccess) {
      return "success";
    } else {
      return "";
    }
  }

  public getTypeKey(): string {
    if (this.isError) return "error";
    if (this.isWarning) return "warning";
    if (this.isInformation) return "info";
    if (this.isSuccess) return "success";
    return "";
  }

  public getTypeLabel(): string {
    return "notification.type." + this.getTypeKey();
  }

  public getDefaultMessageKey(): string {
    return "notification.inline.label." + this.getTypeKey();
  }

  public openErrorBox(): void {
    this.isErrorModalOpen.set(true);
  }
}
