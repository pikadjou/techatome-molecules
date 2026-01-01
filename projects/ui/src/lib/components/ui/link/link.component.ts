import { NgClass, NgIf } from "@angular/common";
import { Component, EventEmitter, input, Output } from "@angular/core";

import { FontIconComponent } from "@ta/icons";
import { TaSizes, TaState } from "@ta/styles";

@Component({
  selector: "ta-link",
  templateUrl: "./link.component.html",
  styleUrls: ["./link.component.scss"],
  standalone: true,
  imports: [NgIf, NgClass, FontIconComponent],
})
export class LinkComponent {
  state = input<TaState>("classic");

  underline = input<boolean>(true);

  bold = input<boolean>(false);

  size = input<TaSizes>("md");

  icon = input<string | null>(null);

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

    return css;
  }
}
