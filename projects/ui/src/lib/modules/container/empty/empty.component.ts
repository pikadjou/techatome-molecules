import { Component, Input } from "@angular/core";

import { TaIconType } from "@ta/icons";
import { TaSizes } from "@ta/styles";
import { MessageLevel } from "@ta/utils";

import { PictureInfoMessageComponent } from "../../../components/ui/picture-info-message/picture-info-message.component";
import { TaTranslationUI } from "../../../translation.service";

@Component({
  selector: "ta-empty",
  templateUrl: "./empty.component.html",
  styleUrls: ["./empty.component.scss"],
  standalone: true,
  imports: [PictureInfoMessageComponent],
})
export class EmptyComponent {
  @Input() isEmpty: boolean = true;
  @Input() isLight: boolean = true;
  @Input() showMessage: boolean = true;

  @Input() text?: string = "ui.container.empty.light-message";
  @Input() type?: MessageLevel = "info";

  @Input() icon?: TaIconType | string = "ghost";
  @Input() iconSize?: TaSizes | "xl" = "lg";

  constructor() {
    TaTranslationUI.getInstance();
  }
}
