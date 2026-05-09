import { NgTemplateOutlet } from "@angular/common";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  TemplateRef,
  input,
  signal,
} from "@angular/core";

import { FontIconComponent } from "@ta/icons";
import { TaBaseComponent } from "@ta/utils";
import { Observable } from "rxjs";

import { TaModalComponent } from "../../modal/modal.component";

interface UserLogoNaming {
  name: string;
  firstName: string | null;
  trigram: string;
}

@Component({
  selector: "ta-layout-header-logo",
  templateUrl: "./layout-header-logo.component.html",
  styleUrls: ["./layout-header-logo.component.scss"],
  standalone: true,
  imports: [NgTemplateOutlet, FontIconComponent, TaModalComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutHeaderLogoComponent extends TaBaseComponent {
  profile = input<{
    template: TemplateRef<any>;
    user: { profilePictureUrl?: string; naming: UserLogoNaming | null };
  } | null>(null);

  notificationTemplate = input<TemplateRef<any> | null>(null);

  askClosing$ = input<Observable<null> | undefined>(undefined);

  public isProfileOpen = signal(false);
  public isNotifOpen = signal(false);

  constructor() {
    super();
  }

  public userInfo(): {
    profilePictureUrl?: string;
    naming: UserLogoNaming | null;
  } {
    if (!this.profile()) {
      return { naming: null, profilePictureUrl: "" };
    }
    return {
      naming: this.profile()!.user.naming,
      profilePictureUrl: this.profile()!.user.profilePictureUrl,
    };
  }

  public goToHome() {
    this._router.navigateByUrl("/");
  }

  public openProfile() {
    if (!this.profile()?.template) return;
    this.isProfileOpen.set(true);
  }

  public openNotification() {
    if (!this.notificationTemplate()) return;
    this.isNotifOpen.set(true);
  }
}
