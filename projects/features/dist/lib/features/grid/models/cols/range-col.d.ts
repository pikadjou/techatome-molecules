import { InputRangeSlider } from '@ta/form-model';
import { Filter } from '../types';
import { BaseCol } from './base-col';
/** Une fourchette devient deux critères, `>=` et `<=` ; une extrémité en butée ne borne rien. */
export declare class RangeCol extends BaseCol<number> {
    private get _track();
    getInputForm(): InputRangeSlider;
    formatInputForm(data: any): Filter[] | null;
    formatFilterValue(value: unknown): string;
}
