import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { ActionButtonData } from './action-button-data';

@Component({
  selector: 'ta-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, MatIconModule],
})
export class ActionButtonComponent {
  /**
   * List of action available
   */
  @Input() actions!: ActionButtonData[];


  public isOpen: boolean = false;

  public openBullet(): void {
    if (this.actions.length === 0) {
      return;
    }
    if (this.actions.length > 1) {
      // more than one feature, we open all options
      this.isOpen = !this.isOpen;
      return;
    }

    const action: ActionButtonData = this.actions[0];
    action.callback();
  }
}
