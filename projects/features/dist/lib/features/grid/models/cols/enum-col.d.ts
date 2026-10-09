import { InputDropdown } from '@ta/form-model';
import { Filter } from '../types';
import { BaseCol } from './base-col';
/** Identifiant de l'option « indifférent » : la choisir retire le critère. */
export declare const GRID_FILTER_ANY = "__any__";
export declare class EnumCol extends BaseCol<string> {
    private _names;
    getInputForm(): InputDropdown<string>;
    formatInputForm(data: any): Filter | null;
    formatFilterValue(value: unknown): string;
}
