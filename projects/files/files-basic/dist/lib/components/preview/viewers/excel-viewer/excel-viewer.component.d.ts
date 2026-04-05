import { TaAbstractComponent } from '@ta/utils';
import { PreviewDocumentDto } from '../../type';
import * as i0 from "@angular/core";
export declare class ExcelViewerComponent extends TaAbstractComponent {
    file: import("@angular/core").InputSignal<PreviewDocumentDto>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ExcelViewerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExcelViewerComponent, "ta-excel-viewer", never, { "file": { "alias": "file"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
