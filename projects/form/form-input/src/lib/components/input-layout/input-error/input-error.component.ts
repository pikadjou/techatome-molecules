import { Component, Input } from "@angular/core";

import { InputBase } from "@ta/form-model";
import { TranslatePipe } from "@ta/translation";

@Component({
  selector: "ta-input-error",
  templateUrl: "./input-error.component.html",
  styleUrls: ["./input-error.component.scss"],
  standalone: true,
  imports: [TranslatePipe],
})
export class InputErrorComponent {
  @Input() input!: InputBase<any>;
}
