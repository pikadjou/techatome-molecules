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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: EditorInputComponent, isStandalone: true, selector: "ta-cms-editor-input", inputs: { initValue: { classPropertyName: "initValue", publicName: "initValue", isSignal: true, isRequired: false, transformFunction: null }, setNewValue$: { classPropertyName: "setNewValue$", publicName: "setNewValue$", isSignal: true, isRequired: false, transformFunction: null }, requestSave$: { classPropertyName: "requestSave$", publicName: "requestSave$", isSignal: true, isRequired: false, transformFunction: null }, clear$: { classPropertyName: "clear$", publicName: "clear$", isSignal: true, isRequired: false, transformFunction: null }, users: { classPropertyName: "users", publicName: "users", isSignal: true, isRequired: false, transformFunction: null }, saveOnChange: { classPropertyName: "saveOnChange", publicName: "saveOnChange", isSignal: true, isRequired: false, transformFunction: null }, maxHeight: { classPropertyName: "maxHeight", publicName: "maxHeight", isSignal: true, isRequired: false, transformFunction: null }, enabledTools: { classPropertyName: "enabledTools", publicName: "enabledTools", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, showToolbar: { classPropertyName: "showToolbar", publicName: "showToolbar", isSignal: true, isRequired: false, transformFunction: null }, isCompact: { classPropertyName: "isCompact", publicName: "isCompact", isSignal: true, isRequired: false, transformFunction: null }, resizable: { classPropertyName: "resizable", publicName: "resizable", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { changed: "changed", saved: "saved" }, viewQueries: [{ propertyName: "editorjs", first: true, predicate: ["editorjs"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"flex-column g-space-md\" [class.is-compact]=\"this.isCompact()\">\n  @if (this.showToolbar()) {\n    <ta-cms-editor-toolbar\n      [activeTool]=\"this.activeTool()\"\n      [labels]=\"this.toolbarLabels\"\n      [enabledTools]=\"this.enabledTools()\"\n      (blockTool)=\"this.applyBlockTool($event)\"\n      (blockCommand)=\"this.applyBlockCommand($event)\"\n    ></ta-cms-editor-toolbar>\n  }\n  <div\n    #editorjs\n    class=\"editor-container\"\n    [class.max-height]=\"this.maxHeight()\"\n    [class.resizable]=\"this.resizable()\"\n  ></div>\n</div>\n", styles: ["ta-cms-editor-input .editor-container{position:relative;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);color:var(--ta-text-body);max-height:250px;overflow:auto}ta-cms-editor-input .editor-container.resizable{resize:vertical;min-height:60px}ta-cms-editor-input .editor-container.max-height{max-height:300px}ta-cms-editor-input .editor-container .ce-toolbar{display:none}ta-cms-editor-input .editor-container .cdx-block{max-width:100%!important}ta-cms-editor-input .editor-container .ce-block__content,ta-cms-editor-input .editor-container .ce-toolbar__content{max-width:100%!important;margin:0!important}ta-cms-editor-input .editor-container .ce-block--selected .ce-block__content{background-color:var(--ta-surface-hover-primary);border-radius:var(--ta-radius-minimal)}ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder]:empty:before,ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder-active]:before{color:var(--ta-text-tertiary)}ta-cms-editor-input .editor-container .ce-header{color:var(--ta-text-primary)}ta-cms-editor-input .editor-container h1.ce-header{font-size:var(--ta-font-h1-default-size);font-weight:var(--ta-font-h1-default-weight)}ta-cms-editor-input .editor-container h2.ce-header{font-size:var(--ta-font-h2-default-size);font-weight:var(--ta-font-h2-default-weight)}ta-cms-editor-input .editor-container h3.ce-header{font-size:var(--ta-font-h3-default-size);font-weight:var(--ta-font-h3-default-weight)}ta-cms-editor-input .editor-container h4.ce-header{font-size:var(--ta-font-h4-default-size);font-weight:var(--ta-font-h4-default-weight)}ta-cms-editor-input .editor-container .cdx-quote{border-left:3px solid var(--ta-border-brand-primary);padding-left:var(--ta-space-md)}ta-cms-editor-input .editor-container .cdx-warning{background-color:var(--ta-surface-warning);border-radius:var(--ta-radius-minimal);padding:var(--ta-space-sm) var(--ta-space-md)}ta-cms-editor-input .editor-container .ce-popover{--border-radius: var(--ta-radius-rounded);--color-background: var(--ta-surface-primary);--color-background-item-focus: var(--ta-surface-hover-primary);--color-background-item-hover: var(--ta-surface-secondary);--color-border: var(--ta-border-tertiary);--color-text-primary: var(--ta-text-primary);--color-text-secondary: var(--ta-text-secondary)}ta-cms-editor-input .editor-container .ce-inline-toolbar{background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-tertiary);border-radius:var(--ta-radius-minimal);color:var(--ta-text-primary);box-shadow:var(--ta-shadow-black-sm)}ta-cms-editor-input .is-compact .codex-editor__redactor{padding-bottom:0!important}ta-cms-editor-input .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid var(--ta-border-tertiary);text-align:center;justify-content:center}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"], dependencies: [{ kind: "component", type: EditorToolbarComponent, selector: "ta-cms-editor-toolbar", inputs: ["activeTool", "labels", "enabledTools"], outputs: ["blockCommand", "blockTool"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditorInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-cms-editor-input', standalone: true, imports: [EditorToolbarComponent], encapsulation: ViewEncapsulation.None, template: "<div class=\"flex-column g-space-md\" [class.is-compact]=\"this.isCompact()\">\n  @if (this.showToolbar()) {\n    <ta-cms-editor-toolbar\n      [activeTool]=\"this.activeTool()\"\n      [labels]=\"this.toolbarLabels\"\n      [enabledTools]=\"this.enabledTools()\"\n      (blockTool)=\"this.applyBlockTool($event)\"\n      (blockCommand)=\"this.applyBlockCommand($event)\"\n    ></ta-cms-editor-toolbar>\n  }\n  <div\n    #editorjs\n    class=\"editor-container\"\n    [class.max-height]=\"this.maxHeight()\"\n    [class.resizable]=\"this.resizable()\"\n  ></div>\n</div>\n", styles: ["ta-cms-editor-input .editor-container{position:relative;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);color:var(--ta-text-body);max-height:250px;overflow:auto}ta-cms-editor-input .editor-container.resizable{resize:vertical;min-height:60px}ta-cms-editor-input .editor-container.max-height{max-height:300px}ta-cms-editor-input .editor-container .ce-toolbar{display:none}ta-cms-editor-input .editor-container .cdx-block{max-width:100%!important}ta-cms-editor-input .editor-container .ce-block__content,ta-cms-editor-input .editor-container .ce-toolbar__content{max-width:100%!important;margin:0!important}ta-cms-editor-input .editor-container .ce-block--selected .ce-block__content{background-color:var(--ta-surface-hover-primary);border-radius:var(--ta-radius-minimal)}ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder]:empty:before,ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder-active]:before{color:var(--ta-text-tertiary)}ta-cms-editor-input .editor-container .ce-header{color:var(--ta-text-primary)}ta-cms-editor-input .editor-container h1.ce-header{font-size:var(--ta-font-h1-default-size);font-weight:var(--ta-font-h1-default-weight)}ta-cms-editor-input .editor-container h2.ce-header{font-size:var(--ta-font-h2-default-size);font-weight:var(--ta-font-h2-default-weight)}ta-cms-editor-input .editor-container h3.ce-header{font-size:var(--ta-font-h3-default-size);font-weight:var(--ta-font-h3-default-weight)}ta-cms-editor-input .editor-container h4.ce-header{font-size:var(--ta-font-h4-default-size);font-weight:var(--ta-font-h4-default-weight)}ta-cms-editor-input .editor-container .cdx-quote{border-left:3px solid var(--ta-border-brand-primary);padding-left:var(--ta-space-md)}ta-cms-editor-input .editor-container .cdx-warning{background-color:var(--ta-surface-warning);border-radius:var(--ta-radius-minimal);padding:var(--ta-space-sm) var(--ta-space-md)}ta-cms-editor-input .editor-container .ce-popover{--border-radius: var(--ta-radius-rounded);--color-background: var(--ta-surface-primary);--color-background-item-focus: var(--ta-surface-hover-primary);--color-background-item-hover: var(--ta-surface-secondary);--color-border: var(--ta-border-tertiary);--color-text-primary: var(--ta-text-primary);--color-text-secondary: var(--ta-text-secondary)}ta-cms-editor-input .editor-container .ce-inline-toolbar{background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-tertiary);border-radius:var(--ta-radius-minimal);color:var(--ta-text-primary);box-shadow:var(--ta-shadow-black-sm)}ta-cms-editor-input .is-compact .codex-editor__redactor{padding-bottom:0!important}ta-cms-editor-input .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid var(--ta-border-tertiary);text-align:center;justify-content:center}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"] }]
        }], ctorParameters: () => [], propDecorators: { changed: [{
                type: Output
            }], saved: [{
                type: Output
            }], editorjs: [{
                type: ViewChild,
                args: ['editorjs', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBRVosTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxTQUFTLE1BQU0scUJBQXFCLENBQUM7QUFDNUMsT0FBTyxRQUFzQixNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sTUFBTSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RDLGFBQWE7QUFDYixPQUFPLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLElBQUksTUFBTSxnQkFBZ0IsQ0FBQztBQUNsQyxPQUFPLEtBQUssTUFBTSxpQkFBaUIsQ0FBQztBQUNwQyxPQUFPLE9BQU8sTUFBTSxtQkFBbUIsQ0FBQztBQUN4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFjLGNBQWMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXBFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNsRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU3RSxPQUFPLEVBQW9CLG1CQUFtQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDekUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzNELE9BQU8sRUFHTCxzQkFBc0IsR0FDdkIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQWtCLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1QyxPQUFPLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVDLE9BQU8sS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUMsT0FBTyxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1QyxPQUFPLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDOztBQU81QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQztBQUc1QixnRUFBZ0U7QUFDaEUsTUFBTSxvQkFBb0IsR0FLdEI7SUFDRixXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ2xDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xELFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xELFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0lBQ2xELE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDMUIsY0FBYyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7SUFDNUQsZ0JBQWdCLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUNoRSxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0lBQ2xDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7SUFDMUIsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRTtDQUMvQixDQUFDO0FBV0YsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGVBQWU7SUFpRXZEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFqRVYsY0FBUyxHQUFHLEtBQUssRUFBNkIsQ0FBQztRQUUvQyxpQkFBWSxHQUFHLEtBQUssRUFLakIsQ0FBQztRQUVKLGlCQUFZLEdBQUcsS0FBSyxFQUFvQixDQUFDO1FBRXpDLFdBQU0sR0FBRyxLQUFLLEVBQW9CLENBQUM7UUFFbkMsVUFBSyxHQUFHLEtBQUssQ0FBaUMsRUFBRSxDQUFDLENBQUM7UUFFbEQsaUJBQVksR0FBRyxLQUFLLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFckMsY0FBUyxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUVsQyxpQkFBWSxHQUFHLEtBQUssQ0FBbUIsZ0JBQWdCLENBQUMsQ0FBQztRQUV6RCxnQkFBVyxHQUFHLEtBQUssRUFBVSxDQUFDO1FBRTlCLGdFQUFnRTtRQUNoRSxnQkFBVyxHQUFHLEtBQUssQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUVuQyw2RUFBNkU7UUFDN0UsY0FBUyxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUVsQyxtRUFBbUU7UUFDbkUsY0FBUyxHQUFHLEtBQUssQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUdqQyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWtDLENBQUM7UUFHN0QsVUFBSyxHQUFHLElBQUksWUFBWSxFQUF3QixDQUFDO1FBRWpELG1FQUFtRTtRQUNuRCxlQUFVLEdBQUcsTUFBTSxDQUFnQixJQUFJLENBQUMsQ0FBQztRQUVsRCxrQkFBYSxHQUE4QixFQUFFLENBQUM7UUFFN0Msd0JBQW1CLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDM0MsY0FBUyxHQUtyQjtZQUNGLEVBQUUsRUFBRSxFQUFFO1lBQ04sRUFBRSxFQUFFLEVBQUU7WUFDTixFQUFFLEVBQUUsRUFBRTtZQUNOLEVBQUUsRUFBRSxFQUFFO1lBQ04sRUFBRSxFQUFFLEVBQUU7U0FDUCxDQUFDO1FBRWUsc0JBQWlCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDeEQsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUtwQixtQkFBYyxHQUFvQixJQUFJLENBQUM7UUF3UHZDLGlCQUFZLEdBQUcsS0FBSyxFQUFFLElBQVUsRUFBRSxFQUFFO1lBQ3pDLE1BQU0sR0FBRyxHQUFHLE1BQU0sY0FBYyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFaEYsT0FBTztnQkFDTCxPQUFPLEVBQUUsQ0FBQztnQkFDVixJQUFJLEVBQUU7b0JBQ0osR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHO2lCQUNiO2FBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQztRQUVNLGNBQVMsR0FBRyxLQUFLLElBQUksRUFBRTtZQUM3QixJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUMxQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO2dCQUN2RCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQ1YsT0FBTztnQkFDVCxDQUFDO2dCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDZCxDQUFDO1lBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDWixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUMxQixDQUFDO1FBQ0gsQ0FBQyxDQUFDO0lBaFJGLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxPQUFPLElBQUksRUFBRSxDQUFDO1FBQzVELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsV0FBVyxDQUFDLFNBQVMsQ0FBQztnQkFDcEIsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7YUFDeEIsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDO1FBQ0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVCLElBQUksS0FBSyxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMscUJBQXFCLENBQ3hCLEtBQUssQ0FBQyxTQUFTLENBQUM7Z0JBQ2QsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsS0FBSyxFQUFFO2FBQ3pDLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQztRQUNELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN4QyxJQUFJLFdBQVcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsV0FBVyxDQUFDLFNBQVMsQ0FBQztnQkFDcEIsSUFBSSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtvQkFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxTQUFTLElBQUksS0FBSyxDQUFDO29CQUNyQyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksTUFBTSxFQUFFLENBQUM7d0JBQ2xDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFLENBQUM7NEJBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDcEQsQ0FBQzs2QkFBTSxDQUFDOzRCQUNOLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7d0JBQ2pELENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO2FBQ0YsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRVEsV0FBVztRQUNsQixrRUFBa0U7UUFDbEUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEVBQUUsT0FBTyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQUNNLEtBQUssQ0FBQyxJQUFJO1FBQ2YsSUFBSSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztZQUMxQyxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1lBQ3ZELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDVixPQUFPO1lBQ1QsQ0FBQztZQUNELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNkLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtnQkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNyQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQztJQUNNLElBQUk7UUFDVCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDNUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUU3QyxPQUFPLElBQUksUUFBUSxDQUFDO1lBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWE7WUFDbkMsU0FBUyxFQUFFLEdBQUc7WUFDZCxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2xDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksWUFBWSxDQUFDLGFBQWEsQ0FBQztZQUM5RCxLQUFLO1lBQ0wsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3hCLEdBQUcsWUFBWTtTQUNoQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sV0FBVyxDQUFDLFlBQWlDO1FBQ25ELE1BQU0sT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLE1BQU0sS0FBSyxHQUF3QixFQUFFLENBQUM7UUFFdEMsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7WUFDMUIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUMzQixDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDN0IsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDM0IsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUM3QixDQUFDO1FBQ0QsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDekIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHO2dCQUNuQixLQUFLLEVBQUUsU0FBUztnQkFDaEIsTUFBTSxFQUFFO29CQUNOLG9CQUFvQixFQUFFLFlBQVksQ0FBQyxnQ0FBZ0MsQ0FBQztvQkFDcEUsZUFBZSxFQUFFLFlBQVksQ0FBQywyQkFBMkIsQ0FBQztpQkFDM0Q7YUFDRixDQUFDO1FBQ0osQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3pCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRztnQkFDZixLQUFLLEVBQUUsU0FBUztnQkFDaEIsTUFBTSxFQUFFO29CQUNOLFFBQVEsRUFBRTt3QkFDUixZQUFZLEVBQUUsS0FBSyxFQUFFLElBQVUsRUFBRSxFQUFFOzRCQUNqQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2pDLENBQUM7cUJBQ0Y7aUJBQ0Y7YUFDRixDQUFDO1FBQ0osQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRztnQkFDakIsS0FBSyxFQUFFLE9BQU87Z0JBQ2QsTUFBTSxFQUFFO29CQUNOLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFO2lCQUNwQjthQUNGLENBQUM7UUFDSixDQUFDO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsZ0dBQWdHO0lBQ3pGLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBNEI7UUFDdEQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDWixPQUFPO1FBQ1QsQ0FBQztRQUNELE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ1gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN6QixPQUFPO1FBQ1QsQ0FBQztRQUNELE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUNuRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDeEIsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDVCxNQUFNLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0gsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUM7Z0JBQ0gsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hDLENBQUM7WUFBQyxNQUFNLENBQUM7Z0JBQ1AsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDdEcsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsMkNBQTJDO0lBQ3BDLGlCQUFpQixDQUFDLE9BQWtDO1FBQ3pELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ1osT0FBTztRQUNULENBQUM7UUFDRCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDbkQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDZCxPQUFPO1FBQ1QsQ0FBQztRQUNELFFBQVEsT0FBTyxFQUFFLENBQUM7WUFDaEIsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM1QixNQUFNO1lBQ1IsQ0FBQztZQUNELEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDakIsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUM5QixNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUNELE1BQU07WUFDUixDQUFDO1lBQ0QsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNmLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO29CQUNkLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFDRCxNQUFNO1lBQ1IsQ0FBQztRQUNILENBQUM7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsd0hBQXdIO0lBQ2hILGlCQUFpQjtRQUN2QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQTRCLENBQUM7UUFDMUQsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsRUFBRSxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQ3hHLENBQUM7UUFDRixJQUFJLENBQUMscUJBQXFCLENBQ3hCLFNBQVMsQ0FBZ0IsTUFBTSxFQUFFLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMvRSxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQzdDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMxQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU8sZ0JBQWdCO1FBQ3RCLDZEQUE2RDtRQUM3RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLE1BQU0sQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDWixPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDZCxPQUFPLFNBQVMsQ0FBQztRQUNuQixDQUFDO1FBQ0QsT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCwrRUFBK0U7SUFDdkUsY0FBYyxDQUFDLEtBQWU7UUFDcEMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQzVCLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDckUsT0FBTyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDO1FBQ3RFLENBQUM7UUFDRCxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssTUFBTSxFQUFFLENBQUM7WUFDMUIsT0FBTyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM5RSxDQUFDO1FBQ0QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztZQUM3QixPQUFPLElBQUksQ0FBQztRQUNkLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzFDLENBQUM7SUE4Qk8sZUFBZTtRQUNyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLFFBQVEsSUFBSSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVPLEtBQUssQ0FBQyw0QkFBNEI7UUFDeEMsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNaLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUVELE1BQU0sV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsb0RBQW9ELENBQUMsQ0FDckcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckIsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxVQUFVO1NBQ25DLENBQUMsQ0FBQyxDQUFDO1FBRUosSUFBSSxXQUFXLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQzdCLE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbEIsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQ3BELE9BQU8sS0FBSyxDQUFDO1lBQ2YsQ0FBQztZQUVELE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQywrQ0FBK0MsRUFBRSxDQUFDLEtBQWMsRUFBRSxFQUFFO2dCQUMxRyxNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUNaLE9BQU8sS0FBSyxDQUFDO2dCQUNmLENBQUM7Z0JBQ0QsT0FBTyw4Q0FBOEMsTUFBTSxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQ3ZFLENBQUMsQ0FBQyxDQUFDO1lBRUgsT0FBTztnQkFDTCxHQUFHLEtBQUs7Z0JBQ1IsSUFBSSxFQUFFO29CQUNKLEdBQUcsS0FBSyxDQUFDLElBQUk7b0JBQ2IsSUFBSSxFQUFFLE9BQU87aUJBQ2Q7YUFDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsR0FBRyxNQUFNO1lBQ1QsTUFBTSxFQUFFLGFBQWE7U0FDdEIsQ0FBQztJQUNKLENBQUM7SUFDTyxZQUFZLENBQUMsTUFBdUM7UUFDMUQsTUFBTSxJQUFJLEdBQUcsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekMsTUFBTSxLQUFLLEdBQUcseUJBQXlCLENBQUM7UUFDeEMsMkNBQTJDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDOytHQXpZVSxvQkFBb0I7bUdBQXBCLG9CQUFvQixrMkRDL0VqQyw4akJBaUJBLDQ3R0QwRFksc0JBQXNCOzs0RkFJckIsb0JBQW9CO2tCQVRoQyxTQUFTOytCQUNFLHFCQUFxQixjQUduQixJQUFJLFdBQ1AsQ0FBQyxzQkFBc0IsQ0FBQyxpQkFFbEIsaUJBQWlCLENBQUMsSUFBSTt3REFvQ3JDLE9BQU87c0JBRE4sTUFBTTtnQkFJUCxLQUFLO3NCQURKLE1BQU07Z0JBMEJQLFFBQVE7c0JBRFAsU0FBUzt1QkFBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBpbmplY3QsXG4gIGlucHV0LFxuICBzaWduYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgRGVsaW1pdGVyIGZyb20gJ0BlZGl0b3Jqcy9kZWxpbWl0ZXInO1xuaW1wb3J0IEVkaXRvckpTLCB7IEJsb2NrQVBJIH0gZnJvbSAnQGVkaXRvcmpzL2VkaXRvcmpzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnQGVkaXRvcmpzL2hlYWRlcic7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgSW1hZ2VUb29sIGZyb20gJ0BlZGl0b3Jqcy9pbWFnZSc7XG5pbXBvcnQgTGlzdCBmcm9tICdAZWRpdG9yanMvbGlzdCc7XG5pbXBvcnQgUXVvdGUgZnJvbSAnQGVkaXRvcmpzL3F1b3RlJztcbmltcG9ydCBXYXJuaW5nIGZyb20gJ0BlZGl0b3Jqcy93YXJuaW5nJztcbmltcG9ydCB7IENvbG9yVG9vbCB9IGZyb20gJ2VkaXRvcmpzLWNvbG9yJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZpcnN0VmFsdWVGcm9tLCBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRhRG9jdW1lbnRzU2VydmljZSB9IGZyb20gJ0B0YS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJ0B0YS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQsIGlzTm9uTnVsbGFibGUsIGlzTm90RW1wdHlPYmplY3QgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBXeXNpc3dnQmxvY2tEYXRhLCBjb252ZXJ0QmxvY2tzVG9IdG1sIH0gZnJvbSAnLi4vLi4vcHVibGljLWFwaSc7XG5pbXBvcnQgeyBUYWdUb29sIH0gZnJvbSAnLi4vcGx1Z2lucy90YWctZWRpdG9yL3RhZy1lZGl0b3InO1xuaW1wb3J0IHtcbiAgRWRpdG9yVG9vbGJhckJsb2NrQ29tbWFuZCxcbiAgRWRpdG9yVG9vbGJhckJsb2NrVG9vbCxcbiAgRWRpdG9yVG9vbGJhckNvbXBvbmVudCxcbn0gZnJvbSAnLi4vdG9vbGJhci90b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFRElUT1JfQUxMX1RPT0xTLCBFZGl0b3JUb29sVHlwZSB9IGZyb20gJy4vZWRpdG9yLXRvb2xzJztcbmltcG9ydCAqIGFzIGRlIGZyb20gJy4vdHJhbnNsYXRpb24vZGUuanNvbic7XG5pbXBvcnQgKiBhcyBlbiBmcm9tICcuL3RyYW5zbGF0aW9uL2VuLmpzb24nO1xuaW1wb3J0ICogYXMgZXMgZnJvbSAnLi90cmFuc2xhdGlvbi9lcy5qc29uJztcbmltcG9ydCAqIGFzIGZyIGZyb20gJy4vdHJhbnNsYXRpb24vZnIuanNvbic7XG5pbXBvcnQgKiBhcyBubCBmcm9tICcuL3RyYW5zbGF0aW9uL25sLmpzb24nO1xuXG5leHBvcnQgdHlwZSBFZGl0b3JJbnB1dFNhdmVkRGF0YSA9IHtcbiAgYmxvY2tzOiBXeXNpc3dnQmxvY2tEYXRhW107XG4gIHRhZ3M6IHN0cmluZ1tdO1xufTtcblxuZXhwb3J0IHsgRURJVE9SX0FMTF9UT09MUyB9O1xuZXhwb3J0IHR5cGUgeyBFZGl0b3JUb29sVHlwZSB9O1xuXG4vKiogQ2UgcXVlIGNoYXF1ZSBvdXRpbCBkZSBsYSBiYXJyZSBwb3NlIGNvbW1lIGJsb2MgRWRpdG9ySlMuICovXG5jb25zdCBUT09MQkFSX0JMT0NLX0NPTkZJRzoge1xuICBbdG9vbCBpbiBFZGl0b3JUb29sYmFyQmxvY2tUb29sXToge1xuICAgIGRhdGE/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB9O1xuICAgIHR5cGU6IHN0cmluZztcbiAgfTtcbn0gPSB7XG4gICdkZWxpbWl0ZXInOiB7IHR5cGU6ICdkZWxpbWl0ZXInIH0sXG4gICdoZWFkZXItMSc6IHsgZGF0YTogeyBsZXZlbDogMSB9LCB0eXBlOiAnaGVhZGVyJyB9LFxuICAnaGVhZGVyLTInOiB7IGRhdGE6IHsgbGV2ZWw6IDIgfSwgdHlwZTogJ2hlYWRlcicgfSxcbiAgJ2hlYWRlci0zJzogeyBkYXRhOiB7IGxldmVsOiAzIH0sIHR5cGU6ICdoZWFkZXInIH0sXG4gICdpbWFnZSc6IHsgdHlwZTogJ2ltYWdlJyB9LFxuICAnbGlzdC1vcmRlcmVkJzogeyBkYXRhOiB7IHN0eWxlOiAnb3JkZXJlZCcgfSwgdHlwZTogJ2xpc3QnIH0sXG4gICdsaXN0LXVub3JkZXJlZCc6IHsgZGF0YTogeyBzdHlsZTogJ3Vub3JkZXJlZCcgfSwgdHlwZTogJ2xpc3QnIH0sXG4gICdwYXJhZ3JhcGgnOiB7IHR5cGU6ICdwYXJhZ3JhcGgnIH0sXG4gICdxdW90ZSc6IHsgdHlwZTogJ3F1b3RlJyB9LFxuICAnd2FybmluZyc6IHsgdHlwZTogJ3dhcm5pbmcnIH0sXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1jbXMtZWRpdG9yLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0VkaXRvclRvb2xiYXJDb21wb25lbnRdLFxuICAvLyBET00gRWRpdG9ySlMgaG9ycyBlbmNhcHN1bGF0aW9uIDogY2hhcXVlIHLDqGdsZSBTQ1NTIGVzdCBwcsOpZml4w6llIHBhciBsZSBzw6lsZWN0ZXVyIGR1IGNvbXBvc2FudC5cbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdG9ySW5wdXRDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBpbml0VmFsdWUgPSBpbnB1dDxXeXNpc3dnQmxvY2tEYXRhW10gfCBudWxsPigpO1xuXG4gIHNldE5ld1ZhbHVlJCA9IGlucHV0PFxuICAgIE9ic2VydmFibGU8e1xuICAgICAgYmxvY2tzOiBXeXNpc3dnQmxvY2tEYXRhW10gfCBzdHJpbmcgfCBudWxsO1xuICAgICAgc2F2ZUFmdGVyPzogYm9vbGVhbjtcbiAgICB9PlxuICA+KCk7XG5cbiAgcmVxdWVzdFNhdmUkID0gaW5wdXQ8T2JzZXJ2YWJsZTx2b2lkPj4oKTtcblxuICBjbGVhciQgPSBpbnB1dDxPYnNlcnZhYmxlPHZvaWQ+PigpO1xuXG4gIHVzZXJzID0gaW5wdXQ8eyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfVtdPihbXSk7XG5cbiAgc2F2ZU9uQ2hhbmdlID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIG1heEhlaWdodCA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBlbmFibGVkVG9vbHMgPSBpbnB1dDxFZGl0b3JUb29sVHlwZVtdPihFRElUT1JfQUxMX1RPT0xTKTtcblxuICBwbGFjZWhvbGRlciA9IGlucHV0PHN0cmluZz4oKTtcblxuICAvKiogQWZmaWNoZSBsYSBiYXJyZSBkJ291dGlscyBhdS1kZXNzdXMgZGUgbGEgem9uZSBkJ8OpZGl0aW9uLiAqL1xuICBzaG93VG9vbGJhciA9IGlucHV0PGJvb2xlYW4+KHRydWUpO1xuXG4gIC8qKiBTdXBwcmltZSBsYSByw6lzZXJ2ZSBkJ2VzcGFjZSBiYXNzZSBkJ0VkaXRvckpTLCBwb3VyIGxlcyBjaGFtcHMgY291cnRzLiAqL1xuICBpc0NvbXBhY3QgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG5cbiAgLyoqIExhaXNzZSBsJ3V0aWxpc2F0ZXVyIHLDqWdsZXIgbGEgaGF1dGV1ciBkZSBsYSB6b25lIGQnw6lkaXRpb24uICovXG4gIHJlc2l6YWJsZSA9IGlucHV0PGJvb2xlYW4+KHRydWUpO1xuXG4gIEBPdXRwdXQoKVxuICBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGJsb2NrczogV3lzaXN3Z0Jsb2NrRGF0YVtdIH0+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHNhdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxFZGl0b3JJbnB1dFNhdmVkRGF0YT4oKTtcblxuICAvKiogT3V0aWwgZHUgYmxvYyBzb3VzIGxlIGN1cnNldXIsIHF1ZSBsYSBiYXJyZSBtZXQgZW4gw6l2aWRlbmNlLiAqL1xuICBwdWJsaWMgcmVhZG9ubHkgYWN0aXZlVG9vbCA9IHNpZ25hbDxzdHJpbmcgfCBudWxsPihudWxsKTtcblxuICBwdWJsaWMgdG9vbGJhckxhYmVsczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIHByaXZhdGUgX3RyYW5zbGF0aW9uU2VydmljZSA9IGluamVjdChUYVRyYW5zbGF0aW9uU2VydmljZSk7XG4gIHB1YmxpYyByZWFkb25seSBsYW5ndWFnZXM6IHtcbiAgICBbaW5kZXg6IHN0cmluZ106IHtcbiAgICAgIGVkaXRvcmpzOiB7IGkxOG46IE9iamVjdCB9ICYgYW55O1xuICAgICAgdG9vbGJhcj86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgfTtcbiAgfSA9IHtcbiAgICBkZTogZGUsXG4gICAgZW46IGVuLFxuICAgIGVzOiBlcyxcbiAgICBmcjogZnIsXG4gICAgbmw6IG5sLFxuICB9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2RvY3VtZW50c1NlcnZpY2UgPSBpbmplY3QoVGFEb2N1bWVudHNTZXJ2aWNlKTtcbiAgcHJpdmF0ZSBfc2F2ZUFmdGVyID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZCgnZWRpdG9yanMnLCB7IHN0YXRpYzogdHJ1ZSB9KVxuICBlZGl0b3JqcyE6IEVsZW1lbnRSZWY7XG5cbiAgcHVibGljIGVkaXRvckluc3RhbmNlOiBFZGl0b3JKUyB8IG51bGwgPSBudWxsO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50b29sYmFyTGFiZWxzID0gdGhpcy5fZ2V0TGFuZ3VhZ2VQYWNrKCk/LnRvb2xiYXIgPz8ge307XG4gICAgY29uc3QgcmVxdWVzdFNhdmUgPSB0aGlzLnJlcXVlc3RTYXZlJCgpO1xuICAgIGlmIChyZXF1ZXN0U2F2ZSkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICAgIHJlcXVlc3RTYXZlLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogKCkgPT4gdGhpcy5zYXZlKCksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBjbGVhciA9IHRoaXMuY2xlYXIkKCk7XG4gICAgaWYgKGNsZWFyKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgICAgY2xlYXIuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAoKSA9PiB0aGlzLmVkaXRvckluc3RhbmNlPy5jbGVhcigpLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3Qgc2V0TmV3VmFsdWUgPSB0aGlzLnNldE5ld1ZhbHVlJCgpO1xuICAgIGlmIChzZXROZXdWYWx1ZSkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICAgIHNldE5ld1ZhbHVlLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogKHsgYmxvY2tzLCBzYXZlQWZ0ZXIgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZUFmdGVyID0gc2F2ZUFmdGVyID8/IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWRpdG9ySW5zdGFuY2UgJiYgYmxvY2tzKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgYmxvY2tzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UuYmxvY2tzLnJlbmRlckZyb21IVE1MKGJsb2Nrcyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZS5yZW5kZXIoeyBibG9ja3M6IGJsb2NrcyB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmVkaXRvckluc3RhbmNlID0gdGhpcy5pbml0KCk7XG4gICAgdGhpcy5fdHJhY2tBY3RpdmVCbG9jaygpO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gYHN1cGVyYCBjb3VwZSBsZXMgc291c2NyaXB0aW9ucyBwb3PDqWVzIHBhciBgX3RyYWNrQWN0aXZlQmxvY2tgLlxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgdGhpcy5lZGl0b3JJbnN0YW5jZT8uZGVzdHJveSgpO1xuICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UgPSBudWxsO1xuICB9XG4gIHB1YmxpYyBhc3luYyBzYXZlKCkge1xuICAgIGlmIChpc05vdEVtcHR5T2JqZWN0KHRoaXMuZWRpdG9ySW5zdGFuY2UpKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fZXh0cmFjdFdpdGhDb2xvclRva2VuU3R5bGVzKCk7XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zYXZlZC5lbWl0KHtcbiAgICAgICAgYmxvY2tzOiBkYXRhLmJsb2NrcyxcbiAgICAgICAgdGFnczogdGhpcy5fZXh0cmFjdFRhZ3MoZGF0YS5ibG9ja3MpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBpbml0KCk6IEVkaXRvckpTIHtcbiAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSB0aGlzLl9nZXRUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IHRvb2xzID0gdGhpcy5fYnVpbGRUb29scyh0cmFuc2xhdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ldyBFZGl0b3JKUyh7XG4gICAgICBob2xkZXI6IHRoaXMuZWRpdG9yanMubmF0aXZlRWxlbWVudCxcbiAgICAgIG1pbkhlaWdodDogMTAwLFxuICAgICAgZGF0YTogeyBibG9ja3M6IHRoaXMuaW5pdFZhbHVlKCkgfSxcbiAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyKCkgPz8gdHJhbnNsYXRpb25zWydwbGFjZWhvbGRlciddLFxuICAgICAgdG9vbHMsXG4gICAgICBvbkNoYW5nZTogdGhpcy5fb25DaGFuZ2UsXG4gICAgICAuLi50cmFuc2xhdGlvbnMsXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9idWlsZFRvb2xzKHRyYW5zbGF0aW9uczogUmVjb3JkPHN0cmluZywgYW55Pik6IFJlY29yZDxzdHJpbmcsIGFueT4ge1xuICAgIGNvbnN0IGVuYWJsZWQgPSBuZXcgU2V0KHRoaXMuZW5hYmxlZFRvb2xzKCkpO1xuICAgIGNvbnN0IHRvb2xzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG5cbiAgICBpZiAoZW5hYmxlZC5oYXMoJ2hlYWRlcicpKSB7XG4gICAgICB0b29sc1snaGVhZGVyJ10gPSBIZWFkZXI7XG4gICAgfVxuICAgIGlmIChlbmFibGVkLmhhcygnbGlzdCcpKSB7XG4gICAgICB0b29sc1snbGlzdCddID0gTGlzdDtcbiAgICB9XG4gICAgaWYgKGVuYWJsZWQuaGFzKCdxdW90ZScpKSB7XG4gICAgICB0b29sc1sncXVvdGUnXSA9IFF1b3RlO1xuICAgIH1cbiAgICBpZiAoZW5hYmxlZC5oYXMoJ2RlbGltaXRlcicpKSB7XG4gICAgICB0b29sc1snZGVsaW1pdGVyJ10gPSBEZWxpbWl0ZXI7XG4gICAgfVxuICAgIGlmIChlbmFibGVkLmhhcygnd2FybmluZycpKSB7XG4gICAgICB0b29sc1snd2FybmluZyddID0gV2FybmluZztcbiAgICB9XG4gICAgaWYgKGVuYWJsZWQuaGFzKCdjb2xvcicpKSB7XG4gICAgICB0b29sc1snVGV4dENvbG9yJ10gPSB7XG4gICAgICAgIGNsYXNzOiBDb2xvclRvb2wsXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgIGJhY2tncm91bmRDb2xvckxhYmVsOiB0cmFuc2xhdGlvbnNbJ2NvbG9ydG9vbC5iYWNrZ3JvdW5kQ29sb3JMYWJlbCddLFxuICAgICAgICAgIGZyb250Q29sb3JMYWJlbDogdHJhbnNsYXRpb25zWydjb2xvcnRvb2wuZnJvbnRDb2xvckxhYmVsJ10sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoZW5hYmxlZC5oYXMoJ2ltYWdlJykpIHtcbiAgICAgIHRvb2xzWydpbWFnZSddID0ge1xuICAgICAgICBjbGFzczogSW1hZ2VUb29sLFxuICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICB1cGxvYWRlcjoge1xuICAgICAgICAgICAgdXBsb2FkQnlGaWxlOiBhc3luYyAoZmlsZTogRmlsZSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cGxvYWRCeUZpbGUoZmlsZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoZW5hYmxlZC5oYXMoJ21lbnRpb24nKSkge1xuICAgICAgdG9vbHNbJ21lbnRpb24nXSA9IHtcbiAgICAgICAgY2xhc3M6IFRhZ1Rvb2wsXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgIHVzZXJzOiB0aGlzLnVzZXJzKCksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB0b29scztcbiAgfVxuXG4gIC8qKiBDb252ZXJ0aXQgbGUgYmxvYyBjb3VyYW50IHNpIEVkaXRvckpTIGxlIHBlcm1ldCwgc2lub24gaW5zw6hyZSAob3UgcmVtcGxhY2UgdW4gYmxvYyB2aWRlKS4gKi9cbiAgcHVibGljIGFzeW5jIGFwcGx5QmxvY2tUb29sKHRvb2w6IEVkaXRvclRvb2xiYXJCbG9ja1Rvb2wpIHtcbiAgICBjb25zdCBlZGl0b3IgPSB0aGlzLmVkaXRvckluc3RhbmNlO1xuICAgIGlmICghZWRpdG9yKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHsgZGF0YSwgdHlwZSB9ID0gVE9PTEJBUl9CTE9DS19DT05GSUdbdG9vbF07XG4gICAgY29uc3QgYmxvY2sgPSB0aGlzLl9nZXRDdXJyZW50QmxvY2soKTtcbiAgICBpZiAoIWJsb2NrKSB7XG4gICAgICBlZGl0b3IuYmxvY2tzLmluc2VydCh0eXBlLCBkYXRhLCB1bmRlZmluZWQsIGVkaXRvci5ibG9ja3MuZ2V0QmxvY2tzQ291bnQoKSwgdHJ1ZSk7XG4gICAgICB0aGlzLl91cGRhdGVBY3RpdmVUb29sKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gZWRpdG9yLmJsb2Nrcy5nZXRDdXJyZW50QmxvY2tJbmRleCgpO1xuICAgIGlmIChibG9jay5uYW1lID09PSB0eXBlKSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBhd2FpdCBlZGl0b3IuYmxvY2tzLnVwZGF0ZShibG9jay5pZCwgZGF0YSk7XG4gICAgICAgIGVkaXRvci5jYXJldC5zZXRUb0Jsb2NrKGluZGV4LCAnZW5kJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGVkaXRvci5ibG9ja3MuY29udmVydChibG9jay5pZCwgdHlwZSwgZGF0YSk7XG4gICAgICAgIGVkaXRvci5jYXJldC5zZXRUb0Jsb2NrKGluZGV4LCAnZW5kJyk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgZWRpdG9yLmJsb2Nrcy5pbnNlcnQodHlwZSwgZGF0YSwgdW5kZWZpbmVkLCBibG9jay5pc0VtcHR5ID8gaW5kZXggOiBpbmRleCArIDEsIHRydWUsIGJsb2NrLmlzRW1wdHkpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl91cGRhdGVBY3RpdmVUb29sKCk7XG4gIH1cblxuICAvKiogRMOpcGxhY2Ugb3Ugc3VwcHJpbWUgbGUgYmxvYyBjb3VyYW50LiAqL1xuICBwdWJsaWMgYXBwbHlCbG9ja0NvbW1hbmQoY29tbWFuZDogRWRpdG9yVG9vbGJhckJsb2NrQ29tbWFuZCkge1xuICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9ySW5zdGFuY2U7XG4gICAgaWYgKCFlZGl0b3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBlZGl0b3IuYmxvY2tzLmdldEN1cnJlbnRCbG9ja0luZGV4KCk7XG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKGNvbW1hbmQpIHtcbiAgICAgIGNhc2UgJ2RlbGV0ZSc6IHtcbiAgICAgICAgZWRpdG9yLmJsb2Nrcy5kZWxldGUoaW5kZXgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgJ21vdmUtZG93bic6IHtcbiAgICAgICAgaWYgKGluZGV4IDwgZWRpdG9yLmJsb2Nrcy5nZXRCbG9ja3NDb3VudCgpIC0gMSkge1xuICAgICAgICAgIGVkaXRvci5ibG9ja3MubW92ZShpbmRleCArIDEpO1xuICAgICAgICAgIGVkaXRvci5jYXJldC5zZXRUb0Jsb2NrKGluZGV4ICsgMSwgJ2VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnbW92ZS11cCc6IHtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgIGVkaXRvci5ibG9ja3MubW92ZShpbmRleCAtIDEpO1xuICAgICAgICAgIGVkaXRvci5jYXJldC5zZXRUb0Jsb2NrKGluZGV4IC0gMSwgJ2VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl91cGRhdGVBY3RpdmVUb29sKCk7XG4gIH1cblxuICAvKiogUmVsaXQgbGUgYmxvYyBjb3VyYW50IMOgIGNoYXF1ZSBjbGljIG91IGZyYXBwZSA7IGBUYWJgIGV0IGAvYCBzb250IHJldGVudXMgcG91ciBuZSBwYXMgb3V2cmlyIGxhIHBhbGV0dGUgRWRpdG9ySlMuICovXG4gIHByaXZhdGUgX3RyYWNrQWN0aXZlQmxvY2soKSB7XG4gICAgY29uc3QgaG9sZGVyID0gdGhpcy5lZGl0b3Jqcy5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgbWVyZ2UoZnJvbUV2ZW50KGhvbGRlciwgJ2NsaWNrJyksIGZyb21FdmVudChob2xkZXIsICdrZXl1cCcpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fdXBkYXRlQWN0aXZlVG9vbCgpKVxuICAgICk7XG4gICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICBmcm9tRXZlbnQ8S2V5Ym9hcmRFdmVudD4oaG9sZGVyLCAna2V5ZG93bicsIHsgY2FwdHVyZTogdHJ1ZSB9KS5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnVGFiJyB8fCBldmVudC5rZXkgPT09ICcvJykge1xuICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVBY3RpdmVUb29sKCkge1xuICAgIGNvbnN0IGJsb2NrID0gdGhpcy5fZ2V0Q3VycmVudEJsb2NrKCk7XG4gICAgdGhpcy5hY3RpdmVUb29sLnNldChibG9jayA/IHRoaXMuX3Jlc29sdmVUb29sSWQoYmxvY2spIDogbnVsbCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRDdXJyZW50QmxvY2soKTogQmxvY2tBUEkgfCB1bmRlZmluZWQge1xuICAgIC8vIGBibG9ja3NgIG4nZXhpc3RlIG5pIGF2YW50IGBpc1JlYWR5YCBuaSBhcHLDqHMgYGRlc3Ryb3koKWAuXG4gICAgY29uc3QgYmxvY2tzID0gdGhpcy5lZGl0b3JJbnN0YW5jZT8uYmxvY2tzO1xuICAgIGlmICghYmxvY2tzKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGJsb2Nrcy5nZXRDdXJyZW50QmxvY2tJbmRleCgpO1xuICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBibG9ja3MuZ2V0QmxvY2tCeUluZGV4KGluZGV4KTtcbiAgfVxuXG4gIC8qKiBVbiB0aXRyZSBvdSB1bmUgbGlzdGUgbmUgZGlzZW50IHBhcyBsZXVyIHZhcmlhbnRlIDogb24gbGl0IGxlIERPTSByZW5kdS4gKi9cbiAgcHJpdmF0ZSBfcmVzb2x2ZVRvb2xJZChibG9jazogQmxvY2tBUEkpOiBzdHJpbmcge1xuICAgIGlmIChibG9jay5uYW1lID09PSAnaGVhZGVyJykge1xuICAgICAgY29uc3QgaGVhZGluZyA9IGJsb2NrLmhvbGRlci5xdWVyeVNlbGVjdG9yKCdoMSwgaDIsIGgzLCBoNCwgaDUsIGg2Jyk7XG4gICAgICByZXR1cm4gaGVhZGluZyA/IGBoZWFkZXItJHtoZWFkaW5nLnRhZ05hbWUuY2hhckF0KDEpfWAgOiAnaGVhZGVyLTInO1xuICAgIH1cbiAgICBpZiAoYmxvY2submFtZSA9PT0gJ2xpc3QnKSB7XG4gICAgICByZXR1cm4gYmxvY2suaG9sZGVyLnF1ZXJ5U2VsZWN0b3IoJ29sJykgPyAnbGlzdC1vcmRlcmVkJyA6ICdsaXN0LXVub3JkZXJlZCc7XG4gICAgfVxuICAgIHJldHVybiBibG9jay5uYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0TGFuZ3VhZ2VQYWNrKCkge1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5fdHJhbnNsYXRpb25TZXJ2aWNlLmdldExhbmd1YWdlKCk7XG4gICAgaWYgKCFpc05vbk51bGxhYmxlKGxhbmd1YWdlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxhbmd1YWdlc1tsYW5ndWFnZV0gPz8gbnVsbDtcbiAgfVxuXG4gIHB1YmxpYyB1cGxvYWRCeUZpbGUgPSBhc3luYyAoZmlsZTogRmlsZSkgPT4ge1xuICAgIGNvbnN0IGRvYyA9IGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMuX2RvY3VtZW50c1NlcnZpY2UuYWRkRG9jdW1lbnQkKHsgZmlsZSB9KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogMSxcbiAgICAgIGZpbGU6IHtcbiAgICAgICAgdXJsOiBkb2MudXJsLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xuXG4gIHByaXZhdGUgX29uQ2hhbmdlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpc05vdEVtcHR5T2JqZWN0KHRoaXMuZWRpdG9ySW5zdGFuY2UpKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fZXh0cmFjdFdpdGhDb2xvclRva2VuU3R5bGVzKCk7XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQoeyBibG9ja3M6IGRhdGEuYmxvY2tzIH0pO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVBY3RpdmVUb29sKCk7XG4gICAgaWYgKHRoaXMuc2F2ZU9uQ2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2F2ZUFmdGVyKSB7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICAgIHRoaXMuX3NhdmVBZnRlciA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgcHJpdmF0ZSBfZ2V0VHJhbnNsYXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldExhbmd1YWdlUGFjaygpPy5lZGl0b3JqcyA/PyB7fTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2V4dHJhY3RXaXRoQ29sb3JUb2tlblN0eWxlcygpIHtcbiAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLmVkaXRvckluc3RhbmNlPy5zYXZlKCk7XG4gICAgaWYgKCFvdXRwdXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlZFNwYW5zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuZWRpdG9yanMubmF0aXZlRWxlbWVudC5pbm5lckhUTUwubWF0Y2hBbGwoLzxzcGFuIGNsYXNzPVwiY2UtaW5saW5lLXRvb2wtLWNvbG9yX190b2tlblwiKC4qPyk+L2dzKVxuICAgICkubWFwKChtYXRjaDogYW55KSA9PiAoe1xuICAgICAgc3R5bGU6IG1hdGNoWzFdLnRyaW0oKSwgLy8gYHN0eWxlYFxuICAgIH0pKTtcblxuICAgIGlmIChzdHlsZWRTcGFucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgbGV0IHNwYW5JbmRleCA9IDA7XG4gICAgY29uc3QgdXBkYXRlZEJsb2NrcyA9IG91dHB1dC5ibG9ja3MubWFwKGJsb2NrID0+IHtcbiAgICAgIGlmIChibG9jay50eXBlICE9PSAncGFyYWdyYXBoJyB8fCAhYmxvY2suZGF0YT8udGV4dCkge1xuICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1RleHQgPSBibG9jay5kYXRhLnRleHQucmVwbGFjZSgvPHNwYW4gY2xhc3M9XCJjZS1pbmxpbmUtdG9vbC0tY29sb3JfX3Rva2VuXCI+L2dzLCAobWF0Y2g6IHVua25vd24pID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGVkID0gc3R5bGVkU3BhbnNbc3BhbkluZGV4KytdO1xuICAgICAgICBpZiAoIXN0eWxlZCkge1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiY2UtaW5saW5lLXRvb2wtLWNvbG9yX190b2tlblwiICR7c3R5bGVkLnN0eWxlfT5gO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmJsb2NrLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgLi4uYmxvY2suZGF0YSxcbiAgICAgICAgICB0ZXh0OiBuZXdUZXh0LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5vdXRwdXQsXG4gICAgICBibG9ja3M6IHVwZGF0ZWRCbG9ja3MsXG4gICAgfTtcbiAgfVxuICBwcml2YXRlIF9leHRyYWN0VGFncyhibG9ja3M6IFd5c2lzd2dCbG9ja0RhdGE8c3RyaW5nLCBhbnk+W10pIHtcbiAgICBjb25zdCBodG1sID0gY29udmVydEJsb2Nrc1RvSHRtbChibG9ja3MpO1xuICAgIGNvbnN0IHJlZ2V4ID0gL2RhdGEtdXNlci1pZD1cIihbXlwiXSspXCIvZztcbiAgICAvLyBFeHRyYWN0aW9uIGRlcyBJRHMgc291cyBmb3JtZSBkZSB0YWJsZWF1XG4gICAgcmV0dXJuIFsuLi5odG1sLm1hdGNoQWxsKHJlZ2V4KV0ubWFwKG1hdGNoID0+IG1hdGNoWzFdKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZsZXgtY29sdW1uIGctc3BhY2UtbWRcIiBbY2xhc3MuaXMtY29tcGFjdF09XCJ0aGlzLmlzQ29tcGFjdCgpXCI+XG4gIEBpZiAodGhpcy5zaG93VG9vbGJhcigpKSB7XG4gICAgPHRhLWNtcy1lZGl0b3ItdG9vbGJhclxuICAgICAgW2FjdGl2ZVRvb2xdPVwidGhpcy5hY3RpdmVUb29sKClcIlxuICAgICAgW2xhYmVsc109XCJ0aGlzLnRvb2xiYXJMYWJlbHNcIlxuICAgICAgW2VuYWJsZWRUb29sc109XCJ0aGlzLmVuYWJsZWRUb29scygpXCJcbiAgICAgIChibG9ja1Rvb2wpPVwidGhpcy5hcHBseUJsb2NrVG9vbCgkZXZlbnQpXCJcbiAgICAgIChibG9ja0NvbW1hbmQpPVwidGhpcy5hcHBseUJsb2NrQ29tbWFuZCgkZXZlbnQpXCJcbiAgICA+PC90YS1jbXMtZWRpdG9yLXRvb2xiYXI+XG4gIH1cbiAgPGRpdlxuICAgICNlZGl0b3Jqc1xuICAgIGNsYXNzPVwiZWRpdG9yLWNvbnRhaW5lclwiXG4gICAgW2NsYXNzLm1heC1oZWlnaHRdPVwidGhpcy5tYXhIZWlnaHQoKVwiXG4gICAgW2NsYXNzLnJlc2l6YWJsZV09XCJ0aGlzLnJlc2l6YWJsZSgpXCJcbiAgPjwvZGl2PlxuPC9kaXY+XG4iXX0=