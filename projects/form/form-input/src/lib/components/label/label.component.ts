import { NgFor } from "@angular/common";
import { Component, input } from "@angular/core";
import { ValidatorFn, Validators } from "@angular/forms";

import { TranslatePipe } from "@ta/translation";

@Component({
  selector: "ta-form-label",
  templateUrl: "./label.component.html",
  styleUrls: ["./label.component.scss"],
  standalone: true,
  imports: [NgFor, TranslatePipe],
})
export class FormLabelComponent {
  inputModel = input.required<{ label: string; validators: ValidatorFn[] }>({ alias: 'input' });

  withMarginBottom = input<boolean>(true);

  public readonly validators = Validators;
}
