import { NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";

import { TranslateModule } from "@ngx-translate/core";

import { FontIconComponent, LocalIconComponent } from "@ta/icons";
import { TaIconType } from "@ta/icons";

import { TaTranslationUI } from "../../../translation.service";

@Component({
  selector: "ta-contact-information",
  templateUrl: "./contact-information.component.html",
  styleUrls: ["./contact-information.component.scss"],
  standalone: true,
  imports: [NgIf, FontIconComponent, LocalIconComponent, TranslateModule],
})
export class ContactInformationComponent {
  /**
   * Text to display
   */
  @Input()
  value!: string | null;

  /**
   * Material icon to display
   */
  @Input()
  icon!: string;

  /**
   * Local icon to display
   */
  @Input()
  localIcon!: TaIconType;

  constructor() {
    TaTranslationUI.getInstance();
  }
}
