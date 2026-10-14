import { NgClass } from "@angular/common";
import { Component, input, output } from "@angular/core";

import { TaState } from "@ta/styles";
import { StopPropagationDirective } from "@ta/utils";

@Component({
  selector: "ta-veriff-button",
  templateUrl: "./veriff-button.component.html",
  styleUrl: "./veriff-button.component.scss",
  standalone: true,
  imports: [NgClass, StopPropagationDirective],
})
export class VeriffButtonComponent {
  /**
   * Button state
   */
  state = input<TaState>("classic");

  /**
   * Button size
   */
  size = input<"small" | "medium" | "large">("medium");

  /**
   * Display mode: 'full' shows logo + text, 'logo' shows only the logo
   */
  mode = input<"full" | "logo">("full");

  stopPropagationActivation = input<boolean>(true);

  /**
   * Event emitted when button is clicked
   */
  action = output<void>();

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
    css[this.mode()] = true;

    return css;
  }
}
