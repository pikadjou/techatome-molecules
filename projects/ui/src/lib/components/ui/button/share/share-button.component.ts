import { NgClass } from "@angular/common";
import { Component, EventEmitter, input, Output } from "@angular/core";

import { FontIconComponent } from "@ta/icons";
import { TaSizes, TaState } from "@ta/styles";
import { StopPropagationDirective } from "@ta/utils";

@Component({
  selector: "ta-share-button",
  templateUrl: "./share-button.component.html",
  styleUrls: ["./share-button.component.scss"],
  standalone: true,
  imports: [NgClass, FontIconComponent, StopPropagationDirective],
})
export class ShareButtonComponent {
  /**
   * Button state
   */
  state = input<TaState>("classic");

  /**
   * Button size
   */
  size = input<"small" | "medium" | "large">("medium");

  /**
   * Title for the native share dialog
   */
  shareTitle = input<string>("");

  /**
   * Text message to share
   */
  message = input<string | null>(null);

  /**
   * URL to share
   */
  url = input<string | null>(null);

  stopPropagationActivation = input<boolean>(true);

  /**
   * Event emitted when button is clicked
   */
  @Output()
  action = new EventEmitter();

  constructor() {}

  public async handleClick() {
    if (this.state() !== "classic") {
      return;
    }

    const msg = this.message();
    const link = this.url();

    if (navigator.share && (msg || link)) {
      try {
        await navigator.share({
          title: this.shareTitle(),
          text: msg ?? undefined,
          url: link ?? undefined,
        });
      } catch {
        // User cancelled or share failed silently
      }
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
