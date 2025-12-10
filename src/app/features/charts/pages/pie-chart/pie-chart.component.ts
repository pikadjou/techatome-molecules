import { Component } from "@angular/core";
import { LayoutFirstLevelComponent } from "../../../core/layout/layout-first-level/layout-first-level.component";
import { LayoutTitleComponent } from "../../../core/layout/layout-title/layout-title.component";
import { LayoutContentComponent } from "../../../core/layout/layout-content/layout-content.component";
import { MatIcon } from "@angular/material/icon";
import {
  ButtonComponent,
  TitleComponent,
  TextComponent,
  BannerComponent,
} from "@ta/ui";

@Component({
  standalone: true,
  selector: "app-pie-chart",
  imports: [
    LayoutFirstLevelComponent,
    LayoutTitleComponent,
    LayoutContentComponent,
    MatIcon,
    ButtonComponent,
    TitleComponent,
    TextComponent,
    BannerComponent,
  ],
  templateUrl: "./pie-chart.component.html",
  styleUrl: "./pie-chart.component.scss",
})
export class PieChartPage {
  public goBack() {
    window.history.back();
  }
}
