import { EFileExtension, TaBaseComponent } from '@ta/utils';
import { PreviewDocumentDto } from './type';
import * as i0 from "@angular/core";
export declare class FilesPreviewComponent extends TaBaseComponent {
    initial: import("@angular/core").InputSignal<PreviewDocumentDto>;
    readonly getDocumentExtension: (document: PreviewDocumentDto | null | undefined) => EFileExtension;
    readonly EFileExtension: typeof EFileExtension;
    constructor();
    download(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilesPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilesPreviewComponent, "ta-files-preview", never, { "initial": { "alias": "initial"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
