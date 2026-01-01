import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";

import { ColorType, TaSizes } from "@ta/styles";

@Component({
  selector: "ta-label",
  templateUrl: "./label.component.html",
  styleUrls: ["./label.component.scss"],
  standalone: true,
  imports: [NgClass],
})
export class LabelComponent {
  size = input<TaSizes>("md");

  type = input<ColorType>("default");

  public getClass(): string {
    return `label-${this.type()} ${this.size()}`;
  }
}
