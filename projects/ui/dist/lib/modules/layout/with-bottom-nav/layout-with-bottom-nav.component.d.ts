import { AfterViewChecked } from '@angular/core';
import { TaSharedMenuService } from '@ta/services';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
export declare class LayoutWithBottomNavComponent extends TaBaseComponent implements AfterViewChecked {
    type: string;
    private _bottomNav;
    private _layoutContent;
    sharedMenu: TaSharedMenuService;
    isMinimized$: import("rxjs").Observable<boolean>;
    constructor();
    ngAfterViewChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutWithBottomNavComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutWithBottomNavComponent, "ta-layout-with-bottom-nav", never, { "type": { "alias": "type"; "required": false; }; }, {}, never, ["*", "ta-layout-nav"], true, never>;
}
