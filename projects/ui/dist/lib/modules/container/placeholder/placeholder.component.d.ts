import { Placeholder } from "./config";
import * as i0 from "@angular/core";
export declare class PlaceholderComponent {
    placeholder: Placeholder;
    constructor();
    getFakeArray(num: number): Array<number>;
    getColClass(gridSize: number | undefined): string;
    getAttributesClass(attributes: string[]): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<PlaceholderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PlaceholderComponent, "ta-placeholder", never, { "placeholder": { "alias": "placeholder"; "required": false; }; }, {}, never, never, true, never>;
}
