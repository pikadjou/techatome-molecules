import { Component } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { InputWysiswyg } from "@ta/form-model";
import { EditorInputComponent, EditorInputSavedData } from "@ta/wysiswyg";

import { TaAbstractInputComponent } from "../../abstract.component";
import { InputLayoutComponent } from "../../input-layout/input-layout.component";

@Component({
  selector: "ta-input-wysiswyg",
  templateUrl: "./wysiswyg.component.html",
  styleUrls: ["./wysiswyg.component.scss"],
  standalone: true,
  imports: [EditorInputComponent, InputLayoutComponent, ReactiveFormsModule],
})
export class WysiswygComponent extends TaAbstractInputComponent<InputWysiswyg> {
  public set(value: EditorInputSavedData) {
    this.input.value = value.blocks;
  }
  public clear() {
    this.input.value = null;
  }
}
