import { BehaviorSubject, Observable } from 'rxjs';
import { Menu, MenuBase } from '../models/public-api';
export declare class FilterHelper {
    refresh$: BehaviorSubject<string>;
    get filter(): string;
    set filter(filter: string);
    private _filter;
    private _items;
    constructor(items: {
        key?: string;
        label: string;
        defaultOpen: boolean;
        order?: number;
        visible$?: Observable<boolean>;
        translationData?: {};
        options?: {
            notificationBadge: {
                label: number;
                style?: string;
            };
        };
    }[]);
    getMenu(): Menu<MenuBase>;
    updateMenuDatas(data: {
        key: string;
        translationData?: object;
        options?: {
            notificationBadge: {
                label: number;
                style?: string;
            };
        };
        visible$?: Observable<boolean>;
    }[]): void;
    private _getKey;
}
