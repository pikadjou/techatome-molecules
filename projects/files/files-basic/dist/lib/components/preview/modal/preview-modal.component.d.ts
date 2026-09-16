import { OnChanges, SimpleChanges } from "@angular/core";
import { EFileExtension, TaBaseComponent } from "@ta/utils";
import { PreviewDocumentDto } from "../type";
import * as i0 from "@angular/core";
export type PreviewModalDataModal = {
    initial: PreviewDocumentDto | null;
};
/**
 * Visionneuse plein écran.
 *
 * Le fond sombre n'est pas décoratif : une image se juge sur un fond neutre, et
 * la page qui l'entoure fausserait la lecture des couleurs. La modale claire du
 * gabarit commun ne convient donc pas ici — la visionneuse pose son propre
 * calque et sa propre barre d'outils.
 *
 * `documents` transforme la visionneuse en galerie : flèches, compteur,
 * pellicule et raccourcis clavier n'apparaissent qu'à partir de deux éléments.
 * Sans elle, `initial` seul affiche une pièce isolée.
 */
export declare class PreviewModal extends TaBaseComponent implements OnChanges {
    open: import("@angular/core").InputSignal<boolean>;
    initial: import("@angular/core").InputSignal<PreviewDocumentDto | null>;
    /** L'ensemble parcourable. Vide, la visionneuse se limite à `initial`. */
    documents: import("@angular/core").InputSignal<PreviewDocumentDto[] | null>;
    /** Contexte affiché en surtitre : le bien, le dossier, la personne. */
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
    /**
     * À chaque ouverture, la visionneuse se cale sur la pièce demandée : sans
     * cela, rouvrir la galerie repartirait de la dernière image consultée.
     *
     * Le cycle de vie plutôt qu'un effet : il voit le passage de `open` à vrai,
     * là où une valeur déduite ne verrait que deux états identiques, et écrire
     * dans un signal depuis un effet est refusé par Angular 18, sur lequel cette
     * librairie se compile.
     */
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
