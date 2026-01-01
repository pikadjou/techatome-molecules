import { NgClass, NgIf } from "@angular/common";
import { Component, input } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { MaterialIconComponent } from "@ta/icons";

import { ProgressBarComponent } from "../../progress-bar/progress-bar.component";
import { TitleComponent } from "../../title/title.component";
import { TaTranslationUI } from "../../../../translation.service";

@Component({
  selector: "ta-progress-bar-data",
  templateUrl: "./progress-bar-data.component.html",
  styleUrls: ["./progress-bar-data.component.scss"],
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    MaterialIconComponent,
    TranslateModule,
    TitleComponent,
    ProgressBarComponent,
  ],
})
export class ProgressBarDataComponent {
  current = input<number | undefined>(undefined);

  max = input<number | undefined>(undefined);

  title = input.required<string>();

  titleIcon = input<string | undefined>(undefined);

  /**
   * @deprecated
   */
  description = input<string | undefined>(undefined);

  rightText = input<{ text: string; colorClass?: string } | undefined>(undefined);

  get progressValue() {
    const currentVal = this.current();
    const maxVal = this.max();
    if ((currentVal || currentVal === 0) && (maxVal || maxVal === 0))
      return `${currentVal}/${maxVal}`;

    return (currentVal ?? maxVal)?.toString() ?? "";
  }

  constructor() {
    TaTranslationUI.getInstance();
  }
}
