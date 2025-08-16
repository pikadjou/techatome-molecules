import { Component, Input, TemplateRef } from '@angular/core';

import { CamBaseComponent } from '@camelot/utils';

export interface ExpansionPanelInput {
  title: TemplateRef<any>;
  content: TemplateRef<any>;
  context?: object;
}
@Component({
  selector: 'cam-expansion-panel',
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
