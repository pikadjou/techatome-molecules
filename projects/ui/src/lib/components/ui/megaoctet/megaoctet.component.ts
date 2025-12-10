import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { FontIconComponent } from "@ta/icons";
import { octetsToMo, roundToDecimal } from "@ta/utils";

import { TaTranslationUI } from "../../../translation.service";

@Component({
  selector: "ta-megaoctet",
  templateUrl: "./megaoctet.component.html",
  styleUrls: ["./megaoctet.component.scss"],
  standalone: true,
  imports: [NgIf, FontIconComponent, TranslateModule],
})
export class MegaoctetComponent {
  @Input()
  octet!: number;

  @Input()
  icon: boolean = false;

  constructor() {
    TaTranslationUI.getInstance();
  }

  get megaoctet() {
    return roundToDecimal(octetsToMo(this.octet), 2);
  }
}
