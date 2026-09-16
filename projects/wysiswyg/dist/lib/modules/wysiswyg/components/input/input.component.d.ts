import { AfterViewInit, ElementRef, EventEmitter, OnInit } from '@angular/core';
import EditorJS from '@editorjs/editorjs';
import { Observable } from 'rxjs';
import { TaBaseComponent } from '@ta/utils';
import { WysiswgBlockData } from '../../public-api';
import { EditorToolbarBlockCommand, EditorToolbarBlockTool } from '../toolbar/toolbar.component';
import { EDITOR_ALL_TOOLS, EditorToolType } from './editor-tools';
import * as i0 from "@angular/core";
export type EditorInputSavedData = {
    blocks: WysiswgBlockData[];
    tags: string[];
};
export { EDITOR_ALL_TOOLS };
export type { EditorToolType };
export declare class EditorInputComponent extends TaBaseComponent implements OnInit, AfterViewInit {
    initValue: import("@angular/core").InputSignal<WysiswgBlockData<string, any>[] | null | undefined>;
    setNewValue$: import("@angular/core").InputSignal<Observable<{
        blocks: WysiswgBlockData[] | string | null;
        saveAfter?: boolean | undefined;
    }> | undefined>;
    requestSave$: import("@angular/core").InputSignal<Observable<void> | undefined>;
    clear$: import("@angular/core").InputSignal<Observable<void> | undefined>;
    users: import("@angular/core").InputSignal<{
        id: string;
        name: string;
    }[]>;
    saveOnChange: import("@angular/core").InputSignal<boolean>;
    maxHeight: import("@angular/core").InputSignal<boolean>;
    enabledTools: import("@angular/core").InputSignal<EditorToolType[]>;
    placeholder: import("@angular/core").InputSignal<string | undefined>;
    /** Affiche la barre d'outils au-dessus de la zone d'édition. */
    showToolbar: import("@angular/core").InputSignal<boolean>;
    /** Supprime la réserve d'espace basse d'EditorJS, pour les champs courts. */
    isCompact: import("@angular/core").InputSignal<boolean>;
    /** Laisse l'utilisateur régler la hauteur de la zone d'édition. */
    resizable: import("@angular/core").InputSignal<boolean>;
    changed: EventEmitter<{
        blocks: WysiswgBlockData[];
    }>;
    saved: EventEmitter<EditorInputSavedData>;
    /** Outil du bloc sous le curseur, que la barre met en évidence. */
    readonly activeTool: import("@angular/core").WritableSignal<string | null>;
    toolbarLabels: {
        [key: string]: string;
    };
    private _translationService;
    readonly languages: {
        [index: string]: {
            editorjs: {
                i18n: Object;
            } & any;
            toolbar?: {
                [key: string]: string;
            };
        };
    };
    private readonly _documentsService;
    private _saveAfter;
    editorjs: ElementRef;
    editorInstance: EditorJS | null;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    save(): Promise<void>;
    init(): EditorJS;
    private _buildTools;
    /** Convertit le bloc courant si EditorJS le permet, sinon insère (ou remplace un bloc vide). */
    applyBlockTool(tool: EditorToolbarBlockTool): Promise<void>;
    /** Déplace ou supprime le bloc courant. */
    applyBlockCommand(command: EditorToolbarBlockCommand): void;
    /** Relit le bloc courant à chaque clic ou frappe ; `Tab` et `/` sont retenus pour ne pas ouvrir la palette EditorJS. */
    private _trackActiveBlock;
    private _updateActiveTool;
    private _getCurrentBlock;
    /** Un titre ou une liste ne disent pas leur variante : on lit le DOM rendu. */
    private _resolveToolId;
    private _getLanguagePack;
    uploadByFile: (file: File) => Promise<{
        success: number;
        file: {
            url: string;
        };
    }>;
    private _onChange;
    private _getTranslation;
    private _extractWithColorTokenStyles;
    private _extractTags;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditorInputComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditorInputComponent, "ta-cms-editor-input", never, { "initValue": { "alias": "initValue"; "required": false; "isSignal": true; }; "setNewValue$": { "alias": "setNewValue$"; "required": false; "isSignal": true; }; "requestSave$": { "alias": "requestSave$"; "required": false; "isSignal": true; }; "clear$": { "alias": "clear$"; "required": false; "isSignal": true; }; "users": { "alias": "users"; "required": false; "isSignal": true; }; "saveOnChange": { "alias": "saveOnChange"; "required": false; "isSignal": true; }; "maxHeight": { "alias": "maxHeight"; "required": false; "isSignal": true; }; "enabledTools": { "alias": "enabledTools"; "required": false; "isSignal": true; }; "placeholder": { "alias": "placeholder"; "required": false; "isSignal": true; }; "showToolbar": { "alias": "showToolbar"; "required": false; "isSignal": true; }; "isCompact": { "alias": "isCompact"; "required": false; "isSignal": true; }; "resizable": { "alias": "resizable"; "required": false; "isSignal": true; }; }, { "changed": "changed"; "saved": "saved"; }, never, never, true, never>;
}
