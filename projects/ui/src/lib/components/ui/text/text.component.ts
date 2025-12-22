import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

import { ColorType, TaSizes } from '@ta/styles';

@Component({
  selector: 'ta-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class TextComponent {
  /**
   *
   * Add small class to text
   */
  @Input()
  size: TaSizes = 'md';

  /**
   *
   * Add bold class to text
   */
  @Input()
  isBold: boolean = false;

  /**
   *
   * Add bold class to text
   */
  @Input()
  color: ColorType = 'default';

  public getColorClass() {
    return `text-color-text-${this.color}`;
  }
}
