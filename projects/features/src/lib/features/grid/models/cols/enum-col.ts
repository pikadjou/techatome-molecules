import { map, of } from 'rxjs';

import { InputDropdown } from '@ta/form-model';

import { Filter } from '../types';
import { BaseCol } from './base-col';

/** Identifiant de l'option « indifférent » : la choisir retire le critère. */
export const GRID_FILTER_ANY = '__any__';

export class EnumCol extends BaseCol<string> {
  private _names = new Map<string, string>();

  public override getInputForm() {
    const filter = this.data.col.filter;
    const options$ = (
      filter?.options$ ?? of(this.data.col.enumValues?.map(value => ({ id: value, name: value })) ?? [])
    ).pipe(
      map(options => {
        options.forEach(option => this._names.set(option.id, option.name));
        return filter?.anyLabel ? [{ id: GRID_FILTER_ANY, name: filter.anyLabel }, ...options] : options;
      })
    );
    const value = this.filterValues()[0];

    return new InputDropdown({
      key: this.key(),
      label: this.inputLabel(),
      message: filter?.message,
      options$,
      value: value !== undefined ? String(value) : filter?.anyLabel ? GRID_FILTER_ANY : undefined,
    });
  }

  public override formatInputForm(data: any): Filter | null {
    const value = data[this.key()];

    if (!value || value === GRID_FILTER_ANY) {
      return null;
    }

    return {
      field: this.key(),
      type: this.data.col.filter?.operator ?? '=',
      value: value,
    };
  }

  public override formatFilterValue(value: unknown): string {
    return this._names.get(String(value)) ?? String(value);
  }
}
