import { NgIf } from "@angular/common";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  input,
  TemplateRef,
} from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatMenuModule } from "@angular/material/menu";

import { FontIconComponent } from "@ta/icons";
import { TaBaseComponent } from "@ta/utils";
import { Observable } from "rxjs";

import {
  TemplateModalContainer,
  TemplateModalContainerData,
} from "../../layout-modal/layout-modal-container/layout-modal-container.component";

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
  imports: [NgIf, FontIconComponent, MatMenuModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutHeaderLogoComponent extends TaBaseComponent {
  profile = input<{
    template: TemplateRef<any>;
    user: { profilePictureUrl?: string; naming: UserLogoNaming | null };
  } | null>(null);

  notificationTemplate = input<TemplateRef<any> | null>(null);

  askClosing$ = input<Observable<null> | undefined>(undefined);

  constructor(private _modal: MatDialog) {
    super();
  }

  public userInfo(): {
    profilePictureUrl?: string;
    naming: UserLogoNaming | null;
  } {
    if (!this.profile()) {
      return {
        naming: null,
        profilePictureUrl: "",
      };
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
    if (!this.profile()?.template) {
      return;
    }
    this._modal.open<TemplateModalContainer, TemplateModalContainerData>(
      TemplateModalContainer,
      {
        data: {
          template: this.profile()!.template,
          askClosing$: this.askClosing$(),
        },
      }
    );
  }

  public openNotification() {
    if (!this.notificationTemplate()) {
      return;
    }
    this._modal.open<TemplateModalContainer, TemplateModalContainerData>(
      TemplateModalContainer,
      {
        data: {
          template: this.notificationTemplate()!,
          askClosing$: this.askClosing$(),
        },
      }
    );
  }
}
