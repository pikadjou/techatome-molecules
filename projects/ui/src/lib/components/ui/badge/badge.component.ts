import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { FontIconComponent } from '@ta/icons';

import { TaTranslationUI } from '../translation.service';

export type BadgeType = 'danger' | 'warning' | 'success' | 'primary' | 'secondary' | 'info' | 'purple' | 'orange';
@Component({
  selector: 'ta-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss'],
  standalone: true,
  imports: [NgIf, NgClass, FontIconComponent, TranslateModule],
})
export class BadgeComponent {
  /**
   * Text to display in badge
   */
  @Input()
  value!: string;

  /**
   * Style of badge
   */
  @Input()
  type: BadgeType = 'primary';

  /**
   * @deprecated
   * showClickOption
   */
  @Input()
  showClickOption = false;

  @Input()
  icon?: string;

  @Output()
  clickAction = new EventEmitter();

  constructor() {
    TaTranslationUI.getInstance();
  }

  public getClass(): string {
    return `badge-${this.type}`;
  }

  public click() {
    this.clickAction.emit();
  }
}
