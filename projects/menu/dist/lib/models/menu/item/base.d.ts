import { TemplateRef } from '@angular/core';
import { QueryParamsHandling } from '@angular/router';
import { Observable } from 'rxjs';
export declare class MenuBase {
    key: string;
    label: string;
    order: number;
    link: string;
    callback?: (data?: any) => void;
    style: string;
    children: MenuBase[];
    visible$: Observable<boolean>;
    defaultOpen: boolean;
    exact: boolean;
    replaceUrl: boolean;
    queryParamsHandling: QueryParamsHandling;
    disabled: boolean;
    translationData?: any;
    endingIcon?: string;
    iconsColor?: string;
    options?: {
        notificationBadge?: {
            label: number;
            style?: string;
        };
        extraTemplate?: TemplateRef<any>;
    };
    constructor(options?: IMenuBaseOption);
    get isMenuPanel(): boolean;
}
export interface IMenuBaseOption {
    key?: string;
    label?: string;
    order?: number;
    link?: string;
    callback?: (data?: any) => void;
    style?: string;
    children?: MenuBase[];
    visible$?: Observable<boolean>;
    defaultOpen?: boolean;
    exact?: boolean;
    replaceUrl?: boolean;
    queryParamsHandling?: QueryParamsHandling;
    disabled?: boolean;
    translationData?: object;
    endingIcon?: string;
    iconsColor?: string;
    options?: {
        notificationBadge?: {
            label: number;
            style?: string;
        };
        extraTemplate?: TemplateRef<any>;
    };
}
