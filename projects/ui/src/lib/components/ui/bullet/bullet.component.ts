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

  /**
   * `notif` : pastille de comptage sur la surface de marque.
   * `notif-highlight` : même pastille, dans la couleur secondaire de marque —
   * la seule qui reste visible posée sur un bandeau de marque.
   */
  type = input<ColorType | "notif" | "notif-highlight">("default");

  public getClass(): string {
    return `bullet-${this.type()} ${this.size()}`;
  }
}
