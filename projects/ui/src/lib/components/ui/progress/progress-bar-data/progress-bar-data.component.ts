import { NgClass, NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";

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
  @Input()
  current?: number;

  @Input()
  max?: number;

  @Input()
  title!: string;

  @Input()
  titleIcon?: string;

  /**
   * @deprecated
   */
  @Input()
  description?: string;

  @Input()
  rightText?: { text: string; colorClass?: string };

  get progressValue() {
    if ((this.current || this.current === 0) && (this.max || this.max === 0))
      return `${this.current}/${this.max}`;

    return (this.current ?? this.max)?.toString() ?? "";
  }

  constructor() {
    TaTranslationUI.getInstance();
  }
}
