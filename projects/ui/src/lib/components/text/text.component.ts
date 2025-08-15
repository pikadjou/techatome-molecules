import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TaSizes } from '@ta/styles';

@Component({
  selector: 'ta-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  standalone: true,
  imports: [NgClass]
})
export class TaTextComponent {

  @Input()
  size: TaSizes = 'md';

  @Input()
  isBold: boolean = false;

  @Input()
  color: string = 'primary';

  public getColorClass() {
    return `text-color-text-${this.color}`;
  }
}
