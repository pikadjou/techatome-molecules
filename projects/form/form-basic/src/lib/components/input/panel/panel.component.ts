import { AsyncPipe, NgClass, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

import { InputPanel } from '@ta/form-model';
import { TaBaseComponent, TranslatePipe } from '@ta/utils';

@Component({
  selector: 'ta-form-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, NgTemplateOutlet, NgClass, AsyncPipe, TranslatePipe],
})
export class PanelComponent extends TaBaseComponent {
  @Input()
  public inputsTemplate!: TemplateRef<any>;

  @Input() panel!: InputPanel;

  constructor() {
    super();
  }
}
