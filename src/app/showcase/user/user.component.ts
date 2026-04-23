import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

import { TextComponent, TitleComponent } from "@ta/ui";
import { Menu, MenuBase, NavigationComponent } from "@ta/menu";
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
    NavigationComponent,
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
      ],
    },
  ],
  templateUrl: "./user.component.html",
  styleUrl: "./user.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPage {
  activeTab = signal<string>("inline");

  tabMenu = new Menu({
    elements: [
      new MenuBase({ key: "inline", label: "Inline", defaultOpen: true, callback: () => this.activeTab.set("inline") }),
      new MenuBase({ key: "dropdown", label: "Dropdown", callback: () => this.activeTab.set("dropdown") }),
      new MenuBase({ key: "modal", label: "Modal (Overlay)", callback: () => this.activeTab.set("modal") }),
      new MenuBase({ key: "cta", label: "CTA Wrapper", callback: () => this.activeTab.set("cta") }),
    ],
  });
}
