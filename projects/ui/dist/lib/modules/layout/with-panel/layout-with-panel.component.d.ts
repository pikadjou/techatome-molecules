import { AfterViewInit, OnChanges, SimpleChanges } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import * as i0 from "@angular/core";
export declare class LayoutWithPanelComponent implements OnChanges, AfterViewInit {
    open: import("@angular/core").InputSignal<boolean>;
    drawer: MatDrawer | null;
    constructor();
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    manageDrawer(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutWithPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutWithPanelComponent, "ta-layout-with-panel", never, { "open": { "alias": "open"; "required": true; "isSignal": true; }; }, {}, never, ["ta-layout-panel", "ta-layout-content"], true, never>;
}
