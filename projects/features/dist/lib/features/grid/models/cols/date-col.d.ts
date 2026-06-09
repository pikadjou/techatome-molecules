import { InputDatePicker } from '@ta/form-model';
import { Filter } from '../types';
import { BaseCol } from './base-col';
export declare class DateCol extends BaseCol<Date> {
    getInputForm(): InputDatePicker;
    defaultFormatter(row: any): string;
    formatInputForm(data: any): Filter | null;
}
