import { Component } from "@angular/core";

import { InputSwitch } from "@ta/form-model";

import { TaAbstractInputComponent } from "../../abstract.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { DatePickerComponent } from "../date-picker/date-picker.component";
import { DropdownComponent } from "../dropdown/dropdown.component";
import { TextBoxComponent } from "../textbox/text-box.component";

@Component({
  selector: "ta-input-switch",
  templateUrl: "./switch.component.html",
  styleUrls: ["./switch.component.scss"],
  standalone: true,
  imports: [
    TextBoxComponent,
    CheckboxComponent,
    DatePickerComponent,
    DropdownComponent,
  ],
})
export class SwitchComponent extends TaAbstractInputComponent<InputSwitch> {
  constructor() {
    super();
  }
}
