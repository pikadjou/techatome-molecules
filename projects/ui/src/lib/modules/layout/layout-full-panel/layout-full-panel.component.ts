import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CamBaseComponent } from '@ta/utils';

@Component({
  selector: 'ta-layout-full-panel',
  templateUrl: './layout-full-panel.component.html',
  styleUrls: ['./layout-full-panel.component.scss'],
})
export class LayoutFullPanelComponent extends CamBaseComponent {
  @Input()
  width = '400px';

  @Input()
  title: string = '';

  @Output()
  closeEvent = new EventEmitter();

  constructor() {
    super();
  }

  public askClose() {
    this.closeEvent.emit();
  }
}
