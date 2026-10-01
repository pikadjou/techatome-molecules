import { Component, EventEmitter, Output, ViewChild, ViewEncapsulation, inject, input, signal, } from '@angular/core';
import Delimiter from '@editorjs/delimiter';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
// @ts-ignore
import ImageTool from '@editorjs/image';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Warning from '@editorjs/warning';
import { ColorTool } from 'editorjs-color';
import { firstValueFrom, fromEvent, merge } from 'rxjs';
import { TaDocumentsService } from '@ta/services';
import { TaTranslationService } from '@ta/translation';
import { TaBaseComponent, isNonNullable, isNotEmptyObject } from '@ta/utils';
import { convertBlocksToHtml } from '../../public-api';
import { TagTool } from '../plugins/tag-editor/tag-editor';
import { EditorToolbarComponent, } from '../toolbar/toolbar.component';
import { EDITOR_ALL_TOOLS } from './editor-tools';
import * as de from './translation/de.json';
import * as en from './translation/en.json';
import * as es from './translation/es.json';
import * as fr from './translation/fr.json';
import * as nl from './translation/nl.json';
import * as i0 from "@angular/core";
export { EDITOR_ALL_TOOLS };
/** Ce que chaque outil de la barre pose comme bloc EditorJS. */
const TOOLBAR_BLOCK_CONFIG = {
    'delimiter': { type: 'delimiter' },
    'header-1': { data: { level: 1 }, type: 'header' },
    'header-2': { data: { level: 2 }, type: 'header' },
    'header-3': { data: { level: 3 }, type: 'header' },
    'image': { type: 'image' },
    'list-ordered': { data: { style: 'ordered' }, type: 'list' },
    'list-unordered': { data: { style: 'unordered' }, type: 'list' },
    'paragraph': { type: 'paragraph' },
    'quote': { type: 'quote' },
    'warning': { type: 'warning' },
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
                        if (typeof blocks === 'string') {
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
        // `super` coupe les souscriptions posées par `_trackActiveBlock`.
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
            placeholder: this.placeholder() ?? translations['placeholder'],
            tools,
            onChange: this._onChange,
            ...translations,
        });
    }
    _buildTools(translations) {
        const enabled = new Set(this.enabledTools());
        const tools = {};
        if (enabled.has('header')) {
            tools['header'] = Header;
        }
        if (enabled.has('list')) {
            tools['list'] = List;
        }
        if (enabled.has('quote')) {
            tools['quote'] = Quote;
        }
        if (enabled.has('delimiter')) {
            tools['delimiter'] = Delimiter;
        }
        if (enabled.has('warning')) {
            tools['warning'] = Warning;
        }
        if (enabled.has('color')) {
            tools['TextColor'] = {
                class: ColorTool,
                config: {
                    backgroundColorLabel: translations['colortool.backgroundColorLabel'],
                    frontColorLabel: translations['colortool.frontColorLabel'],
                },
            };
        }
        if (enabled.has('image')) {
            tools['image'] = {
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
        if (enabled.has('mention')) {
            tools['mention'] = {
                class: TagTool,
                config: {
                    users: this.users(),
                },
            };
        }
        return tools;
    }
    /** Convertit le bloc courant si EditorJS le permet, sinon insère (ou remplace un bloc vide). */
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
                editor.caret.setToBlock(index, 'end');
            }
        }
        else {
            try {
                await editor.blocks.convert(block.id, type, data);
                editor.caret.setToBlock(index, 'end');
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
            case 'delete': {
                editor.blocks.delete(index);
                break;
            }
            case 'move-down': {
                if (index < editor.blocks.getBlocksCount() - 1) {
                    editor.blocks.move(index + 1);
                    editor.caret.setToBlock(index + 1, 'end');
                }
                break;
            }
            case 'move-up': {
                if (index > 0) {
                    editor.blocks.move(index - 1);
                    editor.caret.setToBlock(index - 1, 'end');
                }
                break;
            }
        }
        this._updateActiveTool();
    }
    /** Relit le bloc courant à chaque clic ou frappe ; `Tab` et `/` sont retenus pour ne pas ouvrir la palette EditorJS. */
    _trackActiveBlock() {
        const holder = this.editorjs.nativeElement;
        this._registerSubscription(merge(fromEvent(holder, 'click'), fromEvent(holder, 'keyup')).subscribe(() => this._updateActiveTool()));
        this._registerSubscription(fromEvent(holder, 'keydown', { capture: true }).subscribe(event => {
            if (event.key === 'Tab' || event.key === '/') {
                event.stopPropagation();
            }
        }));
    }
    _updateActiveTool() {
        const block = this._getCurrentBlock();
        this.activeTool.set(block ? this._resolveToolId(block) : null);
    }
    _getCurrentBlock() {
        // `blocks` n'existe ni avant `isReady` ni après `destroy()`.
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
        if (block.name === 'header') {
            const heading = block.holder.querySelector('h1, h2, h3, h4, h5, h6');
            return heading ? `header-${heading.tagName.charAt(1)}` : 'header-2';
        }
        if (block.name === 'list') {
            return block.holder.querySelector('ol') ? 'list-ordered' : 'list-unordered';
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
        const updatedBlocks = output.blocks.map(block => {
            if (block.type !== 'paragraph' || !block.data?.text) {
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
        return [...html.matchAll(regex)].map(match => match[1]);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditorInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: EditorInputComponent, isStandalone: true, selector: "ta-cms-editor-input", inputs: { initValue: { classPropertyName: "initValue", publicName: "initValue", isSignal: true, isRequired: false, transformFunction: null }, setNewValue$: { classPropertyName: "setNewValue$", publicName: "setNewValue$", isSignal: true, isRequired: false, transformFunction: null }, requestSave$: { classPropertyName: "requestSave$", publicName: "requestSave$", isSignal: true, isRequired: false, transformFunction: null }, clear$: { classPropertyName: "clear$", publicName: "clear$", isSignal: true, isRequired: false, transformFunction: null }, users: { classPropertyName: "users", publicName: "users", isSignal: true, isRequired: false, transformFunction: null }, saveOnChange: { classPropertyName: "saveOnChange", publicName: "saveOnChange", isSignal: true, isRequired: false, transformFunction: null }, maxHeight: { classPropertyName: "maxHeight", publicName: "maxHeight", isSignal: true, isRequired: false, transformFunction: null }, enabledTools: { classPropertyName: "enabledTools", publicName: "enabledTools", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, showToolbar: { classPropertyName: "showToolbar", publicName: "showToolbar", isSignal: true, isRequired: false, transformFunction: null }, isCompact: { classPropertyName: "isCompact", publicName: "isCompact", isSignal: true, isRequired: false, transformFunction: null }, resizable: { classPropertyName: "resizable", publicName: "resizable", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { changed: "changed", saved: "saved" }, viewQueries: [{ propertyName: "editorjs", first: true, predicate: ["editorjs"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"flex-column g-space-md\" [class.is-compact]=\"this.isCompact()\">\r\n  @if (this.showToolbar()) {\r\n    <ta-cms-editor-toolbar\r\n      [activeTool]=\"this.activeTool()\"\r\n      [labels]=\"this.toolbarLabels\"\r\n      [enabledTools]=\"this.enabledTools()\"\r\n      (blockTool)=\"this.applyBlockTool($event)\"\r\n      (blockCommand)=\"this.applyBlockCommand($event)\"\r\n    ></ta-cms-editor-toolbar>\r\n  }\r\n  <div\r\n    #editorjs\r\n    class=\"editor-container\"\r\n    [class.max-height]=\"this.maxHeight()\"\r\n    [class.resizable]=\"this.resizable()\"\r\n  ></div>\r\n</div>\r\n", styles: ["ta-cms-editor-input .editor-container{position:relative;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);color:var(--ta-text-body);max-height:250px;overflow:auto}ta-cms-editor-input .editor-container.resizable{resize:vertical;min-height:60px}ta-cms-editor-input .editor-container.max-height{max-height:300px}ta-cms-editor-input .editor-container .ce-toolbar{display:none}ta-cms-editor-input .editor-container .cdx-block{max-width:100%!important}ta-cms-editor-input .editor-container .ce-block__content,ta-cms-editor-input .editor-container .ce-toolbar__content{max-width:100%!important;margin:0!important}ta-cms-editor-input .editor-container .ce-block--selected .ce-block__content{background-color:var(--ta-surface-hover-primary);border-radius:var(--ta-radius-minimal)}ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder]:empty:before,ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder-active]:before{color:var(--ta-text-tertiary)}ta-cms-editor-input .editor-container .ce-header{color:var(--ta-text-primary)}ta-cms-editor-input .editor-container h1.ce-header{font-size:var(--ta-font-h1-default-size);font-weight:var(--ta-font-h1-default-weight)}ta-cms-editor-input .editor-container h2.ce-header{font-size:var(--ta-font-h2-default-size);font-weight:var(--ta-font-h2-default-weight)}ta-cms-editor-input .editor-container h3.ce-header{font-size:var(--ta-font-h3-default-size);font-weight:var(--ta-font-h3-default-weight)}ta-cms-editor-input .editor-container h4.ce-header{font-size:var(--ta-font-h4-default-size);font-weight:var(--ta-font-h4-default-weight)}ta-cms-editor-input .editor-container .cdx-quote{border-left:3px solid var(--ta-border-brand-primary);padding-left:var(--ta-space-md)}ta-cms-editor-input .editor-container .cdx-warning{background-color:var(--ta-surface-warning);border-radius:var(--ta-radius-minimal);padding:var(--ta-space-sm) var(--ta-space-md)}ta-cms-editor-input .editor-container .ce-popover{--border-radius: var(--ta-radius-rounded);--color-background: var(--ta-surface-primary);--color-background-item-focus: var(--ta-surface-hover-primary);--color-background-item-hover: var(--ta-surface-secondary);--color-border: var(--ta-border-tertiary);--color-text-primary: var(--ta-text-primary);--color-text-secondary: var(--ta-text-secondary)}ta-cms-editor-input .editor-container .ce-inline-toolbar{background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-tertiary);border-radius:var(--ta-radius-minimal);color:var(--ta-text-primary);box-shadow:var(--ta-shadow-black-sm)}ta-cms-editor-input .is-compact .codex-editor__redactor{padding-bottom:0!important}ta-cms-editor-input .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid var(--ta-border-tertiary);text-align:center;justify-content:center}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"], dependencies: [{ kind: "component", type: EditorToolbarComponent, selector: "ta-cms-editor-toolbar", inputs: ["activeTool", "labels", "enabledTools"], outputs: ["blockCommand", "blockTool"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditorInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-cms-editor-input', standalone: true, imports: [EditorToolbarComponent], encapsulation: ViewEncapsulation.None, template: "<div class=\"flex-column g-space-md\" [class.is-compact]=\"this.isCompact()\">\r\n  @if (this.showToolbar()) {\r\n    <ta-cms-editor-toolbar\r\n      [activeTool]=\"this.activeTool()\"\r\n      [labels]=\"this.toolbarLabels\"\r\n      [enabledTools]=\"this.enabledTools()\"\r\n      (blockTool)=\"this.applyBlockTool($event)\"\r\n      (blockCommand)=\"this.applyBlockCommand($event)\"\r\n    ></ta-cms-editor-toolbar>\r\n  }\r\n  <div\r\n    #editorjs\r\n    class=\"editor-container\"\r\n    [class.max-height]=\"this.maxHeight()\"\r\n    [class.resizable]=\"this.resizable()\"\r\n  ></div>\r\n</div>\r\n", styles: ["ta-cms-editor-input .editor-container{position:relative;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);color:var(--ta-text-body);max-height:250px;overflow:auto}ta-cms-editor-input .editor-container.resizable{resize:vertical;min-height:60px}ta-cms-editor-input .editor-container.max-height{max-height:300px}ta-cms-editor-input .editor-container .ce-toolbar{display:none}ta-cms-editor-input .editor-container .cdx-block{max-width:100%!important}ta-cms-editor-input .editor-container .ce-block__content,ta-cms-editor-input .editor-container .ce-toolbar__content{max-width:100%!important;margin:0!important}ta-cms-editor-input .editor-container .ce-block--selected .ce-block__content{background-color:var(--ta-surface-hover-primary);border-radius:var(--ta-radius-minimal)}ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder]:empty:before,ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder-active]:before{color:var(--ta-text-tertiary)}ta-cms-editor-input .editor-container .ce-header{color:var(--ta-text-primary)}ta-cms-editor-input .editor-container h1.ce-header{font-size:var(--ta-font-h1-default-size);font-weight:var(--ta-font-h1-default-weight)}ta-cms-editor-input .editor-container h2.ce-header{font-size:var(--ta-font-h2-default-size);font-weight:var(--ta-font-h2-default-weight)}ta-cms-editor-input .editor-container h3.ce-header{font-size:var(--ta-font-h3-default-size);font-weight:var(--ta-font-h3-default-weight)}ta-cms-editor-input .editor-container h4.ce-header{font-size:var(--ta-font-h4-default-size);font-weight:var(--ta-font-h4-default-weight)}ta-cms-editor-input .editor-container .cdx-quote{border-left:3px solid var(--ta-border-brand-primary);padding-left:var(--ta-space-md)}ta-cms-editor-input .editor-container .cdx-warning{background-color:var(--ta-surface-warning);border-radius:var(--ta-radius-minimal);padding:var(--ta-space-sm) var(--ta-space-md)}ta-cms-editor-input .editor-container .ce-popover{--border-radius: var(--ta-radius-rounded);--color-background: var(--ta-surface-primary);--color-background-item-focus: var(--ta-surface-hover-primary);--color-background-item-hover: var(--ta-surface-secondary);--color-border: var(--ta-border-tertiary);--color-text-primary: var(--ta-text-primary);--color-text-secondary: var(--ta-text-secondary)}ta-cms-editor-input .editor-container .ce-inline-toolbar{background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-tertiary);border-radius:var(--ta-radius-minimal);color:var(--ta-text-primary);box-shadow:var(--ta-shadow-black-sm)}ta-cms-editor-input .is-compact .codex-editor__redactor{padding-bottom:0!important}ta-cms-editor-input .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid var(--ta-border-tertiary);text-align:center;justify-content:center}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"] }]
        }], ctorParameters: () => [], propDecorators: { changed: [{
                type: Output
            }], saved: [{
                type: Output
            }], editorjs: [{
                type: ViewChild,
                args: ['editorjs', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBRVosTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxRQUFzQixNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sTUFBTSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RDLGFBQWE7QUFDYixPQUFPLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLElBQUksTUFBTSxnQkFBZ0IsQ0FBQztBQUNsQyxPQUFPLEtBQUssTUFBTSxpQkFBaUIsQ0FBQztBQUNwQyxPQUFPLE9BQU8sTUFBTSxtQkFBbUIsQ0FBQztBQUN4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFjLGNBQWMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU3RSxPQUFPLEVBQW9CLG1CQUFtQixFQUFF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IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvbixcclxuICBpbmplY3QsXHJcbiAgaW5wdXQsXHJcbiAgc2lnbmFsLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IERlbGltaXRlciBmcm9tICdAZWRpdG9yanMvZGVsaW1pdGVyJztcclxuaW1wb3J0IEVkaXRvckpTLCB7IEJsb2NrQVBJIH0gZnJvbSAnQGVkaXRvcmpzL2VkaXRvcmpzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICdAZWRpdG9yanMvaGVhZGVyJztcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgSW1hZ2VUb29sIGZyb20gJ0BlZGl0b3Jqcy9pbWFnZSc7XHJcbmltcG9ydCBMaXN0IGZyb20gJ0BlZGl0b3Jqcy9saXN0JztcclxuaW1wb3J0IFF1b3RlIGZyb20gJ0BlZGl0b3Jqcy9xdW90ZSc7XHJcbmltcG9ydCBXYXJuaW5nIGZyb20gJ0BlZGl0b3Jqcy93YXJuaW5nJztcclxuaW1wb3J0IHsgQ29sb3JUb29sIH0gZnJvbSAnZWRpdG9yanMtY29sb3InO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmaXJzdFZhbHVlRnJvbSwgZnJvbUV2ZW50LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgVGFEb2N1bWVudHNTZXJ2aWNlIH0gZnJvbSAnQHRhL3NlcnZpY2VzJztcclxuaW1wb3J0IHsgVGFUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICdAdGEvdHJhbnNsYXRpb24nO1xyXG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQsIGlzTm9uTnVsbGFibGUsIGlzTm90RW1wdHlPYmplY3QgfSBmcm9tICdAdGEvdXRpbHMnO1xyXG5cclxuaW1wb3J0IHsgV3lzaXN3Z0Jsb2NrRGF0YSwgY29udmVydEJsb2Nrc1RvSHRtbCB9IGZyb20gJy4uLy4uL3B1YmxpYy1hcGknO1xyXG5pbXBvcnQgeyBUYWdUb29sIH0gZnJvbSAnLi4vcGx1Z2lucy90YWctZWRpdG9yL3RhZy1lZGl0b3InO1xyXG5pbXBvcnQge1xyXG4gIEVkaXRvclRvb2xiYXJCbG9ja0NvbW1hbmQsXHJcbiAgRWRpdG9yVG9vbGJhckJsb2NrVG9vbCxcclxuICBFZGl0b3JUb29sYmFyQ29tcG9uZW50LFxyXG59IGZyb20gJy4uL3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBFRElUT1JfQUxMX1RPT0xTLCBFZGl0b3JUb29sVHlwZSB9IGZyb20gJy4vZWRpdG9yLXRvb2xzJztcclxuaW1wb3J0ICogYXMgZGUgZnJvbSAnLi90cmFuc2xhdGlvbi9kZS5qc29uJztcclxuaW1wb3J0ICogYXMgZW4gZnJvbSAnLi90cmFuc2xhdGlvbi9lbi5qc29uJztcclxuaW1wb3J0ICogYXMgZXMgZnJvbSAnLi90cmFuc2xhdGlvbi9lcy5qc29uJztcclxuaW1wb3J0ICogYXMgZnIgZnJvbSAnLi90cmFuc2xhdGlvbi9mci5qc29uJztcclxuaW1wb3J0ICogYXMgbmwgZnJvbSAnLi90cmFuc2xhdGlvbi9ubC5qc29uJztcclxuXHJcbmV4cG9ydCB0eXBlIEVkaXRvcklucHV0U2F2ZWREYXRhID0ge1xyXG4gIGJsb2NrczogV3lzaXN3Z0Jsb2NrRGF0YVtdO1xyXG4gIHRhZ3M6IHN0cmluZ1tdO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgRURJVE9SX0FMTF9UT09MUyB9O1xyXG5leHBvcnQgdHlwZSB7IEVkaXRvclRvb2xUeXBlIH07XHJcblxyXG4vKiogQ2UgcXVlIGNoYXF1ZSBvdXRpbCBkZSBsYSBiYXJyZSBwb3NlIGNvbW1lIGJsb2MgRWRpdG9ySlMuICovXHJcbmNvbnN0IFRPT0xCQVJfQkxPQ0tfQ09ORklHOiB7XHJcbiAgW3Rvb2wgaW4gRWRpdG9yVG9vbGJhckJsb2NrVG9vbF06IHtcclxuICAgIGRhdGE/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB9O1xyXG4gICAgdHlwZTogc3RyaW5nO1xyXG4gIH07XHJcbn0gPSB7XHJcbiAgJ2RlbGltaXRlcic6IHsgdHlwZTogJ2RlbGltaXRlcicgfSxcclxuICAnaGVhZGVyLTEnOiB7IGRhdGE6IHsgbGV2ZWw6IDEgfSwgdHlwZTogJ2hlYWRlcicgfSxcclxuICAnaGVhZGVyLTInOiB7IGRhdGE6IHsgbGV2ZWw6IDIgfSwgdHlwZTogJ2hlYWRlcicgfSxcclxuICAnaGVhZGVyLTMnOiB7IGRhdGE6IHsgbGV2ZWw6IDMgfSwgdHlwZTogJ2hlYWRlcicgfSxcclxuICAnaW1hZ2UnOiB7IHR5cGU6ICdpbWFnZScgfSxcclxuICAnbGlzdC1vcmRlcmVkJzogeyBkYXRhOiB7IHN0eWxlOiAnb3JkZXJlZCcgfSwgdHlwZTogJ2xpc3QnIH0sXHJcbiAgJ2xpc3QtdW5vcmRlcmVkJzogeyBkYXRhOiB7IHN0eWxlOiAndW5vcmRlcmVkJyB9LCB0eXBlOiAnbGlzdCcgfSxcclxuICAncGFyYWdyYXBoJzogeyB0eXBlOiAncGFyYWdyYXBoJyB9LFxyXG4gICdxdW90ZSc6IHsgdHlwZTogJ3F1b3RlJyB9LFxyXG4gICd3YXJuaW5nJzogeyB0eXBlOiAnd2FybmluZycgfSxcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGEtY21zLWVkaXRvci1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW0VkaXRvclRvb2xiYXJDb21wb25lbnRdLFxyXG4gIC8vIERPTSBFZGl0b3JKUyBob3JzIGVuY2Fwc3VsYXRpb24gOiBjaGFxdWUgcsOoZ2xlIFNDU1MgZXN0IHByw6lmaXjDqWUgcGFyIGxlIHPDqWxlY3RldXIgZHUgY29tcG9zYW50LlxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3JJbnB1dENvbXBvbmVudCBleHRlbmRzIFRhQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgaW5pdFZhbHVlID0gaW5wdXQ8V3lzaXN3Z0Jsb2NrRGF0YVtdIHwgbnVsbD4oKTtcclxuXHJcbiAgc2V0TmV3VmFsdWUkID0gaW5wdXQ8XHJcbiAgICBPYnNlcnZhYmxlPHtcclxuICAgICAgYmxvY2tzOiBXeXNpc3dnQmxvY2tEYXRhW10gfCBzdHJpbmcgfCBudWxsO1xyXG4gICAgICBzYXZlQWZ0ZXI/OiBib29sZWFuO1xyXG4gICAgfT5cclxuICA+KCk7XHJcblxyXG4gIHJlcXVlc3RTYXZlJCA9IGlucHV0PE9ic2VydmFibGU8dm9pZD4+KCk7XHJcblxyXG4gIGNsZWFyJCA9IGlucHV0PE9ic2VydmFibGU8dm9pZD4+KCk7XHJcblxyXG4gIHVzZXJzID0gaW5wdXQ8eyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfVtdPihbXSk7XHJcblxyXG4gIHNhdmVPbkNoYW5nZSA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgbWF4SGVpZ2h0ID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBlbmFibGVkVG9vbHMgPSBpbnB1dDxFZGl0b3JUb29sVHlwZVtdPihFRElUT1JfQUxMX1RPT0xTKTtcclxuXHJcbiAgcGxhY2Vob2xkZXIgPSBpbnB1dDxzdHJpbmc+KCk7XHJcblxyXG4gIC8qKiBBZmZpY2hlIGxhIGJhcnJlIGQnb3V0aWxzIGF1LWRlc3N1cyBkZSBsYSB6b25lIGQnw6lkaXRpb24uICovXHJcbiAgc2hvd1Rvb2xiYXIgPSBpbnB1dDxib29sZWFuPih0cnVlKTtcclxuXHJcbiAgLyoqIFN1cHByaW1lIGxhIHLDqXNlcnZlIGQnZXNwYWNlIGJhc3NlIGQnRWRpdG9ySlMsIHBvdXIgbGVzIGNoYW1wcyBjb3VydHMuICovXHJcbiAgaXNDb21wYWN0ID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICAvKiogTGFpc3NlIGwndXRpbGlzYXRldXIgcsOpZ2xlciBsYSBoYXV0ZXVyIGRlIGxhIHpvbmUgZCfDqWRpdGlvbi4gKi9cclxuICByZXNpemFibGUgPSBpbnB1dDxib29sZWFuPih0cnVlKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBibG9ja3M6IFd5c2lzd2dCbG9ja0RhdGFbXSB9PigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBzYXZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RWRpdG9ySW5wdXRTYXZlZERhdGE+KCk7XHJcblxyXG4gIC8qKiBPdXRpbCBkdSBibG9jIHNvdXMgbGUgY3Vyc2V1ciwgcXVlIGxhIGJhcnJlIG1ldCBlbiDDqXZpZGVuY2UuICovXHJcbiAgcHVibGljIHJlYWRvbmx5IGFjdGl2ZVRvb2wgPSBzaWduYWw8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIHB1YmxpYyB0b29sYmFyTGFiZWxzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XHJcblxyXG4gIHByaXZhdGUgX3RyYW5zbGF0aW9uU2VydmljZSA9IGluamVjdChUYVRyYW5zbGF0aW9uU2VydmljZSk7XHJcbiAgcHVibGljIHJlYWRvbmx5IGxhbmd1YWdlczoge1xyXG4gICAgW2luZGV4OiBzdHJpbmddOiB7XHJcbiAgICAgIGVkaXRvcmpzOiB7IGkxOG46IE9iamVjdCB9ICYgYW55O1xyXG4gICAgICB0b29sYmFyPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgIH07XHJcbiAgfSA9IHtcclxuICAgIGRlOiBkZSxcclxuICAgIGVuOiBlbixcclxuICAgIGVzOiBlcyxcclxuICAgIGZyOiBmcixcclxuICAgIG5sOiBubCxcclxuICB9O1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IF9kb2N1bWVudHNTZXJ2aWNlID0gaW5qZWN0KFRhRG9jdW1lbnRzU2VydmljZSk7XHJcbiAgcHJpdmF0ZSBfc2F2ZUFmdGVyID0gZmFsc2U7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2VkaXRvcmpzJywgeyBzdGF0aWM6IHRydWUgfSlcclxuICBlZGl0b3JqcyE6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHB1YmxpYyBlZGl0b3JJbnN0YW5jZTogRWRpdG9ySlMgfCBudWxsID0gbnVsbDtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudG9vbGJhckxhYmVscyA9IHRoaXMuX2dldExhbmd1YWdlUGFjaygpPy50b29sYmFyID8/IHt9O1xyXG4gICAgY29uc3QgcmVxdWVzdFNhdmUgPSB0aGlzLnJlcXVlc3RTYXZlJCgpO1xyXG4gICAgaWYgKHJlcXVlc3RTYXZlKSB7XHJcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxyXG4gICAgICAgIHJlcXVlc3RTYXZlLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICBuZXh0OiAoKSA9PiB0aGlzLnNhdmUoKSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2xlYXIgPSB0aGlzLmNsZWFyJCgpO1xyXG4gICAgaWYgKGNsZWFyKSB7XHJcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxyXG4gICAgICAgIGNsZWFyLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICBuZXh0OiAoKSA9PiB0aGlzLmVkaXRvckluc3RhbmNlPy5jbGVhcigpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXROZXdWYWx1ZSA9IHRoaXMuc2V0TmV3VmFsdWUkKCk7XHJcbiAgICBpZiAoc2V0TmV3VmFsdWUpIHtcclxuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXHJcbiAgICAgICAgc2V0TmV3VmFsdWUuc3Vic2NyaWJlKHtcclxuICAgICAgICAgIG5leHQ6ICh7IGJsb2Nrcywgc2F2ZUFmdGVyIH0pID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2F2ZUFmdGVyID0gc2F2ZUFmdGVyID8/IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lZGl0b3JJbnN0YW5jZSAmJiBibG9ja3MpIHtcclxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGJsb2NrcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UuYmxvY2tzLnJlbmRlckZyb21IVE1MKGJsb2Nrcyk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UucmVuZGVyKHsgYmxvY2tzOiBibG9ja3MgfSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmVkaXRvckluc3RhbmNlID0gdGhpcy5pbml0KCk7XHJcbiAgICB0aGlzLl90cmFja0FjdGl2ZUJsb2NrKCk7XHJcbiAgfVxyXG5cclxuICBvdmVycmlkZSBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIC8vIGBzdXBlcmAgY291cGUgbGVzIHNvdXNjcmlwdGlvbnMgcG9zw6llcyBwYXIgYF90cmFja0FjdGl2ZUJsb2NrYC5cclxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XHJcbiAgICB0aGlzLmVkaXRvckluc3RhbmNlPy5kZXN0cm95KCk7XHJcbiAgICB0aGlzLmVkaXRvckluc3RhbmNlID0gbnVsbDtcclxuICB9XHJcbiAgcHVibGljIGFzeW5jIHNhdmUoKSB7XHJcbiAgICBpZiAoaXNOb3RFbXB0eU9iamVjdCh0aGlzLmVkaXRvckluc3RhbmNlKSkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fZXh0cmFjdFdpdGhDb2xvclRva2VuU3R5bGVzKCk7XHJcbiAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNhdmVkLmVtaXQoe1xyXG4gICAgICAgIGJsb2NrczogZGF0YS5ibG9ja3MsXHJcbiAgICAgICAgdGFnczogdGhpcy5fZXh0cmFjdFRhZ3MoZGF0YS5ibG9ja3MpLFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgcHVibGljIGluaXQoKTogRWRpdG9ySlMge1xyXG4gICAgY29uc3QgdHJhbnNsYXRpb25zID0gdGhpcy5fZ2V0VHJhbnNsYXRpb24oKTtcclxuICAgIGNvbnN0IHRvb2xzID0gdGhpcy5fYnVpbGRUb29scyh0cmFuc2xhdGlvbnMpO1xyXG5cclxuICAgIHJldHVybiBuZXcgRWRpdG9ySlMoe1xyXG4gICAgICBob2xkZXI6IHRoaXMuZWRpdG9yanMubmF0aXZlRWxlbWVudCxcclxuICAgICAgbWluSGVpZ2h0OiAxMDAsXHJcbiAgICAgIGRhdGE6IHsgYmxvY2tzOiB0aGlzLmluaXRWYWx1ZSgpIH0sXHJcbiAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyKCkgPz8gdHJhbnNsYXRpb25zWydwbGFjZWhvbGRlciddLFxyXG4gICAgICB0b29scyxcclxuICAgICAgb25DaGFuZ2U6IHRoaXMuX29uQ2hhbmdlLFxyXG4gICAgICAuLi50cmFuc2xhdGlvbnMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2J1aWxkVG9vbHModHJhbnNsYXRpb25zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogUmVjb3JkPHN0cmluZywgYW55PiB7XHJcbiAgICBjb25zdCBlbmFibGVkID0gbmV3IFNldCh0aGlzLmVuYWJsZWRUb29scygpKTtcclxuICAgIGNvbnN0IHRvb2xzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XHJcblxyXG4gICAgaWYgKGVuYWJsZWQuaGFzKCdoZWFkZXInKSkge1xyXG4gICAgICB0b29sc1snaGVhZGVyJ10gPSBIZWFkZXI7XHJcbiAgICB9XHJcbiAgICBpZiAoZW5hYmxlZC5oYXMoJ2xpc3QnKSkge1xyXG4gICAgICB0b29sc1snbGlzdCddID0gTGlzdDtcclxuICAgIH1cclxuICAgIGlmIChlbmFibGVkLmhhcygncXVvdGUnKSkge1xyXG4gICAgICB0b29sc1sncXVvdGUnXSA9IFF1b3RlO1xyXG4gICAgfVxyXG4gICAgaWYgKGVuYWJsZWQuaGFzKCdkZWxpbWl0ZXInKSkge1xyXG4gICAgICB0b29sc1snZGVsaW1pdGVyJ10gPSBEZWxpbWl0ZXI7XHJcbiAgICB9XHJcbiAgICBpZiAoZW5hYmxlZC5oYXMoJ3dhcm5pbmcnKSkge1xyXG4gICAgICB0b29sc1snd2FybmluZyddID0gV2FybmluZztcclxuICAgIH1cclxuICAgIGlmIChlbmFibGVkLmhhcygnY29sb3InKSkge1xyXG4gICAgICB0b29sc1snVGV4dENvbG9yJ10gPSB7XHJcbiAgICAgICAgY2xhc3M6IENvbG9yVG9vbCxcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvckxhYmVsOiB0cmFuc2xhdGlvbnNbJ2NvbG9ydG9vbC5iYWNrZ3JvdW5kQ29sb3JMYWJlbCddLFxyXG4gICAgICAgICAgZnJvbnRDb2xvckxhYmVsOiB0cmFuc2xhdGlvbnNbJ2NvbG9ydG9vbC5mcm9udENvbG9yTGFiZWwnXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKGVuYWJsZWQuaGFzKCdpbWFnZScpKSB7XHJcbiAgICAgIHRvb2xzWydpbWFnZSddID0ge1xyXG4gICAgICAgIGNsYXNzOiBJbWFnZVRvb2wsXHJcbiAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICB1cGxvYWRlcjoge1xyXG4gICAgICAgICAgICB1cGxvYWRCeUZpbGU6IGFzeW5jIChmaWxlOiBGaWxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkQnlGaWxlKGZpbGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKGVuYWJsZWQuaGFzKCdtZW50aW9uJykpIHtcclxuICAgICAgdG9vbHNbJ21lbnRpb24nXSA9IHtcclxuICAgICAgICBjbGFzczogVGFnVG9vbCxcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgIHVzZXJzOiB0aGlzLnVzZXJzKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9vbHM7XHJcbiAgfVxyXG5cclxuICAvKiogQ29udmVydGl0IGxlIGJsb2MgY291cmFudCBzaSBFZGl0b3JKUyBsZSBwZXJtZXQsIHNpbm9uIGluc8OocmUgKG91IHJlbXBsYWNlIHVuIGJsb2MgdmlkZSkuICovXHJcbiAgcHVibGljIGFzeW5jIGFwcGx5QmxvY2tUb29sKHRvb2w6IEVkaXRvclRvb2xiYXJCbG9ja1Rvb2wpIHtcclxuICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9ySW5zdGFuY2U7XHJcbiAgICBpZiAoIWVkaXRvcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCB7IGRhdGEsIHR5cGUgfSA9IFRPT0xCQVJfQkxPQ0tfQ09ORklHW3Rvb2xdO1xyXG4gICAgY29uc3QgYmxvY2sgPSB0aGlzLl9nZXRDdXJyZW50QmxvY2soKTtcclxuICAgIGlmICghYmxvY2spIHtcclxuICAgICAgZWRpdG9yLmJsb2Nrcy5pbnNlcnQodHlwZSwgZGF0YSwgdW5kZWZpbmVkLCBlZGl0b3IuYmxvY2tzLmdldEJsb2Nrc0NvdW50KCksIHRydWUpO1xyXG4gICAgICB0aGlzLl91cGRhdGVBY3RpdmVUb29sKCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGluZGV4ID0gZWRpdG9yLmJsb2Nrcy5nZXRDdXJyZW50QmxvY2tJbmRleCgpO1xyXG4gICAgaWYgKGJsb2NrLm5hbWUgPT09IHR5cGUpIHtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBhd2FpdCBlZGl0b3IuYmxvY2tzLnVwZGF0ZShibG9jay5pZCwgZGF0YSk7XHJcbiAgICAgICAgZWRpdG9yLmNhcmV0LnNldFRvQmxvY2soaW5kZXgsICdlbmQnKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBlZGl0b3IuYmxvY2tzLmNvbnZlcnQoYmxvY2suaWQsIHR5cGUsIGRhdGEpO1xyXG4gICAgICAgIGVkaXRvci5jYXJldC5zZXRUb0Jsb2NrKGluZGV4LCAnZW5kJyk7XHJcbiAgICAgIH0gY2F0Y2gge1xyXG4gICAgICAgIGVkaXRvci5ibG9ja3MuaW5zZXJ0KHR5cGUsIGRhdGEsIHVuZGVmaW5lZCwgYmxvY2suaXNFbXB0eSA/IGluZGV4IDogaW5kZXggKyAxLCB0cnVlLCBibG9jay5pc0VtcHR5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5fdXBkYXRlQWN0aXZlVG9vbCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIETDqXBsYWNlIG91IHN1cHByaW1lIGxlIGJsb2MgY291cmFudC4gKi9cclxuICBwdWJsaWMgYXBwbHlCbG9ja0NvbW1hbmQoY29tbWFuZDogRWRpdG9yVG9vbGJhckJsb2NrQ29tbWFuZCkge1xyXG4gICAgY29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3JJbnN0YW5jZTtcclxuICAgIGlmICghZWRpdG9yKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGluZGV4ID0gZWRpdG9yLmJsb2Nrcy5nZXRDdXJyZW50QmxvY2tJbmRleCgpO1xyXG4gICAgaWYgKGluZGV4IDwgMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcclxuICAgICAgY2FzZSAnZGVsZXRlJzoge1xyXG4gICAgICAgIGVkaXRvci5ibG9ja3MuZGVsZXRlKGluZGV4KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICBjYXNlICdtb3ZlLWRvd24nOiB7XHJcbiAgICAgICAgaWYgKGluZGV4IDwgZWRpdG9yLmJsb2Nrcy5nZXRCbG9ja3NDb3VudCgpIC0gMSkge1xyXG4gICAgICAgICAgZWRpdG9yLmJsb2Nrcy5tb3ZlKGluZGV4ICsgMSk7XHJcbiAgICAgICAgICBlZGl0b3IuY2FyZXQuc2V0VG9CbG9jayhpbmRleCArIDEsICdlbmQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgY2FzZSAnbW92ZS11cCc6IHtcclxuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICBlZGl0b3IuYmxvY2tzLm1vdmUoaW5kZXggLSAxKTtcclxuICAgICAgICAgIGVkaXRvci5jYXJldC5zZXRUb0Jsb2NrKGluZGV4IC0gMSwgJ2VuZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5fdXBkYXRlQWN0aXZlVG9vbCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJlbGl0IGxlIGJsb2MgY291cmFudCDDoCBjaGFxdWUgY2xpYyBvdSBmcmFwcGUgOyBgVGFiYCBldCBgL2Agc29udCByZXRlbnVzIHBvdXIgbmUgcGFzIG91dnJpciBsYSBwYWxldHRlIEVkaXRvckpTLiAqL1xyXG4gIHByaXZhdGUgX3RyYWNrQWN0aXZlQmxvY2soKSB7XHJcbiAgICBjb25zdCBob2xkZXIgPSB0aGlzLmVkaXRvcmpzLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcclxuICAgICAgbWVyZ2UoZnJvbUV2ZW50KGhvbGRlciwgJ2NsaWNrJyksIGZyb21FdmVudChob2xkZXIsICdrZXl1cCcpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fdXBkYXRlQWN0aXZlVG9vbCgpKVxyXG4gICAgKTtcclxuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxyXG4gICAgICBmcm9tRXZlbnQ8S2V5Ym9hcmRFdmVudD4oaG9sZGVyLCAna2V5ZG93bicsIHsgY2FwdHVyZTogdHJ1ZSB9KS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleSA9PT0gJy8nKSB7XHJcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdXBkYXRlQWN0aXZlVG9vbCgpIHtcclxuICAgIGNvbnN0IGJsb2NrID0gdGhpcy5fZ2V0Q3VycmVudEJsb2NrKCk7XHJcbiAgICB0aGlzLmFjdGl2ZVRvb2wuc2V0KGJsb2NrID8gdGhpcy5fcmVzb2x2ZVRvb2xJZChibG9jaykgOiBudWxsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldEN1cnJlbnRCbG9jaygpOiBCbG9ja0FQSSB8IHVuZGVmaW5lZCB7XHJcbiAgICAvLyBgYmxvY2tzYCBuJ2V4aXN0ZSBuaSBhdmFudCBgaXNSZWFkeWAgbmkgYXByw6hzIGBkZXN0cm95KClgLlxyXG4gICAgY29uc3QgYmxvY2tzID0gdGhpcy5lZGl0b3JJbnN0YW5jZT8uYmxvY2tzO1xyXG4gICAgaWYgKCFibG9ja3MpIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIGNvbnN0IGluZGV4ID0gYmxvY2tzLmdldEN1cnJlbnRCbG9ja0luZGV4KCk7XHJcbiAgICBpZiAoaW5kZXggPCAwKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmxvY2tzLmdldEJsb2NrQnlJbmRleChpbmRleCk7XHJcbiAgfVxyXG5cclxuICAvKiogVW4gdGl0cmUgb3UgdW5lIGxpc3RlIG5lIGRpc2VudCBwYXMgbGV1ciB2YXJpYW50ZSA6IG9uIGxpdCBsZSBET00gcmVuZHUuICovXHJcbiAgcHJpdmF0ZSBfcmVzb2x2ZVRvb2xJZChibG9jazogQmxvY2tBUEkpOiBzdHJpbmcge1xyXG4gICAgaWYgKGJsb2NrLm5hbWUgPT09ICdoZWFkZXInKSB7XHJcbiAgICAgIGNvbnN0IGhlYWRpbmcgPSBibG9jay5ob2xkZXIucXVlcnlTZWxlY3RvcignaDEsIGgyLCBoMywgaDQsIGg1LCBoNicpO1xyXG4gICAgICByZXR1cm4gaGVhZGluZyA/IGBoZWFkZXItJHtoZWFkaW5nLnRhZ05hbWUuY2hhckF0KDEpfWAgOiAnaGVhZGVyLTInO1xyXG4gICAgfVxyXG4gICAgaWYgKGJsb2NrLm5hbWUgPT09ICdsaXN0Jykge1xyXG4gICAgICByZXR1cm4gYmxvY2suaG9sZGVyLnF1ZXJ5U2VsZWN0b3IoJ29sJykgPyAnbGlzdC1vcmRlcmVkJyA6ICdsaXN0LXVub3JkZXJlZCc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmxvY2submFtZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dldExhbmd1YWdlUGFjaygpIHtcclxuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5fdHJhbnNsYXRpb25TZXJ2aWNlLmdldExhbmd1YWdlKCk7XHJcbiAgICBpZiAoIWlzTm9uTnVsbGFibGUobGFuZ3VhZ2UpKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMubGFuZ3VhZ2VzW2xhbmd1YWdlXSA/PyBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwbG9hZEJ5RmlsZSA9IGFzeW5jIChmaWxlOiBGaWxlKSA9PiB7XHJcbiAgICBjb25zdCBkb2MgPSBhd2FpdCBmaXJzdFZhbHVlRnJvbSh0aGlzLl9kb2N1bWVudHNTZXJ2aWNlLmFkZERvY3VtZW50JCh7IGZpbGUgfSkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN1Y2Nlc3M6IDEsXHJcbiAgICAgIGZpbGU6IHtcclxuICAgICAgICB1cmw6IGRvYy51cmwsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgX29uQ2hhbmdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKGlzTm90RW1wdHlPYmplY3QodGhpcy5lZGl0b3JJbnN0YW5jZSkpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX2V4dHJhY3RXaXRoQ29sb3JUb2tlblN0eWxlcygpO1xyXG4gICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQoeyBibG9ja3M6IGRhdGEuYmxvY2tzIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdXBkYXRlQWN0aXZlVG9vbCgpO1xyXG4gICAgaWYgKHRoaXMuc2F2ZU9uQ2hhbmdlKCkpIHtcclxuICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fc2F2ZUFmdGVyKSB7XHJcbiAgICAgIHRoaXMuc2F2ZSgpO1xyXG4gICAgICB0aGlzLl9zYXZlQWZ0ZXIgPSBmYWxzZTtcclxuICAgIH1cclxuICB9O1xyXG4gIHByaXZhdGUgX2dldFRyYW5zbGF0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dldExhbmd1YWdlUGFjaygpPy5lZGl0b3JqcyA/PyB7fTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgX2V4dHJhY3RXaXRoQ29sb3JUb2tlblN0eWxlcygpIHtcclxuICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHRoaXMuZWRpdG9ySW5zdGFuY2U/LnNhdmUoKTtcclxuICAgIGlmICghb3V0cHV0KSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0eWxlZFNwYW5zID0gQXJyYXkuZnJvbShcclxuICAgICAgdGhpcy5lZGl0b3Jqcy5uYXRpdmVFbGVtZW50LmlubmVySFRNTC5tYXRjaEFsbCgvPHNwYW4gY2xhc3M9XCJjZS1pbmxpbmUtdG9vbC0tY29sb3JfX3Rva2VuXCIoLio/KT4vZ3MpXHJcbiAgICApLm1hcCgobWF0Y2g6IGFueSkgPT4gKHtcclxuICAgICAgc3R5bGU6IG1hdGNoWzFdLnRyaW0oKSwgLy8gYHN0eWxlYFxyXG4gICAgfSkpO1xyXG5cclxuICAgIGlmIChzdHlsZWRTcGFucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgcmV0dXJuIG91dHB1dDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgc3BhbkluZGV4ID0gMDtcclxuICAgIGNvbnN0IHVwZGF0ZWRCbG9ja3MgPSBvdXRwdXQuYmxvY2tzLm1hcChibG9jayA9PiB7XHJcbiAgICAgIGlmIChibG9jay50eXBlICE9PSAncGFyYWdyYXBoJyB8fCAhYmxvY2suZGF0YT8udGV4dCkge1xyXG4gICAgICAgIHJldHVybiBibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV3VGV4dCA9IGJsb2NrLmRhdGEudGV4dC5yZXBsYWNlKC88c3BhbiBjbGFzcz1cImNlLWlubGluZS10b29sLS1jb2xvcl9fdG9rZW5cIj4vZ3MsIChtYXRjaDogdW5rbm93bikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0eWxlZCA9IHN0eWxlZFNwYW5zW3NwYW5JbmRleCsrXTtcclxuICAgICAgICBpZiAoIXN0eWxlZCkge1xyXG4gICAgICAgICAgcmV0dXJuIG1hdGNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiY2UtaW5saW5lLXRvb2wtLWNvbG9yX190b2tlblwiICR7c3R5bGVkLnN0eWxlfT5gO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYmxvY2ssXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uYmxvY2suZGF0YSxcclxuICAgICAgICAgIHRleHQ6IG5ld1RleHQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLm91dHB1dCxcclxuICAgICAgYmxvY2tzOiB1cGRhdGVkQmxvY2tzLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfZXh0cmFjdFRhZ3MoYmxvY2tzOiBXeXNpc3dnQmxvY2tEYXRhPHN0cmluZywgYW55PltdKSB7XHJcbiAgICBjb25zdCBodG1sID0gY29udmVydEJsb2Nrc1RvSHRtbChibG9ja3MpO1xyXG4gICAgY29uc3QgcmVnZXggPSAvZGF0YS11c2VyLWlkPVwiKFteXCJdKylcIi9nO1xyXG4gICAgLy8gRXh0cmFjdGlvbiBkZXMgSURzIHNvdXMgZm9ybWUgZGUgdGFibGVhdVxyXG4gICAgcmV0dXJuIFsuLi5odG1sLm1hdGNoQWxsKHJlZ2V4KV0ubWFwKG1hdGNoID0+IG1hdGNoWzFdKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZsZXgtY29sdW1uIGctc3BhY2UtbWRcIiBbY2xhc3MuaXMtY29tcGFjdF09XCJ0aGlzLmlzQ29tcGFjdCgpXCI+XHJcbiAgQGlmICh0aGlzLnNob3dUb29sYmFyKCkpIHtcclxuICAgIDx0YS1jbXMtZWRpdG9yLXRvb2xiYXJcclxuICAgICAgW2FjdGl2ZVRvb2xdPVwidGhpcy5hY3RpdmVUb29sKClcIlxyXG4gICAgICBbbGFiZWxzXT1cInRoaXMudG9vbGJhckxhYmVsc1wiXHJcbiAgICAgIFtlbmFibGVkVG9vbHNdPVwidGhpcy5lbmFibGVkVG9vbHMoKVwiXHJcbiAgICAgIChibG9ja1Rvb2wpPVwidGhpcy5hcHBseUJsb2NrVG9vbCgkZXZlbnQpXCJcclxuICAgICAgKGJsb2NrQ29tbWFuZCk9XCJ0aGlzLmFwcGx5QmxvY2tDb21tYW5kKCRldmVudClcIlxyXG4gICAgPjwvdGEtY21zLWVkaXRvci10b29sYmFyPlxyXG4gIH1cclxuICA8ZGl2XHJcbiAgICAjZWRpdG9yanNcclxuICAgIGNsYXNzPVwiZWRpdG9yLWNvbnRhaW5lclwiXHJcbiAgICBbY2xhc3MubWF4LWhlaWdodF09XCJ0aGlzLm1heEhlaWdodCgpXCJcclxuICAgIFtjbGFzcy5yZXNpemFibGVdPVwidGhpcy5yZXNpemFibGUoKVwiXHJcbiAgPjwvZGl2PlxyXG48L2Rpdj5cclxuIl19