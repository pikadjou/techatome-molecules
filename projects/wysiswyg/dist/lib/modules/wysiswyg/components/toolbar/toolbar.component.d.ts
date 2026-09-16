import { SafeHtml } from '@angular/platform-browser';
import { EditorToolType } from '../input/editor-tools';
import * as i0 from "@angular/core";
/** Bloc que la barre sait poser sur la sélection courante. */
export type EditorToolbarBlockTool = 'delimiter' | 'header-1' | 'header-2' | 'header-3' | 'image' | 'list-ordered' | 'list-unordered' | 'paragraph' | 'quote' | 'warning';
/** Action portant sur le bloc courant, indépendamment de son type. */
export type EditorToolbarBlockCommand = 'delete' | 'move-down' | 'move-up';
type EditorToolbarEntry<T> = {
    icon: SafeHtml | null;
    id: T;
    labelKey: string;
    /** Outil EditorJS dont dépend l'entrée ; absent = toujours disponible. */
    requires?: EditorToolType;
    text?: string;
};
export declare class EditorToolbarComponent {
    /** Identifiant du bloc sous le curseur, pour marquer l'outil correspondant. */
    activeTool: import("@angular/core").InputSignal<string | null>;
    labels: import("@angular/core").InputSignal<{
        [key: string]: string;
    }>;
    /** Outils montés dans l'éditeur ; la barre n'offre que ceux-là. */
    enabledTools: import("@angular/core").InputSignal<EditorToolType[]>;
    blockCommand: import("@angular/core").OutputEmitterRef<EditorToolbarBlockCommand>;
    blockTool: import("@angular/core").OutputEmitterRef<EditorToolbarBlockTool>;
    readonly blockCommands: EditorToolbarEntry<EditorToolbarBlockCommand>[];
    readonly deleteCommand: EditorToolbarEntry<EditorToolbarBlockCommand>;
    /** Le paragraphe est le bloc de repli d'EditorJS. */
    private readonly _allBlockTools;
    private readonly _sanitizer;
    readonly blockTools: import("@angular/core").Signal<EditorToolbarEntry<EditorToolbarBlockTool>[]>;
    constructor();
    getLabel(entry: EditorToolbarEntry<string>): string;
    isActive(id: string): boolean;
    private _trust;
    static ɵfac: i0.ɵɵFactoryDeclaration<EditorToolbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EditorToolbarComponent, "ta-cms-editor-toolbar", never, { "activeTool": { "alias": "activeTool"; "required": false; "isSignal": true; }; "labels": { "alias": "labels"; "required": false; "isSignal": true; }; "enabledTools": { "alias": "enabledTools"; "required": false; "isSignal": true; }; }, { "blockCommand": "blockCommand"; "blockTool": "blockTool"; }, never, never, true, never>;
}
export {};
