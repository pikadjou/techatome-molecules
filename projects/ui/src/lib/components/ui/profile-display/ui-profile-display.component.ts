import { NgIf, NgFor } from "@angular/common";
import { FontIconComponent } from "@ta/icons";
import { Component, Input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

import { UserLogoNaming } from "../public-api";
import { UserLogoComponent } from "../user-logo/user-logo.component";
import { TitleComponent } from "../title/title.component";
import { ButtonComponent } from "../button/button.component";

import { CamTranslationUI } from "../../../translation.service";

@Component({
  selector: "ta-ui-profile-display",
  templateUrl: "./ui-profile-display.component.html",
  styleUrls: ["./ui-profile-display.component.scss"],
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    FontIconComponent,
    TranslateModule,
    UserLogoComponent,
    TitleComponent,
    ButtonComponent,
  ],
})
export class UiProfileDisplayComponent {
  @Input()
  label!: string;

  @Input()
  userLogo?: {
    userInfo: { profilePictureUrl?: string; naming: UserLogoNaming };
    size?: number;
  };

  @Input()
  ctas?:
    | {
        icon?: string;
        label?: string;
        callback: () => void;
      }[]
    | null;

  @Input()
  sideIcon?: {
    icon: string;
    callback: () => void;
  };

  constructor() {
    CamTranslationUI.getInstance();
  }
}
