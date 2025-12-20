import { InputNumber, InputPanel } from '@ta/form-model';

import { Filter } from '../types';
import { BaseCol } from './base-col';

export class NumberCol extends BaseCol<number> {
  public override getInputForm() {
    return new InputPanel({
      key: 'number-panel',
      contentClass: 'row g-0',
      children: [
        new InputNumber({
          key: this.key,
          label: this.inputLabel,
          value: this.filterValues[0],
        }),
      ],
    });
  }

  public override formatInputForm(data: any): Filter | null {
    const value = data[this.key];

    if (!value) {
      return null;
    }

    return {
      field: this.key,
      type: '=',
      value: value,
    };
  }
}
