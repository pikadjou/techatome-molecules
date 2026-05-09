import { EFileExtension, TaBaseComponent } from '@ta/utils';
import { PreviewDocumentDto } from './type';
import * as i0 from "@angular/core";
export declare class FilesPreviewComponent extends TaBaseComponent {
    initial: import("@angular/core").InputSignal<PreviewDocumentDto>;
    readonly getFileExtension: (filePath: string) => EFileExtension;
    readonly EFileExtension: typeof EFileExtension;
    constructor();
    download(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FilesPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<FilesPreviewComponent, "ta-files-preview", never, { "initial": { "alias": "initial"; "required": true; "isSignal": true; }; }, {}, never, never, true, never>;
}
export type PreviewModalDataModal = {
    initial: PreviewDocumentDto | null;
};
export declare class PreviewModal extends TaBaseComponent {
    open: import("@angular/core").InputSignal<boolean>;
    initial: import("@angular/core").InputSignal<PreviewDocumentDto | null>;
    closeEvent: import("@angular/core").OutputEmitterRef<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PreviewModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PreviewModal, "ta-files-preview-modal", never, { "open": { "alias": "open"; "required": true; "isSignal": true; }; "initial": { "alias": "initial"; "required": false; "isSignal": true; }; }, { "closeEvent": "closeEvent"; }, never, never, true, never>;
}
