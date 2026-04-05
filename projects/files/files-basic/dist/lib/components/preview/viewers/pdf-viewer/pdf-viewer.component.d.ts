import { TaAbstractComponent } from '@ta/utils';
import { PreviewDocumentDto } from '../../type';
import * as i0 from "@angular/core";
export declare class PdfViewerComponent extends TaAbstractComponent {
    file: import("@angular/core").InputSignal<PreviewDocumentDto>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<PdfViewerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PdfViewerComponent, "ta-pdf-viewer", never, { "file": { "alias": "file"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
