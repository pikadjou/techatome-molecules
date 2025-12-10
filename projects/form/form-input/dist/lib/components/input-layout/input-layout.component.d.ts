import { InputBase } from "@ta/form-model";
import * as i0 from "@angular/core";
export declare class InputLayoutComponent {
    input: InputBase<any>;
    width: string;
    height: string;
    get containerStyles(): {
        [key: string]: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<InputLayoutComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<InputLayoutComponent, "ta-input-layout", never, { "input": { "alias": "input"; "required": false; }; "width": { "alias": "width"; "required": false; }; "height": { "alias": "height"; "required": false; }; }, {}, never, ["*"], true, never>;
}
