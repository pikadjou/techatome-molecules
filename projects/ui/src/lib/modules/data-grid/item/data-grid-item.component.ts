import { Component, input } from '@angular/core';

import { FontIconComponent } from '@ta/icons';

/** Cellule de `ta-data-grid` : un libellé, une valeur projetée. */
@Component({
  selector: 'ta-data-grid-item',
  templateUrl: './data-grid-item.component.html',
  styleUrls: ['./data-grid-item.component.scss'],
  standalone: true,
  imports: [FontIconComponent],
})
export class DataGridItemComponent {
  /** Icône affichée avant le libellé. */
  icon = input<string | undefined>(undefined);

  label = input<string>('');
}
