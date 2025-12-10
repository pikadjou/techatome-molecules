import { NgFor } from "@angular/common";
import { Component, Input, TemplateRef } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";

import { TaBaseComponent } from "@ta/utils";

export interface ExpansionPanelInput {
  title: TemplateRef<any>;
  content: TemplateRef<any>;
  context?: object;
}
@Component({
  selector: "ta-expansion-panel",
  templateUrl: "./expansion-panel.component.html",
  styleUrls: ["./expansion-panel.component.scss"],
  standalone: true,
  imports: [NgFor, MatExpansionModule],
})
export class TaExpansionPanelComponent extends TaBaseComponent {
  @Input()
  templates: ExpansionPanelInput[] = [];

  constructor() {
    super();
  }
}
