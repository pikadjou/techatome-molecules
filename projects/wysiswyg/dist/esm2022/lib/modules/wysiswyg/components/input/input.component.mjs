import { Component, EventEmitter, Output, ViewChild, ViewEncapsulation, inject, input, signal, } from "@angular/core";
import Delimiter from "@editorjs/delimiter";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
// @ts-ignore
import ImageTool from "@editorjs/image";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import { ColorTool } from "editorjs-color";
import { firstValueFrom, fromEvent, merge } from "rxjs";
import { TaDocumentsService } from "@ta/services";
import { TaTranslationService } from "@ta/translation";
import { TaBaseComponent, isNonNullable, isNotEmptyObject } from "@ta/utils";
import { convertBlocksToHtml } from "../../public-api";
import { TagTool } from "../plugins/tag-editor/tag-editor";
import { EditorToolbarComponent, } from "../toolbar/toolbar.component";
import { EDITOR_ALL_TOOLS } from "./editor-tools";
import * as de from "./translation/de.json";
import * as en from "./translation/en.json";
import * as es from "./translation/es.json";
import * as fr from "./translation/fr.json";
import * as nl from "./translation/nl.json";
import * as i0 from "@angular/core";
export { EDITOR_ALL_TOOLS };
/** Ce que chaque outil de la barre pose comme bloc EditorJS. */
const TOOLBAR_BLOCK_CONFIG = {
    delimiter: { type: "delimiter" },
    "header-1": { data: { level: 1 }, type: "header" },
    "header-2": { data: { level: 2 }, type: "header" },
    "header-3": { data: { level: 3 }, type: "header" },
    image: { type: "image" },
    "list-ordered": { data: { style: "ordered" }, type: "list" },
    "list-unordered": { data: { style: "unordered" }, type: "list" },
    paragraph: { type: "paragraph" },
    quote: { type: "quote" },
    warning: { type: "warning" },
};
export class EditorInputComponent extends TaBaseComponent {
    constructor() {
        super();
        this.initValue = input();
        this.setNewValue$ = input();
        this.requestSave$ = input();
        this.clear$ = input();
        this.users = input([]);
        this.saveOnChange = input(false);
        this.maxHeight = input(false);
        this.enabledTools = input(EDITOR_ALL_TOOLS);
        this.placeholder = input();
        /** Affiche la barre d'outils au-dessus de la zone d'édition. */
        this.showToolbar = input(true);
        /** Supprime la réserve d'espace basse d'EditorJS, pour les champs courts. */
        this.isCompact = input(false);
        /** Laisse l'utilisateur régler la hauteur de la zone d'édition. */
        this.resizable = input(true);
        this.changed = new EventEmitter();
        this.saved = new EventEmitter();
        /** Outil du bloc sous le curseur, que la barre met en évidence. */
        this.activeTool = signal(null);
        this.toolbarLabels = {};
        this._translationService = inject(TaTranslationService);
        this.languages = {
            de: de,
            en: en,
            es: es,
            fr: fr,
            nl: nl,
        };
        this._documentsService = inject(TaDocumentsService);
        this._saveAfter = false;
        this.editorInstance = null;
        this.uploadByFile = async (file) => {
            const doc = await firstValueFrom(this._documentsService.addDocument$({ file }));
            return {
                success: 1,
                file: {
                    url: doc.url,
                },
            };
        };
        this._onChange = async () => {
            if (isNotEmptyObject(this.editorInstance)) {
                const data = await this._extractWithColorTokenStyles();
                if (!data) {
                    return;
                }
                this.changed.emit({ blocks: data.blocks });
            }
            this._updateActiveTool();
            if (this.saveOnChange()) {
                this.save();
            }
            if (this._saveAfter) {
                this.save();
                this._saveAfter = false;
            }
        };
    }
    ngOnInit() {
        this.toolbarLabels = this._getLanguagePack()?.toolbar ?? {};
        const requestSave = this.requestSave$();
        if (requestSave) {
            this._registerSubscription(requestSave.subscribe({
                next: () => this.save(),
            }));
        }
        const clear = this.clear$();
        if (clear) {
            this._registerSubscription(clear.subscribe({
                next: () => this.editorInstance?.clear(),
            }));
        }
        const setNewValue = this.setNewValue$();
        if (setNewValue) {
            this._registerSubscription(setNewValue.subscribe({
                next: ({ blocks, saveAfter }) => {
                    this._saveAfter = saveAfter ?? false;
                    if (this.editorInstance && blocks) {
                        if (typeof blocks === "string") {
                            this.editorInstance.blocks.renderFromHTML(blocks);
                        }
                        else {
                            this.editorInstance.render({ blocks: blocks });
                        }
                    }
                },
            }));
        }
    }
    ngAfterViewInit() {
        this.editorInstance = this.init();
        this._trackActiveBlock();
    }
    ngOnDestroy() {
        // `super` d'abord : c'est lui qui coupe les souscriptions, dont celles que
        // `_trackActiveBlock` a posées sur l'élément hôte.
        super.ngOnDestroy();
        this.editorInstance?.destroy();
        this.editorInstance = null;
    }
    async save() {
        if (isNotEmptyObject(this.editorInstance)) {
            const data = await this._extractWithColorTokenStyles();
            if (!data) {
                return;
            }
            this.saved.emit({
                blocks: data.blocks,
                tags: this._extractTags(data.blocks),
            });
        }
    }
    init() {
        const translations = this._getTranslation();
        const tools = this._buildTools(translations);
        return new EditorJS({
            holder: this.editorjs.nativeElement,
            minHeight: 100,
            data: { blocks: this.initValue() },
            placeholder: this.placeholder() ?? translations["placeholder"],
            tools,
            onChange: this._onChange,
            ...translations,
        });
    }
    _buildTools(translations) {
        const enabled = new Set(this.enabledTools());
        const tools = {};
        if (enabled.has("header")) {
            tools["header"] = Header;
        }
        if (enabled.has("list")) {
            tools["list"] = List;
        }
        if (enabled.has("quote")) {
            tools["quote"] = Quote;
        }
        if (enabled.has("delimiter")) {
            tools["delimiter"] = Delimiter;
        }
        if (enabled.has("warning")) {
            tools["warning"] = Warning;
        }
        if (enabled.has("color")) {
            tools["TextColor"] = {
                class: ColorTool,
                config: {
                    backgroundColorLabel: translations["colortool.backgroundColorLabel"],
                    frontColorLabel: translations["colortool.frontColorLabel"],
                },
            };
        }
        if (enabled.has("image")) {
            tools["image"] = {
                class: ImageTool,
                config: {
                    uploader: {
                        uploadByFile: async (file) => {
                            return this.uploadByFile(file);
                        },
                    },
                },
            };
        }
        if (enabled.has("mention")) {
            tools["mention"] = {
                class: TagTool,
                config: {
                    users: this.users(),
                },
            };
        }
        return tools;
    }
    /**
     * Applique un outil de la barre au bloc courant : on convertit le bloc en
     * place quand EditorJS le permet, sinon on en insère un nouveau — un bloc vide
     * est alors remplacé plutôt que doublé.
     */
    async applyBlockTool(tool) {
        const editor = this.editorInstance;
        if (!editor) {
            return;
        }
        const { data, type } = TOOLBAR_BLOCK_CONFIG[tool];
        const block = this._getCurrentBlock();
        if (!block) {
            editor.blocks.insert(type, data, undefined, editor.blocks.getBlocksCount(), true);
            this._updateActiveTool();
            return;
        }
        const index = editor.blocks.getCurrentBlockIndex();
        if (block.name === type) {
            if (data) {
                await editor.blocks.update(block.id, data);
                editor.caret.setToBlock(index, "end");
            }
        }
        else {
            try {
                await editor.blocks.convert(block.id, type, data);
                editor.caret.setToBlock(index, "end");
            }
            catch {
                editor.blocks.insert(type, data, undefined, block.isEmpty ? index : index + 1, true, block.isEmpty);
            }
        }
        this._updateActiveTool();
    }
    /** Déplace ou supprime le bloc courant. */
    applyBlockCommand(command) {
        const editor = this.editorInstance;
        if (!editor) {
            return;
        }
        const index = editor.blocks.getCurrentBlockIndex();
        if (index < 0) {
            return;
        }
        switch (command) {
            case "delete": {
                editor.blocks.delete(index);
                break;
            }
            case "move-down": {
                if (index < editor.blocks.getBlocksCount() - 1) {
                    editor.blocks.move(index + 1);
                    editor.caret.setToBlock(index + 1, "end");
                }
                break;
            }
            case "move-up": {
                if (index > 0) {
                    editor.blocks.move(index - 1);
                    editor.caret.setToBlock(index - 1, "end");
                }
                break;
            }
        }
        this._updateActiveTool();
    }
    /**
     * Le bloc courant n'est pas observable : on le relit après chaque clic ou
     * frappe. `Tab` et `/` sont retenus au passage, faute de quoi EditorJS ouvre
     * sa propre palette par-dessus la barre.
     */
    _trackActiveBlock() {
        const holder = this.editorjs.nativeElement;
        this._registerSubscription(merge(fromEvent(holder, "click"), fromEvent(holder, "keyup")).subscribe(() => this._updateActiveTool()));
        this._registerSubscription(fromEvent(holder, "keydown", { capture: true }).subscribe((event) => {
            if (event.key === "Tab" || event.key === "/") {
                event.stopPropagation();
            }
        }));
    }
    _updateActiveTool() {
        const block = this._getCurrentBlock();
        this.activeTool.set(block ? this._resolveToolId(block) : null);
    }
    _getCurrentBlock() {
        // L'API `blocks` n'existe ni avant `isReady` ni après `destroy()` : tester
        // l'instance ne suffit pas.
        const blocks = this.editorInstance?.blocks;
        if (!blocks) {
            return undefined;
        }
        const index = blocks.getCurrentBlockIndex();
        if (index < 0) {
            return undefined;
        }
        return blocks.getBlockByIndex(index);
    }
    /** Un titre ou une liste ne disent pas leur variante : on lit le DOM rendu. */
    _resolveToolId(block) {
        if (block.name === "header") {
            const heading = block.holder.querySelector("h1, h2, h3, h4, h5, h6");
            return heading ? `header-${heading.tagName.charAt(1)}` : "header-2";
        }
        if (block.name === "list") {
            return block.holder.querySelector("ol")
                ? "list-ordered"
                : "list-unordered";
        }
        return block.name;
    }
    _getLanguagePack() {
        const language = this._translationService.getLanguage();
        if (!isNonNullable(language)) {
            return null;
        }
        return this.languages[language] ?? null;
    }
    _getTranslation() {
        return this._getLanguagePack()?.editorjs ?? {};
    }
    async _extractWithColorTokenStyles() {
        const output = await this.editorInstance?.save();
        if (!output) {
            return null;
        }
        const styledSpans = Array.from(this.editorjs.nativeElement.innerHTML.matchAll(/<span class="ce-inline-tool--color__token"(.*?)>/gs)).map((match) => ({
            style: match[1].trim(), // `style`
        }));
        if (styledSpans.length === 0) {
            return output;
        }
        let spanIndex = 0;
        const updatedBlocks = output.blocks.map((block) => {
            if (block.type !== "paragraph" || !block.data?.text) {
                return block;
            }
            const newText = block.data.text.replace(/<span class="ce-inline-tool--color__token">/gs, (match) => {
                const styled = styledSpans[spanIndex++];
                if (!styled) {
                    return match;
                }
                return `<span class="ce-inline-tool--color__token" ${styled.style}>`;
            });
            return {
                ...block,
                data: {
                    ...block.data,
                    text: newText,
                },
            };
        });
        return {
            ...output,
            blocks: updatedBlocks,
        };
    }
    _extractTags(blocks) {
        const html = convertBlocksToHtml(blocks);
        const regex = /data-user-id="([^"]+)"/g;
        // Extraction des IDs sous forme de tableau
        return [...html.matchAll(regex)].map((match) => match[1]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditorInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: EditorInputComponent, isStandalone: true, selector: "ta-cms-editor-input", inputs: { initValue: { classPropertyName: "initValue", publicName: "initValue", isSignal: true, isRequired: false, transformFunction: null }, setNewValue$: { classPropertyName: "setNewValue$", publicName: "setNewValue$", isSignal: true, isRequired: false, transformFunction: null }, requestSave$: { classPropertyName: "requestSave$", publicName: "requestSave$", isSignal: true, isRequired: false, transformFunction: null }, clear$: { classPropertyName: "clear$", publicName: "clear$", isSignal: true, isRequired: false, transformFunction: null }, users: { classPropertyName: "users", publicName: "users", isSignal: true, isRequired: false, transformFunction: null }, saveOnChange: { classPropertyName: "saveOnChange", publicName: "saveOnChange", isSignal: true, isRequired: false, transformFunction: null }, maxHeight: { classPropertyName: "maxHeight", publicName: "maxHeight", isSignal: true, isRequired: false, transformFunction: null }, enabledTools: { classPropertyName: "enabledTools", publicName: "enabledTools", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, showToolbar: { classPropertyName: "showToolbar", publicName: "showToolbar", isSignal: true, isRequired: false, transformFunction: null }, isCompact: { classPropertyName: "isCompact", publicName: "isCompact", isSignal: true, isRequired: false, transformFunction: null }, resizable: { classPropertyName: "resizable", publicName: "resizable", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { changed: "changed", saved: "saved" }, viewQueries: [{ propertyName: "editorjs", first: true, predicate: ["editorjs"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"flex-column g-space-md\" [class.is-compact]=\"this.isCompact()\">\n  @if (this.showToolbar()) {\n  <ta-cms-editor-toolbar\n    [activeTool]=\"this.activeTool()\"\n    [labels]=\"this.toolbarLabels\"\n    [enabledTools]=\"this.enabledTools()\"\n    (blockTool)=\"this.applyBlockTool($event)\"\n    (blockCommand)=\"this.applyBlockCommand($event)\"\n  ></ta-cms-editor-toolbar>\n  }\n  <div\n    #editorjs\n    class=\"editor-container\"\n    [class.max-height]=\"this.maxHeight()\"\n    [class.resizable]=\"this.resizable()\"\n  ></div>\n</div>\n", styles: ["ta-cms-editor-input .editor-container{position:relative;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);color:var(--ta-text-body);max-height:250px;overflow:auto}ta-cms-editor-input .editor-container.resizable{resize:vertical;min-height:60px}ta-cms-editor-input .editor-container.max-height{max-height:300px}ta-cms-editor-input .editor-container .ce-toolbar{display:none}ta-cms-editor-input .editor-container .cdx-block{max-width:100%!important}ta-cms-editor-input .editor-container .ce-block__content,ta-cms-editor-input .editor-container .ce-toolbar__content{max-width:100%!important;margin:0!important}ta-cms-editor-input .editor-container .ce-block--selected .ce-block__content{background-color:var(--ta-surface-hover-primary);border-radius:var(--ta-radius-minimal)}ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder]:empty:before,ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder-active]:before{color:var(--ta-text-tertiary)}ta-cms-editor-input .editor-container .ce-header{color:var(--ta-text-primary)}ta-cms-editor-input .editor-container h1.ce-header{font-size:var(--ta-font-h1-default-size);font-weight:var(--ta-font-h1-default-weight)}ta-cms-editor-input .editor-container h2.ce-header{font-size:var(--ta-font-h2-default-size);font-weight:var(--ta-font-h2-default-weight)}ta-cms-editor-input .editor-container h3.ce-header{font-size:var(--ta-font-h3-default-size);font-weight:var(--ta-font-h3-default-weight)}ta-cms-editor-input .editor-container h4.ce-header{font-size:var(--ta-font-h4-default-size);font-weight:var(--ta-font-h4-default-weight)}ta-cms-editor-input .editor-container .cdx-quote{border-left:3px solid var(--ta-border-brand-primary);padding-left:var(--ta-space-md)}ta-cms-editor-input .editor-container .cdx-warning{background-color:var(--ta-surface-warning);border-radius:var(--ta-radius-minimal);padding:var(--ta-space-sm) var(--ta-space-md)}ta-cms-editor-input .editor-container .ce-popover{--border-radius: var(--ta-radius-rounded);--color-background: var(--ta-surface-primary);--color-background-item-focus: var(--ta-surface-hover-primary);--color-background-item-hover: var(--ta-surface-secondary);--color-border: var(--ta-border-tertiary);--color-text-primary: var(--ta-text-primary);--color-text-secondary: var(--ta-text-secondary)}ta-cms-editor-input .editor-container .ce-inline-toolbar{background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-tertiary);border-radius:var(--ta-radius-minimal);color:var(--ta-text-primary);box-shadow:var(--ta-shadow-black-sm)}ta-cms-editor-input .is-compact .codex-editor__redactor{padding-bottom:0!important}ta-cms-editor-input .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid var(--ta-border-tertiary);text-align:center;justify-content:center}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"], dependencies: [{ kind: "component", type: EditorToolbarComponent, selector: "ta-cms-editor-toolbar", inputs: ["activeTool", "labels", "enabledTools"], outputs: ["blockCommand", "blockTool"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditorInputComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-cms-editor-input", standalone: true, imports: [EditorToolbarComponent], encapsulation: ViewEncapsulation.None, template: "<div class=\"flex-column g-space-md\" [class.is-compact]=\"this.isCompact()\">\n  @if (this.showToolbar()) {\n  <ta-cms-editor-toolbar\n    [activeTool]=\"this.activeTool()\"\n    [labels]=\"this.toolbarLabels\"\n    [enabledTools]=\"this.enabledTools()\"\n    (blockTool)=\"this.applyBlockTool($event)\"\n    (blockCommand)=\"this.applyBlockCommand($event)\"\n  ></ta-cms-editor-toolbar>\n  }\n  <div\n    #editorjs\n    class=\"editor-container\"\n    [class.max-height]=\"this.maxHeight()\"\n    [class.resizable]=\"this.resizable()\"\n  ></div>\n</div>\n", styles: ["ta-cms-editor-input .editor-container{position:relative;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);color:var(--ta-text-body);max-height:250px;overflow:auto}ta-cms-editor-input .editor-container.resizable{resize:vertical;min-height:60px}ta-cms-editor-input .editor-container.max-height{max-height:300px}ta-cms-editor-input .editor-container .ce-toolbar{display:none}ta-cms-editor-input .editor-container .cdx-block{max-width:100%!important}ta-cms-editor-input .editor-container .ce-block__content,ta-cms-editor-input .editor-container .ce-toolbar__content{max-width:100%!important;margin:0!important}ta-cms-editor-input .editor-container .ce-block--selected .ce-block__content{background-color:var(--ta-surface-hover-primary);border-radius:var(--ta-radius-minimal)}ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder]:empty:before,ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder-active]:before{color:var(--ta-text-tertiary)}ta-cms-editor-input .editor-container .ce-header{color:var(--ta-text-primary)}ta-cms-editor-input .editor-container h1.ce-header{font-size:var(--ta-font-h1-default-size);font-weight:var(--ta-font-h1-default-weight)}ta-cms-editor-input .editor-container h2.ce-header{font-size:var(--ta-font-h2-default-size);font-weight:var(--ta-font-h2-default-weight)}ta-cms-editor-input .editor-container h3.ce-header{font-size:var(--ta-font-h3-default-size);font-weight:var(--ta-font-h3-default-weight)}ta-cms-editor-input .editor-container h4.ce-header{font-size:var(--ta-font-h4-default-size);font-weight:var(--ta-font-h4-default-weight)}ta-cms-editor-input .editor-container .cdx-quote{border-left:3px solid var(--ta-border-brand-primary);padding-left:var(--ta-space-md)}ta-cms-editor-input .editor-container .cdx-warning{background-color:var(--ta-surface-warning);border-radius:var(--ta-radius-minimal);padding:var(--ta-space-sm) var(--ta-space-md)}ta-cms-editor-input .editor-container .ce-popover{--border-radius: var(--ta-radius-rounded);--color-background: var(--ta-surface-primary);--color-background-item-focus: var(--ta-surface-hover-primary);--color-background-item-hover: var(--ta-surface-secondary);--color-border: var(--ta-border-tertiary);--color-text-primary: var(--ta-text-primary);--color-text-secondary: var(--ta-text-secondary)}ta-cms-editor-input .editor-container .ce-inline-toolbar{background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-tertiary);border-radius:var(--ta-radius-minimal);color:var(--ta-text-primary);box-shadow:var(--ta-shadow-black-sm)}ta-cms-editor-input .is-compact .codex-editor__redactor{padding-bottom:0!important}ta-cms-editor-input .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid var(--ta-border-tertiary);text-align:center;justify-content:center}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"] }]
        }], ctorParameters: () => [], propDecorators: { changed: [{
                type: Output
            }], saved: [{
                type: Output
            }], editorjs: [{
                type: ViewChild,
                args: ["editorjs", { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBRVosTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxRQUFzQixNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sTUFBTSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RDLGFBQWE7QUFDYixPQUFPLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLElBQUksTUFBTSxnQkFBZ0IsQ0FBQztBQUNsQyxPQUFPLEtBQUssTUFBTSxpQkFBaUIsQ0FBQztBQUNwQyxPQUFPLE9BQU8sTUFBTSxtQkFBbUIsQ0FBQztBQUN4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFjLGNBQWMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU3RSxPQUFPLEVBQW9CLG1CQUFtQixFQUFF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RUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBpbmplY3QsXG4gIGlucHV0LFxuICBzaWduYWwsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCBEZWxpbWl0ZXIgZnJvbSBcIkBlZGl0b3Jqcy9kZWxpbWl0ZXJcIjtcbmltcG9ydCBFZGl0b3JKUywgeyBCbG9ja0FQSSB9IGZyb20gXCJAZWRpdG9yanMvZWRpdG9yanNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkBlZGl0b3Jqcy9oZWFkZXJcIjtcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBJbWFnZVRvb2wgZnJvbSBcIkBlZGl0b3Jqcy9pbWFnZVwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIkBlZGl0b3Jqcy9saXN0XCI7XG5pbXBvcnQgUXVvdGUgZnJvbSBcIkBlZGl0b3Jqcy9xdW90ZVwiO1xuaW1wb3J0IFdhcm5pbmcgZnJvbSBcIkBlZGl0b3Jqcy93YXJuaW5nXCI7XG5pbXBvcnQgeyBDb2xvclRvb2wgfSBmcm9tIFwiZWRpdG9yanMtY29sb3JcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIGZpcnN0VmFsdWVGcm9tLCBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSBcInJ4anNcIjtcblxuaW1wb3J0IHsgVGFEb2N1bWVudHNTZXJ2aWNlIH0gZnJvbSBcIkB0YS9zZXJ2aWNlc1wiO1xuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tIFwiQHRhL3RyYW5zbGF0aW9uXCI7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQsIGlzTm9uTnVsbGFibGUsIGlzTm90RW1wdHlPYmplY3QgfSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5cbmltcG9ydCB7IFd5c2lzd2dCbG9ja0RhdGEsIGNvbnZlcnRCbG9ja3NUb0h0bWwgfSBmcm9tIFwiLi4vLi4vcHVibGljLWFwaVwiO1xuaW1wb3J0IHsgVGFnVG9vbCB9IGZyb20gXCIuLi9wbHVnaW5zL3RhZy1lZGl0b3IvdGFnLWVkaXRvclwiO1xuaW1wb3J0IHtcbiAgRWRpdG9yVG9vbGJhckJsb2NrQ29tbWFuZCxcbiAgRWRpdG9yVG9vbGJhckJsb2NrVG9vbCxcbiAgRWRpdG9yVG9vbGJhckNvbXBvbmVudCxcbn0gZnJvbSBcIi4uL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVESVRPUl9BTExfVE9PTFMsIEVkaXRvclRvb2xUeXBlIH0gZnJvbSBcIi4vZWRpdG9yLXRvb2xzXCI7XG5pbXBvcnQgKiBhcyBkZSBmcm9tIFwiLi90cmFuc2xhdGlvbi9kZS5qc29uXCI7XG5pbXBvcnQgKiBhcyBlbiBmcm9tIFwiLi90cmFuc2xhdGlvbi9lbi5qc29uXCI7XG5pbXBvcnQgKiBhcyBlcyBmcm9tIFwiLi90cmFuc2xhdGlvbi9lcy5qc29uXCI7XG5pbXBvcnQgKiBhcyBmciBmcm9tIFwiLi90cmFuc2xhdGlvbi9mci5qc29uXCI7XG5pbXBvcnQgKiBhcyBubCBmcm9tIFwiLi90cmFuc2xhdGlvbi9ubC5qc29uXCI7XG5cbmV4cG9ydCB0eXBlIEVkaXRvcklucHV0U2F2ZWREYXRhID0ge1xuICBibG9ja3M6IFd5c2lzd2dCbG9ja0RhdGFbXTtcbiAgdGFnczogc3RyaW5nW107XG59O1xuXG5leHBvcnQgeyBFRElUT1JfQUxMX1RPT0xTIH07XG5leHBvcnQgdHlwZSB7IEVkaXRvclRvb2xUeXBlIH07XG5cbi8qKiBDZSBxdWUgY2hhcXVlIG91dGlsIGRlIGxhIGJhcnJlIHBvc2UgY29tbWUgYmxvYyBFZGl0b3JKUy4gKi9cbmNvbnN0IFRPT0xCQVJfQkxPQ0tfQ09ORklHOiB7XG4gIFt0b29sIGluIEVkaXRvclRvb2xiYXJCbG9ja1Rvb2xdOiB7XG4gICAgZGF0YT86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIH07XG4gICAgdHlwZTogc3RyaW5nO1xuICB9O1xufSA9IHtcbiAgZGVsaW1pdGVyOiB7IHR5cGU6IFwiZGVsaW1pdGVyXCIgfSxcbiAgXCJoZWFkZXItMVwiOiB7IGRhdGE6IHsgbGV2ZWw6IDEgfSwgdHlwZTogXCJoZWFkZXJcIiB9LFxuICBcImhlYWRlci0yXCI6IHsgZGF0YTogeyBsZXZlbDogMiB9LCB0eXBlOiBcImhlYWRlclwiIH0sXG4gIFwiaGVhZGVyLTNcIjogeyBkYXRhOiB7IGxldmVsOiAzIH0sIHR5cGU6IFwiaGVhZGVyXCIgfSxcbiAgaW1hZ2U6IHsgdHlwZTogXCJpbWFnZVwiIH0sXG4gIFwibGlzdC1vcmRlcmVkXCI6IHsgZGF0YTogeyBzdHlsZTogXCJvcmRlcmVkXCIgfSwgdHlwZTogXCJsaXN0XCIgfSxcbiAgXCJsaXN0LXVub3JkZXJlZFwiOiB7IGRhdGE6IHsgc3R5bGU6IFwidW5vcmRlcmVkXCIgfSwgdHlwZTogXCJsaXN0XCIgfSxcbiAgcGFyYWdyYXBoOiB7IHR5cGU6IFwicGFyYWdyYXBoXCIgfSxcbiAgcXVvdGU6IHsgdHlwZTogXCJxdW90ZVwiIH0sXG4gIHdhcm5pbmc6IHsgdHlwZTogXCJ3YXJuaW5nXCIgfSxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1jbXMtZWRpdG9yLWlucHV0XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaW5wdXQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2lucHV0LmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRWRpdG9yVG9vbGJhckNvbXBvbmVudF0sXG4gIC8vIEwnaGFiaWxsYWdlIHBvcnRlIHN1ciBsZSBET00gZCdFZGl0b3JKUywgbW9udMOpIGhvcnMgZHUgdGVtcGxhdGUgOiBpbCBuZVxuICAvLyByZcOnb2l0IGF1Y3VuIGF0dHJpYnV0IGQnZW5jYXBzdWxhdGlvbi4gQ2hhcXVlIHLDqGdsZSBkdSBTQ1NTIGVzdCBwcsOpZml4w6llIHBhclxuICAvLyBsZSBzw6lsZWN0ZXVyIGR1IGNvbXBvc2FudCwgY2UgcXVpIGx1aSByZW5kIGxhIHBvcnTDqWUgcXUnaWwgYXVyYWl0IGV1ZS5cbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdG9ySW5wdXRDb21wb25lbnRcbiAgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXRcbntcbiAgaW5pdFZhbHVlID0gaW5wdXQ8V3lzaXN3Z0Jsb2NrRGF0YVtdIHwgbnVsbD4oKTtcblxuICBzZXROZXdWYWx1ZSQgPSBpbnB1dDxcbiAgICBPYnNlcnZhYmxlPHtcbiAgICAgIGJsb2NrczogV3lzaXN3Z0Jsb2NrRGF0YVtdIHwgc3RyaW5nIHwgbnVsbDtcbiAgICAgIHNhdmVBZnRlcj86IGJvb2xlYW47XG4gICAgfT5cbiAgPigpO1xuXG4gIHJlcXVlc3RTYXZlJCA9IGlucHV0PE9ic2VydmFibGU8dm9pZD4+KCk7XG5cbiAgY2xlYXIkID0gaW5wdXQ8T2JzZXJ2YWJsZTx2b2lkPj4oKTtcblxuICB1c2VycyA9IGlucHV0PHsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nIH1bXT4oW10pO1xuXG4gIHNhdmVPbkNoYW5nZSA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBtYXhIZWlnaHQgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG5cbiAgZW5hYmxlZFRvb2xzID0gaW5wdXQ8RWRpdG9yVG9vbFR5cGVbXT4oRURJVE9SX0FMTF9UT09MUyk7XG5cbiAgcGxhY2Vob2xkZXIgPSBpbnB1dDxzdHJpbmc+KCk7XG5cbiAgLyoqIEFmZmljaGUgbGEgYmFycmUgZCdvdXRpbHMgYXUtZGVzc3VzIGRlIGxhIHpvbmUgZCfDqWRpdGlvbi4gKi9cbiAgc2hvd1Rvb2xiYXIgPSBpbnB1dDxib29sZWFuPih0cnVlKTtcblxuICAvKiogU3VwcHJpbWUgbGEgcsOpc2VydmUgZCdlc3BhY2UgYmFzc2UgZCdFZGl0b3JKUywgcG91ciBsZXMgY2hhbXBzIGNvdXJ0cy4gKi9cbiAgaXNDb21wYWN0ID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIC8qKiBMYWlzc2UgbCd1dGlsaXNhdGV1ciByw6lnbGVyIGxhIGhhdXRldXIgZGUgbGEgem9uZSBkJ8OpZGl0aW9uLiAqL1xuICByZXNpemFibGUgPSBpbnB1dDxib29sZWFuPih0cnVlKTtcblxuICBAT3V0cHV0KClcbiAgY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBibG9ja3M6IFd5c2lzd2dCbG9ja0RhdGFbXSB9PigpO1xuXG4gIEBPdXRwdXQoKVxuICBzYXZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RWRpdG9ySW5wdXRTYXZlZERhdGE+KCk7XG5cbiAgLyoqIE91dGlsIGR1IGJsb2Mgc291cyBsZSBjdXJzZXVyLCBxdWUgbGEgYmFycmUgbWV0IGVuIMOpdmlkZW5jZS4gKi9cbiAgcHVibGljIHJlYWRvbmx5IGFjdGl2ZVRvb2wgPSBzaWduYWw8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgcHVibGljIHRvb2xiYXJMYWJlbHM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICBwcml2YXRlIF90cmFuc2xhdGlvblNlcnZpY2UgPSBpbmplY3QoVGFUcmFuc2xhdGlvblNlcnZpY2UpO1xuICBwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2VzOiB7XG4gICAgW2luZGV4OiBzdHJpbmddOiB7XG4gICAgICBlZGl0b3JqczogeyBpMThuOiBPYmplY3QgfSAmIGFueTtcbiAgICAgIHRvb2xiYXI/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xuICAgIH07XG4gIH0gPSB7XG4gICAgZGU6IGRlLFxuICAgIGVuOiBlbixcbiAgICBlczogZXMsXG4gICAgZnI6IGZyLFxuICAgIG5sOiBubCxcbiAgfTtcblxuICBwcml2YXRlIHJlYWRvbmx5IF9kb2N1bWVudHNTZXJ2aWNlID0gaW5qZWN0KFRhRG9jdW1lbnRzU2VydmljZSk7XG4gIHByaXZhdGUgX3NhdmVBZnRlciA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoXCJlZGl0b3Jqc1wiLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBlZGl0b3JqcyE6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIGVkaXRvckluc3RhbmNlOiBFZGl0b3JKUyB8IG51bGwgPSBudWxsO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50b29sYmFyTGFiZWxzID0gdGhpcy5fZ2V0TGFuZ3VhZ2VQYWNrKCk/LnRvb2xiYXIgPz8ge307XG4gICAgY29uc3QgcmVxdWVzdFNhdmUgPSB0aGlzLnJlcXVlc3RTYXZlJCgpO1xuICAgIGlmIChyZXF1ZXN0U2F2ZSkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICAgIHJlcXVlc3RTYXZlLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogKCkgPT4gdGhpcy5zYXZlKCksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBjbGVhciA9IHRoaXMuY2xlYXIkKCk7XG4gICAgaWYgKGNsZWFyKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgICAgY2xlYXIuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAoKSA9PiB0aGlzLmVkaXRvckluc3RhbmNlPy5jbGVhcigpLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3Qgc2V0TmV3VmFsdWUgPSB0aGlzLnNldE5ld1ZhbHVlJCgpO1xuICAgIGlmIChzZXROZXdWYWx1ZSkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICAgIHNldE5ld1ZhbHVlLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogKHsgYmxvY2tzLCBzYXZlQWZ0ZXIgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZUFmdGVyID0gc2F2ZUFmdGVyID8/IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWRpdG9ySW5zdGFuY2UgJiYgYmxvY2tzKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgYmxvY2tzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZS5ibG9ja3MucmVuZGVyRnJvbUhUTUwoYmxvY2tzKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvckluc3RhbmNlLnJlbmRlcih7IGJsb2NrczogYmxvY2tzIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UgPSB0aGlzLmluaXQoKTtcbiAgICB0aGlzLl90cmFja0FjdGl2ZUJsb2NrKCk7XG4gIH1cblxuICBvdmVycmlkZSBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICAvLyBgc3VwZXJgIGQnYWJvcmQgOiBjJ2VzdCBsdWkgcXVpIGNvdXBlIGxlcyBzb3VzY3JpcHRpb25zLCBkb250IGNlbGxlcyBxdWVcbiAgICAvLyBgX3RyYWNrQWN0aXZlQmxvY2tgIGEgcG9zw6llcyBzdXIgbCfDqWzDqW1lbnQgaMO0dGUuXG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcbiAgICB0aGlzLmVkaXRvckluc3RhbmNlPy5kZXN0cm95KCk7XG4gICAgdGhpcy5lZGl0b3JJbnN0YW5jZSA9IG51bGw7XG4gIH1cbiAgcHVibGljIGFzeW5jIHNhdmUoKSB7XG4gICAgaWYgKGlzTm90RW1wdHlPYmplY3QodGhpcy5lZGl0b3JJbnN0YW5jZSkpIHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLl9leHRyYWN0V2l0aENvbG9yVG9rZW5TdHlsZXMoKTtcbiAgICAgIGlmICghZGF0YSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnNhdmVkLmVtaXQoe1xuICAgICAgICBibG9ja3M6IGRhdGEuYmxvY2tzLFxuICAgICAgICB0YWdzOiB0aGlzLl9leHRyYWN0VGFncyhkYXRhLmJsb2NrcyksXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGluaXQoKTogRWRpdG9ySlMge1xuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IHRoaXMuX2dldFRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgdG9vbHMgPSB0aGlzLl9idWlsZFRvb2xzKHRyYW5zbGF0aW9ucyk7XG5cbiAgICByZXR1cm4gbmV3IEVkaXRvckpTKHtcbiAgICAgIGhvbGRlcjogdGhpcy5lZGl0b3Jqcy5uYXRpdmVFbGVtZW50LFxuICAgICAgbWluSGVpZ2h0OiAxMDAsXG4gICAgICBkYXRhOiB7IGJsb2NrczogdGhpcy5pbml0VmFsdWUoKSB9LFxuICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIoKSA/PyB0cmFuc2xhdGlvbnNbXCJwbGFjZWhvbGRlclwiXSxcbiAgICAgIHRvb2xzLFxuICAgICAgb25DaGFuZ2U6IHRoaXMuX29uQ2hhbmdlLFxuICAgICAgLi4udHJhbnNsYXRpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfYnVpbGRUb29scyh0cmFuc2xhdGlvbnM6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHtcbiAgICBjb25zdCBlbmFibGVkID0gbmV3IFNldCh0aGlzLmVuYWJsZWRUb29scygpKTtcbiAgICBjb25zdCB0b29sczogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9O1xuXG4gICAgaWYgKGVuYWJsZWQuaGFzKFwiaGVhZGVyXCIpKSB7XG4gICAgICB0b29sc1tcImhlYWRlclwiXSA9IEhlYWRlcjtcbiAgICB9XG4gICAgaWYgKGVuYWJsZWQuaGFzKFwibGlzdFwiKSkge1xuICAgICAgdG9vbHNbXCJsaXN0XCJdID0gTGlzdDtcbiAgICB9XG4gICAgaWYgKGVuYWJsZWQuaGFzKFwicXVvdGVcIikpIHtcbiAgICAgIHRvb2xzW1wicXVvdGVcIl0gPSBRdW90ZTtcbiAgICB9XG4gICAgaWYgKGVuYWJsZWQuaGFzKFwiZGVsaW1pdGVyXCIpKSB7XG4gICAgICB0b29sc1tcImRlbGltaXRlclwiXSA9IERlbGltaXRlcjtcbiAgICB9XG4gICAgaWYgKGVuYWJsZWQuaGFzKFwid2FybmluZ1wiKSkge1xuICAgICAgdG9vbHNbXCJ3YXJuaW5nXCJdID0gV2FybmluZztcbiAgICB9XG4gICAgaWYgKGVuYWJsZWQuaGFzKFwiY29sb3JcIikpIHtcbiAgICAgIHRvb2xzW1wiVGV4dENvbG9yXCJdID0ge1xuICAgICAgICBjbGFzczogQ29sb3JUb29sLFxuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3JMYWJlbDogdHJhbnNsYXRpb25zW1wiY29sb3J0b29sLmJhY2tncm91bmRDb2xvckxhYmVsXCJdLFxuICAgICAgICAgIGZyb250Q29sb3JMYWJlbDogdHJhbnNsYXRpb25zW1wiY29sb3J0b29sLmZyb250Q29sb3JMYWJlbFwiXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChlbmFibGVkLmhhcyhcImltYWdlXCIpKSB7XG4gICAgICB0b29sc1tcImltYWdlXCJdID0ge1xuICAgICAgICBjbGFzczogSW1hZ2VUb29sLFxuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICB1cGxvYWRlcjoge1xuICAgICAgICAgICAgdXBsb2FkQnlGaWxlOiBhc3luYyAoZmlsZTogRmlsZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cGxvYWRCeUZpbGUoZmlsZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoZW5hYmxlZC5oYXMoXCJtZW50aW9uXCIpKSB7XG4gICAgICB0b29sc1tcIm1lbnRpb25cIl0gPSB7XG4gICAgICAgIGNsYXNzOiBUYWdUb29sLFxuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICB1c2VyczogdGhpcy51c2VycygpLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdG9vbHM7XG4gIH1cblxuICAvKipcbiAgICogQXBwbGlxdWUgdW4gb3V0aWwgZGUgbGEgYmFycmUgYXUgYmxvYyBjb3VyYW50IDogb24gY29udmVydGl0IGxlIGJsb2MgZW5cbiAgICogcGxhY2UgcXVhbmQgRWRpdG9ySlMgbGUgcGVybWV0LCBzaW5vbiBvbiBlbiBpbnPDqHJlIHVuIG5vdXZlYXUg4oCUIHVuIGJsb2MgdmlkZVxuICAgKiBlc3QgYWxvcnMgcmVtcGxhY8OpIHBsdXTDtHQgcXVlIGRvdWJsw6kuXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgYXBwbHlCbG9ja1Rvb2wodG9vbDogRWRpdG9yVG9vbGJhckJsb2NrVG9vbCkge1xuICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9ySW5zdGFuY2U7XG4gICAgaWYgKCFlZGl0b3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBkYXRhLCB0eXBlIH0gPSBUT09MQkFSX0JMT0NLX0NPTkZJR1t0b29sXTtcbiAgICBjb25zdCBibG9jayA9IHRoaXMuX2dldEN1cnJlbnRCbG9jaygpO1xuICAgIGlmICghYmxvY2spIHtcbiAgICAgIGVkaXRvci5ibG9ja3MuaW5zZXJ0KFxuICAgICAgICB0eXBlLFxuICAgICAgICBkYXRhLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIGVkaXRvci5ibG9ja3MuZ2V0QmxvY2tzQ291bnQoKSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUFjdGl2ZVRvb2woKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBlZGl0b3IuYmxvY2tzLmdldEN1cnJlbnRCbG9ja0luZGV4KCk7XG4gICAgaWYgKGJsb2NrLm5hbWUgPT09IHR5cGUpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGF3YWl0IGVkaXRvci5ibG9ja3MudXBkYXRlKGJsb2NrLmlkLCBkYXRhKTtcbiAgICAgICAgZWRpdG9yLmNhcmV0LnNldFRvQmxvY2soaW5kZXgsIFwiZW5kXCIpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBlZGl0b3IuYmxvY2tzLmNvbnZlcnQoYmxvY2suaWQsIHR5cGUsIGRhdGEpO1xuICAgICAgICBlZGl0b3IuY2FyZXQuc2V0VG9CbG9jayhpbmRleCwgXCJlbmRcIik7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgZWRpdG9yLmJsb2Nrcy5pbnNlcnQoXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBkYXRhLFxuICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICBibG9jay5pc0VtcHR5ID8gaW5kZXggOiBpbmRleCArIDEsXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICBibG9jay5pc0VtcHR5XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZUFjdGl2ZVRvb2woKTtcbiAgfVxuXG4gIC8qKiBEw6lwbGFjZSBvdSBzdXBwcmltZSBsZSBibG9jIGNvdXJhbnQuICovXG4gIHB1YmxpYyBhcHBseUJsb2NrQ29tbWFuZChjb21tYW5kOiBFZGl0b3JUb29sYmFyQmxvY2tDb21tYW5kKSB7XG4gICAgY29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3JJbnN0YW5jZTtcbiAgICBpZiAoIWVkaXRvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGVkaXRvci5ibG9ja3MuZ2V0Q3VycmVudEJsb2NrSW5kZXgoKTtcbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgY2FzZSBcImRlbGV0ZVwiOiB7XG4gICAgICAgIGVkaXRvci5ibG9ja3MuZGVsZXRlKGluZGV4KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFwibW92ZS1kb3duXCI6IHtcbiAgICAgICAgaWYgKGluZGV4IDwgZWRpdG9yLmJsb2Nrcy5nZXRCbG9ja3NDb3VudCgpIC0gMSkge1xuICAgICAgICAgIGVkaXRvci5ibG9ja3MubW92ZShpbmRleCArIDEpO1xuICAgICAgICAgIGVkaXRvci5jYXJldC5zZXRUb0Jsb2NrKGluZGV4ICsgMSwgXCJlbmRcIik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIFwibW92ZS11cFwiOiB7XG4gICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICBlZGl0b3IuYmxvY2tzLm1vdmUoaW5kZXggLSAxKTtcbiAgICAgICAgICBlZGl0b3IuY2FyZXQuc2V0VG9CbG9jayhpbmRleCAtIDEsIFwiZW5kXCIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl91cGRhdGVBY3RpdmVUb29sKCk7XG4gIH1cblxuICAvKipcbiAgICogTGUgYmxvYyBjb3VyYW50IG4nZXN0IHBhcyBvYnNlcnZhYmxlIDogb24gbGUgcmVsaXQgYXByw6hzIGNoYXF1ZSBjbGljIG91XG4gICAqIGZyYXBwZS4gYFRhYmAgZXQgYC9gIHNvbnQgcmV0ZW51cyBhdSBwYXNzYWdlLCBmYXV0ZSBkZSBxdW9pIEVkaXRvckpTIG91dnJlXG4gICAqIHNhIHByb3ByZSBwYWxldHRlIHBhci1kZXNzdXMgbGEgYmFycmUuXG4gICAqL1xuICBwcml2YXRlIF90cmFja0FjdGl2ZUJsb2NrKCkge1xuICAgIGNvbnN0IGhvbGRlciA9IHRoaXMuZWRpdG9yanMubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIG1lcmdlKGZyb21FdmVudChob2xkZXIsIFwiY2xpY2tcIiksIGZyb21FdmVudChob2xkZXIsIFwia2V5dXBcIikpLnN1YnNjcmliZShcbiAgICAgICAgKCkgPT4gdGhpcy5fdXBkYXRlQWN0aXZlVG9vbCgpXG4gICAgICApXG4gICAgKTtcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIGZyb21FdmVudDxLZXlib2FyZEV2ZW50Pihob2xkZXIsIFwia2V5ZG93blwiLCB7IGNhcHR1cmU6IHRydWUgfSkuc3Vic2NyaWJlKFxuICAgICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIlRhYlwiIHx8IGV2ZW50LmtleSA9PT0gXCIvXCIpIHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVBY3RpdmVUb29sKCkge1xuICAgIGNvbnN0IGJsb2NrID0gdGhpcy5fZ2V0Q3VycmVudEJsb2NrKCk7XG4gICAgdGhpcy5hY3RpdmVUb29sLnNldChibG9jayA/IHRoaXMuX3Jlc29sdmVUb29sSWQoYmxvY2spIDogbnVsbCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRDdXJyZW50QmxvY2soKTogQmxvY2tBUEkgfCB1bmRlZmluZWQge1xuICAgIC8vIEwnQVBJIGBibG9ja3NgIG4nZXhpc3RlIG5pIGF2YW50IGBpc1JlYWR5YCBuaSBhcHLDqHMgYGRlc3Ryb3koKWAgOiB0ZXN0ZXJcbiAgICAvLyBsJ2luc3RhbmNlIG5lIHN1ZmZpdCBwYXMuXG4gICAgY29uc3QgYmxvY2tzID0gdGhpcy5lZGl0b3JJbnN0YW5jZT8uYmxvY2tzO1xuICAgIGlmICghYmxvY2tzKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGJsb2Nrcy5nZXRDdXJyZW50QmxvY2tJbmRleCgpO1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBibG9ja3MuZ2V0QmxvY2tCeUluZGV4KGluZGV4KTtcbiAgfVxuXG4gIC8qKiBVbiB0aXRyZSBvdSB1bmUgbGlzdGUgbmUgZGlzZW50IHBhcyBsZXVyIHZhcmlhbnRlIDogb24gbGl0IGxlIERPTSByZW5kdS4gKi9cbiAgcHJpdmF0ZSBfcmVzb2x2ZVRvb2xJZChibG9jazogQmxvY2tBUEkpOiBzdHJpbmcge1xuICAgIGlmIChibG9jay5uYW1lID09PSBcImhlYWRlclwiKSB7XG4gICAgICBjb25zdCBoZWFkaW5nID0gYmxvY2suaG9sZGVyLnF1ZXJ5U2VsZWN0b3IoXCJoMSwgaDIsIGgzLCBoNCwgaDUsIGg2XCIpO1xuICAgICAgcmV0dXJuIGhlYWRpbmcgPyBgaGVhZGVyLSR7aGVhZGluZy50YWdOYW1lLmNoYXJBdCgxKX1gIDogXCJoZWFkZXItMlwiO1xuICAgIH1cbiAgICBpZiAoYmxvY2submFtZSA9PT0gXCJsaXN0XCIpIHtcbiAgICAgIHJldHVybiBibG9jay5ob2xkZXIucXVlcnlTZWxlY3RvcihcIm9sXCIpXG4gICAgICAgID8gXCJsaXN0LW9yZGVyZWRcIlxuICAgICAgICA6IFwibGlzdC11bm9yZGVyZWRcIjtcbiAgICB9XG4gICAgcmV0dXJuIGJsb2NrLm5hbWU7XG4gIH1cblxuICBwcml2YXRlIF9nZXRMYW5ndWFnZVBhY2soKSB7XG4gICAgY29uc3QgbGFuZ3VhZ2UgPSB0aGlzLl90cmFuc2xhdGlvblNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKTtcbiAgICBpZiAoIWlzTm9uTnVsbGFibGUobGFuZ3VhZ2UpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VzW2xhbmd1YWdlXSA/PyBudWxsO1xuICB9XG5cbiAgcHVibGljIHVwbG9hZEJ5RmlsZSA9IGFzeW5jIChmaWxlOiBGaWxlKSA9PiB7XG4gICAgY29uc3QgZG9jID0gYXdhaXQgZmlyc3RWYWx1ZUZyb20oXG4gICAgICB0aGlzLl9kb2N1bWVudHNTZXJ2aWNlLmFkZERvY3VtZW50JCh7IGZpbGUgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IDEsXG4gICAgICBmaWxlOiB7XG4gICAgICAgIHVybDogZG9jLnVybCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBwcml2YXRlIF9vbkNoYW5nZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoaXNOb3RFbXB0eU9iamVjdCh0aGlzLmVkaXRvckluc3RhbmNlKSkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX2V4dHJhY3RXaXRoQ29sb3JUb2tlblN0eWxlcygpO1xuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgYmxvY2tzOiBkYXRhLmJsb2NrcyB9KTtcbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlQWN0aXZlVG9vbCgpO1xuICAgIGlmICh0aGlzLnNhdmVPbkNoYW5nZSgpKSB7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NhdmVBZnRlcikge1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB0aGlzLl9zYXZlQWZ0ZXIgPSBmYWxzZTtcbiAgICB9XG4gIH07XG4gIHByaXZhdGUgX2dldFRyYW5zbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRMYW5ndWFnZVBhY2soKT8uZWRpdG9yanMgPz8ge307XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9leHRyYWN0V2l0aENvbG9yVG9rZW5TdHlsZXMoKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5lZGl0b3JJbnN0YW5jZT8uc2F2ZSgpO1xuICAgIGlmICghb3V0cHV0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZWRTcGFucyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLmVkaXRvcmpzLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MLm1hdGNoQWxsKFxuICAgICAgICAvPHNwYW4gY2xhc3M9XCJjZS1pbmxpbmUtdG9vbC0tY29sb3JfX3Rva2VuXCIoLio/KT4vZ3NcbiAgICAgIClcbiAgICApLm1hcCgobWF0Y2g6IGFueSkgPT4gKHtcbiAgICAgIHN0eWxlOiBtYXRjaFsxXS50cmltKCksIC8vIGBzdHlsZWBcbiAgICB9KSk7XG5cbiAgICBpZiAoc3R5bGVkU3BhbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cblxuICAgIGxldCBzcGFuSW5kZXggPSAwO1xuICAgIGNvbnN0IHVwZGF0ZWRCbG9ja3MgPSBvdXRwdXQuYmxvY2tzLm1hcCgoYmxvY2spID0+IHtcbiAgICAgIGlmIChibG9jay50eXBlICE9PSBcInBhcmFncmFwaFwiIHx8ICFibG9jay5kYXRhPy50ZXh0KSB7XG4gICAgICAgIHJldHVybiBibG9jaztcbiAgICAgIH1cblxuICAgICAgY29uc3QgbmV3VGV4dCA9IGJsb2NrLmRhdGEudGV4dC5yZXBsYWNlKFxuICAgICAgICAvPHNwYW4gY2xhc3M9XCJjZS1pbmxpbmUtdG9vbC0tY29sb3JfX3Rva2VuXCI+L2dzLFxuICAgICAgICAobWF0Y2g6IHVua25vd24pID0+IHtcbiAgICAgICAgICBjb25zdCBzdHlsZWQgPSBzdHlsZWRTcGFuc1tzcGFuSW5kZXgrK107XG4gICAgICAgICAgaWYgKCFzdHlsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cImNlLWlubGluZS10b29sLS1jb2xvcl9fdG9rZW5cIiAke3N0eWxlZC5zdHlsZX0+YDtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uYmxvY2ssXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAuLi5ibG9jay5kYXRhLFxuICAgICAgICAgIHRleHQ6IG5ld1RleHQsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm91dHB1dCxcbiAgICAgIGJsb2NrczogdXBkYXRlZEJsb2NrcyxcbiAgICB9O1xuICB9XG4gIHByaXZhdGUgX2V4dHJhY3RUYWdzKGJsb2NrczogV3lzaXN3Z0Jsb2NrRGF0YTxzdHJpbmcsIGFueT5bXSkge1xuICAgIGNvbnN0IGh0bWwgPSBjb252ZXJ0QmxvY2tzVG9IdG1sKGJsb2Nrcyk7XG4gICAgY29uc3QgcmVnZXggPSAvZGF0YS11c2VyLWlkPVwiKFteXCJdKylcIi9nO1xuICAgIC8vIEV4dHJhY3Rpb24gZGVzIElEcyBzb3VzIGZvcm1lIGRlIHRhYmxlYXVcbiAgICByZXR1cm4gWy4uLmh0bWwubWF0Y2hBbGwocmVnZXgpXS5tYXAoKG1hdGNoKSA9PiBtYXRjaFsxXSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJmbGV4LWNvbHVtbiBnLXNwYWNlLW1kXCIgW2NsYXNzLmlzLWNvbXBhY3RdPVwidGhpcy5pc0NvbXBhY3QoKVwiPlxuICBAaWYgKHRoaXMuc2hvd1Rvb2xiYXIoKSkge1xuICA8dGEtY21zLWVkaXRvci10b29sYmFyXG4gICAgW2FjdGl2ZVRvb2xdPVwidGhpcy5hY3RpdmVUb29sKClcIlxuICAgIFtsYWJlbHNdPVwidGhpcy50b29sYmFyTGFiZWxzXCJcbiAgICBbZW5hYmxlZFRvb2xzXT1cInRoaXMuZW5hYmxlZFRvb2xzKClcIlxuICAgIChibG9ja1Rvb2wpPVwidGhpcy5hcHBseUJsb2NrVG9vbCgkZXZlbnQpXCJcbiAgICAoYmxvY2tDb21tYW5kKT1cInRoaXMuYXBwbHlCbG9ja0NvbW1hbmQoJGV2ZW50KVwiXG4gID48L3RhLWNtcy1lZGl0b3ItdG9vbGJhcj5cbiAgfVxuICA8ZGl2XG4gICAgI2VkaXRvcmpzXG4gICAgY2xhc3M9XCJlZGl0b3ItY29udGFpbmVyXCJcbiAgICBbY2xhc3MubWF4LWhlaWdodF09XCJ0aGlzLm1heEhlaWdodCgpXCJcbiAgICBbY2xhc3MucmVzaXphYmxlXT1cInRoaXMucmVzaXphYmxlKClcIlxuICA+PC9kaXY+XG48L2Rpdj5cbiJdfQ==