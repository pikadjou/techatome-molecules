import { ColorType, TaSizes } from '@ta/styles';
import * as i0 from "@angular/core";
export declare class ProgressComponent {
    size: import("@angular/core").InputSignal<TaSizes>;
    type: import("@angular/core").InputSignal<ColorType>;
    value: import("@angular/core").InputSignal<number>;
    getClass(): string;
    getProgressStyle(): {
        width: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressComponent, "ta-progress", never, { "size": { "alias": "size"; "required": false; "isSignal": true; }; "type": { "alias": "type"; "required": false; "isSignal": true; }; "value": { "alias": "value"; "required": false; "isSignal": true; }; }, {}, never, ["*"], true, never>;
}
