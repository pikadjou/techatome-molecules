import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { FontIconComponent } from '@ta/icons';
import { ColorType, TaSizes } from '@ta/styles';

export type LabelType = ColorType | 'neutral';

@Component({
  selector: 'ta-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss'],
  standalone: true,
  imports: [FontIconComponent, NgClass],
})
export class LabelComponent {
  size = input<TaSizes>('md');

  type = input<LabelType>('default');

  /** Icône affichée devant le contenu. */
  icon = input<string | undefined>(undefined);

  /** `pill` force la capsule, `theme` suit le rayon du thème. */
  shape = input<'theme' | 'pill'>('theme');

  public getClass(): string {
    return `label-${this.type()} ${this.size()} ${this.shape()}`;
  }
}
