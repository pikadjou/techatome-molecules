import { AsyncPipe, NgClass, NgTemplateOutlet } from "@angular/common";
import { Component, input, TemplateRef } from "@angular/core";

import { InputPanel } from "@ta/form-model";
import { TranslatePipe } from "@ta/translation";
import { TitleComponent } from "@ta/ui";
import { TaBaseComponent } from "@ta/utils";

@Component({
  selector: "ta-form-panel",
  templateUrl: "./panel.component.html",
  styleUrls: ["./panel.component.scss"],
  standalone: true,
  imports: [
    NgClass,
    AsyncPipe,
    NgTemplateOutlet,
    TranslatePipe,
    TitleComponent,
  ],
})
export class PanelComponent extends TaBaseComponent {
  inputsTemplate = input.required<TemplateRef<any>>();

  panel = input.required<InputPanel>();

  constructor() {
    super();
  }
}
