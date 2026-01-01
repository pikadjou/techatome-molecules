import { NgIf } from "@angular/common";
import { Component, input } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { PictureInfoMessageComponent } from "../../../components/ui/picture-info-message/picture-info-message.component";
import { TaTranslationUI } from "../../../translation.service";

@Component({
  selector: "ta-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"],
  standalone: true,
  imports: [NgIf, TranslateModule, PictureInfoMessageComponent],
})
export class ErrorComponent {
  message = input<string>("");

  code = input<number>(200);

  constructor() {
    TaTranslationUI.getInstance();
  }
}
