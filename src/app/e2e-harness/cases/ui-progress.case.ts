import { ChangeDetectionStrategy, Component } from "@angular/core";

import {
  ProgressBarComponent,
  ProgressBarDataComponent,
  ProgressCircleComponent,
  ProgressComponent,
  RatingComponent,
} from "@ta/ui";
import { TaTestIdDirective } from "@ta/utils";

/**
 * Galerie « progress » @ta/ui.
 * Route: /e2e-harness/ui-progress
 */
@Component({
  standalone: true,
  selector: "app-case-ui-progress",
  imports: [
    ProgressBarComponent,
    ProgressBarDataComponent,
    ProgressCircleComponent,
    ProgressComponent,
    RatingComponent,
    TaTestIdDirective,
  ],
  template: `
    <ta-progress taTestId="ta-progress" [value]="42"></ta-progress>
    <ta-progress-circle taTestId="ta-progress-circle" [progress]="42"></ta-progress-circle>
    <ta-progress-bar taTestId="ta-progress-bar" [current]="3" [max]="10"></ta-progress-bar>
    <ta-progress-bar-data taTestId="ta-progress-bar-data" [title]="'Progression'"></ta-progress-bar-data>
    <ta-rating taTestId="ta-rating" [value]="3"></ta-rating>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiProgressCase {}
