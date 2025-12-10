import { Component } from "@angular/core";

import { InputLabel } from "@ta/form-model";
import { TranslatePipe } from "@ta/translation";

import { TaAbstractInputComponent } from "../../abstract.component";

@Component({
  selector: "ta-input-label",
  templateUrl: "./label.component.html",
  styleUrls: ["./label.component.scss"],
  standalone: true,
  imports: [TranslatePipe],
})
export class LabelComponent extends TaAbstractInputComponent<InputLabel> {
  constructor() {
    super();
  }
}
