import { Component, input } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { Culture } from "@ta/utils";

import { TaTranslationUI } from "../../../translation.service";

@Component({
  selector: "ta-culture",
  templateUrl: "./culture.component.html",
  styleUrls: ["./culture.component.scss"],
  standalone: true,
  imports: [TranslateModule],
})
export class CultureComponent {
  cultures = input.required<Culture[]>();

  constructor() {
    TaTranslationUI.getInstance();
  }
}
