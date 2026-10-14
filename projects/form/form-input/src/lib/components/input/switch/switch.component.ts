import { Component } from "@angular/core";

import { InputSwitch } from "@ta/form-model";
import { TranslatePipe } from "@ta/translation";

import { TaTranslationInput } from "../../../translation.service";
import { TaAbstractInputComponent } from "../../abstract.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { DatePickerComponent } from "../date-picker/date-picker.component";
import { DropdownComponent } from "../dropdown/dropdown.component";
import { TextBoxComponent } from "../textbox/text-box.component";

@Component({
  selector: "ta-input-switch",
  templateUrl: "./switch.component.html",
  styleUrl: "./switch.component.scss",
  standalone: true,
  imports: [
    TextBoxComponent,
    CheckboxComponent,
    DatePickerComponent,
    DropdownComponent,
    TranslatePipe,
  ],
})
export class SwitchComponent extends TaAbstractInputComponent<InputSwitch> {
  constructor() {
    super();
    TaTranslationInput.getInstance();
  }
}
