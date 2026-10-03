import { OnChanges, SimpleChanges } from '@angular/core';
import { EFileExtension, TaBaseComponent } from '@ta/utils';
import { PreviewDocumentDto } from '../type';
import * as i0 from "@angular/core";
export type PreviewModalDataModal = {
    initial: PreviewDocumentDto | null;
};
/** Visionneuse plein écran ; avec `documents`, navigation en galerie. */
export declare class PreviewModal extends TaBaseComponent implements OnChanges {
    open: import("@angular/core").InputSignal<boolean>;
    initial: import("@angular/core").InputSignal<PreviewDocumentDto | null>;
    /** Documents parcourables ; vide, seul `initial` est affiché. */
    documents: import("@angular/core").InputSignal<PreviewDocumentDto[] | null>;
    /** Surtitre de contexte (bien, dossier, personne). */
    overline: import("@angular/core").InputSignal<string>;
    closeEvent: import("@angular/core").OutputEmitterRef<void>;
    readonly EFileExtension: typeof EFileExtension;
    readonly getDocumentExtension: (document: PreviewDocumentDto | null | undefined) => EFileExtension;
    /** Position courante dans la pellicule. */
    index: import("@angular/core").WritableSignal<number>;
    readonly items: import("@angular/core").Signal<PreviewDocumentDto[]>;
    readonly current: import("@angular/core").Signal<PreviewDocumentDto | null>;
    readonly hasGallery: import("@angular/core").Signal<boolean>;
    constructor();
    /** Recale la galerie sur `initial` à chaque ouverture (pas d'effet : écriture de signal interdite en Angular 18). */
    ngOnChanges(changes: SimpleChanges): void;
    select(index: number): void;
    previous(): void;
    next(): void;
    download(): void;
    close(): void;
    onKeydown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PreviewModal, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PreviewModal, "ta-files-preview-modal", never, { "open": { "alias": "open"; "required": true; "isSignal": true; }; "initial": { "alias": "initial"; "required": false; "isSignal": true; }; "documents": { "alias": "documents"; "required": false; "isSignal": true; }; "overline": { "alias": "overline"; "required": false; "isSignal": true; }; }, { "closeEvent": "closeEvent"; }, never, never, true, never>;
}
