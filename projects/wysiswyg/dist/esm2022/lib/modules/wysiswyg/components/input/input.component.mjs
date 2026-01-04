import { Component, EventEmitter, Output, ViewChild, inject, input, } from "@angular/core";
import Delimiter from "@editorjs/delimiter";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
// @ts-ignore
import ImageTool from "@editorjs/image";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Warning from "@editorjs/warning";
import { ColorTool } from "editorjs-color";
import { firstValueFrom } from "rxjs";
import { TaDocumentsService } from "@ta/services";
import { TaTranslationService } from "@ta/translation";
import { TaBaseComponent, isNonNullable, isNotEmptyObject } from "@ta/utils";
import { convertBlocksToHtml } from "../../public-api";
import { TagTool } from "../plugins/tag-editor/tag-editor";
import * as en from "./translation/en.json";
import * as es from "./translation/es.json";
import * as fr from "./translation/fr.json";
import * as nl from "./translation/nl.json";
import * as i0 from "@angular/core";
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
            this.saved.emit({
                blocks: data.blocks,
                tags: this._extractTags(data.blocks),
            });
        }
    }
    init() {
        const translations = this._getTranslation();
        return new EditorJS({
            holder: this.editorjs.nativeElement,
            minHeight: 100,
            data: { blocks: this.initValue() },
            placeholder: translations["placeholder"],
            tools: {
                header: Header,
                list: List,
                quote: Quote,
                delimiter: Delimiter,
                warning: Warning,
                TextColor: {
                    class: ColorTool,
                    config: {
                        backgroundColorLabel: translations["colortool.backgroundColorLabel"],
                        frontColorLabel: translations["colortool.frontColorLabel"],
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
                        users: this.users(),
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: EditorInputComponent, isStandalone: true, selector: "ta-cms-editor-input", inputs: { initValue: { classPropertyName: "initValue", publicName: "initValue", isSignal: true, isRequired: false, transformFunction: null }, setNewValue$: { classPropertyName: "setNewValue$", publicName: "setNewValue$", isSignal: true, isRequired: false, transformFunction: null }, requestSave$: { classPropertyName: "requestSave$", publicName: "requestSave$", isSignal: true, isRequired: false, transformFunction: null }, clear$: { classPropertyName: "clear$", publicName: "clear$", isSignal: true, isRequired: false, transformFunction: null }, users: { classPropertyName: "users", publicName: "users", isSignal: true, isRequired: false, transformFunction: null }, saveOnChange: { classPropertyName: "saveOnChange", publicName: "saveOnChange", isSignal: true, isRequired: false, transformFunction: null }, maxHeight: { classPropertyName: "maxHeight", publicName: "maxHeight", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { changed: "changed", saved: "saved" }, viewQueries: [{ propertyName: "editorjs", first: true, predicate: ["editorjs"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"flex-column g-space-md\">\n  <div\n    #editorjs\n    class=\"editor-container\"\n    [class.max-height]=\"this.maxHeight\"\n  ></div>\n</div>\n", styles: [".max-height{max-height:300px;overflow:auto}.cdx-block{max-width:100%!important}:host ::ng-deep .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid #000;text-align:center;justify-content:center}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditorInputComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-cms-editor-input", standalone: true, template: "<div class=\"flex-column g-space-md\">\n  <div\n    #editorjs\n    class=\"editor-container\"\n    [class.max-height]=\"this.maxHeight\"\n  ></div>\n</div>\n", styles: [".max-height{max-height:300px;overflow:auto}.cdx-block{max-width:100%!important}:host ::ng-deep .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid #000;text-align:center;justify-content:center}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"] }]
        }], ctorParameters: () => [], propDecorators: { changed: [{
                type: Output
            }], saved: [{
                type: Output
            }], editorjs: [{
                type: ViewChild,
                args: ["editorjs", { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBRVosTUFBTSxFQUNOLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sU0FBUyxNQUFNLHFCQUFxQixDQUFDO0FBQzVDLE9BQU8sUUFBUSxNQUFNLG9CQUFvQixDQUFDO0FBQzFDLE9BQU8sTUFBTSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RDLGFBQWE7QUFDYixPQUFPLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLElBQUksTUFBTSxnQkFBZ0IsQ0FBQztBQUNsQyxPQUFPLEtBQUssTUFBTSxpQkFBaUIsQ0FBQztBQUNwQyxPQUFPLE9BQU8sTUFBTSxtQkFBbUIsQ0FBQztBQUN4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFjLGNBQWMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFN0UsT0FBTyxFQUFvQixtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUs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LEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzsrR0E3T1Usb0JBQW9CO21HQUFwQixvQkFBb0IseXJDQzVDakMsK0pBT0E7OzRGRHFDYSxvQkFBb0I7a0JBTmhDLFNBQVM7K0JBQ0UscUJBQXFCLGNBR25CLElBQUk7d0RBd0JoQixPQUFPO3NCQUROLE1BQU07Z0JBSVAsS0FBSztzQkFESixNQUFNO2dCQWlCUCxRQUFRO3NCQURQLFNBQVM7dUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBpbmplY3QsXG4gIGlucHV0LFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgRGVsaW1pdGVyIGZyb20gXCJAZWRpdG9yanMvZGVsaW1pdGVyXCI7XG5pbXBvcnQgRWRpdG9ySlMgZnJvbSBcIkBlZGl0b3Jqcy9lZGl0b3Jqc1wiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiQGVkaXRvcmpzL2hlYWRlclwiO1xuLy8gQHRzLWlnbm9yZVxuaW1wb3J0IEltYWdlVG9vbCBmcm9tIFwiQGVkaXRvcmpzL2ltYWdlXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiQGVkaXRvcmpzL2xpc3RcIjtcbmltcG9ydCBRdW90ZSBmcm9tIFwiQGVkaXRvcmpzL3F1b3RlXCI7XG5pbXBvcnQgV2FybmluZyBmcm9tIFwiQGVkaXRvcmpzL3dhcm5pbmdcIjtcbmltcG9ydCB7IENvbG9yVG9vbCB9IGZyb20gXCJlZGl0b3Jqcy1jb2xvclwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZmlyc3RWYWx1ZUZyb20gfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBUYURvY3VtZW50c1NlcnZpY2UgfSBmcm9tIFwiQHRhL3NlcnZpY2VzXCI7XG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gXCJAdGEvdHJhbnNsYXRpb25cIjtcbmltcG9ydCB7IFRhQmFzZUNvbXBvbmVudCwgaXNOb25OdWxsYWJsZSwgaXNOb3RFbXB0eU9iamVjdCB9IGZyb20gXCJAdGEvdXRpbHNcIjtcblxuaW1wb3J0IHsgV3lzaXN3Z0Jsb2NrRGF0YSwgY29udmVydEJsb2Nrc1RvSHRtbCB9IGZyb20gXCIuLi8uLi9wdWJsaWMtYXBpXCI7XG5pbXBvcnQgeyBUYWdUb29sIH0gZnJvbSBcIi4uL3BsdWdpbnMvdGFnLWVkaXRvci90YWctZWRpdG9yXCI7XG5pbXBvcnQgKiBhcyBlbiBmcm9tIFwiLi90cmFuc2xhdGlvbi9lbi5qc29uXCI7XG5pbXBvcnQgKiBhcyBlcyBmcm9tIFwiLi90cmFuc2xhdGlvbi9lcy5qc29uXCI7XG5pbXBvcnQgKiBhcyBmciBmcm9tIFwiLi90cmFuc2xhdGlvbi9mci5qc29uXCI7XG5pbXBvcnQgKiBhcyBubCBmcm9tIFwiLi90cmFuc2xhdGlvbi9ubC5qc29uXCI7XG5cbmV4cG9ydCB0eXBlIEVkaXRvcklucHV0U2F2ZWREYXRhID0ge1xuICBibG9ja3M6IFd5c2lzd2dCbG9ja0RhdGFbXTtcbiAgdGFnczogc3RyaW5nW107XG59O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWNtcy1lZGl0b3ItaW5wdXRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9pbnB1dC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vaW5wdXQuY29tcG9uZW50LnNjc3NcIl0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIEVkaXRvcklucHV0Q29tcG9uZW50XG4gIGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0XG57XG4gIGluaXRWYWx1ZSA9IGlucHV0PFd5c2lzd2dCbG9ja0RhdGFbXSB8IG51bGw+KCk7XG5cbiAgc2V0TmV3VmFsdWUkID0gaW5wdXQ8T2JzZXJ2YWJsZTx7XG4gICAgYmxvY2tzOiBXeXNpc3dnQmxvY2tEYXRhW10gfCBzdHJpbmcgfCBudWxsO1xuICAgIHNhdmVBZnRlcj86IGJvb2xlYW47XG4gIH0+PigpO1xuXG4gIHJlcXVlc3RTYXZlJCA9IGlucHV0PE9ic2VydmFibGU8dm9pZD4+KCk7XG5cbiAgY2xlYXIkID0gaW5wdXQ8T2JzZXJ2YWJsZTx2b2lkPj4oKTtcblxuICB1c2VycyA9IGlucHV0PHsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nIH1bXT4oW10pO1xuXG4gIHNhdmVPbkNoYW5nZSA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBtYXhIZWlnaHQgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XG5cbiAgQE91dHB1dCgpXG4gIGNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgYmxvY2tzOiBXeXNpc3dnQmxvY2tEYXRhW10gfT4oKTtcblxuICBAT3V0cHV0KClcbiAgc2F2ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEVkaXRvcklucHV0U2F2ZWREYXRhPigpO1xuXG4gIHB1YmxpYyB0cmFuc2xhdGlvblNlcnZpY2UgPSBpbmplY3QoVGFUcmFuc2xhdGlvblNlcnZpY2UpO1xuICBwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2VzOiB7XG4gICAgW2luZGV4OiBzdHJpbmddOiB7IGVkaXRvcmpzOiB7IGkxOG46IE9iamVjdCB9ICYgYW55IH07XG4gIH0gPSB7XG4gICAgZW46IGVuLFxuICAgIGVzOiBlcyxcbiAgICBmcjogZnIsXG4gICAgbmw6IG5sLFxuICB9O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgX2RvY3VtZW50c1NlcnZpY2UgPSBpbmplY3QoVGFEb2N1bWVudHNTZXJ2aWNlKTtcbiAgcHJpdmF0ZSBfc2F2ZUFmdGVyID0gZmFsc2U7XG5cbiAgQFZpZXdDaGlsZChcImVkaXRvcmpzXCIsIHsgc3RhdGljOiB0cnVlIH0pXG4gIGVkaXRvcmpzITogRWxlbWVudFJlZjtcblxuICBwdWJsaWMgZWRpdG9ySW5zdGFuY2U6IEVkaXRvckpTIHwgbnVsbCA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zdCByZXF1ZXN0U2F2ZSA9IHRoaXMucmVxdWVzdFNhdmUkKCk7XG4gICAgaWYgKHJlcXVlc3RTYXZlKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgICAgcmVxdWVzdFNhdmUuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAoKSA9PiB0aGlzLnNhdmUoKSxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IGNsZWFyID0gdGhpcy5jbGVhciQoKTtcbiAgICBpZiAoY2xlYXIpIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgICBjbGVhci5zdWJzY3JpYmUoe1xuICAgICAgICAgIG5leHQ6ICgpID0+IHRoaXMuZWRpdG9ySW5zdGFuY2U/LmNsZWFyKCksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBzZXROZXdWYWx1ZSA9IHRoaXMuc2V0TmV3VmFsdWUkKCk7XG4gICAgaWYgKHNldE5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgICAgc2V0TmV3VmFsdWUuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiAoeyBibG9ja3MsIHNhdmVBZnRlciB9KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9zYXZlQWZ0ZXIgPSBzYXZlQWZ0ZXIgPz8gZmFsc2U7XG4gICAgICAgICAgICBpZiAodGhpcy5lZGl0b3JJbnN0YW5jZSAmJiBibG9ja3MpIHtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBibG9ja3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvckluc3RhbmNlLmJsb2Nrcy5yZW5kZXJGcm9tSFRNTChibG9ja3MpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9ySW5zdGFuY2UucmVuZGVyKHsgYmxvY2tzOiBibG9ja3MgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5lZGl0b3JJbnN0YW5jZSA9IHRoaXMuaW5pdCgpO1xuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5lZGl0b3JJbnN0YW5jZT8uZGVzdHJveSgpO1xuICB9XG4gIHB1YmxpYyBhc3luYyBzYXZlKCkge1xuICAgIGlmIChpc05vdEVtcHR5T2JqZWN0KHRoaXMuZWRpdG9ySW5zdGFuY2UpKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fZXh0cmFjdFdpdGhDb2xvclRva2VuU3R5bGVzKCk7XG4gICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5zYXZlZC5lbWl0KHtcbiAgICAgICAgYmxvY2tzOiBkYXRhLmJsb2NrcyxcbiAgICAgICAgdGFnczogdGhpcy5fZXh0cmFjdFRhZ3MoZGF0YS5ibG9ja3MpLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHB1YmxpYyBpbml0KCk6IEVkaXRvckpTIHtcbiAgICBjb25zdCB0cmFuc2xhdGlvbnMgPSB0aGlzLl9nZXRUcmFuc2xhdGlvbigpO1xuXG4gICAgcmV0dXJuIG5ldyBFZGl0b3JKUyh7XG4gICAgICBob2xkZXI6IHRoaXMuZWRpdG9yanMubmF0aXZlRWxlbWVudCxcbiAgICAgIG1pbkhlaWdodDogMTAwLFxuICAgICAgZGF0YTogeyBibG9ja3M6IHRoaXMuaW5pdFZhbHVlKCkgfSxcbiAgICAgIHBsYWNlaG9sZGVyOiB0cmFuc2xhdGlvbnNbXCJwbGFjZWhvbGRlclwiXSxcbiAgICAgIHRvb2xzOiB7XG4gICAgICAgIGhlYWRlcjogSGVhZGVyLFxuICAgICAgICBsaXN0OiBMaXN0LFxuICAgICAgICBxdW90ZTogUXVvdGUsXG4gICAgICAgIGRlbGltaXRlcjogRGVsaW1pdGVyLFxuICAgICAgICB3YXJuaW5nOiBXYXJuaW5nLFxuICAgICAgICBUZXh0Q29sb3I6IHtcbiAgICAgICAgICBjbGFzczogQ29sb3JUb29sLFxuICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yTGFiZWw6XG4gICAgICAgICAgICAgIHRyYW5zbGF0aW9uc1tcImNvbG9ydG9vbC5iYWNrZ3JvdW5kQ29sb3JMYWJlbFwiXSxcbiAgICAgICAgICAgIGZyb250Q29sb3JMYWJlbDogdHJhbnNsYXRpb25zW1wiY29sb3J0b29sLmZyb250Q29sb3JMYWJlbFwiXSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBpbWFnZToge1xuICAgICAgICAgIGNsYXNzOiBJbWFnZVRvb2wsXG4gICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICB1cGxvYWRlcjoge1xuICAgICAgICAgICAgICB1cGxvYWRCeUZpbGU6IGFzeW5jIChmaWxlOiBGaWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBsb2FkQnlGaWxlKGZpbGUpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtZW50aW9uOiB7XG4gICAgICAgICAgY2xhc3M6IFRhZ1Rvb2wsXG4gICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICB1c2VyczogdGhpcy51c2VycygpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgb25DaGFuZ2U6IHRoaXMuX29uQ2hhbmdlLFxuICAgICAgLi4udHJhbnNsYXRpb25zLFxuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHVwbG9hZEJ5RmlsZSA9IGFzeW5jIChmaWxlOiBGaWxlKSA9PiB7XG4gICAgY29uc3QgZG9jID0gYXdhaXQgZmlyc3RWYWx1ZUZyb20oXG4gICAgICB0aGlzLl9kb2N1bWVudHNTZXJ2aWNlLmFkZERvY3VtZW50JCh7IGZpbGUgfSlcbiAgICApO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN1Y2Nlc3M6IDEsXG4gICAgICBmaWxlOiB7XG4gICAgICAgIHVybDogZG9jLnVybCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfTtcblxuICBwcml2YXRlIF9vbkNoYW5nZSA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoaXNOb3RFbXB0eU9iamVjdCh0aGlzLmVkaXRvckluc3RhbmNlKSkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX2V4dHJhY3RXaXRoQ29sb3JUb2tlblN0eWxlcygpO1xuICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlZC5lbWl0KHsgYmxvY2tzOiBkYXRhLmJsb2NrcyB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2F2ZU9uQ2hhbmdlKCkpIHtcbiAgICAgIHRoaXMuc2F2ZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fc2F2ZUFmdGVyKSB7XG4gICAgICB0aGlzLnNhdmUoKTtcbiAgICAgIHRoaXMuX3NhdmVBZnRlciA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbiAgcHJpdmF0ZSBfZ2V0VHJhbnNsYXRpb24oKSB7XG4gICAgaWYgKCFpc05vbk51bGxhYmxlKHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlLmdldExhbmd1YWdlKCkpKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxhbmd1YWdlc1t0aGlzLnRyYW5zbGF0aW9uU2VydmljZS5nZXRMYW5ndWFnZSgpXS5lZGl0b3JqcyA/PyB7fTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2V4dHJhY3RXaXRoQ29sb3JUb2tlblN0eWxlcygpIHtcbiAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLmVkaXRvckluc3RhbmNlPy5zYXZlKCk7XG4gICAgaWYgKCFvdXRwdXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHN0eWxlZFNwYW5zID0gQXJyYXkuZnJvbShcbiAgICAgIHRoaXMuZWRpdG9yanMubmF0aXZlRWxlbWVudC5pbm5lckhUTUwubWF0Y2hBbGwoXG4gICAgICAgIC88c3BhbiBjbGFzcz1cImNlLWlubGluZS10b29sLS1jb2xvcl9fdG9rZW5cIiguKj8pPi9nc1xuICAgICAgKVxuICAgICkubWFwKChtYXRjaDogYW55KSA9PiAoe1xuICAgICAgc3R5bGU6IG1hdGNoWzFdLnRyaW0oKSwgLy8gYHN0eWxlYFxuICAgIH0pKTtcblxuICAgIGlmIChzdHlsZWRTcGFucy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfVxuXG4gICAgbGV0IHNwYW5JbmRleCA9IDA7XG4gICAgY29uc3QgdXBkYXRlZEJsb2NrcyA9IG91dHB1dC5ibG9ja3MubWFwKChibG9jaykgPT4ge1xuICAgICAgaWYgKGJsb2NrLnR5cGUgIT09IFwicGFyYWdyYXBoXCIgfHwgIWJsb2NrLmRhdGE/LnRleHQpIHtcbiAgICAgICAgcmV0dXJuIGJsb2NrO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdUZXh0ID0gYmxvY2suZGF0YS50ZXh0LnJlcGxhY2UoXG4gICAgICAgIC88c3BhbiBjbGFzcz1cImNlLWlubGluZS10b29sLS1jb2xvcl9fdG9rZW5cIj4vZ3MsXG4gICAgICAgIChtYXRjaDogdW5rbm93bikgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0eWxlZCA9IHN0eWxlZFNwYW5zW3NwYW5JbmRleCsrXTtcbiAgICAgICAgICBpZiAoIXN0eWxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIG1hdGNoO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiY2UtaW5saW5lLXRvb2wtLWNvbG9yX190b2tlblwiICR7c3R5bGVkLnN0eWxlfT5gO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5ibG9jayxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIC4uLmJsb2NrLmRhdGEsXG4gICAgICAgICAgdGV4dDogbmV3VGV4dCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ub3V0cHV0LFxuICAgICAgYmxvY2tzOiB1cGRhdGVkQmxvY2tzLFxuICAgIH07XG4gIH1cbiAgcHJpdmF0ZSBfZXh0cmFjdFRhZ3MoYmxvY2tzOiBXeXNpc3dnQmxvY2tEYXRhPHN0cmluZywgYW55PltdKSB7XG4gICAgY29uc3QgaHRtbCA9IGNvbnZlcnRCbG9ja3NUb0h0bWwoYmxvY2tzKTtcbiAgICBjb25zdCByZWdleCA9IC9kYXRhLXVzZXItaWQ9XCIoW15cIl0rKVwiL2c7XG4gICAgLy8gRXh0cmFjdGlvbiBkZXMgSURzIHNvdXMgZm9ybWUgZGUgdGFibGVhdVxuICAgIHJldHVybiBbLi4uaHRtbC5tYXRjaEFsbChyZWdleCldLm1hcCgobWF0Y2gpID0+IG1hdGNoWzFdKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImZsZXgtY29sdW1uIGctc3BhY2UtbWRcIj5cbiAgPGRpdlxuICAgICNlZGl0b3Jqc1xuICAgIGNsYXNzPVwiZWRpdG9yLWNvbnRhaW5lclwiXG4gICAgW2NsYXNzLm1heC1oZWlnaHRdPVwidGhpcy5tYXhIZWlnaHRcIlxuICA+PC9kaXY+XG48L2Rpdj5cbiJdfQ==