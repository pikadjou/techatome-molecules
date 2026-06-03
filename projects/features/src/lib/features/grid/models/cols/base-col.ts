import { InputBase } from '@ta/form-model';

import { TaGridData } from '../grid-data';
import { ColConfig, ColMetaData, Filter } from '../types';

export const operatorMap: { [key: string]: string } = {
  contains: '%',
  greaterThan: '>',
  lessThan: '<',
  equals: '=',
  notEqual: '!=',
  greaterThanOrEqual: '>=',
  lessThanOrEqual: '<=',
};
export interface IFilterOptions {
  allow: boolean;
}
export interface IBaseCol {
  scope: string;
  col: ColMetaData;
}

export class BaseCol<T> {
  public data: IBaseCol;
  public model: TaGridData<any>;

  get key() {
    return this.data.col.name;
  }

  get inputLabel() {
    return `grid.${this.data.scope}.core.${this.data.col.name}`;
  }
  get filterValues(): T[] {
    return (
      this.model.filters
        ?.get()
        .find(filter => filter.key === this.key)
        ?.values.map(f => f.value) || []
    );
  }
  constructor(data: IBaseCol, model: TaGridData<any>) {
    this.data = data;
    this.model = model;
  }

  public getColConfig(): ColConfig {
    return {
      key: this.key as string,
      title: this.inputLabel,
      sortable: true,
      width: this.data.col.width,
      template: this.data.col.template as any,
    };
  }

  public defaultFormatter(row: any): string {
    const value = row[this.key as string];
    return value != null ? String(value) : '';
  }

  public getInputForm(): InputBase<any> | null {
    return null;
  }
  public formatInputForm(data: any): Filter | null {
    const value = data[this.key];

    if (!value) {
      return null;
    }

    return {
      field: this.key as string,
      type: '=',
      value: value.trim(),
    };
  }
}
