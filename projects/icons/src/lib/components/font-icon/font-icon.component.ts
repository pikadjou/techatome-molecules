import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

import { TaSizes } from '../../types/sizes';

@Component({
  selector: 'ta-font-icon',
  templateUrl: './font-icon.component.html',
  styleUrls: ['./font-icon.component.scss'],
  standalone: true,
  imports: [NgClass],
})
export class FontIconComponent {
  @Input()
  public name!: string;

  @Input()
  public type: TaSizes | 'xl' | 'big' = 'md';
}
