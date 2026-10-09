import { InputCheckBox } from '@ta/form-model';
import { Filter } from '../types';
import { BaseCol } from './base-col';
/** Interrupteur : coché, le critère est demandé ; décoché, il n'est pas envoyé. */
export declare class BoolCol extends BaseCol<boolean> {
    defaultFormatter(row: any): string;
    getInputForm(): InputCheckBox;
    formatInputForm(data: any): Filter | null;
}
