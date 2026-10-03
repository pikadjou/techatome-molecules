import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

import { FontIconComponent } from '@ta/icons';

import { OverlineComponent } from '../overline/overline.component';

/** Teinte de la pastille d'icône. */
export type StatTileTone = 'brand' | 'accent' | 'success' | 'warning' | 'alert' | 'neutral';

/** `value-first` : chiffre en avant ; `label-first` : libellé en capitales au-dessus. */
export type StatTileLayout = 'value-first' | 'label-first';

@Component({
  selector: 'ta-stat-tile',
  templateUrl: './stat-tile.component.html',
  styleUrls: ['./stat-tile.component.scss'],
  standalone: true,
  imports: [FontIconComponent, NgClass, OverlineComponent],
})
export class StatTileComponent {
  icon = input<string | undefined>(undefined);

  label = input<string>('');

  layout = input<StatTileLayout>('value-first');

  tone = input<StatTileTone>('brand');

  value = input<string | number | null | undefined>(undefined);

  public getClasses(): string[] {
    return [this.tone(), this.layout()];
  }
}
