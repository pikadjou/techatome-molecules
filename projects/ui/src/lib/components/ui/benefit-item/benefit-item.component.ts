import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";

import { FontIconComponent } from "@ta/icons";
import { ColorType } from "@ta/styles";

import { TextComponent } from "../text/text.component";

export type BenefitType = "success" | "warning" | "error";

export interface BenefitConfig {
  icon: string;
  backgroundColor: string;
  borderColor: string;
  iconColor: string;
}

@Component({
  selector: "ta-benefit-item",
  templateUrl: "./benefit-item.component.html",
  styleUrls: ["./benefit-item.component.scss"],
  standalone: true,
  imports: [NgClass, FontIconComponent, TextComponent],
})
export class BenefitItemComponent {
  type = input<ColorType>("success");
  text = input<string>("");

  protected config!: BenefitConfig;
  protected isInitialized = false;

  public cssClasses() {
    return [this.type()];
  }

  public icon() {
    switch (this.type()) {
      case "success":
        return "check";
      case "warning":
        return "warning";
      case "alert":
        return "error";
      default:
        return "check";
    }
  }
}
