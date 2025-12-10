import { Component } from "@angular/core";

import { InputTextBox } from "@ta/form-model";

import { TaAbstractInputComponent } from "../../abstract.component";

@Component({
  selector: "ta-input-color-picker",
  templateUrl: "./color-picker.component.html",
  styleUrls: ["./color-picker.component.scss"],
  standalone: true,
})
export class ColorPickerComponent extends TaAbstractInputComponent<InputTextBox> {
  constructor() {
    super();
  }

  public onChangeValue(value: string) {
    this.input.formControl?.setValue(value);
  }
}
