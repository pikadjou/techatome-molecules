import { InputBase } from '@ta/form-model';
import { TaGridData } from '../grid-data';
import { ColConfig, ColMetaData, Filter } from '../types';
export declare const operatorMap: {
    [key: string]: string;
};
export interface IFilterOptions {
    allow: boolean;
}
export interface IBaseCol {
    scope: string;
    col: ColMetaData<any>;
}
export declare class BaseCol<T> {
    data: IBaseCol;
    model: TaGridData<any>;
    key(): string;
    inputLabel(): string;
    activeFilters(): Filter[];
    filterValues(): T[];
    constructor(data: IBaseCol, model: TaGridData<any>);
    getColConfig(): ColConfig;
    defaultFormatter(row: any): string;
    /** Valeur d'un critère telle que l'affiche son tag. */
    formatFilterValue(value: unknown): string;
    getInputForm(): InputBase<any> | null;
    formatInputForm(data: any): Filter | Filter[] | null;
}
