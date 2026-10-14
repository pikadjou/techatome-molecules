import { Component, input } from "@angular/core";

import { InputBase } from "@ta/form-model";
import { TranslatePipe } from "@ta/translation";

@Component({
  selector: "ta-input-error",
  templateUrl: "./input-error.component.html",
  styleUrl: "./input-error.component.scss",
  standalone: true,
  imports: [TranslatePipe],
})
export class InputErrorComponent {
  input = input.required<InputBase<any>>();
}
