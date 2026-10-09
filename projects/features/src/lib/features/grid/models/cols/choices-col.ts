import { map, of } from 'rxjs';

import { InputChoices } from '@ta/form-model';

import { Filter } from '../types';
import { BaseCol } from './base-col';

/** Plusieurs options parmi une liste connue ; le critère porte leurs identifiants. */
export class ChoicesCol extends BaseCol<string[]> {
  private _names = new Map<string, string>();

  public override getInputForm() {
    const filter = this.data.col.filter;
    const template = filter?.choiceTemplate;

    return new InputChoices({
      choiceTemplate: template ? { list: template } : undefined,
      key: this.key(),
      label: this.inputLabel(),
      message: filter?.message,
      multiple: true,
      onlyTemplate: !!template,
      options$: (filter?.options$ ?? of([])).pipe(
        map(options =>
          options.map(option => {
            this._names.set(option.id, option.name);
            return { data: option.data ?? option.id, id: option.id, name: option.name };
          })
        )
      ),
      value: this.filterValues()[0] ?? [],
      withSearch: true,
    });
  }

  public override formatInputForm(data: any): Filter | null {
    const value = data[this.key()] as string[] | null | undefined;
    if (!value?.length) {
      return null;
    }

    return { field: this.key(), type: 'in', value };
  }

  public override formatFilterValue(value: unknown): string {
    return ((value as string[] | null) ?? []).map(id => this._names.get(id) ?? id).join(', ');
  }
}
