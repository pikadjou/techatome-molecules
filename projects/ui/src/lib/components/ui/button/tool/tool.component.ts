import { NgClass, NgIf } from "@angular/common";
import { Component, EventEmitter, input, Output } from "@angular/core";

import { FontIconComponent } from "@ta/icons";
import { TaSizes, TaState } from "@ta/styles";
import { StopPropagationDirective } from "@ta/utils";

@Component({
  selector: "ta-button-tool",
  templateUrl: "./tool.component.html",
  styleUrls: ["./tool.component.scss"],
  standalone: true,
  imports: [NgIf, NgClass, FontIconComponent, StopPropagationDirective],
})
export class ButtonToolComponent {
  state = input<TaState>("classic");

  type = input<"primary">("primary");

  size = input<TaSizes>("md");

  icon = input<string | null>(null);

  stopPropagationActivation = input<boolean>(true);

  readonly = input<boolean>(false);

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

    return css;
  }
}
