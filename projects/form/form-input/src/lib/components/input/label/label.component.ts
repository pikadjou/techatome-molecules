import { Component } from "@angular/core";

import { FontIconComponent } from "@ta/icons";
import { InputLabel } from "@ta/form-model";
import { TextComponent, TitleComponent } from "@ta/ui";
import { TranslatePipe } from "@ta/translation";

import { TaAbstractInputComponent } from "../../abstract.component";

@Component({
  selector: "ta-input-label",
  templateUrl: "./label.component.html",
  styleUrls: ["./label.component.scss"],
  standalone: true,
  imports: [TranslatePipe, TitleComponent, TextComponent, FontIconComponent],
})
export class LabelComponent extends TaAbstractInputComponent<InputLabel> {
  constructor() {
    super();
  }
}
