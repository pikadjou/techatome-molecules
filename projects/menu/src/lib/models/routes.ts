import { ActivatedRouteSnapshot } from '@angular/router';

export enum TaMainRoute {
  HOME = 'HOME',
  USERLOGIN = 'USERLOGIN',
  SINGIN = 'SINGIN',
  USERLOGOUT = 'USERLOGOUT',
  NOTIFICATIONS = 'NOTIFICATIONS',
  REDIRECT = 'REDIRECT',
}
export interface IRoute {
  key: string;
  url: string;
  canActivate?: boolean;
  children?: IRoute[];
}

export class TaRoutesCore {
  public routes: IRoute[] = [
    {
      key: TaMainRoute.HOME,
      url: '',
    },
    {
      key: TaMainRoute.USERLOGIN,
      url: 'login',
    },
    {
      key: TaMainRoute.SINGIN,
      url: 'signin',
    },
    {
      key: TaMainRoute.USERLOGOUT,
      url: 'logout',
    },
    {
      key: TaMainRoute.NOTIFICATIONS,
      url: 'notifications',
    },
    {
      key: TaMainRoute.REDIRECT,
      url: 'redirect',
    },
  ];

  constructor() {}

  public addRoute(route: IRoute) {
    this.routes.push(route);
  }
  public addRoutes(routes: IRoute[]) {
    routes.forEach(route => this.addRoute(route));
  }
  public getHome() {
    return this.getAbsoluteUrl([TaMainRoute.HOME]);
  }
  public getLogin() {
    return this.getAbsoluteUrl([TaMainRoute.USERLOGIN]);
  }
  public getSign() {
    return this.getAbsoluteUrl([TaMainRoute.SINGIN]);
  }
  public getLogout() {
    return this.getAbsoluteUrl([TaMainRoute.USERLOGOUT]);
  }
  public getUrl(eNums: string[], params: {} = {}, strict = false): string {
    const url = this._replaceParams(this._getUrl(eNums), params);
    return strict ? this._removeParams(url) : url;
  }
  public getAbsoluteUrl(eNums: string[], params: {} = {}, strict = false): string {
    const url = this._replaceParams(this._getUrl(eNums, true), params);
    return strict ? this._removeParams(url) : url;
  }
  public addQueryParamsToUrl(route: ActivatedRouteSnapshot, params: { [index: string]: any } = {}): string {
    const keys = Object.keys(params);

    for (let key of keys) {
      route.params[key] = params[key];
    }
    return route.toString();
  }
  public getPermission(eNums: any[]): boolean {
    const route = this._getRouteByENum(eNums);
    if (route === null) {
      return true;
    } else {
      return route.canActivate === undefined ? true : route.canActivate;
    }
  }

  private _replaceParams(url: string, params: any): string {
    if (!params || Object.keys(params).length === 0) {
      return url;
    }
    // Create regex using the keys of the replacement object.
    const regex = new RegExp(':(' + Object.keys(params).join('|') + ')', 'g');
    // Replace the string by the value in object
    return url.replace(regex, (m, $1) => params[$1] || m);
  }
  private _removeParams(url: string): string {
    const regex = new RegExp('/:([a-zA-Z0-9_]*)', 'g');
    return url.replace(regex, '');
  }
  private _getRouteByENum(eNums: any[]): IRoute | null {
    let route: IRoute | null = null;
    for (const eNum of eNums) {
      route = this._getByENum(route === null ? this.routes : route.children, eNum);
      if (route === null) {
        return null;
      }
    }
    return route;
  }

  private _getUrl(eNums: any[], absolute = false): string {
    let route: IRoute | null = null;
    let url = '';
    for (const eNum of eNums) {
      route = this._getByENum(route === null ? this.routes : route.children, eNum);
      if (route === null) {
        break;
      }
      url += (url === '' ? '' : '/') + route.url;
    }
    return route === null ? '' : absolute === false ? route.url : '/' + url;
  }

  private _getByENum(routes: IRoute[] | null | undefined, eNum: string): IRoute | null {
    if (!routes) {
      return null;
    }
    for (const route of routes) {
      if (route.key === eNum) {
        return route;
      }
    }
    return null;
  }
}
export const TaRoutes = new TaRoutesCore();
