import { Component, input } from '@angular/core';

import { SearchFieldComponent } from '@ta/form-input';
import { InputTextBox } from '@ta/form-model';

import { Filter } from '../../models/types';
import { gridSearchFieldsName } from '../../services/grid-view.service';
import { TaAbstractGridComponent } from '../abstract.component';

@Component({
  selector: 'ta-grid-search',
  standalone: true,
  imports: [SearchFieldComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class TaGridSearchComponent extends TaAbstractGridComponent<any> {
  placeholder = input<string>('grid.search.placeholder');

  public searchInput = new InputTextBox();

  public valueChanged(value: string) {
    const trimmed = (value ?? '').trim();
    const filters: Filter[] = trimmed
      ? [{ field: gridSearchFieldsName, type: 'like', value: trimmed }]
      : [];

    this.grid.filters?.apply(filters);
  }
}
