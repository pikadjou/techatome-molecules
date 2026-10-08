import { InputLocality } from '@ta/form-model';
import { AddressLocality } from '@ta/utils';

import { Filter } from '../types';
import { BaseCol } from './base-col';

/** Localités prises dans la liste officielle ; le critère porte la liste entière. */
export class LocalityCol extends BaseCol<AddressLocality[]> {
  public override getInputForm() {
    return new InputLocality({
      key: this.key(),
      label: this.inputLabel(),
      message: this.data.col.filter?.message,
      multiple: true,
      value: this.filterValues()[0] ?? [],
    });
  }

  public override formatInputForm(data: any): Filter | null {
    const value = data[this.key()] as AddressLocality[] | null | undefined;
    if (!value?.length) {
      return null;
    }

    return { field: this.key(), type: 'in', value };
  }

  public override formatFilterValue(value: unknown): string {
    return ((value as AddressLocality[] | null) ?? [])
      .map(locality => `${locality.zipCode} ${locality.city}`)
      .join(', ');
  }
}
