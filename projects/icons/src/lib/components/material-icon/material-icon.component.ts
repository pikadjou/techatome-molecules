import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

import { TaSizes } from "@ta/styles";

/**
 * @deprecated
 */
@Component({
  selector: "ta-material-icon",
  templateUrl: "./material-icon.component.html",
  styleUrls: ["./material-icon.component.scss"],
  standalone: true,
  imports: [NgClass, MatIconModule],
})
export class MaterialIconComponent {
  /**
   * If set to true, define an outline style to the icon
   */
  public outline = input<boolean>(false);

  /**
   * If set to true, define a sharp style to the icon
   */
  public sharp = input<boolean>(false);

  /**
   * If set to true, define a rounded style to the icon
   */
  public round = input<boolean>(false);

  /**
   * If set to true, define a dual tone style to the icon
   */
  public dualTone = input<boolean>(false);

  /**
   * If set to true, define a size for the icon
   */
  public type = input<TaSizes | "">("");

  public getDisplayStyle(): string {
    if (this.outline()) return "material-icons-outlined";
    if (this.sharp()) return "material-icons-sharp";
    if (this.round()) return "material-icons-round";
    if (this.dualTone()) return "material-icons-two-tone";

    return "material-icons";
  }

  public getTypeStyle(): string {
    if (\!this.type()) {
      return "";
    }
    return `icon-${this.type()}`;
  }
}
