import { ActivatedRouteSnapshot } from '@angular/router';
export declare enum TaMainRoute {
    HOME = "HOME",
    USERLOGIN = "USERLOGIN",
    SINGIN = "SINGIN",
    USERLOGOUT = "USERLOGOUT",
    NOTIFICATIONS = "NOTIFICATIONS",
    REDIRECT = "REDIRECT"
}
export interface IRoute {
    key: string;
    url: string;
    canActivate?: boolean;
    children?: IRoute[];
}
export declare class TaRoutesCore {
    routes: IRoute[];
    constructor();
    addRoute(route: IRoute): void;
    addRoutes(routes: IRoute[]): void;
    getHome(): string;
    getLogin(): string;
    getSign(): string;
    getLogout(): string;
    getUrl(eNums: string[], params?: {}, strict?: boolean): string;
    getAbsoluteUrl(eNums: string[], params?: {}, strict?: boolean): string;
    addQueryParamsToUrl(route: ActivatedRouteSnapshot, params?: {
        [index: string]: any;
    }): string;
    getPermission(eNums: any[]): boolean;
    private _replaceParams;
    private _removeParams;
    private _getRouteByENum;
    private _getUrl;
    private _getByENum;
}
export declare const TaRoutes: TaRoutesCore;
