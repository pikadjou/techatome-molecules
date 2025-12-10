import { Component } from "@angular/core";
import { LayoutFirstLevelComponent } from "../../../core/layout/layout-first-level/layout-first-level.component";
import { LayoutTitleComponent } from "../../../core/layout/layout-title/layout-title.component";
import { LayoutContentComponent } from "../../../core/layout/layout-content/layout-content.component";
import { MatIcon } from "@angular/material/icon";
import { TitleComponent, TextComponent, ButtonComponent } from "@ta/ui";

@Component({
  standalone: true,
  selector: "app-badges-page",
  imports: [
    LayoutFirstLevelComponent,
    LayoutTitleComponent,
    LayoutContentComponent,
    MatIcon,
    TitleComponent,
    TextComponent,
    ButtonComponent,
  ],
  templateUrl: "./badges.component.html",
  styleUrl: "./badges.component.scss",
})
export class BadgesPage {
  public goBack() {
    window.history.back();
  }
}
