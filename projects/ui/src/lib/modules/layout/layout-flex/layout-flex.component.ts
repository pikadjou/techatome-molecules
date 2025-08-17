import { AsyncPipe, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { TaState } from '@ta/styles';
import { TaBaseComponent } from '@ta/utils';

import { ButtonComponent } from '../../../components/ui/button/button.component';
import { LayoutFullPanelComponent } from '../layout-full-panel/layout-full-panel.component';

type Panel = 'left' | 'right' | 'center';

@Component({
  selector: 'ta-layout-flex',
  templateUrl: './layout-flex.component.html',
  styleUrls: ['./layout-flex.component.scss'],
  standalone: true,
  imports: [NgIf, AsyncPipe, FontIconComponent, ButtonComponent, LayoutFullPanelComponent],
})
export class LayoutFlexComponent extends TaBaseComponent {
  @Input()
  allowClose = false;

  constructor() {
    super();
    this._registerSubscription(
      this.breakpoints.isLessThanLG$.subscribe(value => {
        if (value) {
          this.view = ['left'];
        } else {
          this.view = ['left', 'right', 'center'];
        }
      })
    );
  }
  public view: Panel[] = ['left', 'right', 'center'];

  public state(panel: Panel): TaState {
    if (!this.onlyOne()) {
      return 'classic';
    }
    return this.has(panel) ? 'disabled' : 'classic';
  }
  public onlyOne() {
    return this.view.length === 1;
  }
  public has(panel: Panel) {
    return this.view.findIndex(v => v === panel) > -1;
  }

  public toggle(panel: Panel) {
    const index = this.view.findIndex(v => v === panel);
    if (index === -1) {
      this.view.push(panel);
    } else {
      this.view.splice(index, 1);
    }
  }
}
