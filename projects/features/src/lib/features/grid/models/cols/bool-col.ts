import { InputCheckBox } from '@ta/form-model';

import { Filter } from '../types';
import { BaseCol } from './base-col';

/** Interrupteur : coché, le critère est demandé ; décoché, il n'est pas envoyé. */
export class BoolCol extends BaseCol<boolean> {
  public override defaultFormatter(row: any): string {
    const value = row[this.key() as string];
    if (value == null) return '';
    return value ? '✓' : '✗';
  }

  public override getInputForm() {
    return new InputCheckBox({
      key: this.key(),
      label: this.inputLabel(),
      message: this.data.col.filter?.message,
      toggle: true,
      value: this.filterValues()[0] === true,
    });
  }

  public override formatInputForm(data: any): Filter | null {
    if (data[this.key()] !== true) {
      return null;
    }

    return {
      field: this.key(),
      type: this.data.col.filter?.operator ?? '=',
      value: true,
    };
  }
}
