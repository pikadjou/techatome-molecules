import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";

import { ColorType, TaSizes } from "@ta/styles";

@Component({
  selector: "ta-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.scss"],
  standalone: true,
  imports: [NgClass],
})
export class ProgressComponent {
  @Input()
  size: TaSizes = "md";

  @Input()
  type: ColorType = "default";

  @Input()
  value: number = 0;

  public getClass(): string {
    return `progress-${this.type} ${this.size}`;
  }

  public getProgressStyle(): { width: string } {
    const clampedValue = Math.max(0, Math.min(100, this.value));
    return { width: `${clampedValue}%` };
  }
}
