import { FontIconComponent } from "@ta/icons";
import { Component, input } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";

import { UserLogoComponent, UserLogoData } from "../user-logo/user-logo.component";
import { TitleComponent } from "../title/title.component";
import { ButtonComponent } from "../button/button.component";

import { TaTranslationUI } from "../../../translation.service";

@Component({
  selector: "ta-ui-profile-display",
  templateUrl: "./ui-profile-display.component.html",
  styleUrls: ["./ui-profile-display.component.scss"],
  standalone: true,
  imports: [
    FontIconComponent,
    TranslateModule,
    UserLogoComponent,
    TitleComponent,
    ButtonComponent,
  ],
})
export class UiProfileDisplayComponent {
  label = input.required<string>();

  userLogo = input<{
    user: UserLogoData;
    size?: number;
  } | undefined>(undefined);

  ctas = input<{
        icon?: string;
        label?: string;
        callback: () => void;
      }[] | null | undefined>(undefined);

  sideIcon = input<{
    icon: string;
    callback: () => void;
  } | undefined>(undefined);

  constructor() {
    TaTranslationUI.getInstance();
  }
}
