import { NgIf } from "@angular/common";
import { Component, input } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";
import { TaSizes } from "@ta/styles";

import { CamTranslationUI } from "../../../translation.service";
import { UserLogoNaming } from "../user-logo/user-logo.component";
import { UserLogoComponent } from "../user-logo/user-logo.component";

@Component({
  selector: "ta-hello-user",
  templateUrl: "./hello-user.component.html",
  styleUrls: ["./hello-user.component.scss"],
  standalone: true,
  imports: [NgIf, TranslateModule, UserLogoComponent],
})
export class HelloUserComponent {
  title = input<string | undefined>(undefined);
  userInfo = input<{
    profilePictureUrl?: string;
    naming: UserLogoNaming | null;
  } | undefined>(undefined);
  bulletSize = input<TaSizes>("lg");
  footer = input<string | undefined>(undefined);

  constructor() {
    CamTranslationUI.getInstance();
  }
}
