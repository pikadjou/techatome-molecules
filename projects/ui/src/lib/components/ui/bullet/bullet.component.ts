import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";

import { ColorType, TaSizes } from "@ta/styles";

@Component({
  selector: "ta-bullet",
  templateUrl: "./bullet.component.html",
  styleUrls: ["./bullet.component.scss"],
  standalone: true,
  imports: [NgClass],
})
export class BulletComponent {
  size = input<TaSizes>("sm");

  type = input<ColorType | "notif">("default");

  public getClass(): string {
    return `bullet-${this.type()} ${this.size()}`;
  }
}
