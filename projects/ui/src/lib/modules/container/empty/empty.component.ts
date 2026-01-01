import { Component, input } from "@angular/core";

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
  isEmpty = input<boolean>(true);
  isLight = input<boolean>(true);
  showMessage = input<boolean>(true);

  text = input<string>("ui.container.empty.light-message");
  type = input<MessageLevel>("info");

  icon = input<TaIconType | string>("ghost");
  iconSize = input<TaSizes | "xl">("lg");

  constructor() {
    TaTranslationUI.getInstance();
  }
}
