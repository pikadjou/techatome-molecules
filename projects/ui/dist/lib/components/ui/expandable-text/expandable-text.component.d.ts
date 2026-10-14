import * as i0 from "@angular/core";
export declare class ExpandableTextComponent {
    height: import("@angular/core").InputSignal<number>;
    showFullText: boolean;
    showButton: boolean;
    private readonly _myText;
    constructor();
    get textHeight(): string;
    get hasFixedHeight(): boolean;
    get hasTooBigText(): boolean;
    toggleText(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpandableTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpandableTextComponent, "ta-expandable-text", never, { "height": { "alias": "height"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
