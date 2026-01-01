import { Component, inject, input } from '@angular/core';

import { TextBoxComponent } from '@ta/form-input';
import { InputTextBox } from '@ta/form-model';

import { Filter } from '../../models/types';
import { TaGridSessionService } from '../../services/grid-session.services';
import { gridSearchFieldsName } from '../../services/grid-view.service';
import { TaAbstractGridComponent } from '../abstract.component';

@Component({
  selector: 'ta-grid-search',
  standalone: true,
  imports: [TextBoxComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class TaGridSearchComponent extends TaAbstractGridComponent<any> {
  outOfBox = input<boolean>(false);

  public input = new InputTextBox();

  private _session = inject(TaGridSessionService);

  constructor() {
    super();
    this.input.createFormControl();
  }
  public valueChanged(value: string) {
    const filters: Filter[] = [
      {
        field: gridSearchFieldsName,
        type: 'like',
        value: value.trim(),
      },
    ];
    if (this.outOfBox()) {
      this._session.setFilter(this.gridId(), filters);
    } else {
      this.grid.filters?.apply(filters);
    }
  }
}
