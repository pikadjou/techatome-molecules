import * as i0 from "@angular/core";
export declare class TitleComponent {
    /**
     * Title level
     * Higher value means lower title size
     */
    level: import("@angular/core").InputSignal<2 | 5 | 1 | 3 | 4 | 6>;
    /**
     * Title theme
     * If set to true, title will be themed with CSS
     */
    isTheme: import("@angular/core").InputSignal<boolean>;
    isBold: import("@angular/core").InputSignal<boolean>;
    icon: import("@angular/core").InputSignal<string | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TitleComponent, "ta-title", never, { "level": { "alias": "level"; "required": false; "isSignal": true; }; "isTheme": { "alias": "isTheme"; "required": false; "isSignal": true; }; "isBold": { "alias": "isBold"; "required": false; "isSignal": true; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
