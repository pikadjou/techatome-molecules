import { Component, Input, TemplateRef } from '@angular/core';

import { CamBaseComponent } from '@ta/utils';

export interface ExpansionPanelInput {
  title: TemplateRef<any>;
  content: TemplateRef<any>;
  context?: object;
}
@Component({
  selector: 'ta-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
})
export class CamExpansionPanelComponent extends CamBaseComponent {
  @Input()
  templates: ExpansionPanelInput[] = [];

  constructor() {
    super();
  }
}
