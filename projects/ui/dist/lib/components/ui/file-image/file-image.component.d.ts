import { TaIconType } from "@ta/icons";
import { TaSizes } from "@ta/styles";
import * as i0 from "@angular/core";
export declare class FileImageComponent {
    fileName: import("@angular/core").InputSignal<string>;
    size: import("@angular/core").InputSignal<TaSizes>;
    get extIcon(): TaIconType;
    static ɵfac: i0.ɵɵFactoryDeclaration<FileImageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FileImageComponent, "ta-file-image", never, { "fileName": { "alias": "fileName"; "required": true; "isSignal": true; }; "size": { "alias": "size"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
