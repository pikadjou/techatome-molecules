import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";

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
  size = input<TaSizes>("md");

  type = input<ColorType>("default");

  icon = input.required<string>();

  public getClass(): string {
    return `wrapped-icon-${this.type()} ${this.size()}`;
  }
}
