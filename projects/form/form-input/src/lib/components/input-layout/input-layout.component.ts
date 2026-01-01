import { NgClass, NgStyle } from "@angular/common";
import { Component, input } from "@angular/core";

import { InputBase } from "@ta/form-model";

import { FormLabelComponent } from "../label/label.component";
import { InputErrorComponent } from "./input-error/input-error.component";

@Component({
  selector: "ta-input-layout",
  templateUrl: "./input-layout.component.html",
  styleUrls: ["./input-layout.component.scss"],
  standalone: true,
  imports: [FormLabelComponent, InputErrorComponent, NgClass, NgStyle],
})
export class InputLayoutComponent {
  inputModel = input.required<InputBase<any>>({ alias: 'input' });

  width = input<string>("100%");
  height = input<string>("100%");

  get containerStyles(): { [key: string]: string } {
    return {
      width: this.width(),
      height: this.height(),
    };
  }
}
