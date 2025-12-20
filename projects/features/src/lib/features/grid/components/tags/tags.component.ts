import { Component } from '@angular/core';

import { TranslatePipe } from '@ta/translation';
import { BadgeComponent, ButtonComponent, TextComponent } from '@ta/ui';

import { Filter } from '../../models/types';
import { TaAbstractGridComponent } from '../abstract.component';

@Component({
  selector: 'ta-grid-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss'],
  standalone: true,
  imports: [TranslatePipe, BadgeComponent, TextComponent, ButtonComponent],
})
export class TaGridTagsComponent extends TaAbstractGridComponent<unknown> {
  get group() {
    return this._grid.groupBy;
  }
  get activeFilters() {
    return this._grid.filters?.get() ?? [];
  }
  override ngOnInit() {
    super.ngOnInit();
  }

  public remove(filter: Filter) {
    this._grid.filters?.remove(filter);
  }
  public removeGroup() {
    this._grid.clearGroupBy();
  }
  public clear() {
    this._grid.filters?.apply([]);
    this._grid.clearGroupBy();
  }
}
