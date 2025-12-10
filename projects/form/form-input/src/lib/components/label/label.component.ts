import { NgFor } from "@angular/common";
import { Component, Input } from "@angular/core";
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
  @Input()
  input!: { label: string; validators: ValidatorFn[] };

  @Input()
  withMarginBottom: boolean = true;

  public readonly validators = Validators;
}
