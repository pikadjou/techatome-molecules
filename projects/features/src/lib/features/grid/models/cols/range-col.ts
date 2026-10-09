import { InputRangeSlider, RangeSliderValue } from '@ta/form-model';

import { Filter } from '../types';
import { BaseCol } from './base-col';

/** Une fourchette devient deux critères, `>=` et `<=` ; une extrémité en butée ne borne rien. */
export class RangeCol extends BaseCol<number> {
  private get _track() {
    return { max: 100, min: 0, ...this.data.col.filter?.range };
  }

  public override getInputForm() {
    const track = this._track;
    const bound = (type: Filter['type']) => this.activeFilters().find(filter => filter.type === type)?.value;

    return new InputRangeSlider({
      format: track.format,
      key: this.key(),
      label: this.inputLabel(),
      max: track.max,
      message: this.data.col.filter?.message,
      min: track.min,
      step: track.step,
      value: { max: bound('<=') ?? track.max, min: bound('>=') ?? track.min },
    });
  }

  public override formatInputForm(data: any): Filter[] | null {
    const value = data[this.key()] as RangeSliderValue | null | undefined;
    if (!value) {
      return null;
    }

    const track = this._track;
    const filters: Filter[] = [];
    if (value.min > track.min) {
      filters.push({ field: this.key(), type: '>=', value: value.min });
    }
    if (value.max < track.max) {
      filters.push({ field: this.key(), type: '<=', value: value.max });
    }
    return filters.length ? filters : null;
  }

  public override formatFilterValue(value: unknown): string {
    return this._track.format?.(Number(value), false) ?? String(value);
  }
}
