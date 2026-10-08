import { format } from 'date-fns';

import { InputDatePicker } from '@ta/form-model';

import { Filter } from '../types';
import { BaseCol } from './base-col';

export class DateCol extends BaseCol<Date> {
  public override getInputForm() {
    const filter = this.data.col.filter;

    // Avec un opérateur, une seule date bornée (« au plus tôt le… ») plutôt qu'un jour exact.
    if (filter?.operator) {
      return new InputDatePicker({
        key: this.key(),
        label: this.inputLabel(),
        message: filter.message,
        minDate: filter.minDate,
        value: this.filterValues()[0] ? String(this.filterValues()[0]) : undefined,
      });
    }

    return new InputDatePicker({
      key: this.key(),
      label: this.inputLabel(),
      rangeEnabled: true,
      value: this.filterValues()[0] ? { start: this.filterValues()[0] } : undefined,
    });
  }

  public override defaultFormatter(row: any): string {
    const value = row[this.key() as string];
    if (!value) return '';
    const date = new Date(value);
    if (isNaN(date.getTime())) return String(value);
    return format(date, 'dd/MM/yyyy');
  }

  public override formatInputForm(data: any): Filter | null {
    const value = data[this.key()];

    if (!value) {
      return null;
    }

    const operator = this.data.col.filter?.operator;
    if (operator) {
      return {
        field: this.key() as string,
        type: operator,
        value: format(new Date(value), 'yyyy-MM-dd'),
      };
    }

    return {
      field: this.key() as string,
      type: 'like',
      value: format(value, 'yyyy-MM-dd') + '%',
    };
  }
}
