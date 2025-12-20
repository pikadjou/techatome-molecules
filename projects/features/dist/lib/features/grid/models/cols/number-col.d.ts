import { InputPanel } from '@ta/form-model';
import { Filter } from '../types';
import { BaseCol } from './base-col';
export declare class NumberCol extends BaseCol<number> {
    getInputForm(): InputPanel;
    formatInputForm(data: any): Filter | null;
}
