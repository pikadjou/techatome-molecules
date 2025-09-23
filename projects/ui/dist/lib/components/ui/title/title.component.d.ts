import * as i0 from "@angular/core";
export declare class TitleComponent {
    /**
     * Title level
     * Higher value means lower title size
     */
    level: 1 | 2 | 3 | 4 | 5 | 6;
    /**
     * Title theme
     * If set to true, title will be themed with CSS
     */
    isTheme: boolean;
    isBold: boolean;
    icon: import("@angular/core").InputSignal<string | undefined>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<TitleComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TitleComponent, "ta-title", never, { "level": { "alias": "level"; "required": false; }; "isTheme": { "alias": "isTheme"; "required": false; }; "isBold": { "alias": "isBold"; "required": false; }; "icon": { "alias": "icon"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
