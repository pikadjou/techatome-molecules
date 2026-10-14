import { NgClass } from "@angular/common";
import { Component, input, output } from "@angular/core";

import { FontIconComponent } from "@ta/icons";
import { TaSizes, TaState } from "@ta/styles";

@Component({
  selector: "ta-link",
  templateUrl: "./link.component.html",
  styleUrl: "./link.component.scss",
  standalone: true,
  imports: [NgClass, FontIconComponent],
})
export class LinkComponent {
  state = input<TaState>("classic");

  underline = input<boolean>(true);

  bold = input<boolean>(false);

  size = input<TaSizes>("md");

  icon = input<string | null>(null);

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

    return css;
  }
}
