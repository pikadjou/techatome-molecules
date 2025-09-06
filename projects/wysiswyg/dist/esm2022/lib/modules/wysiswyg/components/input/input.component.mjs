import { Component, EventEmitter, Input, Output, ViewChild, inject, } from '@angular/core';
import Delimiter from '@editorjs/delimiter';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
// @ts-ignore
import ImageTool from '@editorjs/image';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Warning from '@editorjs/warning';
import { ColorTool } from 'editorjs-color';
import { firstValueFrom } from 'rxjs';
import { TaDocumentsService } from '@ta/services';
import { TaTranslationService } from '@ta/translation';
import { TaBaseComponent, isNonNullable, isNotEmptyObject } from '@ta/utils';
import { convertBlocksToHtml } from '../../public-api';
import { TagTool } from '../plugins/tag-editor/tag-editor';
import * as en from './translation/en.json';
import * as es from './translation/es.json';
import * as fr from './translation/fr.json';
import * as nl from './translation/nl.json';
import * as i0 from "@angular/core";
export class EditorInputComponent extends TaBaseComponent {
    constructor() {
        super();
        this.users = [];
        this.saveOnChange = false;
        this.maxHeight = false;
        this.changed = new EventEmitter();
        this.saved = new EventEmitter();
        this.translationService = inject(TaTranslationService);
        this.languages = {
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
            if (this.saveOnChange) {
                this.save();
            }
            if (this._saveAfter) {
                this.save();
                this._saveAfter = false;
            }
        };
    }
    ngOnInit() {
        if (this.requestSave$) {
            this._registerSubscription(this.requestSave$?.subscribe({
                next: () => this.save(),
            }));
        }
        if (this.clear$) {
            this._registerSubscription(this.clear$?.subscribe({
                next: () => this.editorInstance?.clear(),
            }));
        }
        if (this.setNewValue$) {
            this._registerSubscription(this.setNewValue$?.subscribe({
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
    }
    ngOnDestroy() {
        this.editorInstance?.destroy();
    }
    async save() {
        if (isNotEmptyObject(this.editorInstance)) {
            const data = await this._extractWithColorTokenStyles();
            if (!data) {
                return;
            }
            this.saved.emit({ blocks: data.blocks, tags: this._extractTags(data.blocks) });
        }
    }
    init() {
        const translations = this._getTranslation();
        return new EditorJS({
            holder: this.editorjs.nativeElement,
            minHeight: 100,
            data: { blocks: this.initValue },
            placeholder: translations['placeholder'],
            tools: {
                header: Header,
                list: List,
                quote: Quote,
                delimiter: Delimiter,
                warning: Warning,
                TextColor: {
                    class: ColorTool,
                    config: {
                        backgroundColorLabel: translations['colortool.backgroundColorLabel'],
                        frontColorLabel: translations['colortool.frontColorLabel'],
                    },
                },
                image: {
                    class: ImageTool,
                    config: {
                        uploader: {
                            uploadByFile: async (file) => {
                                return this.uploadByFile(file);
                            },
                        },
                    },
                },
                mention: {
                    class: TagTool,
                    config: {
                        users: this.users,
                    },
                },
            },
            onChange: this._onChange,
            ...translations,
        });
    }
    _getTranslation() {
        if (!isNonNullable(this.translationService.getLanguage())) {
            return {};
        }
        return this.languages[this.translationService.getLanguage()].editorjs ?? {};
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EditorInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.13", type: EditorInputComponent, isStandalone: true, selector: "ta-cms-editor-input", inputs: { initValue: "initValue", setNewValue$: "setNewValue$", requestSave$: "requestSave$", clear$: "clear$", users: "users", saveOnChange: "saveOnChange", maxHeight: "maxHeight" }, outputs: { changed: "changed", saved: "saved" }, viewQueries: [{ propertyName: "editorjs", first: true, predicate: ["editorjs"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"flex-column g-space-md\">\n  <div\n    #editorjs\n    class=\"editor-container\"\n    [class.max-height]=\"this.maxHeight\"\n  ></div>\n</div>\n", styles: [".max-height{max-height:300px;overflow:auto}.cdx-block{max-width:100%!important}:host ::ng-deep .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid #000;text-align:center;justify-content:center}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: EditorInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-cms-editor-input', standalone: true, template: "<div class=\"flex-column g-space-md\">\n  <div\n    #editorjs\n    class=\"editor-container\"\n    [class.max-height]=\"this.maxHeight\"\n  ></div>\n</div>\n", styles: [".max-height{max-height:300px;overflow:auto}.cdx-block{max-width:100%!important}:host ::ng-deep .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid #000;text-align:center;justify-content:center}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"] }]
        }], ctorParameters: () => [], propDecorators: { initValue: [{
                type: Input
            }], setNewValue$: [{
                type: Input
            }], requestSave$: [{
                type: Input
            }], clear$: [{
                type: Input
            }], users: [{
                type: Input
            }], saveOnChange: [{
                type: Input
            }], maxHeight: [{
                type: Input
            }], changed: [{
                type: Output
            }], saved: [{
                type: Output
            }], editorjs: [{
                type: ViewChild,
                args: ['editorjs', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sU0FBUyxNQUFNLHFCQUFxQixDQUFDO0FBQzVDLE9BQU8sUUFBUSxNQUFNLG9CQUFvQixDQUFDO0FBQzFDLE9BQU8sTUFBTSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RDLGFBQWE7QUFDYixPQUFPLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLElBQUksTUFBTSxnQkFBZ0IsQ0FBQztBQUNsQyxPQUFPLEtBQUssTUFBTSxpQkFBaUIsQ0FBQztBQUNwQyxPQUFPLE9BQU8sTUFBTSxtQkFBbUIsQ0FBQztBQUN4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFjLGNBQWMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFN0UsT0FBTyxFQUFvQixtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUs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Z0JBSU4sWUFBWTtzQkFEWCxLQUFLO2dCQUlOLFNBQVM7c0JBRFIsS0FBSztnQkFJTixPQUFPO3NCQUROLE1BQU07Z0JBSVAsS0FBSztzQkFESixNQUFNO2dCQWlCUCxRQUFRO3NCQURQLFNBQVM7dUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgaW5qZWN0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IERlbGltaXRlciBmcm9tICdAZWRpdG9yanMvZGVsaW1pdGVyJztcbmltcG9ydCBFZGl0b3JKUyBmcm9tICdAZWRpdG9yanMvZWRpdG9yanMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICdAZWRpdG9yanMvaGVhZGVyJztcbi8vIEB0cy1pZ25vcmVcbmltcG9ydCBJbWFnZVRvb2wgZnJvbSAnQGVkaXRvcmpzL2ltYWdlJztcbmltcG9ydCBMaXN0IGZyb20gJ0BlZGl0b3Jqcy9saXN0JztcbmltcG9ydCBRdW90ZSBmcm9tICdAZWRpdG9yanMvcXVvdGUnO1xuaW1wb3J0IFdhcm5pbmcgZnJvbSAnQGVkaXRvcmpzL3dhcm5pbmcnO1xuaW1wb3J0IHsgQ29sb3JUb29sIH0gZnJvbSAnZWRpdG9yanMtY29sb3InO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZmlyc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVGFEb2N1bWVudHNTZXJ2aWNlIH0gZnJvbSAnQHRhL3NlcnZpY2VzJztcbmltcG9ydCB7IFRhVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnQHRhL3RyYW5zbGF0aW9uJztcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCwgaXNOb25OdWxsYWJsZSwgaXNOb3RFbXB0eU9iamVjdCB9IGZyb20gJ0B0YS91dGlscyc7XG5cbmltcG9ydCB7IFd5c2lzd2dCbG9ja0RhdGEsIGNvbnZlcnRCbG9ja3NUb0h0bWwgfSBmcm9tICcuLi8uLi9wdWJsaWMtYXBpJztcbmltcG9ydCB7IFRhZ1Rvb2wgfSBmcm9tICcuLi9wbHVnaW5zL3RhZy1lZGl0b3IvdGFnLWVkaXRvcic7XG5pbXBvcnQgKiBhcyBlbiBmcm9tICcuL3RyYW5zbGF0aW9uL2VuLmpzb24nO1xuaW1wb3J0ICogYXMgZXMgZnJvbSAnLi90cmFuc2xhdGlvbi9lcy5qc29uJztcbmltcG9ydCAqIGFzIGZyIGZyb20gJy4vdHJhbnNsYXRpb24vZnIuanNvbic7XG5pbXBvcnQgKiBhcyBubCBmcm9tICcuL3RyYW5zbGF0aW9uL25sLmpzb24nO1xuXG5leHBvcnQgdHlwZSBFZGl0b3JJbnB1dFNhdmVkRGF0YSA9IHsgYmxvY2tzOiBXeXNpc3dnQmxvY2tEYXRhW107IHRhZ3M6IHN0cmluZ1tdIH07XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1jbXMtZWRpdG9yLWlucHV0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgRWRpdG9ySW5wdXRDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKVxuICBpbml0VmFsdWU/OiBXeXNpc3dnQmxvY2tEYXRhW10gfCBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHNldE5ld1ZhbHVlJD86IE9ic2VydmFibGU8eyBibG9ja3M6IFd5c2lzd2dCbG9ja0RhdGFbXSB8IHN0cmluZyB8IG51bGw7IHNhdmVBZnRlcj86IGJvb2xlYW4gfT47XG5cbiAgQElucHV0KClcbiAgcmVxdWVzdFNhdmUkPzogT2JzZXJ2YWJsZTx2b2lkPjtcblxuICBASW5wdXQoKVxuICBjbGVhciQ/OiBPYnNlcnZhYmxlPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHVzZXJzOiB7IGlkOiBzdHJpbmc7IG5hbWU6IHN0cmluZyB9W10gPSBbXTtcblxuICBASW5wdXQoKVxuICBzYXZlT25DaGFuZ2UgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBtYXhIZWlnaHQgPSBmYWxzZTtcblxuICBAT3V0cHV0KClcbiAgY2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBibG9ja3M6IFd5c2lzd2dCbG9ja0RhdGFbXSB9PigpO1xuXG4gIEBPdXRwdXQoKVxuICBzYXZlZCA9IG5ldyBFdmVudEVtaXR0ZXI8RWRpdG9ySW5wdXRTYXZlZERhdGE+KCk7XG5cbiAgcHVibGljIHRyYW5zbGF0aW9uU2VydmljZSA9IGluamVjdChUYVRyYW5zbGF0aW9uU2VydmljZSk7XG4gIHB1YmxpYyByZWFkb25seSBsYW5ndWFnZXM6IHtcbiAgICBbaW5kZXg6IHN0cmluZ106IHsgZWRpdG9yanM6IHsgaTE4bjogT2JqZWN0IH0gJiBhbnkgfTtcbiAgfSA9IHtcbiAgICBlbjogZW4sXG4gICAgZXM6IGVzLFxuICAgIGZyOiBmcixcbiAgICBubDogbmwsXG4gIH07XG5cbiAgcHJpdmF0ZSByZWFkb25seSBfZG9jdW1lbnRzU2VydmljZSA9IGluamVjdChUYURvY3VtZW50c1NlcnZpY2UpO1xuICBwcml2YXRlIF9zYXZlQWZ0ZXIgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdlZGl0b3JqcycsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGVkaXRvcmpzITogRWxlbWVudFJlZjtcblxuICBwdWJsaWMgZWRpdG9ySW5zdGFuY2U6IEVkaXRvckpTIHwgbnVsbCA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5yZXF1ZXN0U2F2ZSQpIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgICB0aGlzLnJlcXVlc3RTYXZlJD8uc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAoKSA9PiB0aGlzLnNhdmUoKSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNsZWFyJCkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICAgIHRoaXMuY2xlYXIkPy5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6ICgpID0+IHRoaXMuZWRpdG9ySW5zdGFuY2U/LmNsZWFyKCksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXROZXdWYWx1ZSQpIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgICB0aGlzLnNldE5ld1ZhbHVlJD8uc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAoeyBibG9ja3MsIHNhdmVBZnRlciB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zYXZlQWZ0ZXIgPSBzYXZlQWZ0ZXIgPz8gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5lZGl0b3JJbnN0YW5jZSAmJiBibG9ja3MpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBibG9ja3MgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZS5ibG9ja3MucmVuZGVyRnJvbUhUTUwoYmxvY2tzKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvckluc3RhbmNlLnJlbmRlcih7IGJsb2NrczogYmxvY2tzIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UgPSB0aGlzLmluaXQoKTtcbiAgfVxuXG4gIG92ZXJyaWRlIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZWRpdG9ySW5zdGFuY2U/LmRlc3Ryb3koKTtcbiAgfVxuICBwdWJsaWMgYXN5bmMgc2F2ZSgpIHtcbiAgICBpZiAoaXNOb3RFbXB0eU9iamVjdCh0aGlzLmVkaXRvckluc3RhbmNlKSkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX2V4dHJhY3RXaXRoQ29sb3JUb2tlblN0eWxlcygpO1xuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2F2ZWQuZW1pdCh7IGJsb2NrczogZGF0YS5ibG9ja3MsIHRhZ3M6IHRoaXMuX2V4dHJhY3RUYWdzKGRhdGEuYmxvY2tzKSB9KTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGluaXQoKTogRWRpdG9ySlMge1xuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IHRoaXMuX2dldFRyYW5zbGF0aW9uKCk7XG5cbiAgICByZXR1cm4gbmV3IEVkaXRvckpTKHtcbiAgICAgIGhvbGRlcjogdGhpcy5lZGl0b3Jqcy5uYXRpdmVFbGVtZW50LFxuICAgICAgbWluSGVpZ2h0OiAxMDAsXG4gICAgICBkYXRhOiB7IGJsb2NrczogdGhpcy5pbml0VmFsdWUgfSxcbiAgICAgIHBsYWNlaG9sZGVyOiB0cmFuc2xhdGlvbnNbJ3BsYWNlaG9sZGVyJ10sXG4gICAgICB0b29sczoge1xuICAgICAgICBoZWFkZXI6IEhlYWRlcixcbiAgICAgICAgbGlzdDogTGlzdCxcbiAgICAgICAgcXVvdGU6IFF1b3RlLFxuICAgICAgICBkZWxpbWl0ZXI6IERlbGltaXRlcixcbiAgICAgICAgd2FybmluZzogV2FybmluZyxcbiAgICAgICAgVGV4dENvbG9yOiB7XG4gICAgICAgICAgY2xhc3M6IENvbG9yVG9vbCxcbiAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvckxhYmVsOiB0cmFuc2xhdGlvbnNbJ2NvbG9ydG9vbC5iYWNrZ3JvdW5kQ29sb3JMYWJlbCddLFxuICAgICAgICAgICAgZnJvbnRDb2xvckxhYmVsOiB0cmFuc2xhdGlvbnNbJ2NvbG9ydG9vbC5mcm9udENvbG9yTGFiZWwnXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgIGNsYXNzOiBJbWFnZVRvb2wsXG4gICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICB1cGxvYWRlcjoge1xuICAgICAgICAgICAgICB1cGxvYWRCeUZpbGU6IGFzeW5jIChmaWxlOiBGaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkQnlGaWxlKGZpbGUpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtZW50aW9uOiB7XG4gICAgICAgICAgY2xhc3M6IFRhZ1Rvb2wsXG4gICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICB1c2VyczogdGhpcy51c2VycyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIG9uQ2hhbmdlOiB0aGlzLl9vbkNoYW5nZSxcbiAgICAgIC4uLnRyYW5zbGF0aW9ucyxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyB1cGxvYWRCeUZpbGUgPSBhc3luYyAoZmlsZTogRmlsZSkgPT4ge1xuICAgIGNvbnN0IGRvYyA9IGF3YWl0IGZpcnN0VmFsdWVGcm9tKHRoaXMuX2RvY3VtZW50c1NlcnZpY2UuYWRkRG9jdW1lbnQkKHsgZmlsZSB9KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3VjY2VzczogMSxcbiAgICAgIGZpbGU6IHtcbiAgICAgICAgdXJsOiBkb2MudXJsLFxuICAgICAgfSxcbiAgICB9O1xuICB9O1xuXG4gIHByaXZhdGUgX29uQ2hhbmdlID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChpc05vdEVtcHR5T2JqZWN0KHRoaXMuZWRpdG9ySW5zdGFuY2UpKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fZXh0cmFjdFdpdGhDb2xvclRva2VuU3R5bGVzKCk7XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5jaGFuZ2VkLmVtaXQoeyBibG9ja3M6IGRhdGEuYmxvY2tzIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zYXZlT25DaGFuZ2UpIHtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2F2ZUFmdGVyKSB7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICAgIHRoaXMuX3NhdmVBZnRlciA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgcHJpdmF0ZSBfZ2V0VHJhbnNsYXRpb24oKSB7XG4gICAgaWYgKCFpc05vbk51bGxhYmxlKHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldExhbmd1YWdlKCkpKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxhbmd1YWdlc1t0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRMYW5ndWFnZSgpXS5lZGl0b3JqcyA/PyB7fTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2V4dHJhY3RXaXRoQ29sb3JUb2tlblN0eWxlcygpIHtcbiAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLmVkaXRvckluc3RhbmNlPy5zYXZlKCk7XG4gICAgaWYgKCFvdXRwdXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlZFNwYW5zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuZWRpdG9yanMubmF0aXZlRWxlbWVudC5pbm5lckhUTUwubWF0Y2hBbGwoLzxzcGFuIGNsYXNzPVwiY2UtaW5saW5lLXRvb2wtLWNvbG9yX190b2tlblwiKC4qPyk+L2dzKVxuICAgICkubWFwKChtYXRjaDogYW55KSA9PiAoe1xuICAgICAgc3R5bGU6IG1hdGNoWzFdLnRyaW0oKSwgLy8gYHN0eWxlYFxuICAgIH0pKTtcblxuICAgIGlmIChzdHlsZWRTcGFucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgbGV0IHNwYW5JbmRleCA9IDA7XG4gICAgY29uc3QgdXBkYXRlZEJsb2NrcyA9IG91dHB1dC5ibG9ja3MubWFwKGJsb2NrID0+IHtcbiAgICAgIGlmIChibG9jay50eXBlICE9PSAncGFyYWdyYXBoJyB8fCAhYmxvY2suZGF0YT8udGV4dCkge1xuICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1RleHQgPSBibG9jay5kYXRhLnRleHQucmVwbGFjZSgvPHNwYW4gY2xhc3M9XCJjZS1pbmxpbmUtdG9vbC0tY29sb3JfX3Rva2VuXCI+L2dzLCAobWF0Y2g6IHVua25vd24pID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGVkID0gc3R5bGVkU3BhbnNbc3BhbkluZGV4KytdO1xuICAgICAgICBpZiAoIXN0eWxlZCkge1xuICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiY2UtaW5saW5lLXRvb2wtLWNvbG9yX190b2tlblwiICR7c3R5bGVkLnN0eWxlfT5gO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmJsb2NrLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgLi4uYmxvY2suZGF0YSxcbiAgICAgICAgICB0ZXh0OiBuZXdUZXh0LFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5vdXRwdXQsXG4gICAgICBibG9ja3M6IHVwZGF0ZWRCbG9ja3MsXG4gICAgfTtcbiAgfVxuICBwcml2YXRlIF9leHRyYWN0VGFncyhibG9ja3M6IFd5c2lzd2dCbG9ja0RhdGE8c3RyaW5nLCBhbnk+W10pIHtcbiAgICBjb25zdCBodG1sID0gY29udmVydEJsb2Nrc1RvSHRtbChibG9ja3MpO1xuICAgIGNvbnN0IHJlZ2V4ID0gL2RhdGEtdXNlci1pZD1cIihbXlwiXSspXCIvZztcbiAgICAvLyBFeHRyYWN0aW9uIGRlcyBJRHMgc291cyBmb3JtZSBkZSB0YWJsZWF1XG4gICAgcmV0dXJuIFsuLi5odG1sLm1hdGNoQWxsKHJlZ2V4KV0ubWFwKG1hdGNoID0+IG1hdGNoWzFdKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZsZXgtY29sdW1uIGctc3BhY2UtbWRcIj5cbiAgPGRpdlxuICAgICNlZGl0b3Jqc1xuICAgIGNsYXNzPVwiZWRpdG9yLWNvbnRhaW5lclwiXG4gICAgW2NsYXNzLm1heC1oZWlnaHRdPVwidGhpcy5tYXhIZWlnaHRcIlxuICA+PC9kaXY+XG48L2Rpdj5cbiJdfQ==