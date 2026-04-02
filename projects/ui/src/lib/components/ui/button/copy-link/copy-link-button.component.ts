import { NgClass } from "@angular/common";
import { Component, EventEmitter, input, Output } from "@angular/core";

import { FontIconComponent } from "@ta/icons";
import { TaSizes, TaState } from "@ta/styles";
import { StopPropagationDirective } from "@ta/utils";

@Component({
  selector: "ta-copy-link-button",
  templateUrl: "./copy-link-button.component.html",
  styleUrls: ["./copy-link-button.component.scss"],
  standalone: true,
  imports: [NgClass, FontIconComponent, StopPropagationDirective],
})
export class CopyLinkButtonComponent {
  /**
   * Button state
   */
  state = input<TaState>("classic");

  /**
   * Button size
   */
  size = input<"small" | "medium" | "large">("medium");

  /**
   * Text to copy to clipboard
   */
  value = input<string | null>(null);

  stopPropagationActivation = input<boolean>(true);

  /**
   * Event emitted when button is clicked (after copy)
   */
  @Output()
  action = new EventEmitter();

  constructor() {}

  public async handleClick() {
    if (this.state() !== "classic") {
      return;
    }

    const text = this.value();
    if (text) {
      await navigator.clipboard.writeText(text);
    }

    this.action.emit();
  }

  private _sizeMap: Record<string, TaSizes> = {
    small: "sm",
    medium: "md",
    large: "lg",
  };

  public getIconSize(): TaSizes {
    return this._sizeMap[this.size()] || "md";
  }

  public getClass() {
    const css: { [index: string]: boolean } = {};

    css[this.state()] = true;
    css[this.size()] = true;

    return css;
  }
}
