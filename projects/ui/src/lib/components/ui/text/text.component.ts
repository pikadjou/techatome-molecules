import { Component, Input } from '@angular/core';

import { CamSizes } from '@ta/styles';

@Component({
  selector: 'ta-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent {
  /**
   *
   * Add small class to text
   */
  @Input()
  size: CamSizes = 'md';

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
  color: string = 'primary';

  public getColorClass() {
    return `text-color-text-${this.color}`;
  }
}
