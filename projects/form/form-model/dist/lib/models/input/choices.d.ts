import { TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { IInputDropdown, InputDropdown } from './dropdown';
export type InputChoicesOption = {
    id: string;
    name: string;
    disabled?: boolean;
    data: any;
};
export interface IInputChoicesListTemplate<T> {
    data: {
        items: {
            id: string;
            name: string;
            disabled?: boolean;
            data: T;
        }[];
        isselected: (option: {
            id: string;
        }) => boolean;
        select: (option: {
            id: string;
        }) => void;
        search: string | null;
        refresh: () => void;
        values: string[];
    };
}
export interface IInputChoices extends IInputDropdown<string[]> {
    onlyTemplate?: boolean;
    options$?: Observable<InputChoicesOption[]>;
    advancedSearch$?: (search?: string) => Observable<InputChoicesOption[]>;
    choiceTemplate?: {
        one?: TemplateRef<any>;
        list?: TemplateRef<any>;
    };
    showNullableFields?: boolean;
}
export declare class InputChoices extends InputDropdown<string[]> {
    controlType: string;
    options$: Observable<InputChoicesOption[]>;
    onlyTemplate?: boolean;
    advancedSearch$: ((search?: string) => Observable<InputChoicesOption[]>) | null;
    choiceTemplate?: {
        one?: TemplateRef<any>;
        list?: TemplateRef<any>;
    };
    showNullableFields: boolean;
    constructor(options?: IInputChoices);
}
