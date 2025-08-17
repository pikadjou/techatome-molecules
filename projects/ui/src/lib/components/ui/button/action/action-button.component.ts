import { NgIf, NgFor, NgClass } from '@angular/common';
import { FontIconComponent, LocalIconComponent } from '@ta/icons';
import { Component, Input } from '@angular/core';

import { getFontIcon, isFontIcon, isLocalIcon } from '@ta/icons';

import { ActionButtonData } from './action-button-data';

@Component({
selector: 'ta-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, NgClass, FontIconComponent, LocalIconComponent],
})
export class ActionButtonComponent {
  /**
   * List of action available
   */
  @Input() actions!: ActionButtonData[];

  public isFontIcon(action: ActionButtonData): boolean {
    return isFontIcon(action.icon);
  }

  public getFontIcon(action: ActionButtonData): string {
    return getFontIcon(action.icon);
  }

  public isLocalIcon(action: ActionButtonData): boolean {
    return isLocalIcon(action.icon);
  }

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
