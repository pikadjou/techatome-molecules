import { Component, Input } from '@angular/core';

import { CamState } from '@camelot/styles';
import { CamBaseComponent } from '@camelot/utils';

type Panel = 'left' | 'right' | 'center';

@Component({
  selector: 'cam-layout-flex',
  templateUrl: './layout-flex.component.html',
  styleUrls: ['./layout-flex.component.scss'],
})
export class LayoutFlexComponent extends CamBaseComponent {
  @Input()
  allowClose = false;

  constructor() {
    super();
    this._registerSubscription(
      this.breakpoints.isLessThanLG$.subscribe((value) => {
        if (value) {
          this.view = ['left'];
        } else {
          this.view = ['left', 'right', 'center'];
        }
      })
    );
  }
  public view: Panel[] = ['left', 'right', 'center'];

  public state(panel: Panel): CamState {
    if (!this.onlyOne()) {
      return 'classic';
    }
    return this.has(panel) ? 'disabled' : 'classic';
  }
  public onlyOne() {
    return this.view.length === 1;
  }
  public has(panel: Panel) {
    return this.view.findIndex((v) => v === panel) > -1;
  }

  public toggle(panel: Panel) {
    const index = this.view.findIndex((v) => v === panel);
    if (index === -1) {
      this.view.push(panel);
    } else {
      this.view.splice(index, 1);
    }
  }
}
