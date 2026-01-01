import { NgClass } from "@angular/common";
import { Component, EventEmitter, input, Output } from "@angular/core";

import { FontIconComponent } from "@ta/icons";
import { TaState } from "@ta/styles";
import { StopPropagationDirective } from "@ta/utils";

@Component({
  selector: "ta-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
  standalone: true,
  imports: [NgClass, FontIconComponent, StopPropagationDirective],
})
export class ButtonComponent {
  /**
   * Is button type
   */
  state = input<TaState>("classic");

  /**
   * Indicate the button type
   */
  type = input<"primary" | "secondary" | "tertiary" | "danger">("primary");

  size = input<"small" | "medium" | "large">("medium");

  icon = input<string | null>(null);
  /**
   * Class - Add custom classes separates by space
   * Outline - Draw a border around the button when true
   * Rounded - Make button rounded when true
   * Circular - Make button circular when true
   */
  options = input<{
    class?: string;
    circular?: boolean | "big" | "small";
    border?: boolean;
  } | null>(null);

  stopPropagationActivation = input<boolean>(true);

  /**
   * Event emitted when button is clicked
   */
  @Output()
  action = new EventEmitter();

  constructor() {}

  public handleClick() {
    if (this.state() === "classic") {
      this.action.emit();
    }
  }

  public getClass() {
    const css: { [index: string]: boolean } = {};

    css[this.state()] = true;
    css[this.size()] = true;
    css[this.type()] = true;

    if (this.options()?.circular === true) {
      css["circular"] = true;
    }
    if (this.options()?.circular === "big") {
      css["circular big"] = true;
    }
    if (this.options()?.circular === "small") {
      css["circular small"] = true;
    }
    if (this.options()?.class) {
      css[this.options()!.class!] = true;
    }
    if (this.options()?.border === false) {
      css["no-border"] = true;
    }

    return css;
  }
}
