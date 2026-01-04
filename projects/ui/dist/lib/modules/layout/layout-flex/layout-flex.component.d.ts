import { TaState } from "@ta/styles";
import { TaBaseComponent } from "@ta/utils";
import * as i0 from "@angular/core";
type Panel = "left" | "right" | "center";
export declare class LayoutFlexComponent extends TaBaseComponent {
    allowClose: import("@angular/core").InputSignal<boolean>;
    constructor();
    view: Panel[];
    state(panel: Panel): TaState;
    onlyOne(): boolean;
    has(panel: Panel): boolean;
    toggle(panel: Panel): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LayoutFlexComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LayoutFlexComponent, "ta-layout-flex", never, { "allowClose": { "alias": "allowClose"; "required": false; "isSignal": true; }; }, {}, never, ["[header-left]", "[header-center]", "[header-right]", "[left]", "[center]", "[right]"], true, never>;
}
export {};
