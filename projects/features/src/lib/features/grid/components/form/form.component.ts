import { Component, inject, input, signal } from '@angular/core';

import { FormComponent } from '@ta/form-basic';
import { InputBase } from '@ta/form-model';
import { TranslatePipe } from '@ta/translation';
import { ButtonComponent, TextComponent, TitleComponent } from '@ta/ui';
import { PluralTranslatePipe } from '@ta/utils';

import { TaGridFormService } from '../../services/grid-form.services';
import { TaAbstractGridComponent } from '../abstract.component';

@Component({
  selector: 'ta-grid-form',
  standalone: true,
  imports: [FormComponent, TitleComponent, TextComponent, TranslatePipe, PluralTranslatePipe, ButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class TaGridFormComponent extends TaAbstractGridComponent<unknown> {
  showTitle = input<boolean>(true);
  showReset = input<boolean>(true);

  /** Clé de traduction du titre du panneau. */
  title = input<string>('grid.form.title');

  /** Affiche le nombre de résultats à côté du titre. */
  showResultCount = input<boolean>(true);

  /**
   * Affiche le regroupement dans le panneau. Désactivé par défaut : le
   * regroupement organise l'affichage, il est porté par `ta-grid-control`.
   */
  showGroup = input<boolean>(false);

  public filtersForm = signal<InputBase<any>[]>([]);
  public groupForm = signal<InputBase<any>[]>([]);

  private _formService = inject(TaGridFormService<unknown>);

  public override ngOnInit() {
    super.ngOnInit();

    this._registerSubscription(
      this.isReady$.subscribe({
        next: () => {
          this._setFiltersForm();
          this.groupForm.set(this._formService.getGroupForm(this._grid));
          const filters = this._grid.filters;
          if (filters) {
            this._registerSubscription(filters.reset$.subscribe(() => this._setFiltersForm()));
          }
        },
      })
    );
  }

  public applyFilters(data: any) {
    this._grid.filters?.applyFields(
      this._formService.filterKeys(this._grid),
      this._formService.formatFiltersForm(this._grid, data)
    );
  }

  public applyGroup(data: any) {
    const group = this._formService.formatGroupForm(data);

    if (!group) {
      this._grid.clearGroupBy();
      return;
    }
    this._grid.setGroupBy(group);
  }

  public reset() {
    this._grid.filters?.clear(this._formService.filterKeys(this._grid));
    if (this.showGroup()) {
      this._grid.clearGroupBy();
    }
  }

  private _setFiltersForm() {
    this.filtersForm.set(this._formService.getFiltersForm(this._grid));
  }
}
