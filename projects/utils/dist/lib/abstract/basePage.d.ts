import { Observable } from 'rxjs';
import { CamAbstractComponent } from './abstractComponent';
import * as i0 from "@angular/core";
export declare abstract class CamBasePage extends CamAbstractComponent {
    constructor();
    protected _getPathParams<T extends object>(data: T): Observable<T>;
    protected _getQueryParams<T extends object>(data: T): Observable<T>;
    private _filterParams;
    private _getParamsTyped;
    static ɵfac: i0.ɵɵFactoryDeclaration<CamBasePage, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CamBasePage, "ng-component", never, {}, {}, never, never, false, never>;
}
