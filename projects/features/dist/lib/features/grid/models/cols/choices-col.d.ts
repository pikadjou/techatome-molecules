import { InputChoices } from '@ta/form-model';
import { Filter } from '../types';
import { BaseCol } from './base-col';
/** Plusieurs options parmi une liste connue ; le critère porte leurs identifiants. */
export declare class ChoicesCol extends BaseCol<string[]> {
    private _names;
    getInputForm(): InputChoices;
    formatInputForm(data: any): Filter | null;
    formatFilterValue(value: unknown): string;
}
