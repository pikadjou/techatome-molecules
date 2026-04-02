import { NgClass } from "@angular/common";
import { Component, EventEmitter, input, Output } from "@angular/core";

import { TaState } from "@ta/styles";
import { StopPropagationDirective } from "@ta/utils";

@Component({
  selector: "ta-messenger-button",
  templateUrl: "./messenger-button.component.html",
  styleUrls: ["./messenger-button.component.scss"],
  standalone: true,
  imports: [NgClass, StopPropagationDirective],
})
export class MessengerButtonComponent {
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

  /**
   * URL to share via Messenger. If provided, clicking opens Messenger with this link.
   */
  url = input<string | null>(null);

  stopPropagationActivation = input<boolean>(true);

  /**
   * Event emitted when button is clicked
   */
  @Output()
  action = new EventEmitter();

  constructor() {}

  public handleClick() {
    if (this.state() === "classic") {
      const link = this.url();
      if (link) {
        window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(link)}&redirect_uri=${encodeURIComponent(window.location.href)}`, '_blank');
      }
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
