import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  ProgressBarDataComponent,
  ProgressCircleComponent,
  ProgressComponent,
  RatingComponent,
  SwiperLightComponent,
  TextComponent,
  TitleComponent,
} from "@ta/ui";

import { PageLayoutComponent } from "../../layout/page-layout.component";

@Component({
  standalone: true,
  selector: "",
  imports: [
    PageLayoutComponent,
    ProgressBarDataComponent,
    ProgressCircleComponent,
    ProgressComponent,
    RatingComponent,
    SwiperLightComponent,
    TextComponent,
    TitleComponent,
  ],
  templateUrl: "./ui-progress.component.html",
  styleUrl: "./ui-progress.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiProgressPage {
  rating = 3;
  swiperItems = ["Slide 1", "Slide 2", "Slide 3", "Slide 4"];
}
