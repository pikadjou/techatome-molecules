import { Component } from "@angular/core";
import { TitleComponent, TextComponent, BannerComponent } from "@ta/ui";

@Component({
  selector: "app-charts-showcase",
  standalone: true,
  imports: [TitleComponent, TextComponent, BannerComponent],
  templateUrl: "./charts-showcase.component.html",
  styleUrl: "./charts-showcase.component.scss",
})
export class ChartsShowcaseComponent {}
