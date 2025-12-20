import { Component, inject, signal } from '@angular/core';

import { FormComponent } from '@ta/form-basic';
import { InputBase } from '@ta/form-model';
import { TranslatePipe } from '@ta/translation';
import { TitleComponent } from '@ta/ui';

import { TaGridFormService } from '../../services/grid-form.services';
import { TaAbstractGridComponent } from '../abstract.component';

@Component({
  selector: 'ta-grid-form',
  standalone: true,
  imports: [FormComponent, TitleComponent, TranslatePipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class TaGridFormComponent extends TaAbstractGridComponent<unknown> {
  public filtersForm = signal<InputBase<any>[]>([]);
  public groupForm = signal<InputBase<any>[]>([]);

  private _formService = inject(TaGridFormService<unknown>);

  public override ngOnInit() {
    super.ngOnInit();

    this._registerSubscription(
      this.isReady$.subscribe({
        next: () => {
          this.filtersForm.set(this._formService.getFiltersForm(this._grid));
          this.groupForm.set(this._formService.getGroupForm(this._grid));
        },
      })
    );
  }

  public applyFilters(data: any) {
    const filters = this._formService.formatFiltersForm(this._grid, data);

    this._grid.filters?.apply(filters);
  }
  public applyGroup(data: any) {
    const group = this._formService.formatGroupForm(data);

    if (!group) {
      this._grid.clearGroupBy();
      return;
    }
    this._grid.setGroupBy(group);
  }
}
