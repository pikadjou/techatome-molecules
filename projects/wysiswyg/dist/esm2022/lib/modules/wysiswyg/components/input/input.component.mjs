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
export const EDITOR_ALL_TOOLS = [
    "header",
    "list",
    "quote",
    "delimiter",
    "warning",
    "color",
    "image",
    "mention",
];
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
        this.changed = new EventEmitter();
        this.saved = new EventEmitter();
        this._translationService = inject(TaTranslationService);
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
    _getTranslation() {
        if (!isNonNullable(this._translationService.getLanguage())) {
            return {};
        }
        return this.languages[this._translationService.getLanguage()].editorjs ?? {};
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: EditorInputComponent, isStandalone: true, selector: "ta-cms-editor-input", inputs: { initValue: { classPropertyName: "initValue", publicName: "initValue", isSignal: true, isRequired: false, transformFunction: null }, setNewValue$: { classPropertyName: "setNewValue$", publicName: "setNewValue$", isSignal: true, isRequired: false, transformFunction: null }, requestSave$: { classPropertyName: "requestSave$", publicName: "requestSave$", isSignal: true, isRequired: false, transformFunction: null }, clear$: { classPropertyName: "clear$", publicName: "clear$", isSignal: true, isRequired: false, transformFunction: null }, users: { classPropertyName: "users", publicName: "users", isSignal: true, isRequired: false, transformFunction: null }, saveOnChange: { classPropertyName: "saveOnChange", publicName: "saveOnChange", isSignal: true, isRequired: false, transformFunction: null }, maxHeight: { classPropertyName: "maxHeight", publicName: "maxHeight", isSignal: true, isRequired: false, transformFunction: null }, enabledTools: { classPropertyName: "enabledTools", publicName: "enabledTools", isSignal: true, isRequired: false, transformFunction: null }, placeholder: { classPropertyName: "placeholder", publicName: "placeholder", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { changed: "changed", saved: "saved" }, viewQueries: [{ propertyName: "editorjs", first: true, predicate: ["editorjs"], descendants: true, static: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"flex-column g-space-md\">\n  <div\n    #editorjs\n    class=\"editor-container\"\n    [class.max-height]=\"this.maxHeight()\"\n  ></div>\n</div>\n", styles: [".max-height{max-height:300px;overflow:auto}.cdx-block{max-width:100%!important}:host ::ng-deep .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid #000;text-align:center;justify-content:center}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: EditorInputComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-cms-editor-input", standalone: true, template: "<div class=\"flex-column g-space-md\">\n  <div\n    #editorjs\n    class=\"editor-container\"\n    [class.max-height]=\"this.maxHeight()\"\n  ></div>\n</div>\n", styles: [".max-height{max-height:300px;overflow:auto}.cdx-block{max-width:100%!important}:host ::ng-deep .ce-inline-tool--color__actions-container{display:flex;flex-direction:column;gap:var(--ta-space-sm)}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list{display:flex;flex-wrap:wrap;justify-content:flex-start;list-style-type:none;margin:0;padding:var(--ta-space-sm);gap:var(--ta-space-sm)}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item{width:20px;height:20px;border:1px solid #000;text-align:center;justify-content:center}:host ::ng-deep .ce-inline-tool--color__actions-container .ce-inline-tool--color__action-list .ce-inline-tool--color__action-list-item:first-child{content-visibility:hidden}\n"] }]
        }], ctorParameters: () => [], propDecorators: { changed: [{
                type: Output
            }], saved: [{
                type: Output
            }], editorjs: [{
                type: ViewChild,
                args: ["editorjs", { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL3d5c2lzd3lnL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBRVosTUFBTSxFQUNOLFNBQVMsRUFDVCxNQUFNLEVBQ04sS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sU0FBUyxNQUFNLHFCQUFxQixDQUFDO0FBQzVDLE9BQU8sUUFBUSxNQUFNLG9CQUFvQixDQUFDO0FBQzFDLE9BQU8sTUFBTSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RDLGFBQWE7QUFDYixPQUFPLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUN4QyxPQUFPLElBQUksTUFBTSxnQkFBZ0IsQ0FBQztBQUNsQyxPQUFPLEtBQUssTUFBTSxpQkFBaUIsQ0FBQztBQUNwQyxPQUFPLE9BQU8sTUFBTSxtQkFBbUIsQ0FBQztBQUN4QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFjLGNBQWMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDbEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFN0UsT0FBTyxFQUFvQixtQkFBbUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUs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Q0FBQyxNQUF1QztRQUMxRCxNQUFNLElBQUksR0FBRyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QyxNQUFNLEtBQUssR0FBRyx5QkFBeUIsQ0FBQztRQUN4QywyQ0FBMkM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQzsrR0F6UVUsb0JBQW9CO21HQUFwQixvQkFBb0IsZzlDQ2xFakMsaUtBT0E7OzRGRDJEYSxvQkFBb0I7a0JBTmhDLFNBQVM7K0JBQ0UscUJBQXFCLGNBR25CLElBQUk7d0RBNEJoQixPQUFPO3NCQUROLE1BQU07Z0JBSVAsS0FBSztzQkFESixNQUFNO2dCQWlCUCxRQUFRO3NCQURQLFNBQVM7dUJBQUMsVUFBVSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgaW5qZWN0LFxyXG4gIGlucHV0LFxyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5pbXBvcnQgRGVsaW1pdGVyIGZyb20gXCJAZWRpdG9yanMvZGVsaW1pdGVyXCI7XHJcbmltcG9ydCBFZGl0b3JKUyBmcm9tIFwiQGVkaXRvcmpzL2VkaXRvcmpzXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkBlZGl0b3Jqcy9oZWFkZXJcIjtcclxuLy8gQHRzLWlnbm9yZVxyXG5pbXBvcnQgSW1hZ2VUb29sIGZyb20gXCJAZWRpdG9yanMvaW1hZ2VcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBlZGl0b3Jqcy9saXN0XCI7XHJcbmltcG9ydCBRdW90ZSBmcm9tIFwiQGVkaXRvcmpzL3F1b3RlXCI7XHJcbmltcG9ydCBXYXJuaW5nIGZyb20gXCJAZWRpdG9yanMvd2FybmluZ1wiO1xyXG5pbXBvcnQgeyBDb2xvclRvb2wgfSBmcm9tIFwiZWRpdG9yanMtY29sb3JcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZmlyc3RWYWx1ZUZyb20gfSBmcm9tIFwicnhqc1wiO1xyXG5cclxuaW1wb3J0IHsgVGFEb2N1bWVudHNTZXJ2aWNlIH0gZnJvbSBcIkB0YS9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgeyBUYVRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gXCJAdGEvdHJhbnNsYXRpb25cIjtcclxuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50LCBpc05vbk51bGxhYmxlLCBpc05vdEVtcHR5T2JqZWN0IH0gZnJvbSBcIkB0YS91dGlsc1wiO1xyXG5cclxuaW1wb3J0IHsgV3lzaXN3Z0Jsb2NrRGF0YSwgY29udmVydEJsb2Nrc1RvSHRtbCB9IGZyb20gXCIuLi8uLi9wdWJsaWMtYXBpXCI7XHJcbmltcG9ydCB7IFRhZ1Rvb2wgfSBmcm9tIFwiLi4vcGx1Z2lucy90YWctZWRpdG9yL3RhZy1lZGl0b3JcIjtcclxuaW1wb3J0ICogYXMgZW4gZnJvbSBcIi4vdHJhbnNsYXRpb24vZW4uanNvblwiO1xyXG5pbXBvcnQgKiBhcyBlcyBmcm9tIFwiLi90cmFuc2xhdGlvbi9lcy5qc29uXCI7XHJcbmltcG9ydCAqIGFzIGZyIGZyb20gXCIuL3RyYW5zbGF0aW9uL2ZyLmpzb25cIjtcclxuaW1wb3J0ICogYXMgbmwgZnJvbSBcIi4vdHJhbnNsYXRpb24vbmwuanNvblwiO1xyXG5cclxuZXhwb3J0IHR5cGUgRWRpdG9ySW5wdXRTYXZlZERhdGEgPSB7XHJcbiAgYmxvY2tzOiBXeXNpc3dnQmxvY2tEYXRhW107XHJcbiAgdGFnczogc3RyaW5nW107XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBFZGl0b3JUb29sVHlwZSA9XHJcbiAgfCBcImhlYWRlclwiXHJcbiAgfCBcImxpc3RcIlxyXG4gIHwgXCJxdW90ZVwiXHJcbiAgfCBcImRlbGltaXRlclwiXHJcbiAgfCBcIndhcm5pbmdcIlxyXG4gIHwgXCJjb2xvclwiXHJcbiAgfCBcImltYWdlXCJcclxuICB8IFwibWVudGlvblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVESVRPUl9BTExfVE9PTFM6IEVkaXRvclRvb2xUeXBlW10gPSBbXHJcbiAgXCJoZWFkZXJcIixcclxuICBcImxpc3RcIixcclxuICBcInF1b3RlXCIsXHJcbiAgXCJkZWxpbWl0ZXJcIixcclxuICBcIndhcm5pbmdcIixcclxuICBcImNvbG9yXCIsXHJcbiAgXCJpbWFnZVwiLFxyXG4gIFwibWVudGlvblwiLFxyXG5dO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwidGEtY21zLWVkaXRvci1pbnB1dFwiLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vaW5wdXQuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtcIi4vaW5wdXQuY29tcG9uZW50LnNjc3NcIl0sXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRvcklucHV0Q29tcG9uZW50XHJcbiAgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdFxyXG57XHJcbiAgaW5pdFZhbHVlID0gaW5wdXQ8V3lzaXN3Z0Jsb2NrRGF0YVtdIHwgbnVsbD4oKTtcclxuXHJcbiAgc2V0TmV3VmFsdWUkID0gaW5wdXQ8T2JzZXJ2YWJsZTx7XHJcbiAgICBibG9ja3M6IFd5c2lzd2dCbG9ja0RhdGFbXSB8IHN0cmluZyB8IG51bGw7XHJcbiAgICBzYXZlQWZ0ZXI/OiBib29sZWFuO1xyXG4gIH0+PigpO1xyXG5cclxuICByZXF1ZXN0U2F2ZSQgPSBpbnB1dDxPYnNlcnZhYmxlPHZvaWQ+PigpO1xyXG5cclxuICBjbGVhciQgPSBpbnB1dDxPYnNlcnZhYmxlPHZvaWQ+PigpO1xyXG5cclxuICB1c2VycyA9IGlucHV0PHsgaWQ6IHN0cmluZzsgbmFtZTogc3RyaW5nIH1bXT4oW10pO1xyXG5cclxuICBzYXZlT25DaGFuZ2UgPSBpbnB1dDxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIG1heEhlaWdodCA9IGlucHV0PGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgZW5hYmxlZFRvb2xzID0gaW5wdXQ8RWRpdG9yVG9vbFR5cGVbXT4oRURJVE9SX0FMTF9UT09MUyk7XHJcblxyXG4gIHBsYWNlaG9sZGVyID0gaW5wdXQ8c3RyaW5nPigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICBjaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjx7IGJsb2NrczogV3lzaXN3Z0Jsb2NrRGF0YVtdIH0+KCk7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIHNhdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxFZGl0b3JJbnB1dFNhdmVkRGF0YT4oKTtcclxuXHJcbiAgcHJpdmF0ZSBfdHJhbnNsYXRpb25TZXJ2aWNlID0gaW5qZWN0KFRhVHJhbnNsYXRpb25TZXJ2aWNlKTtcclxuICBwdWJsaWMgcmVhZG9ubHkgbGFuZ3VhZ2VzOiB7XHJcbiAgICBbaW5kZXg6IHN0cmluZ106IHsgZWRpdG9yanM6IHsgaTE4bjogT2JqZWN0IH0gJiBhbnkgfTtcclxuICB9ID0ge1xyXG4gICAgZW46IGVuLFxyXG4gICAgZXM6IGVzLFxyXG4gICAgZnI6IGZyLFxyXG4gICAgbmw6IG5sLFxyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2RvY3VtZW50c1NlcnZpY2UgPSBpbmplY3QoVGFEb2N1bWVudHNTZXJ2aWNlKTtcclxuICBwcml2YXRlIF9zYXZlQWZ0ZXIgPSBmYWxzZTtcclxuXHJcbiAgQFZpZXdDaGlsZChcImVkaXRvcmpzXCIsIHsgc3RhdGljOiB0cnVlIH0pXHJcbiAgZWRpdG9yanMhOiBFbGVtZW50UmVmO1xyXG5cclxuICBwdWJsaWMgZWRpdG9ySW5zdGFuY2U6IEVkaXRvckpTIHwgbnVsbCA9IG51bGw7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zdCByZXF1ZXN0U2F2ZSA9IHRoaXMucmVxdWVzdFNhdmUkKCk7XHJcbiAgICBpZiAocmVxdWVzdFNhdmUpIHtcclxuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXHJcbiAgICAgICAgcmVxdWVzdFNhdmUuc3Vic2NyaWJlKHtcclxuICAgICAgICAgIG5leHQ6ICgpID0+IHRoaXMuc2F2ZSgpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBjbGVhciA9IHRoaXMuY2xlYXIkKCk7XHJcbiAgICBpZiAoY2xlYXIpIHtcclxuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXHJcbiAgICAgICAgY2xlYXIuc3Vic2NyaWJlKHtcclxuICAgICAgICAgIG5leHQ6ICgpID0+IHRoaXMuZWRpdG9ySW5zdGFuY2U/LmNsZWFyKCksXHJcbiAgICAgICAgfSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHNldE5ld1ZhbHVlID0gdGhpcy5zZXROZXdWYWx1ZSQoKTtcclxuICAgIGlmIChzZXROZXdWYWx1ZSkge1xyXG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcclxuICAgICAgICBzZXROZXdWYWx1ZS5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgbmV4dDogKHsgYmxvY2tzLCBzYXZlQWZ0ZXIgfSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zYXZlQWZ0ZXIgPSBzYXZlQWZ0ZXIgPz8gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVkaXRvckluc3RhbmNlICYmIGJsb2Nrcykge1xyXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgYmxvY2tzID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvckluc3RhbmNlLmJsb2Nrcy5yZW5kZXJGcm9tSFRNTChibG9ja3MpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvckluc3RhbmNlLnJlbmRlcih7IGJsb2NrczogYmxvY2tzIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5lZGl0b3JJbnN0YW5jZSA9IHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuXHJcbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmVkaXRvckluc3RhbmNlPy5kZXN0cm95KCk7XHJcbiAgfVxyXG4gIHB1YmxpYyBhc3luYyBzYXZlKCkge1xyXG4gICAgaWYgKGlzTm90RW1wdHlPYmplY3QodGhpcy5lZGl0b3JJbnN0YW5jZSkpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuX2V4dHJhY3RXaXRoQ29sb3JUb2tlblN0eWxlcygpO1xyXG4gICAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zYXZlZC5lbWl0KHtcclxuICAgICAgICBibG9ja3M6IGRhdGEuYmxvY2tzLFxyXG4gICAgICAgIHRhZ3M6IHRoaXMuX2V4dHJhY3RUYWdzKGRhdGEuYmxvY2tzKSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHB1YmxpYyBpbml0KCk6IEVkaXRvckpTIHtcclxuICAgIGNvbnN0IHRyYW5zbGF0aW9ucyA9IHRoaXMuX2dldFRyYW5zbGF0aW9uKCk7XHJcbiAgICBjb25zdCB0b29scyA9IHRoaXMuX2J1aWxkVG9vbHModHJhbnNsYXRpb25zKTtcclxuXHJcbiAgICByZXR1cm4gbmV3IEVkaXRvckpTKHtcclxuICAgICAgaG9sZGVyOiB0aGlzLmVkaXRvcmpzLm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIG1pbkhlaWdodDogMTAwLFxyXG4gICAgICBkYXRhOiB7IGJsb2NrczogdGhpcy5pbml0VmFsdWUoKSB9LFxyXG4gICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcigpID8/IHRyYW5zbGF0aW9uc1tcInBsYWNlaG9sZGVyXCJdLFxyXG4gICAgICB0b29scyxcclxuICAgICAgb25DaGFuZ2U6IHRoaXMuX29uQ2hhbmdlLFxyXG4gICAgICAuLi50cmFuc2xhdGlvbnMsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2J1aWxkVG9vbHModHJhbnNsYXRpb25zOiBSZWNvcmQ8c3RyaW5nLCBhbnk+KTogUmVjb3JkPHN0cmluZywgYW55PiB7XHJcbiAgICBjb25zdCBlbmFibGVkID0gbmV3IFNldCh0aGlzLmVuYWJsZWRUb29scygpKTtcclxuICAgIGNvbnN0IHRvb2xzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XHJcblxyXG4gICAgaWYgKGVuYWJsZWQuaGFzKFwiaGVhZGVyXCIpKSB7XHJcbiAgICAgIHRvb2xzW1wiaGVhZGVyXCJdID0gSGVhZGVyO1xyXG4gICAgfVxyXG4gICAgaWYgKGVuYWJsZWQuaGFzKFwibGlzdFwiKSkge1xyXG4gICAgICB0b29sc1tcImxpc3RcIl0gPSBMaXN0O1xyXG4gICAgfVxyXG4gICAgaWYgKGVuYWJsZWQuaGFzKFwicXVvdGVcIikpIHtcclxuICAgICAgdG9vbHNbXCJxdW90ZVwiXSA9IFF1b3RlO1xyXG4gICAgfVxyXG4gICAgaWYgKGVuYWJsZWQuaGFzKFwiZGVsaW1pdGVyXCIpKSB7XHJcbiAgICAgIHRvb2xzW1wiZGVsaW1pdGVyXCJdID0gRGVsaW1pdGVyO1xyXG4gICAgfVxyXG4gICAgaWYgKGVuYWJsZWQuaGFzKFwid2FybmluZ1wiKSkge1xyXG4gICAgICB0b29sc1tcIndhcm5pbmdcIl0gPSBXYXJuaW5nO1xyXG4gICAgfVxyXG4gICAgaWYgKGVuYWJsZWQuaGFzKFwiY29sb3JcIikpIHtcclxuICAgICAgdG9vbHNbXCJUZXh0Q29sb3JcIl0gPSB7XHJcbiAgICAgICAgY2xhc3M6IENvbG9yVG9vbCxcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvckxhYmVsOlxyXG4gICAgICAgICAgICB0cmFuc2xhdGlvbnNbXCJjb2xvcnRvb2wuYmFja2dyb3VuZENvbG9yTGFiZWxcIl0sXHJcbiAgICAgICAgICBmcm9udENvbG9yTGFiZWw6IHRyYW5zbGF0aW9uc1tcImNvbG9ydG9vbC5mcm9udENvbG9yTGFiZWxcIl0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIGlmIChlbmFibGVkLmhhcyhcImltYWdlXCIpKSB7XHJcbiAgICAgIHRvb2xzW1wiaW1hZ2VcIl0gPSB7XHJcbiAgICAgICAgY2xhc3M6IEltYWdlVG9vbCxcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgIHVwbG9hZGVyOiB7XHJcbiAgICAgICAgICAgIHVwbG9hZEJ5RmlsZTogYXN5bmMgKGZpbGU6IEZpbGUpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhpcy51cGxvYWRCeUZpbGUoZmlsZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICBpZiAoZW5hYmxlZC5oYXMoXCJtZW50aW9uXCIpKSB7XHJcbiAgICAgIHRvb2xzW1wibWVudGlvblwiXSA9IHtcclxuICAgICAgICBjbGFzczogVGFnVG9vbCxcclxuICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgIHVzZXJzOiB0aGlzLnVzZXJzKCksXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdG9vbHM7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdXBsb2FkQnlGaWxlID0gYXN5bmMgKGZpbGU6IEZpbGUpID0+IHtcclxuICAgIGNvbnN0IGRvYyA9IGF3YWl0IGZpcnN0VmFsdWVGcm9tKFxyXG4gICAgICB0aGlzLl9kb2N1bWVudHNTZXJ2aWNlLmFkZERvY3VtZW50JCh7IGZpbGUgfSlcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3VjY2VzczogMSxcclxuICAgICAgZmlsZToge1xyXG4gICAgICAgIHVybDogZG9jLnVybCxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoaXNOb3RFbXB0eU9iamVjdCh0aGlzLmVkaXRvckluc3RhbmNlKSkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5fZXh0cmFjdFdpdGhDb2xvclRva2VuU3R5bGVzKCk7XHJcbiAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNoYW5nZWQuZW1pdCh7IGJsb2NrczogZGF0YS5ibG9ja3MgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zYXZlT25DaGFuZ2UoKSkge1xyXG4gICAgICB0aGlzLnNhdmUoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9zYXZlQWZ0ZXIpIHtcclxuICAgICAgdGhpcy5zYXZlKCk7XHJcbiAgICAgIHRoaXMuX3NhdmVBZnRlciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcHJpdmF0ZSBfZ2V0VHJhbnNsYXRpb24oKSB7XHJcbiAgICBpZiAoIWlzTm9uTnVsbGFibGUodGhpcy5fdHJhbnNsYXRpb25TZXJ2aWNlLmdldExhbmd1YWdlKCkpKSB7XHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLmxhbmd1YWdlc1t0aGlzLl90cmFuc2xhdGlvblNlcnZpY2UuZ2V0TGFuZ3VhZ2UoKV0uZWRpdG9yanMgPz8ge307XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIF9leHRyYWN0V2l0aENvbG9yVG9rZW5TdHlsZXMoKSB7XHJcbiAgICBjb25zdCBvdXRwdXQgPSBhd2FpdCB0aGlzLmVkaXRvckluc3RhbmNlPy5zYXZlKCk7XHJcbiAgICBpZiAoIW91dHB1dCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzdHlsZWRTcGFucyA9IEFycmF5LmZyb20oXHJcbiAgICAgIHRoaXMuZWRpdG9yanMubmF0aXZlRWxlbWVudC5pbm5lckhUTUwubWF0Y2hBbGwoXHJcbiAgICAgICAgLzxzcGFuIGNsYXNzPVwiY2UtaW5saW5lLXRvb2wtLWNvbG9yX190b2tlblwiKC4qPyk+L2dzXHJcbiAgICAgIClcclxuICAgICkubWFwKChtYXRjaDogYW55KSA9PiAoe1xyXG4gICAgICBzdHlsZTogbWF0Y2hbMV0udHJpbSgpLCAvLyBgc3R5bGVgXHJcbiAgICB9KSk7XHJcblxyXG4gICAgaWYgKHN0eWxlZFNwYW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gb3V0cHV0O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBzcGFuSW5kZXggPSAwO1xyXG4gICAgY29uc3QgdXBkYXRlZEJsb2NrcyA9IG91dHB1dC5ibG9ja3MubWFwKChibG9jaykgPT4ge1xyXG4gICAgICBpZiAoYmxvY2sudHlwZSAhPT0gXCJwYXJhZ3JhcGhcIiB8fCAhYmxvY2suZGF0YT8udGV4dCkge1xyXG4gICAgICAgIHJldHVybiBibG9jaztcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgbmV3VGV4dCA9IGJsb2NrLmRhdGEudGV4dC5yZXBsYWNlKFxyXG4gICAgICAgIC88c3BhbiBjbGFzcz1cImNlLWlubGluZS10b29sLS1jb2xvcl9fdG9rZW5cIj4vZ3MsXHJcbiAgICAgICAgKG1hdGNoOiB1bmtub3duKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBzdHlsZWQgPSBzdHlsZWRTcGFuc1tzcGFuSW5kZXgrK107XHJcbiAgICAgICAgICBpZiAoIXN0eWxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2g7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiY2UtaW5saW5lLXRvb2wtLWNvbG9yX190b2tlblwiICR7c3R5bGVkLnN0eWxlfT5gO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYmxvY2ssXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgLi4uYmxvY2suZGF0YSxcclxuICAgICAgICAgIHRleHQ6IG5ld1RleHQsXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIC4uLm91dHB1dCxcclxuICAgICAgYmxvY2tzOiB1cGRhdGVkQmxvY2tzLFxyXG4gICAgfTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfZXh0cmFjdFRhZ3MoYmxvY2tzOiBXeXNpc3dnQmxvY2tEYXRhPHN0cmluZywgYW55PltdKSB7XHJcbiAgICBjb25zdCBodG1sID0gY29udmVydEJsb2Nrc1RvSHRtbChibG9ja3MpO1xyXG4gICAgY29uc3QgcmVnZXggPSAvZGF0YS11c2VyLWlkPVwiKFteXCJdKylcIi9nO1xyXG4gICAgLy8gRXh0cmFjdGlvbiBkZXMgSURzIHNvdXMgZm9ybWUgZGUgdGFibGVhdVxyXG4gICAgcmV0dXJuIFsuLi5odG1sLm1hdGNoQWxsKHJlZ2V4KV0ubWFwKChtYXRjaCkgPT4gbWF0Y2hbMV0pO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmxleC1jb2x1bW4gZy1zcGFjZS1tZFwiPlxuICA8ZGl2XG4gICAgI2VkaXRvcmpzXG4gICAgY2xhc3M9XCJlZGl0b3ItY29udGFpbmVyXCJcbiAgICBbY2xhc3MubWF4LWhlaWdodF09XCJ0aGlzLm1heEhlaWdodCgpXCJcbiAgPjwvZGl2PlxuPC9kaXY+XG4iXX0=