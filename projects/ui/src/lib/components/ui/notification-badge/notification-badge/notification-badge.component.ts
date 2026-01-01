import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";

import { TaSizes } from "@ta/styles";

@Component({
  selector: "ta-notification-badge",
  templateUrl: "./notification-badge.component.html",
  styleUrls: ["./notification-badge.component.scss"],
  standalone: true,
  imports: [NgClass],
})
export class NotificationBadgeComponent {
  number = input.required<number>();

  fontSize = input<TaSizes>("xs");

  style = input<string | undefined>(undefined);

  relative = input<boolean>(false);

  public getClass() {
    const css: { [index: string]: boolean } = {};

    css[`bgc-${this.style() ?? "semantic-token-info"}`] = true;

    if (this.relative()) {
      css["relative"] = true;
    }

    return css;
  }
}
