import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { TaSizes } from '@ta/styles';

@Component({
  selector: 'ta-font-icon',
  templateUrl: './font-icon.component.html',
  styleUrls: ['./font-icon.component.scss'],
  standalone: true,
  imports: [NgClass, MatIconModule],
})
export class FontIconComponent {
  public name = input.required<string>();

  public type = input<TaSizes>('md');
}
