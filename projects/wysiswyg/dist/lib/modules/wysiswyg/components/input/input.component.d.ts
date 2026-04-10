import { AfterViewInit, ElementRef, EventEmitter, OnInit } from "@angular/core";
import EditorJS from "@editorjs/editorjs";
import { Observable } from "rxjs";
import { TaBaseComponent } from "@ta/utils";
import { WysiswgBlockData } from "../../public-api";
import * as i0 from "@angular/core";
export type EditorInputSavedData = {
    blocks: WysiswgBlockData[];
    tags: string[];
};
export type EditorToolType = "header" | "list" | "quote" | "delimiter" | "warning" | "color" | "image" | "mention";
export declare const EDITOR_ALL_TOOLS: EditorToolType[];
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
    changed: EventEmitter<{
        blocks: WysiswgBlockData[];
    }>;
    saved: EventEmitter<EditorInputSavedData>;
    private _translationService;
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
    private _buildTools;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<EditorInputComponent, "ta-cms-editor-input", never, { "initValue": { "alias": "initValue"; "required": false; "isSignal": true; }; "setNewValue$": { "alias": "setNewValue$"; "required": false; "isSignal": true; }; "requestSave$": { "alias": "requestSave$"; "required": false; "isSignal": true; }; "clear$": { "alias": "clear$"; "required": false; "isSignal": true; }; "users": { "alias": "users"; "required": false; "isSignal": true; }; "saveOnChange": { "alias": "saveOnChange"; "required": false; "isSignal": true; }; "maxHeight": { "alias": "maxHeight"; "required": false; "isSignal": true; }; "enabledTools": { "alias": "enabledTools"; "required": false; "isSignal": true; }; }, { "changed": "changed"; "saved": "saved"; }, never, never, true, never>;
}
