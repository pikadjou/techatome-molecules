import { EFileExtension, TaBaseComponent, TaBaseModal } from '@ta/utils';
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
export declare class PreviewModal extends TaBaseModal {
    data: PreviewModalDataModal;
    readonly initial: import("@angular/core").WritableSignal<PreviewDocumentDto | null>;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<PreviewModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PreviewModal, "ng-component", never, {}, {}, never, never, true, never>;
}
