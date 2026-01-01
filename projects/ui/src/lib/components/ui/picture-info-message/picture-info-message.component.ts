import { NgIf } from "@angular/common";
import { Component, input } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { FontIconComponent, LocalIconComponent } from "@ta/icons";
import { getFontIcon, isFontIcon, isLocalIcon } from "@ta/icons";
import { TaIconType } from "@ta/icons";
import { TaSizes } from "@ta/styles";
import { MessageLevel } from "@ta/utils";

import { TaTranslationUI } from "../../../translation.service";
import { TypedMessageComponent } from "../typed-message/typed-message.component";

@Component({
  selector: "ta-picture-info-message",
  templateUrl: "./picture-info-message.component.html",
  styleUrls: ["./picture-info-message.component.scss"],
  standalone: true,
  imports: [
    NgIf,
    FontIconComponent,
    LocalIconComponent,
    TranslateModule,
    TypedMessageComponent,
  ],
})
export class PictureInfoMessageComponent {
  icon = input<TaIconType | string | undefined>(undefined);
  iconSize = input<TaSizes | "xl" | undefined>(undefined);
  text = input<string | undefined>(undefined);
  type = input<MessageLevel | undefined>("info");

  get displayedText() {
    return this.text() ?? "";
  }

  public isFontIcon(icon: TaIconType | string): boolean {
    return isFontIcon(icon);
  }

  public getFontIcon(icon: TaIconType | string): string {
    return getFontIcon(icon);
  }

  public isLocalIcon(icon: TaIconType | string): boolean {
    return isLocalIcon(icon);
  }

  constructor() {
    TaTranslationUI.getInstance();
  }
}
