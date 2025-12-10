import { AfterViewInit, ElementRef, EventEmitter, OnInit } from "@angular/core";
import EditorJS from "@editorjs/editorjs";
import { Observable } from "rxjs";
import { TaTranslationService } from "@ta/translation";
import { TaBaseComponent } from "@ta/utils";
import { WysiswgBlockData } from "../../public-api";
import * as i0 from "@angular/core";
export type EditorInputSavedData = {
    blocks: WysiswgBlockData[];
    tags: string[];
};
export declare class EditorInputComponent extends TaBaseComponent implements OnInit, AfterViewInit {
    initValue?: WysiswgBlockData[] | null;
    setNewValue$?: Observable<{
        blocks: WysiswgBlockData[] | string | null;
        saveAfter?: boolean;
    }>;
    requestSave$?: Observable<void>;
    clear$?: Observable<void>;
    users: {
        id: string;
        name: string;
    }[];
    saveOnChange: boolean;
    maxHeight: boolean;
    changed: EventEmitter<{
        blocks: WysiswgBlockData[];
    }>;
    saved: EventEmitter<EditorInputSavedData>;
    translationService: TaTranslationService;
    readonly languages: {
        [index: string]: {
            editorjs: {
                i18n: Object;
            } & any;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<EditorInputComponent, "ta-cms-editor-input", never, { "initValue": { "alias": "initValue"; "required": false; }; "setNewValue$": { "alias": "setNewValue$"; "required": false; }; "requestSave$": { "alias": "requestSave$"; "required": false; }; "clear$": { "alias": "clear$"; "required": false; }; "users": { "alias": "users"; "required": false; }; "saveOnChange": { "alias": "saveOnChange"; "required": false; }; "maxHeight": { "alias": "maxHeight"; "required": false; }; }, { "changed": "changed"; "saved": "saved"; }, never, never, true, never>;
}
