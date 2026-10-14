import { Component, input } from "@angular/core";

import { InputBase } from "@ta/form-model";

@Component({
  selector: "ta-input-container",
  templateUrl: "./input-container.component.html",
  styleUrl: "./input-container.component.scss",
  standalone: true,
})
export class InputContainerComponent {
  input = input.required<InputBase<any>>();
}
