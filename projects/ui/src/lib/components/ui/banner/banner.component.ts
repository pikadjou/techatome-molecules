import { NgClass } from "@angular/common";
import { Component, input } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { ColorType } from "@ta/styles";
import { TranslatePipe } from "@ta/translation";
import { TaBaseComponent } from "@ta/utils";

import { TaTranslationUI } from "../../../translation.service";

@Component({
  selector: "ta-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.scss"],
  standalone: true,
  imports: [NgClass, TranslatePipe, TranslateModule],
})
export class BannerComponent extends TaBaseComponent {
  inline = input<boolean>(false);
  message = input.required<string>();
  type = input<ColorType>("warning");

  constructor() {
    super();
    TaTranslationUI.getInstance();
  }

  public getClasses(): Record<string, boolean> {
    return {
      "banner--inline": this.inline(),
      [`banner--${this.type()}`]: true,
    };
  }
}
