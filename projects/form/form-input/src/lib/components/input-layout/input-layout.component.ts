import { NgClass, NgStyle } from "@angular/common";
import { Component, Input } from "@angular/core";

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
  @Input() input!: InputBase<any>;

  @Input() width: string = "100%";
  @Input() height: string = "100%";

  get containerStyles(): { [key: string]: string } {
    return {
      width: this.width,
      height: this.height,
    };
  }
}
