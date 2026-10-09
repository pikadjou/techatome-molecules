import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';

import { FormComponent } from '@ta/form-basic';
import { InputBase } from '@ta/form-model';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent, TextComponent } from '@ta/ui';
import { PluralTranslatePipe } from '@ta/utils';

import { TaGridFormService } from '../../services/grid-form.services';
import { TaAbstractGridComponent } from '../abstract.component';

@Component({
  selector: 'ta-grid-highlight-filters',
  standalone: true,
  imports: [FormComponent, TranslatePipe, PluralTranslatePipe, ButtonComponent, TextComponent],
  templateUrl: './highlight-filters.component.html',
  styleUrl: './highlight-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGridHighlightFiltersComponent extends TaAbstractGridComponent<unknown> {
  showResultCount = input<boolean>(true);
  showReset = input<boolean>(true);

  public highlightForm = signal<InputBase<any>[]>([]);

  private _formService = inject(TaGridFormService<unknown>);

  /** Lu sur les critères du grid : ceux restaurés à l'ouverture comptent aussi. */
  public hasActiveFilters(): boolean {
    const keys = this._formService.highlightedKeys(this._grid);
    return (this._grid.table?.filters() ?? []).some(filter => keys.includes(filter.field));
  }

  public override ngOnInit() {
    super.ngOnInit();

    this._registerSubscription(
      this.isReady$.subscribe({
        next: () => {
          this._setHighlightForm();
          const filters = this._grid.filters;
          if (filters) {
            this._registerSubscription(filters.reset$.subscribe(() => this._setHighlightForm()));
          }
        },
      })
    );
  }

  public applyFilters(data: any) {
    this._grid.filters?.applyFields(
      this._formService.highlightedKeys(this._grid),
      this._formService.formatFiltersForm(this._grid, data)
    );
  }

  public reset() {
    this._grid.filters?.clear(this._formService.highlightedKeys(this._grid));
  }

  private _setHighlightForm() {
    this.highlightForm.set(this._formService.getHighlightedFiltersForm(this._grid));
  }
}
