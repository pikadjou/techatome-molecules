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
    get key(): string;
    get inputLabel(): string;
    get filterValues(): T[];
    constructor(data: IBaseCol, model: TaGridData<any>);
    getColConfig(): ColConfig;
    defaultFormatter(row: any): string;
    getInputForm(): InputBase<any> | null;
    formatInputForm(data: any): Filter | null;
}
