import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';

import { FormComponent } from '@ta/form-basic';
import { InputBase } from '@ta/form-model';
import { FontIconComponent } from '@ta/icons';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent, TextComponent } from '@ta/ui';

import { TaGridFormService } from '../../services/grid-form.services';
import { TaAbstractGridComponent } from '../abstract.component';

@Component({
  selector: 'ta-grid-highlight-filters',
  standalone: true,
  imports: [FormComponent, FontIconComponent, TranslatePipe, ButtonComponent, TextComponent],
  templateUrl: './highlight-filters.component.html',
  styleUrl: './highlight-filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaGridHighlightFiltersComponent extends TaAbstractGridComponent<unknown> {
  showResultCount = input<boolean>(true);
  showReset = input<boolean>(true);

  public highlightForm = signal<InputBase<any>[]>([]);
  public hasActiveFilters = signal<boolean>(false);

  private _formService = inject(TaGridFormService<unknown>);

  public override ngOnInit() {
    super.ngOnInit();

    this._registerSubscription(
      this.isReady$.subscribe({
        next: () => {
          this.highlightForm.set(this._formService.getHighlightedFiltersForm(this._grid));
        },
      })
    );
  }

  public applyFilters(data: any) {
    const filters = this._formService.formatFiltersForm(this._grid, data);

    this.hasActiveFilters.set(filters.length > 0);
    this._grid.filters?.apply(filters);
  }

  public reset() {
    this.hasActiveFilters.set(false);
    this._grid.filters?.apply([]);
    this.highlightForm.set(this._formService.getHighlightedFiltersForm(this._grid));
  }
}
