import { ColorType, TaSizes } from '@ta/styles';
import * as i0 from "@angular/core";
export declare class ProgressComponent {
    size: TaSizes;
    type: ColorType;
    value: number;
    getClass(): string;
    getProgressStyle(): {
        width: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressComponent, "ta-progress", never, { "size": { "alias": "size"; "required": false; }; "type": { "alias": "type"; "required": false; }; "value": { "alias": "value"; "required": false; }; }, {}, never, ["*"], true, never>;
}
