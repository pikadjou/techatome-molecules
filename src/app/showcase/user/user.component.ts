import { ChangeDetectionStrategy, Component } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";
import {
  SwitchLanguageComponent,
  SwitchLanguageCtaComponent,
  TA_LANGUAGES,
} from "@ta/user";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [
    PageLayoutComponent,
    SwitchLanguageComponent,
    SwitchLanguageCtaComponent,
    TextComponent,
    TitleComponent,
  ],
  providers: [
    {
      provide: TA_LANGUAGES,
      useValue: [
        { id: "fr", name: "Français" },
        { id: "nl", name: "Nederlands" },
        { id: "en", name: "English" },
        { id: "es", name: "Español" },
      ],
    },
  ],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPage {}
