import { InputTextBox } from '@ta/form-model';
import { Filter } from '../types';
import { BaseCol } from './base-col';
export declare class StringCol extends BaseCol<string> {
    getInputForm(): InputTextBox<string>;
    formatInputForm(data: any): Filter | null;
}
