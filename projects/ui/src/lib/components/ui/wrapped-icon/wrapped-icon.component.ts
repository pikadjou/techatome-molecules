import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";

import { ColorType, TaSizes } from "@ta/styles";
import { FontIconComponent } from "@ta/icons";

@Component({
  selector: "ta-wrapped-icon",
  templateUrl: "./wrapped-icon.component.html",
  styleUrls: ["./wrapped-icon.component.scss"],
  standalone: true,
  imports: [NgClass, FontIconComponent],
})
export class WrappedIconComponent {
  @Input()
  size: TaSizes = "md";

  @Input()
  type: ColorType = "default";

  @Input({ required: true })
  icon!: string;

  public getClass(): string {
    return `wrapped-icon-${this.type} ${this.size}`;
  }
}
