import { NgClass } from "@angular/common";
import { Component, EventEmitter, input, Output } from "@angular/core";

import { TaState } from "@ta/styles";
import { StopPropagationDirective } from "@ta/utils";

@Component({
  selector: "ta-whatsapp-button",
  templateUrl: "./whatsapp-button.component.html",
  styleUrls: ["./whatsapp-button.component.scss"],
  standalone: true,
  imports: [NgClass, StopPropagationDirective],
})
export class WhatsappButtonComponent {
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
   * Message to share via WhatsApp. If provided, clicking opens WhatsApp with this message.
   */
  message = input<string | null>(null);

  stopPropagationActivation = input<boolean>(true);

  /**
   * Event emitted when button is clicked
   */
  @Output()
  action = new EventEmitter();

  constructor() {}

  public handleClick() {
    if (this.state() === "classic") {
      const msg = this.message();
      if (msg) {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(msg)}`, '_blank');
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
