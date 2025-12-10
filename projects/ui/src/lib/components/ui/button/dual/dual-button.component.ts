import { NgClass } from "@angular/common";
import { Component, Input } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { FontIconComponent } from "@ta/icons";

import { TaTranslationUI } from "../../../../translation.service";

export interface DualButtonInput {
  icon: string;
  label: string;
  callback: () => void;
}

@Component({
  selector: "ta-dual-button",
  templateUrl: "./dual-button.component.html",
  styleUrls: ["./dual-button.component.scss"],
  standalone: true,
  imports: [NgClass, FontIconComponent, TranslateModule],
})
export class DualButtonComponent {
  @Input()
  isFull = false;

  @Input()
  first!: DualButtonInput;

  @Input()
  second!: DualButtonInput;

  @Input()
  type: "primary" | "secondary" = "primary";

  constructor() {
    TaTranslationUI.getInstance();
  }

  public getClass() {
    const css: { [index: string]: boolean } = {};

    css[this.type] = true;

    return css;
  }
}
