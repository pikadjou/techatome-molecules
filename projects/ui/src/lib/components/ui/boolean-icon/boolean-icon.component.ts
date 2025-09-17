import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { FontIconComponent } from '@ta/icons';
import { TaSizes } from '@ta/styles';

import { TaTranslationUI } from '../translation.service';

@Component({
  selector: 'ta-boolean-icon',
  templateUrl: './boolean-icon.component.html',
  styleUrls: ['./boolean-icon.component.scss'],
  standalone: true,
  imports: [NgClass, FontIconComponent, TranslateModule],
})
export class BooleanIconComponent {
  /**
   * Boolean value to display (can be null or undefined for unknown state)
   */
  @Input()
  value: boolean | null | undefined;

  /**
   * Size of the icon
   */
  @Input()
  size: TaSizes = 'md';

  constructor() {
    TaTranslationUI.getInstance();
  }

  public getIconName(): string {
    return this.value ? 'task_alt' : 'cancel';
  }

  public getClass(): string {
    return `boolean-icon-${this.value ? 'success' : 'error'} ${this.size}`;
  }

  public isNullValue(): boolean {
    return this.value === null || this.value === undefined;
  }
}
