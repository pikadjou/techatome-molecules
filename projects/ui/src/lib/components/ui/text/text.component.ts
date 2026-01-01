import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

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
  size = input<TaSizes>('md');

  /**
   *
   * Add bold class to text
   */
  isBold = input<boolean>(false);

  /**
   *
   * Add bold class to text
   */
  color = input<ColorType>('default');

  public getColorClass() {
    return `text-color-text-${this.color()}`;
  }
}
