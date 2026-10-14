import { Component, ViewEncapsulation, inject, input, signal, output, viewChild, } from '@angular/core';
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
        this.changed = output();
        this.saved = output();
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
        this.editorjs = viewChild.required('editorjs');
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
            holder: this.editorjs().nativeElement,
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
        const holder = this.editorjs().nativeElement;
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
        const styledSpans = Array.from(this.editorjs().nativeElement.innerHTML.matchAll(/<span class="ce-inline-tool--color__token"(.*?)>/gs)).map((match) => ({
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: EditorInputComponent, isStandalone: true, selector: "ta-cms-editor-input", inputs: { initValue: { classPropertyName: "initValue", publicName: "initValue", isSignal: true, isRequired: false, transformFunction: null }, setNewValue$: { classPropertyName: "setNewValue$", publicName: "setNewValue$", isSignal: true, isRequired: false, transformFunction: null }, requestSave$: { classPropertyName: "requestSave$", publicName: "requestSave$", isSignal: true, isRequired: false, transformFunction: null }, clear$: { classPropertyName: "clear$", publicName: "clear$", isSignal: true, isRequired: false, transformFunction: null }, users: { classPropertyName: "users", publicName: "users", isSignal: true, isRequired: false, transformFunction: null }, saveOnChange: { classPropertyName: "saveOnChange", publicName: "saveOnChange", isSignal: true, isRequired: false, transformFunction: null }, maxHeight: { classPropertyName: "maxHeight", publicName: "maxHeight", isSignal: true, isRequired: false, transformFunction: null }, enabledTools: { classPropertyName: "enabledTools", publicName: "enabledTools", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null }, showToolbar: { classPropertyName: "showToolbar", publicName: "showToolbar", isSignal: true, isRequired: false, transformFunction: null }, isCompact: { classPropertyName: "isCompact", publicName: "isCompact", isSignal: true, isRequired: false, transformFunction: null }, resizable: { classPropertyName: "resizable", publicName: "resizable", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { changed: "changed", saved: "saved" }, viewQueries: [{ propertyName: "editorjs", first: true, predicate: ["editorjs"], descendants: true, isSignal: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"flex-column g-space-md\" [class.is-compact]=\"this.isCompact()\">\n  @if (this.showToolbar()) {\n    <ta-cms-editor-toolbar\n      [activeTool]=\"this.activeTool()\"\n      [labels]=\"this.toolbarLabels\"\n      [enabledTools]=\"this.enabledTools()\"\n      (blockTool)=\"this.applyBlockTool($event)\"\n      (blockCommand)=\"this.applyBlockCommand($event)\"\n    ></ta-cms-editor-toolbar>\n  }\n  <div\n    #editorjs\n    class=\"editor-container\"\n    [class.max-height]=\"this.maxHeight()\"\n    [class.resizable]=\"this.resizable()\"\n  ></div>\n</div>\n", styles: ["ta-cms-editor-input .editor-container{position:relative;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);color:var(--ta-text-body);max-height:250px;overflow:auto}ta-cms-editor-input .editor-container.resizable{resize:vertical;min-height:60px}ta-cms-editor-input .editor-container.max-height{max-height:300px}ta-cms-editor-input .editor-container .ce-toolbar{display:none}ta-cms-editor-input .editor-container .cdx-block{max-width:100%!important}ta-cms-editor-input .editor-container .ce-block__content,ta-cms-editor-input .editor-container .ce-toolbar__content{max-width:100%!important;margin:0!important}ta-cms-editor-input .editor-container .ce-block--selected .ce-block__content{background-color:var(--ta-surface-hover-primary);border-radius:var(--ta-radius-minimal)}ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder]:empty:before,ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder-active]:before{color:var(--ta-text-tertiary)}ta-cms-editor-input .editor-container .ce-header{color:var(--ta-text-primary)}ta-cms-editor-input .editor-container h1.ce-header{font-size:var(--ta-font-h1-default-size);font-weight:var(--ta-font-h1-default-weight)}ta-cms-editor-input .editor-container h2.ce-header{font-size:var(--ta-font-h2-default-size);font-weight:var(--ta-font-h2-default-weight)}ta-cms-editor-input .editor-container h3.ce-header{font-size:var(--ta-font-h3-default-size);font-weight:var(--ta-font-h3-default-weight)}ta-cms-editor-input .editor-container h4.ce-header{font-size:var(--ta-font-h4-default-size);font-weight:var(--ta-font-h4-default-weight)}ta-cms-editor-input .editor-container .cdx-quote{border-left:3px solid var(--ta-border-brand-primary);padding-left:var(--ta-space-md)}ta-cms-editor-input .editor-container .cdx-warning{background-color:var(--ta-surface-warning);border-radius:var(--ta-radius-minimal);padding:var(--ta-space-sm) var(--ta-space-md)}ta-cms-editor-input .editor-container .ce-popover{--border-radius: var(--ta-radius-rounded);--color-background: var(--ta-surface-primary);--color-background-item-focus: var(--ta-surface-hover-primary);--color-background-item-hover: var(--ta-surface-secondary);--color-border: var(--ta-border-tertiary);--color-text-primary: var(--ta-text-primary);--color-text-secondary: var(--ta-text-secondary)}ta-cms-editor-input .editor-container .ce-inline-toolbar{background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-tertiary);border-radius:var(--ta-radius-minimal);color:var(--ta-text-primary);box-shadow:var(--ta-shadow-black-sm)}ta-cms-editor-input .is-compact .codex-editor__redactor{padding-bottom:0!important}ta-cms-editor-input .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid var(--ta-border-tertiary);text-align:center;justify-content:center}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"], dependencies: [{ kind: "component", type: EditorToolbarComponent, selector: "ta-cms-editor-toolbar", inputs: ["activeTool", "labels", "enabledTools"], outputs: ["blockCommand", "blockTool"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditorInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-cms-editor-input', standalone: true, imports: [EditorToolbarComponent], encapsulation: ViewEncapsulation.None, template: "<div class=\"flex-column g-space-md\" [class.is-compact]=\"this.isCompact()\">\n  @if (this.showToolbar()) {\n    <ta-cms-editor-toolbar\n      [activeTool]=\"this.activeTool()\"\n      [labels]=\"this.toolbarLabels\"\n      [enabledTools]=\"this.enabledTools()\"\n      (blockTool)=\"this.applyBlockTool($event)\"\n      (blockCommand)=\"this.applyBlockCommand($event)\"\n    ></ta-cms-editor-toolbar>\n  }\n  <div\n    #editorjs\n    class=\"editor-container\"\n    [class.max-height]=\"this.maxHeight()\"\n    [class.resizable]=\"this.resizable()\"\n  ></div>\n</div>\n", styles: ["ta-cms-editor-input .editor-container{position:relative;font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);color:var(--ta-text-body);max-height:250px;overflow:auto}ta-cms-editor-input .editor-container.resizable{resize:vertical;min-height:60px}ta-cms-editor-input .editor-container.max-height{max-height:300px}ta-cms-editor-input .editor-container .ce-toolbar{display:none}ta-cms-editor-input .editor-container .cdx-block{max-width:100%!important}ta-cms-editor-input .editor-container .ce-block__content,ta-cms-editor-input .editor-container .ce-toolbar__content{max-width:100%!important;margin:0!important}ta-cms-editor-input .editor-container .ce-block--selected .ce-block__content{background-color:var(--ta-surface-hover-primary);border-radius:var(--ta-radius-minimal)}ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder]:empty:before,ta-cms-editor-input .editor-container .ce-paragraph[data-placeholder-active]:before{color:var(--ta-text-tertiary)}ta-cms-editor-input .editor-container .ce-header{color:var(--ta-text-primary)}ta-cms-editor-input .editor-container h1.ce-header{font-size:var(--ta-font-h1-default-size);font-weight:var(--ta-font-h1-default-weight)}ta-cms-editor-input .editor-container h2.ce-header{font-size:var(--ta-font-h2-default-size);font-weight:var(--ta-font-h2-default-weight)}ta-cms-editor-input .editor-container h3.ce-header{font-size:var(--ta-font-h3-default-size);font-weight:var(--ta-font-h3-default-weight)}ta-cms-editor-input .editor-container h4.ce-header{font-size:var(--ta-font-h4-default-size);font-weight:var(--ta-font-h4-default-weight)}ta-cms-editor-input .editor-container .cdx-quote{border-left:3px solid var(--ta-border-brand-primary);padding-left:var(--ta-space-md)}ta-cms-editor-input .editor-container .cdx-warning{background-color:var(--ta-surface-warning);border-radius:var(--ta-radius-minimal);padding:var(--ta-space-sm) var(--ta-space-md)}ta-cms-editor-input .editor-container .ce-popover{--border-radius: var(--ta-radius-rounded);--color-background: var(--ta-surface-primary);--color-background-item-focus: var(--ta-surface-hover-primary);--color-background-item-hover: var(--ta-surface-secondary);--color-border: var(--ta-border-tertiary);--color-text-primary: var(--ta-text-primary);--color-text-secondary: var(--ta-text-secondary)}ta-cms-editor-input .editor-container .ce-inline-toolbar{background-color:var(--ta-surface-primary);border:1px solid var(--ta-border-tertiary);border-radius:var(--ta-radius-minimal);color:var(--ta-text-primary);box-shadow:var(--ta-shadow-black-sm)}ta-cms-editor-input .is-compact .codex-editor__redactor{padding-bottom:0!important}ta-cms-editor-input .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid var(--ta-border-tertiary);text-align:center;justify-content:center}ta-cms-editor-input .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFHVCxpQkFBaUIsRUFDakIsTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBQ04sTUFBTSxFQUNOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLFNBQVMsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QyxPQUFPLFFBQXNCLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxNQUFNLE1BQU0sa0JBQWtCLENBQUM7QUFDdEMsYUFBYTtBQUNiLE9BQU8sU0FBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ3hDLE9BQU8sSUFBSSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xDLE9BQU8sS0FBSyxNQUFNLGlCQUFpQixDQUFDO0FBQ3BDLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQWMsY0FBYyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRTdFLE9BQU8sRUFBb0IsbUJBQW1CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDM0QsT0FBTyxFQUdMLHNCQUFzQixHQUN2QixNQUFNLDhCQUE4QixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBa0IsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVDLE9BQU8sS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUMsT0FBTyxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM1QyxPQUFPLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzVDLE9BQU8sS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBTzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxDQUFDO0FBRzVCLGdFQUFnRTtBQUNoRSxNQUFNLG9CQUFvQixHQUt0QjtJQUNGLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDbEMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEQsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEQsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7SUFDbEQsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUMxQixjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtJQUM1RCxnQkFBZ0IsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO0lBQ2hFLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7SUFDbEMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtJQUMxQixTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFO0NBQy9CLENBQUM7QUFXRixNQUFNLE9BQU8sb0JBQXFCLFNBQVEsZUFBZTtJQThEdkQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQTlEVixjQUFTLEdBQUcsS0FBSyxFQUE2QixDQUFDO1FBRS9DLGlCQUFZLEdBQUcsS0FBSyxFQUtqQixDQUFDO1FBRUosaUJBQVksR0FBRyxLQUFLLEVBQW9CLENBQUM7UUFFekMsV0FBTSxHQUFHLEtBQUssRUFBb0IsQ0FBQztRQUVuQyxVQUFLLEdBQUcsS0FBSyxDQUFpQyxFQUFFLENBQUMsQ0FBQztRQUVsRCxpQkFBWSxHQUFHLEtBQUssQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUVyQyxjQUFTLEdBQUcsS0FBSyxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRWxDLGlCQUFZLEdBQUcsS0FBSyxDQUFtQixnQkFBZ0IsQ0FBQyxDQUFDO1FBRXpELGdCQUFXLEdBQUcsS0FBSyxFQUFVLENBQUM7UUFFOUIsZ0VBQWdFO1FBQ2hFLGdCQUFXLEdBQUcsS0FBSyxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRW5DLDZFQUE2RTtRQUM3RSxjQUFTLEdBQUcsS0FBSyxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBRWxDLG1FQUFtRTtRQUNuRSxjQUFTLEdBQUcsS0FBSyxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRWpDLFlBQU8sR0FBRyxNQUFNLEVBQWtDLENBQUM7UUFFbkQsVUFBSyxHQUFHLE1BQU0sRUFBd0IsQ0FBQztRQUV2QyxtRUFBbUU7UUFDbkQsZUFBVSxHQUFHLE1BQU0sQ0FBZ0IsSUFBSSxDQUFDLENBQUM7UUFFbEQsa0JBQWEsR0FBOEIsRUFBRSxDQUFDO1FBRTdDLHdCQUFtQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzNDLGNBQVMsR0FLckI7WUFDRixFQUFFLEVBQUUsRUFBRTtZQUNOLEVBQUUsRUFBRSxFQUFFO1lBQ04sRUFBRSxFQUFFLEVBQUU7WUFDTixFQUFFLEVBQUUsRUFBRTtZQUNOLEVBQUUsRUFBRSxFQUFFO1NBQ1AsQ0FBQztRQUVlLHNCQUFpQixHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3hELGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFM0IsYUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQTBCLFVBQVUsQ0FBQyxDQUFDO1FBRTVELG1CQUFjLEdBQW9CLElBQUksQ0FBQztRQXdQdkMsaUJBQVksR0FBRyxLQUFLLEVBQUUsSUFBVSxFQUFFLEVBQUU7WUFDekMsTUFBTSxHQUFHLEdBQUcsTUFBTSxjQUFjLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUVoRixPQUFPO2dCQUNMLE9BQU8sRUFBRSxDQUFDO2dCQUNWLElBQUksRUFBRTtvQkFDSixHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUc7aUJBQ2I7YUFDRixDQUFDO1FBQ0osQ0FBQyxDQUFDO1FBRU0sY0FBUyxHQUFHLEtBQUssSUFBSSxFQUFFO1lBQzdCLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQzFDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7Z0JBQ3ZELElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDVixPQUFPO2dCQUNULENBQUM7Z0JBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDN0MsQ0FBQztZQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNkLENBQUM7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNaLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQzFCLENBQUM7UUFDSCxDQUFDLENBQUM7SUFoUkYsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE9BQU8sSUFBSSxFQUFFLENBQUM7UUFDNUQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLElBQUksV0FBVyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixXQUFXLENBQUMsU0FBUyxDQUFDO2dCQUNwQixJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTthQUN4QixDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUM7UUFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDNUIsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNWLElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsS0FBSyxDQUFDLFNBQVMsQ0FBQztnQkFDZCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxLQUFLLEVBQUU7YUFDekMsQ0FBQyxDQUNILENBQUM7UUFDSixDQUFDO1FBQ0QsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3hDLElBQUksV0FBVyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLHFCQUFxQixDQUN4QixXQUFXLENBQUMsU0FBUyxDQUFDO2dCQUNwQixJQUFJLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO29CQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsSUFBSSxLQUFLLENBQUM7b0JBQ3JDLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxNQUFNLEVBQUUsQ0FBQzt3QkFDbEMsSUFBSSxPQUFPLE1BQU0sS0FBSyxRQUFRLEVBQUUsQ0FBQzs0QkFDL0IsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNwRCxDQUFDOzZCQUFNLENBQUM7NEJBQ04sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQzt3QkFDakQsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7YUFDRixDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFUSxXQUFXO1FBQ2xCLGtFQUFrRTtRQUNsRSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxPQUFPLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBQ00sS0FBSyxDQUFDLElBQUk7UUFDZixJQUFJLGdCQUFnQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1lBQzFDLE1BQU0sSUFBSSxHQUFHLE1BQU0sSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUM7WUFDdkQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNWLE9BQU87WUFDVCxDQUFDO1lBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7Z0JBQ2QsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ3JDLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBQ00sSUFBSTtRQUNULE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM1QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRTdDLE9BQU8sSUFBSSxRQUFRLENBQUM7WUFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxhQUFhO1lBQ3JDLFNBQVMsRUFBRSxHQUFHO1lBQ2QsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNsQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLFlBQVksQ0FBQyxhQUFhLENBQUM7WUFDOUQsS0FBSztZQUNMLFFBQVEsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN4QixHQUFHLFlBQVk7U0FDaEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLFdBQVcsQ0FBQyxZQUFpQztRQUNuRCxNQUFNLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztRQUM3QyxNQUFNLEtBQUssR0FBd0IsRUFBRSxDQUFDO1FBRXRDLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzFCLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDM0IsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1lBQ3hCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDdkIsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3pCLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDekIsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDO1lBQzdCLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDakMsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDN0IsQ0FBQztRQUNELElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3pCLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRztnQkFDbkIsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLE1BQU0sRUFBRTtvQkFDTixvQkFBb0IsRUFBRSxZQUFZLENBQUMsZ0NBQWdDLENBQUM7b0JBQ3BFLGVBQWUsRUFBRSxZQUFZLENBQUMsMkJBQTJCLENBQUM7aUJBQzNEO2FBQ0YsQ0FBQztRQUNKLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUc7Z0JBQ2YsS0FBSyxFQUFFLFNBQVM7Z0JBQ2hCLE1BQU0sRUFBRTtvQkFDTixRQUFRLEVBQUU7d0JBQ1IsWUFBWSxFQUFFLEtBQUssRUFBRSxJQUFVLEVBQUUsRUFBRTs0QkFDakMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNqQyxDQUFDO3FCQUNGO2lCQUNGO2FBQ0YsQ0FBQztRQUNKLENBQUM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUMzQixLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUc7Z0JBQ2pCLEtBQUssRUFBRSxPQUFPO2dCQUNkLE1BQU0sRUFBRTtvQkFDTixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRTtpQkFDcEI7YUFDRixDQUFDO1FBQ0osQ0FBQztRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGdHQUFnRztJQUN6RixLQUFLLENBQUMsY0FBYyxDQUFDLElBQTRCO1FBQ3RELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDbkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ1osT0FBTztRQUNULENBQUM7UUFDRCxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNYLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEYsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsT0FBTztRQUNULENBQUM7UUFDRCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDbkQsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3hCLElBQUksSUFBSSxFQUFFLENBQUM7Z0JBQ1QsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDeEMsQ0FBQztRQUNILENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDO2dCQUNILE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ2xELE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztZQUN4QyxDQUFDO1lBQUMsTUFBTSxDQUFDO2dCQUNQLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RHLENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDJDQUEyQztJQUNwQyxpQkFBaUIsQ0FBQyxPQUFrQztRQUN6RCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ25DLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNaLE9BQU87UUFDVCxDQUFDO1FBQ0QsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ25ELElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ2QsT0FBTztRQUNULENBQUM7UUFDRCxRQUFRLE9BQU8sRUFBRSxDQUFDO1lBQ2hCLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDZCxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDNUIsTUFBTTtZQUNSLENBQUM7WUFDRCxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUM7b0JBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztnQkFDNUMsQ0FBQztnQkFDRCxNQUFNO1lBQ1IsQ0FBQztZQUNELEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDZixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztvQkFDZCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzlCLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzVDLENBQUM7Z0JBQ0QsTUFBTTtZQUNSLENBQUM7UUFDSCxDQUFDO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELHdIQUF3SDtJQUNoSCxpQkFBaUI7UUFDdkIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUM3QyxJQUFJLENBQUMscUJBQXFCLENBQ3hCLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FDeEcsQ0FBQztRQUNGLElBQUksQ0FBQyxxQkFBcUIsQ0FDeEIsU0FBUyxDQUFnQixNQUFNLEVBQUUsU0FBUyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQy9FLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDN0MsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQzFCLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVPLGlCQUFpQjtRQUN2QixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsNkRBQTZEO1FBQzdELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsTUFBTSxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNaLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFDRCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNkLE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUM7UUFDRCxPQUFPLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELCtFQUErRTtJQUN2RSxjQUFjLENBQUMsS0FBZTtRQUNwQyxJQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7WUFDNUIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUNyRSxPQUFPLE9BQU8sQ0FBQyxDQUFDLENBQUMsVUFBVSxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDdEUsQ0FBQztRQUNELElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxNQUFNLEVBQUUsQ0FBQztZQUMxQixPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1FBQzlFLENBQUM7UUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO1lBQzdCLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUM7SUFDMUMsQ0FBQztJQThCTyxlQUFlO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsUUFBUSxJQUFJLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRU8sS0FBSyxDQUFDLDRCQUE0QjtRQUN4QyxNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ1osT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsTUFBTSxXQUFXLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FDNUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG9EQUFvRCxDQUFDLENBQ3ZHLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3JCLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsVUFBVTtTQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVKLElBQUksV0FBVyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUUsQ0FBQztZQUM3QixPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDO1FBRUQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlDLElBQUksS0FBSyxDQUFDLElBQUksS0FBSyxXQUFXLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUNwRCxPQUFPLEtBQUssQ0FBQztZQUNmLENBQUM7WUFFRCxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsK0NBQStDLEVBQUUsQ0FBQyxLQUFjLEVBQUUsRUFBRTtnQkFDMUcsTUFBTSxNQUFNLEdBQUcsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztvQkFDWixPQUFPLEtBQUssQ0FBQztnQkFDZixDQUFDO2dCQUNELE9BQU8sOENBQThDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUN2RSxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU87Z0JBQ0wsR0FBRyxLQUFLO2dCQUNSLElBQUksRUFBRTtvQkFDSixHQUFHLEtBQUssQ0FBQyxJQUFJO29CQUNiLElBQUksRUFBRSxPQUFPO2lCQUNkO2FBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNMLEdBQUcsTUFBTTtZQUNULE1BQU0sRUFBRSxhQUFhO1NBQ3RCLENBQUM7SUFDSixDQUFDO0lBQ08sWUFBWSxDQUFDLE1BQXVDO1FBQzFELE1BQU0sSUFBSSxHQUFHLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pDLE1BQU0sS0FBSyxHQUFHLHlCQUF5QixDQUFDO1FBQ3hDLDJDQUEyQztRQUMzQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQzsrR0F0WVUsb0JBQW9CO21HQUFwQixvQkFBb0IsbzJEQzlFakMsOGpCQWlCQSw0N0dEeURZLHNCQUFzQjs7NEZBSXJCLG9CQUFvQjtrQkFUaEMsU0FBUzsrQkFDRSxxQkFBcUIsY0FHbkIsSUFBSSxXQUNQLENBQUMsc0JBQXNCLENBQUMsaUJBRWxCLGlCQUFpQixDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uSW5pdCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIGluamVjdCxcbiAgaW5wdXQsXG4gIHNpZ25hbCxcbiAgb3V0cHV0LFxuICB2aWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgRGVsaW1pdGVyIGZyb20gJ0BlZGl0b3Jqcy9kZWxpbWl0ZXInO1xuaW1wb3J0IEVkaXRvckpTLCB7IEJsb2NrQVBJIH0gZnJvbSAnQGVkaXRvcmpzL2VkaXRvcmpzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnQGVkaXRvcmpzL2hlYWRlcic7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgSW1hZ2VUb29sIGZyb20gJ0BlZGl0b3Jqcy9pbWFnZSc7XG5pbXBvcnQgTGlzdCBmcm9tICdAZWRpdG9yanMvbGlzdCc7XG5pbXBvcnQgUXVvdGUgZnJvbSAnQGVkaXRvcmpzL3F1b3RlJztcbmltcG9ydCBXYXJuaW5nIGZyb20gJ0BlZGl0b3Jqcy93YXJuaW5nJztcbmltcG9ydCB7IENvbG9yVG9vbCB9IGZyb20gJ2VkaXRvcmpzLWNvbG9yJztcbmltcG9ydCB7IE9ic2VydmFibGUsIGZpcnN0VmFsdWVGcm9tLCBmcm9tRXZlbnQsIG1lcmdlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IFRhRG9jdW1lbnRzU2VydmljZSB9IGZyb20gJ0B0YS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJ0B0YS90cmFuc2xhdGlvbic7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQsIGlzTm9uTnVsbGFibGUsIGlzTm90RW1wdHlPYmplY3QgfSBmcm9tICdAdGEvdXRpbHMnO1xuXG5pbXBvcnQgeyBXeXNpc3dnQmxvY2tEYXRhLCBjb252ZXJ0QmxvY2tzVG9IdG1sIH0gZnJvbSAnLi4vLi4vcHVibGljLWFwaSc7XG5pbXBvcnQgeyBUYWdUb29sIH0gZnJvbSAnLi4vcGx1Z2lucy90YWctZWRpdG9yL3RhZy1lZGl0b3InO1xuaW1wb3J0IHtcbiAgRWRpdG9yVG9vbGJhckJsb2NrQ29tbWFuZCxcbiAgRWRpdG9yVG9vbGJhckJsb2NrVG9vbCxcbiAgRWRpdG9yVG9vbGJhckNvbXBvbmVudCxcbn0gZnJvbSAnLi4vdG9vbGJhci90b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFRElUT1JfQUxMX1RPT0xTLCBFZGl0b3JUb29sVHlwZSB9IGZyb20gJy4vZWRpdG9yLXRvb2xzJztcbmltcG9ydCAqIGFzIGRlIGZyb20gJy4vdHJhbnNsYXRpb24vZGUuanNvbic7XG5pbXBvcnQgKiBhcyBlbiBmcm9tICcuL3RyYW5zbGF0aW9uL2VuLmpzb24nO1xuaW1wb3J0ICogYXMgZXMgZnJvbSAnLi90cmFuc2xhdGlvbi9lcy5qc29uJztcbmltcG9ydCAqIGFzIGZyIGZyb20gJy4vdHJhbnNsYXRpb24vZnIuanNvbic7XG5pbXBvcnQgKiBhcyBubCBmcm9tICcuL3RyYW5zbGF0aW9uL25sLmpzb24nO1xuXG5leHBvcnQgdHlwZSBFZGl0b3JJbnB1dFNhdmVkRGF0YSA9IHtcbiAgYmxvY2tzOiBXeXNpc3dnQmxvY2tEYXRhW107XG4gIHRhZ3M6IHN0cmluZ1tdO1xufTtcblxuZXhwb3J0IHsgRURJVE9SX0FMTF9UT09MUyB9O1xuZXhwb3J0IHR5cGUgeyBFZGl0b3JUb29sVHlwZSB9O1xuXG4vKiogQ2UgcXVlIGNoYXF1ZSBvdXRpbCBkZSBsYSBiYXJyZSBwb3NlIGNvbW1lIGJsb2MgRWRpdG9ySlMuICovXG5jb25zdCBUT09MQkFSX0JMT0NLX0NPTkZJRzoge1xuICBbdG9vbCBpbiBFZGl0b3JUb29sYmFyQmxvY2tUb29sXToge1xuICAgIGRhdGE/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB9O1xuICAgIHR5cGU6IHN0cmluZztcbiAgfTtcbn0gPSB7XG4gICdkZWxpbWl0ZXInOiB7IHR5cGU6ICdkZWxpbWl0ZXInIH0sXG4gICdoZWFkZXItMSc6IHsgZGF0YTogeyBsZXZlbDogMSB9LCB0eXBlOiAnaGVhZGVyJyB9LFxuICAnaGVhZGVyLTInOiB7IGRhdGE6IHsgbGV2ZWw6IDIgfSwgdHlwZTogJ2hlYWRlcicgfSxcbiAgJ2hlYWRlci0zJzogeyBkYXRhOiB7IGxldmVsOiAzIH0sIHR5cGU6ICdoZWFkZXInIH0sXG4gICdpbWFnZSc6IHsgdHlwZTogJ2ltYWdlJyB9LFxuICAnbGlzdC1vcmRlcmVkJzogeyBkYXRhOiB7IHN0eWxlOiAnb3JkZXJlZCcgfSwgdHlwZTogJ2xpc3QnIH0sXG4gICdsaXN0LXVub3JkZXJlZCc6IHsgZGF0YTogeyBzdHlsZTogJ3Vub3JkZXJlZCcgfSwgdHlwZTogJ2xpc3QnIH0sXG4gICdwYXJhZ3JhcGgnOiB7IHR5cGU6ICdwYXJhZ3JhcGgnIH0sXG4gICdxdW90ZSc6IHsgdHlwZTogJ3F1b3RlJyB9LFxuICAnd2FybmluZyc6IHsgdHlwZTogJ3dhcm5pbmcnIH0sXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1jbXMtZWRpdG9yLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5zY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0VkaXRvclRvb2xiYXJDb21wb25lbnRdLFxuICAvLyBET00gRWRpdG9ySlMgaG9ycyBlbmNhcHN1bGF0aW9uIDogY2hhcXVlIHLDqGdsZSBTQ1NTIGVzdCBwcsOpZml4w6llIHBhciBsZSBzw6lsZWN0ZXVyIGR1IGNvbXBvc2FudC5cbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdG9ySW5wdXRDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBpbml0VmFsdWUgPSBpbnB1dDxXeXNpc3dnQmxvY2tEYXRhW10gfCBudWxsPigpO1xuXG4gIHNldE5ld1ZhbHVlJCA9IGlucHV0PFxuICAgIE9ic2VydmFibGU8e1xuICAgICAgYmxvY2tzOiBXeXNpc3dnQmxvY2tEYXRhW10gfCBzdHJpbmcgfCBudWxsO1xuICAgICAgc2F2ZUFmdGVyPzogYm9vbGVhbjtcbiAgICB9PlxuICA+KCk7XG5cbiAgcmVxdWVzdFNhdmUkID0gaW5wdXQ8T2JzZXJ2YWJsZTx2b2lkPj4oKTtcblxuICBjbGVhciQgPSBpbnB1dDxPYnNlcnZhYmxlPHZvaWQ+PigpO1xuXG4gIHVzZXJzID0gaW5wdXQ8eyBpZDogc3RyaW5nOyBuYW1lOiBzdHJpbmcgfVtdPihbXSk7XG5cbiAgc2F2ZU9uQ2hhbmdlID0gaW5wdXQ8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIG1heEhlaWdodCA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBlbmFibGVkVG9vbHMgPSBpbnB1dDxFZGl0b3JUb29sVHlwZVtdPihFRElUT1JfQUxMX1RPT0xTKTtcblxuICBwbGFjZWhvbGRlciA9IGlucHV0PHN0cmluZz4oKTtcblxuICAvKiogQWZmaWNoZSBsYSBiYXJyZSBkJ291dGlscyBhdS1kZXNzdXMgZGUgbGEgem9uZSBkJ8OpZGl0aW9uLiAqL1xuICBzaG93VG9vbGJhciA9IGlucHV0PGJvb2xlYW4+KHRydWUpO1xuXG4gIC8qKiBTdXBwcmltZSBsYSByw6lzZXJ2ZSBkJ2VzcGFjZSBiYXNzZSBkJ0VkaXRvckpTLCBwb3VyIGxlcyBjaGFtcHMgY291cnRzLiAqL1xuICBpc0NvbXBhY3QgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG5cbiAgLyoqIExhaXNzZSBsJ3V0aWxpc2F0ZXVyIHLDqWdsZXIgbGEgaGF1dGV1ciBkZSBsYSB6b25lIGQnw6lkaXRpb24uICovXG4gIHJlc2l6YWJsZSA9IGlucHV0PGJvb2xlYW4+KHRydWUpO1xuXG4gIGNoYW5nZWQgPSBvdXRwdXQ8eyBibG9ja3M6IFd5c2lzd2dCbG9ja0RhdGFbXSB9PigpO1xuXG4gIHNhdmVkID0gb3V0cHV0PEVkaXRvcklucHV0U2F2ZWREYXRhPigpO1xuXG4gIC8qKiBPdXRpbCBkdSBibG9jIHNvdXMgbGUgY3Vyc2V1ciwgcXVlIGxhIGJhcnJlIG1ldCBlbiDDqXZpZGVuY2UuICovXG4gIHB1YmxpYyByZWFkb25seSBhY3RpdmVUb29sID0gc2lnbmFsPHN0cmluZyB8IG51bGw+KG51bGwpO1xuXG4gIHB1YmxpYyB0b29sYmFyTGFiZWxzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgcHJpdmF0ZSBfdHJhbnNsYXRpb25TZXJ2aWNlID0gaW5qZWN0KFRhVHJhbnNsYXRpb25TZXJ2aWNlKTtcbiAgcHVibGljIHJlYWRvbmx5IGxhbmd1YWdlczoge1xuICAgIFtpbmRleDogc3RyaW5nXToge1xuICAgICAgZWRpdG9yanM6IHsgaTE4bjogT2JqZWN0IH0gJiBhbnk7XG4gICAgICB0b29sYmFyPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICB9O1xuICB9ID0ge1xuICAgIGRlOiBkZSxcbiAgICBlbjogZW4sXG4gICAgZXM6IGVzLFxuICAgIGZyOiBmcixcbiAgICBubDogbmwsXG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfZG9jdW1lbnRzU2VydmljZSA9IGluamVjdChUYURvY3VtZW50c1NlcnZpY2UpO1xuICBwcml2YXRlIF9zYXZlQWZ0ZXIgPSBmYWxzZTtcblxuICBlZGl0b3JqcyA9IHZpZXdDaGlsZC5yZXF1aXJlZDxFbGVtZW50UmVmPEhUTUxFbGVtZW50Pj4oJ2VkaXRvcmpzJyk7XG5cbiAgcHVibGljIGVkaXRvckluc3RhbmNlOiBFZGl0b3JKUyB8IG51bGwgPSBudWxsO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy50b29sYmFyTGFiZWxzID0gdGhpcy5fZ2V0TGFuZ3VhZ2VQYWNrKCk/LnRvb2xiYXIgPz8ge307XG4gICAgY29uc3QgcmVxdWVzdFNhdmUgPSB0aGlzLnJlcXVlc3RTYXZlJCgpO1xuICAgIGlmIChyZXF1ZXN0U2F2ZSkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICAgIHJlcXVlc3RTYXZlLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogKCkgPT4gdGhpcy5zYXZlKCksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBjbGVhciA9IHRoaXMuY2xlYXIkKCk7XG4gICAgaWYgKGNsZWFyKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgICAgY2xlYXIuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAoKSA9PiB0aGlzLmVkaXRvckluc3RhbmNlPy5jbGVhcigpLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3Qgc2V0TmV3VmFsdWUgPSB0aGlzLnNldE5ld1ZhbHVlJCgpO1xuICAgIGlmIChzZXROZXdWYWx1ZSkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICAgIHNldE5ld1ZhbHVlLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogKHsgYmxvY2tzLCBzYXZlQWZ0ZXIgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fc2F2ZUFmdGVyID0gc2F2ZUFmdGVyID8/IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWRpdG9ySW5zdGFuY2UgJiYgYmxvY2tzKSB7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgYmxvY2tzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UuYmxvY2tzLnJlbmRlckZyb21IVE1MKGJsb2Nrcyk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZS5yZW5kZXIoeyBibG9ja3M6IGJsb2NrcyB9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmVkaXRvckluc3RhbmNlID0gdGhpcy5pbml0KCk7XG4gICAgdGhpcy5fdHJhY2tBY3RpdmVCbG9jaygpO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgLy8gYHN1cGVyYCBjb3VwZSBsZXMgc291c2NyaXB0aW9ucyBwb3PDqWVzIHBhciBgX3RyYWNrQWN0aXZlQmxvY2tgLlxuICAgIHN1cGVyLm5nT25EZXN0cm95KCk7XG4gICAgdGhpcy5lZGl0b3JJbnN0YW5jZT8uZGVzdHJveSgpO1xuICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UgPSBudWxsO1xuICB9XG4gIHB1YmxpYyBhc3luYyBzYXZlKCkge1xuICAgIGlmIChpc05vdEVtcHR5T2JqZWN0KHRoaXMuZWRpdG9ySW5zdGFuY2UpKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fZXh0cmFjdFdpdGhDb2xvclRva2VuU3R5bGVzKCk7XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zYXZlZC5lbWl0KHtcbiAgICAgICAgYmxvY2tzOiBkYXRhLmJsb2NrcyxcbiAgICAgICAgdGFnczogdGhpcy5fZXh0cmFjdFRhZ3MoZGF0YS5ibG9ja3MpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBpbml0KCk6IEVkaXRvckpTIHtcbiAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSB0aGlzLl9nZXRUcmFuc2xhdGlvbigpO1xuICAgIGNvbnN0IHRvb2xzID0gdGhpcy5fYnVpbGRUb29scyh0cmFuc2xhdGlvbnMpO1xuXG4gICAgcmV0dXJuIG5ldyBFZGl0b3JKUyh7XG4gICAgICBob2xkZXI6IHRoaXMuZWRpdG9yanMoKS5uYXRpdmVFbGVtZW50LFxuICAgICAgbWluSGVpZ2h0OiAxMDAsXG4gICAgICBkYXRhOiB7IGJsb2NrczogdGhpcy5pbml0VmFsdWUoKSB9LFxuICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIoKSA/PyB0cmFuc2xhdGlvbnNbJ3BsYWNlaG9sZGVyJ10sXG4gICAgICB0b29scyxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLl9vbkNoYW5nZSxcbiAgICAgIC4uLnRyYW5zbGF0aW9ucyxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2J1aWxkVG9vbHModHJhbnNsYXRpb25zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogUmVjb3JkPHN0cmluZywgYW55PiB7XG4gICAgY29uc3QgZW5hYmxlZCA9IG5ldyBTZXQodGhpcy5lbmFibGVkVG9vbHMoKSk7XG4gICAgY29uc3QgdG9vbHM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblxuICAgIGlmIChlbmFibGVkLmhhcygnaGVhZGVyJykpIHtcbiAgICAgIHRvb2xzWydoZWFkZXInXSA9IEhlYWRlcjtcbiAgICB9XG4gICAgaWYgKGVuYWJsZWQuaGFzKCdsaXN0JykpIHtcbiAgICAgIHRvb2xzWydsaXN0J10gPSBMaXN0O1xuICAgIH1cbiAgICBpZiAoZW5hYmxlZC5oYXMoJ3F1b3RlJykpIHtcbiAgICAgIHRvb2xzWydxdW90ZSddID0gUXVvdGU7XG4gICAgfVxuICAgIGlmIChlbmFibGVkLmhhcygnZGVsaW1pdGVyJykpIHtcbiAgICAgIHRvb2xzWydkZWxpbWl0ZXInXSA9IERlbGltaXRlcjtcbiAgICB9XG4gICAgaWYgKGVuYWJsZWQuaGFzKCd3YXJuaW5nJykpIHtcbiAgICAgIHRvb2xzWyd3YXJuaW5nJ10gPSBXYXJuaW5nO1xuICAgIH1cbiAgICBpZiAoZW5hYmxlZC5oYXMoJ2NvbG9yJykpIHtcbiAgICAgIHRvb2xzWydUZXh0Q29sb3InXSA9IHtcbiAgICAgICAgY2xhc3M6IENvbG9yVG9vbCxcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yTGFiZWw6IHRyYW5zbGF0aW9uc1snY29sb3J0b29sLmJhY2tncm91bmRDb2xvckxhYmVsJ10sXG4gICAgICAgICAgZnJvbnRDb2xvckxhYmVsOiB0cmFuc2xhdGlvbnNbJ2NvbG9ydG9vbC5mcm9udENvbG9yTGFiZWwnXSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChlbmFibGVkLmhhcygnaW1hZ2UnKSkge1xuICAgICAgdG9vbHNbJ2ltYWdlJ10gPSB7XG4gICAgICAgIGNsYXNzOiBJbWFnZVRvb2wsXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgIHVwbG9hZGVyOiB7XG4gICAgICAgICAgICB1cGxvYWRCeUZpbGU6IGFzeW5jIChmaWxlOiBGaWxlKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLnVwbG9hZEJ5RmlsZShmaWxlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmIChlbmFibGVkLmhhcygnbWVudGlvbicpKSB7XG4gICAgICB0b29sc1snbWVudGlvbiddID0ge1xuICAgICAgICBjbGFzczogVGFnVG9vbCxcbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgdXNlcnM6IHRoaXMudXNlcnMoKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvb2xzO1xuICB9XG5cbiAgLyoqIENvbnZlcnRpdCBsZSBibG9jIGNvdXJhbnQgc2kgRWRpdG9ySlMgbGUgcGVybWV0LCBzaW5vbiBpbnPDqHJlIChvdSByZW1wbGFjZSB1biBibG9jIHZpZGUpLiAqL1xuICBwdWJsaWMgYXN5bmMgYXBwbHlCbG9ja1Rvb2wodG9vbDogRWRpdG9yVG9vbGJhckJsb2NrVG9vbCkge1xuICAgIGNvbnN0IGVkaXRvciA9IHRoaXMuZWRpdG9ySW5zdGFuY2U7XG4gICAgaWYgKCFlZGl0b3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBkYXRhLCB0eXBlIH0gPSBUT09MQkFSX0JMT0NLX0NPTkZJR1t0b29sXTtcbiAgICBjb25zdCBibG9jayA9IHRoaXMuX2dldEN1cnJlbnRCbG9jaygpO1xuICAgIGlmICghYmxvY2spIHtcbiAgICAgIGVkaXRvci5ibG9ja3MuaW5zZXJ0KHR5cGUsIGRhdGEsIHVuZGVmaW5lZCwgZWRpdG9yLmJsb2Nrcy5nZXRCbG9ja3NDb3VudCgpLCB0cnVlKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUFjdGl2ZVRvb2woKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBlZGl0b3IuYmxvY2tzLmdldEN1cnJlbnRCbG9ja0luZGV4KCk7XG4gICAgaWYgKGJsb2NrLm5hbWUgPT09IHR5cGUpIHtcbiAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGF3YWl0IGVkaXRvci5ibG9ja3MudXBkYXRlKGJsb2NrLmlkLCBkYXRhKTtcbiAgICAgICAgZWRpdG9yLmNhcmV0LnNldFRvQmxvY2soaW5kZXgsICdlbmQnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZWRpdG9yLmJsb2Nrcy5jb252ZXJ0KGJsb2NrLmlkLCB0eXBlLCBkYXRhKTtcbiAgICAgICAgZWRpdG9yLmNhcmV0LnNldFRvQmxvY2soaW5kZXgsICdlbmQnKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICBlZGl0b3IuYmxvY2tzLmluc2VydCh0eXBlLCBkYXRhLCB1bmRlZmluZWQsIGJsb2NrLmlzRW1wdHkgPyBpbmRleCA6IGluZGV4ICsgMSwgdHJ1ZSwgYmxvY2suaXNFbXB0eSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZUFjdGl2ZVRvb2woKTtcbiAgfVxuXG4gIC8qKiBEw6lwbGFjZSBvdSBzdXBwcmltZSBsZSBibG9jIGNvdXJhbnQuICovXG4gIHB1YmxpYyBhcHBseUJsb2NrQ29tbWFuZChjb21tYW5kOiBFZGl0b3JUb29sYmFyQmxvY2tDb21tYW5kKSB7XG4gICAgY29uc3QgZWRpdG9yID0gdGhpcy5lZGl0b3JJbnN0YW5jZTtcbiAgICBpZiAoIWVkaXRvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpbmRleCA9IGVkaXRvci5ibG9ja3MuZ2V0Q3VycmVudEJsb2NrSW5kZXgoKTtcbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAoY29tbWFuZCkge1xuICAgICAgY2FzZSAnZGVsZXRlJzoge1xuICAgICAgICBlZGl0b3IuYmxvY2tzLmRlbGV0ZShpbmRleCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnbW92ZS1kb3duJzoge1xuICAgICAgICBpZiAoaW5kZXggPCBlZGl0b3IuYmxvY2tzLmdldEJsb2Nrc0NvdW50KCkgLSAxKSB7XG4gICAgICAgICAgZWRpdG9yLmJsb2Nrcy5tb3ZlKGluZGV4ICsgMSk7XG4gICAgICAgICAgZWRpdG9yLmNhcmV0LnNldFRvQmxvY2soaW5kZXggKyAxLCAnZW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdtb3ZlLXVwJzoge1xuICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgZWRpdG9yLmJsb2Nrcy5tb3ZlKGluZGV4IC0gMSk7XG4gICAgICAgICAgZWRpdG9yLmNhcmV0LnNldFRvQmxvY2soaW5kZXggLSAxLCAnZW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3VwZGF0ZUFjdGl2ZVRvb2woKTtcbiAgfVxuXG4gIC8qKiBSZWxpdCBsZSBibG9jIGNvdXJhbnQgw6AgY2hhcXVlIGNsaWMgb3UgZnJhcHBlIDsgYFRhYmAgZXQgYC9gIHNvbnQgcmV0ZW51cyBwb3VyIG5lIHBhcyBvdXZyaXIgbGEgcGFsZXR0ZSBFZGl0b3JKUy4gKi9cbiAgcHJpdmF0ZSBfdHJhY2tBY3RpdmVCbG9jaygpIHtcbiAgICBjb25zdCBob2xkZXIgPSB0aGlzLmVkaXRvcmpzKCkubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgIG1lcmdlKGZyb21FdmVudChob2xkZXIsICdjbGljaycpLCBmcm9tRXZlbnQoaG9sZGVyLCAna2V5dXAnKSkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX3VwZGF0ZUFjdGl2ZVRvb2woKSlcbiAgICApO1xuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgZnJvbUV2ZW50PEtleWJvYXJkRXZlbnQ+KGhvbGRlciwgJ2tleWRvd24nLCB7IGNhcHR1cmU6IHRydWUgfSkuc3Vic2NyaWJlKGV2ZW50ID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicgfHwgZXZlbnQua2V5ID09PSAnLycpIHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlQWN0aXZlVG9vbCgpIHtcbiAgICBjb25zdCBibG9jayA9IHRoaXMuX2dldEN1cnJlbnRCbG9jaygpO1xuICAgIHRoaXMuYWN0aXZlVG9vbC5zZXQoYmxvY2sgPyB0aGlzLl9yZXNvbHZlVG9vbElkKGJsb2NrKSA6IG51bGwpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0Q3VycmVudEJsb2NrKCk6IEJsb2NrQVBJIHwgdW5kZWZpbmVkIHtcbiAgICAvLyBgYmxvY2tzYCBuJ2V4aXN0ZSBuaSBhdmFudCBgaXNSZWFkeWAgbmkgYXByw6hzIGBkZXN0cm95KClgLlxuICAgIGNvbnN0IGJsb2NrcyA9IHRoaXMuZWRpdG9ySW5zdGFuY2U/LmJsb2NrcztcbiAgICBpZiAoIWJsb2Nrcykge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBibG9ja3MuZ2V0Q3VycmVudEJsb2NrSW5kZXgoKTtcbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gYmxvY2tzLmdldEJsb2NrQnlJbmRleChpbmRleCk7XG4gIH1cblxuICAvKiogVW4gdGl0cmUgb3UgdW5lIGxpc3RlIG5lIGRpc2VudCBwYXMgbGV1ciB2YXJpYW50ZSA6IG9uIGxpdCBsZSBET00gcmVuZHUuICovXG4gIHByaXZhdGUgX3Jlc29sdmVUb29sSWQoYmxvY2s6IEJsb2NrQVBJKTogc3RyaW5nIHtcbiAgICBpZiAoYmxvY2submFtZSA9PT0gJ2hlYWRlcicpIHtcbiAgICAgIGNvbnN0IGhlYWRpbmcgPSBibG9jay5ob2xkZXIucXVlcnlTZWxlY3RvcignaDEsIGgyLCBoMywgaDQsIGg1LCBoNicpO1xuICAgICAgcmV0dXJuIGhlYWRpbmcgPyBgaGVhZGVyLSR7aGVhZGluZy50YWdOYW1lLmNoYXJBdCgxKX1gIDogJ2hlYWRlci0yJztcbiAgICB9XG4gICAgaWYgKGJsb2NrLm5hbWUgPT09ICdsaXN0Jykge1xuICAgICAgcmV0dXJuIGJsb2NrLmhvbGRlci5xdWVyeVNlbGVjdG9yKCdvbCcpID8gJ2xpc3Qtb3JkZXJlZCcgOiAnbGlzdC11bm9yZGVyZWQnO1xuICAgIH1cbiAgICByZXR1cm4gYmxvY2submFtZTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldExhbmd1YWdlUGFjaygpIHtcbiAgICBjb25zdCBsYW5ndWFnZSA9IHRoaXMuX3RyYW5zbGF0aW9uU2VydmljZS5nZXRMYW5ndWFnZSgpO1xuICAgIGlmICghaXNOb25OdWxsYWJsZShsYW5ndWFnZSkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYW5ndWFnZXNbbGFuZ3VhZ2VdID8/IG51bGw7XG4gIH1cblxuICBwdWJsaWMgdXBsb2FkQnlGaWxlID0gYXN5bmMgKGZpbGU6IEZpbGUpID0+IHtcbiAgICBjb25zdCBkb2MgPSBhd2FpdCBmaXJzdFZhbHVlRnJvbSh0aGlzLl9kb2N1bWVudHNTZXJ2aWNlLmFkZERvY3VtZW50JCh7IGZpbGUgfSkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IDEsXG4gICAgICBmaWxlOiB7XG4gICAgICAgIHVybDogZG9jLnVybCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBwcml2YXRlIF9vbkNoYW5nZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoaXNOb3RFbXB0eU9iamVjdCh0aGlzLmVkaXRvckluc3RhbmNlKSkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX2V4dHJhY3RXaXRoQ29sb3JUb2tlblN0eWxlcygpO1xuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgYmxvY2tzOiBkYXRhLmJsb2NrcyB9KTtcbiAgICB9XG4gICAgdGhpcy5fdXBkYXRlQWN0aXZlVG9vbCgpO1xuICAgIGlmICh0aGlzLnNhdmVPbkNoYW5nZSgpKSB7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NhdmVBZnRlcikge1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgICB0aGlzLl9zYXZlQWZ0ZXIgPSBmYWxzZTtcbiAgICB9XG4gIH07XG4gIHByaXZhdGUgX2dldFRyYW5zbGF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9nZXRMYW5ndWFnZVBhY2soKT8uZWRpdG9yanMgPz8ge307XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9leHRyYWN0V2l0aENvbG9yVG9rZW5TdHlsZXMoKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gYXdhaXQgdGhpcy5lZGl0b3JJbnN0YW5jZT8uc2F2ZSgpO1xuICAgIGlmICghb3V0cHV0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBzdHlsZWRTcGFucyA9IEFycmF5LmZyb20oXG4gICAgICB0aGlzLmVkaXRvcmpzKCkubmF0aXZlRWxlbWVudC5pbm5lckhUTUwubWF0Y2hBbGwoLzxzcGFuIGNsYXNzPVwiY2UtaW5saW5lLXRvb2wtLWNvbG9yX190b2tlblwiKC4qPyk+L2dzKVxuICAgICkubWFwKChtYXRjaDogYW55KSA9PiAoe1xuICAgICAgc3R5bGU6IG1hdGNoWzFdLnRyaW0oKSwgLy8gYHN0eWxlYFxuICAgIH0pKTtcblxuICAgIGlmIChzdHlsZWRTcGFucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgbGV0IHNwYW5JbmRleCA9IDA7XG4gICAgY29uc3QgdXBkYXRlZEJsb2NrcyA9IG91dHB1dC5ibG9ja3MubWFwKGJsb2NrID0+IHtcbiAgICAgIGlmIChibG9jay50eXBlICE9PSAncGFyYWdyYXBoJyB8fCAhYmxvY2suZGF0YT8udGV4dCkge1xuICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1RleHQgPSBibG9jay5kYXRhLnRleHQucmVwbGFjZSgvPHNwYW4gY2xhc3M9XCJjZS1pbmxpbmUtdG9vbC0tY29sb3JfX3Rva2VuXCI+L2dzLCAobWF0Y2g6IHVua25vd24pID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGVkID0gc3R5bGVkU3BhbnNbc3BhbkluZGV4KytdO1xuICAgICAgICBpZiAoIXN0eWxlZCkge1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiY2UtaW5saW5lLXRvb2wtLWNvbG9yX190b2tlblwiICR7c3R5bGVkLnN0eWxlfT5gO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmJsb2NrLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgLi4uYmxvY2suZGF0YSxcbiAgICAgICAgICB0ZXh0OiBuZXdUZXh0LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5vdXRwdXQsXG4gICAgICBibG9ja3M6IHVwZGF0ZWRCbG9ja3MsXG4gICAgfTtcbiAgfVxuICBwcml2YXRlIF9leHRyYWN0VGFncyhibG9ja3M6IFd5c2lzd2dCbG9ja0RhdGE8c3RyaW5nLCBhbnk+W10pIHtcbiAgICBjb25zdCBodG1sID0gY29udmVydEJsb2Nrc1RvSHRtbChibG9ja3MpO1xuICAgIGNvbnN0IHJlZ2V4ID0gL2RhdGEtdXNlci1pZD1cIihbXlwiXSspXCIvZztcbiAgICAvLyBFeHRyYWN0aW9uIGRlcyBJRHMgc291cyBmb3JtZSBkZSB0YWJsZWF1XG4gICAgcmV0dXJuIFsuLi5odG1sLm1hdGNoQWxsKHJlZ2V4KV0ubWFwKG1hdGNoID0+IG1hdGNoWzFdKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZsZXgtY29sdW1uIGctc3BhY2UtbWRcIiBbY2xhc3MuaXMtY29tcGFjdF09XCJ0aGlzLmlzQ29tcGFjdCgpXCI+XG4gIEBpZiAodGhpcy5zaG93VG9vbGJhcigpKSB7XG4gICAgPHRhLWNtcy1lZGl0b3ItdG9vbGJhclxuICAgICAgW2FjdGl2ZVRvb2xdPVwidGhpcy5hY3RpdmVUb29sKClcIlxuICAgICAgW2xhYmVsc109XCJ0aGlzLnRvb2xiYXJMYWJlbHNcIlxuICAgICAgW2VuYWJsZWRUb29sc109XCJ0aGlzLmVuYWJsZWRUb29scygpXCJcbiAgICAgIChibG9ja1Rvb2wpPVwidGhpcy5hcHBseUJsb2NrVG9vbCgkZXZlbnQpXCJcbiAgICAgIChibG9ja0NvbW1hbmQpPVwidGhpcy5hcHBseUJsb2NrQ29tbWFuZCgkZXZlbnQpXCJcbiAgICA+PC90YS1jbXMtZWRpdG9yLXRvb2xiYXI+XG4gIH1cbiAgPGRpdlxuICAgICNlZGl0b3Jqc1xuICAgIGNsYXNzPVwiZWRpdG9yLWNvbnRhaW5lclwiXG4gICAgW2NsYXNzLm1heC1oZWlnaHRdPVwidGhpcy5tYXhIZWlnaHQoKVwiXG4gICAgW2NsYXNzLnJlc2l6YWJsZV09XCJ0aGlzLnJlc2l6YWJsZSgpXCJcbiAgPjwvZGl2PlxuPC9kaXY+XG4iXX0=