import { InputLocality } from '@ta/form-model';
import { AddressLocality } from '@ta/utils';
import { Filter } from '../types';
import { BaseCol } from './base-col';
/** Localités prises dans la liste officielle ; le critère porte la liste entière. */
export declare class LocalityCol extends BaseCol<AddressLocality[]> {
    getInputForm(): InputLocality<AddressLocality[]>;
    formatInputForm(data: any): Filter | null;
    formatFilterValue(value: unknown): string;
}
