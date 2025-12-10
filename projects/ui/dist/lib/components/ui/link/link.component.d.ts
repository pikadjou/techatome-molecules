import { EventEmitter } from "@angular/core";
import { TaSizes, TaState } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class LinkComponent {
    state: TaState;
    underline?: boolean;
    bold: boolean;
    size: TaSizes;
    icon: string | null;
    action: EventEmitter<any>;
    constructor();
    handleClick(): void;
    getClass(): {
        [index: string]: boolean;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<LinkComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<LinkComponent, "ta-link", never, { "state": { "alias": "state"; "required": false; }; "underline": { "alias": "underline"; "required": false; }; "bold": { "alias": "bold"; "required": false; }; "size": { "alias": "size"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; }, { "action": "action"; }, never, ["*"], true, never>;
}
