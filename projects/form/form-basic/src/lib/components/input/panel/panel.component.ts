import { NgIf, NgFor, NgClass, AsyncPipe } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

import { InputPanel } from '@ta/form-model';
import { TaBaseComponent } from '@ta/utils';

@Component({
selector: 'ta-form-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],,
  standalone: true,
  imports: [NgIf, NgFor, NgClass, AsyncPipe],
})
export class PanelComponent extends TaBaseComponent {
  @Input()
  public inputsTemplate!: TemplateRef<any>;

  @Input() panel!: InputPanel;

  constructor() {
    super();
  }
}
