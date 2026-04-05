import { Component, input } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";
import { TaSizes } from "@ta/styles";

import { TaTranslationUI } from "../../../translation.service";
import { UserLogoComponent, UserLogoData } from "../user-logo/user-logo.component";

export interface UserLogoNaming {
  firstName?: string;
  name?: string;
}

@Component({
  selector: "ta-hello-user",
  templateUrl: "./hello-user.component.html",
  styleUrls: ["./hello-user.component.scss"],
  standalone: true,
  imports: [TranslateModule, UserLogoComponent],
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
    TaTranslationUI.getInstance();
  }

  public getUserLogoData(): UserLogoData | null {
    const info = this.userInfo();
    if (!info?.naming) return null;
    return {
      firstname: info.naming.firstName ?? '',
      lastname: info.naming.name ?? '',
      picture: info.profilePictureUrl,
    };
  }
}
