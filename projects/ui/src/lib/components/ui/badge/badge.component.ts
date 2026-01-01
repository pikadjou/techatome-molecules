import { NgClass } from "@angular/common";
import { Component, EventEmitter, input, Output } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { FontIconComponent } from "@ta/icons";

import { TaTranslationUI } from "../../../translation.service";

export type BadgeType =
  | "danger"
  | "warning"
  | "success"
  | "primary"
  | "secondary"
  | "info"
  | "purple"
  | "orange";
@Component({
  selector: "ta-badge",
  templateUrl: "./badge.component.html",
  styleUrls: ["./badge.component.scss"],
  standalone: true,
  imports: [NgClass, FontIconComponent, TranslateModule],
})
export class BadgeComponent {
  /**
   * Text to display in badge
   */
  value = input.required<string>();

  /**
   * Style of badge
   */
  type = input<BadgeType>("primary");

  /**
   * @deprecated
   * showClickOption
   */
  showClickOption = input<boolean>(false);

  icon = input<string | undefined>(undefined);

  @Output()
  clickAction = new EventEmitter();

  constructor() {
    TaTranslationUI.getInstance();
  }

  public getClass(): string {
    return `badge-${this.type()}`;
  }

  public click() {
    this.clickAction.emit();
  }
}
