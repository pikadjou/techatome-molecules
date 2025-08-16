import { Component, Input, TemplateRef } from '@angular/core';

import { InputPanel } from '@ta/form-model';
import { CamBaseComponent } from '@ta/utils';

@Component({
  selector: 'ta-form-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent extends CamBaseComponent {
  @Input()
  public inputsTemplate!: TemplateRef<any>;

  @Input() panel!: InputPanel;

  constructor() {
    super();
  }
}
