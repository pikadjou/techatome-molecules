import * as i0 from '@angular/core';
import { input, EventEmitter, Output, Component, output, ViewChild, Injectable, signal, computed, inject } from '@angular/core';
import { TaIconType, FontIconComponent, LocalIconComponent, MaterialIconComponent } from '@ta/icons';
import { BadgeComponent, CardComponent, CardContentComponent, CardCtaComponent, CardHeaderComponent, CardTagComponent, CardTitleComponent, TitleComponent, TrigramComponent, EmptyComponent, LoaderComponent, ButtonComponent, MegaoctetComponent, TextComponent, OverlineComponent, ButtonToolComponent, ErrorComponent, LinkComponent, TimeAgoComponent } from '@ta/ui';
import { EFileExtension, TaBaseComponent, SafePipe, StopPropagationDirective, isLight, getBlobImage, determineNewSize, getFileExtension, TaAbstractComponent, downloadFile } from '@ta/utils';
import * as i1$1 from '@angular/common';
import { NgClass, CommonModule, NgTemplateOutlet, AsyncPipe } from '@angular/common';
import { InputSlider } from '@ta/form-model';
import ImageEditor from 'tui-image-editor';
import * as i1$2 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { TaLazyTranslationService } from '@ta/translation';
import * as i1 from 'ngx-doc-viewer';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { TaDocumentsService, FileType } from '@ta/services';

class FileCardComponent {
    constructor() {
        this.file = input.required();
        this.fileSelected = new EventEmitter();
        this.moreInformationSelected = new EventEmitter();
    }
    get localIcon() {
        switch (this.file().fileExtension) {
            case EFileExtension.PDF:
                return TaIconType.Pdf;
            case EFileExtension.Word:
                return TaIconType.Doc;
            case EFileExtension.Excel:
                return TaIconType.Excel;
            case EFileExtension.Image:
                return TaIconType.Image;
            default:
                return TaIconType.UnknownFile;
        }
    }
    get fileType() {
        return this.file().fileMetaData?.fileType?.translatedValue || null;
    }
    get userTrigram() {
        return this.file().fileMetaData?.owner?.naming?.trigram || null;
    }
    get fileSize() {
        return this.file().fileMetaData?.fileSize || null;
    }
    get fileName() {
        return this.file().fileMetaData?.fileName || null;
    }
    onHeaderClicked() {
        this.moreInformationSelected.emit(this.file());
    }
    onBodyClicked() {
        this.fileSelected.emit(this.file());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: FileCardComponent, isStandalone: true, selector: "ta-file-card", inputs: { file: { classPropertyName: "file", publicName: "file", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { fileSelected: "fileSelected", moreInformationSelected: "moreInformationSelected" }, ngImport: i0, template: "<ta-card>\n  <ta-card-header>\n    <ta-card-tag class=\"space-between\">\n      <ta-trigram [value]=\"this.userTrigram\"> </ta-trigram>\n      <div (click)=\"this.onHeaderClicked()\">\n        <ta-font-icon name=\"more\" size=\"xs\"></ta-font-icon>\n      </div>\n    </ta-card-tag>\n    <ta-card-title>\n      <ta-title [level]=\"4\">{{ this.fileName }}</ta-title>\n    </ta-card-title>\n  </ta-card-header>\n  <ta-card-content>\n    <div (click)=\"this.onBodyClicked()\">\n      <ta-local-icon [type]=\"this.localIcon\" size=\"md\"></ta-local-icon>\n    </div>\n  </ta-card-content>\n  <ta-card-cta>\n    <ta-badge [value]=\"this.fileType ?? ''\"> </ta-badge>\n  </ta-card-cta>\n</ta-card>\n", styles: [".title{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"], dependencies: [{ kind: "component", type: BadgeComponent, selector: "ta-badge", inputs: ["value", "type", "showClickOption", "icon"], outputs: ["clickAction"] }, { kind: "component", type: CardComponent, selector: "ta-card", inputs: ["highlight", "invert", "shadow", "fullHeight", "noContent", "directionCard", "isNew"], outputs: ["click"] }, { kind: "component", type: CardContentComponent, selector: "ta-card-content" }, { kind: "component", type: CardCtaComponent, selector: "ta-card-cta" }, { kind: "component", type: CardHeaderComponent, selector: "ta-card-header" }, { kind: "component", type: CardTagComponent, selector: "ta-card-tag" }, { kind: "component", type: CardTitleComponent, selector: "ta-card-title" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }, { kind: "component", type: TrigramComponent, selector: "ta-trigram", inputs: ["value", "size", "shape", "tone"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileCardComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-file-card", standalone: true, imports: [
                        BadgeComponent,
                        CardComponent,
                        CardContentComponent,
                        CardCtaComponent,
                        CardHeaderComponent,
                        CardTagComponent,
                        CardTitleComponent,
                        FontIconComponent,
                        LocalIconComponent,
                        TitleComponent,
                        TrigramComponent,
                    ], template: "<ta-card>\n  <ta-card-header>\n    <ta-card-tag class=\"space-between\">\n      <ta-trigram [value]=\"this.userTrigram\"> </ta-trigram>\n      <div (click)=\"this.onHeaderClicked()\">\n        <ta-font-icon name=\"more\" size=\"xs\"></ta-font-icon>\n      </div>\n    </ta-card-tag>\n    <ta-card-title>\n      <ta-title [level]=\"4\">{{ this.fileName }}</ta-title>\n    </ta-card-title>\n  </ta-card-header>\n  <ta-card-content>\n    <div (click)=\"this.onBodyClicked()\">\n      <ta-local-icon [type]=\"this.localIcon\" size=\"md\"></ta-local-icon>\n    </div>\n  </ta-card-content>\n  <ta-card-cta>\n    <ta-badge [value]=\"this.fileType ?? ''\"> </ta-badge>\n  </ta-card-cta>\n</ta-card>\n", styles: [".title{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"] }]
        }], propDecorators: { fileSelected: [{
                type: Output
            }], moreInformationSelected: [{
                type: Output
            }] } });

class FileListComponent extends TaBaseComponent {
    constructor() {
        super();
        this.files = input([]);
        this.canDeleteFile = input(false);
        this.fileSelected = output();
        this.moreInformationSelected = output();
        this.fileDeleted = output();
    }
    canDisplayFileType(fileType) {
        const filesValue = this.files();
        if (filesValue && filesValue[0])
            return filesValue[0].type === fileType;
        return false;
    }
    onFileSelected(file, index) {
        if (file.isLoading)
            return;
        this.fileSelected.emit({ ...file, ...{ index } });
    }
    onMoreInformationSelected(file) {
        if (file.isLoading)
            return;
        this.moreInformationSelected.emit(file);
    }
    deleteFile(fileData) {
        this.fileDeleted.emit(fileData);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FileListComponent, isStandalone: true, selector: "ta-files-list", inputs: { files: { classPropertyName: "files", publicName: "files", isSignal: true, isRequired: false, transformFunction: null }, canDeleteFile: { classPropertyName: "canDeleteFile", publicName: "canDeleteFile", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { fileSelected: "fileSelected", moreInformationSelected: "moreInformationSelected", fileDeleted: "fileDeleted" }, usesInheritance: true, ngImport: i0, template: "<ta-empty [isEmpty]=\"this.files().length === 0\">\n  @if (this.canDisplayFileType('Image')) {\n  <div class=\"files-container\">\n    @for (file of this.files(); track this.trackById($index, file); let i =\n    $index) {\n    <div class=\"info-container\" (click)=\"this.onFileSelected(file, i)\">\n      @if (this.canDeleteFile()) {\n      <div class=\"delete\" (click)=\"this.deleteFile(file)\" appStopPropagation>\n        <div class=\"delete-icon\">\n          <ta-font-icon type=\"sm\" name=\"close\"></ta-font-icon>\n        </div>\n      </div>\n      } @if (file.type === 'Image') {\n      <img [src]=\"file.thumbnailUrl || file.url | safe : 'url'\" />\n      } @else if (file.type === 'Document') {\n      <ta-file-card [file]=\"file\"></ta-file-card>\n      } @if (file.isLoading) {\n      <div class=\"is-loading\">\n        <ta-local-icon\n          class=\"align-middle\"\n          [rotation]=\"file.isLoading\"\n          [type]=\"this.icon.Loader\"\n          [size]=\"'xs'\"\n        ></ta-local-icon>\n      </div>\n      } @if (file.isSelected) {\n      <div class=\"is-selected\">\n        <ta-local-icon\n          class=\"align-middle\"\n          [type]=\"this.icon.Checked\"\n          [size]=\"'xs'\"\n        ></ta-local-icon>\n      </div>\n      }\n    </div>\n    }\n  </div>\n  } @if (canDisplayFileType('Document')) {\n  <div class=\"row g-2 row-cols-1 row-cols-md-2 row-cols-xl-3 mb-space-lg\">\n    @for (file of this.files(); track this.trackById($index, file); let i =\n    $index) {\n    <div>\n      @if (file.type === 'Document') {\n      <ta-file-card\n        (fileSelected)=\"this.onFileSelected(file, i)\"\n        (moreInformationSelected)=\"this.onMoreInformationSelected(file)\"\n        [file]=\"file\"\n      ></ta-file-card>\n      }\n    </div>\n    }\n  </div>\n  }\n</ta-empty>\n", styles: ["img{border-radius:5px;width:100%}.files-container{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;row-gap:1em;column-gap:5%}.files-container .info-container{position:relative;width:30%;margin-top:auto;margin-bottom:auto}.files-container .info-container .delete{position:absolute;width:32px;height:32px;border-radius:32px;top:4px;right:4px;background:var(--ta-neutral-50)}.files-container .info-container .delete .delete-icon{width:fit-content;display:block;height:fit-content;margin:6px auto auto}.files-container .info-container .is-loading,.files-container .info-container .is-selected{width:100%;height:100%;opacity:.5;position:absolute;inset:0;background-color:var(--ta-neutral-100)}.files-container .info-container .is-loading app-local-icon,.files-container .info-container .is-selected app-local-icon{position:relative;transform:translateY(-50%);top:40%}\n"], dependencies: [{ kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "variant", "isLight", "showMessage", "text", "subtitle", "emptyIcon", "iconSize"] }, { kind: "component", type: FileCardComponent, selector: "ta-file-card", inputs: ["file"], outputs: ["fileSelected", "moreInformationSelected"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "pipe", type: SafePipe, name: "safe" }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileListComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-files-list", standalone: true, imports: [
                        EmptyComponent,
                        FileCardComponent,
                        FontIconComponent,
                        LocalIconComponent,
                        SafePipe,
                        StopPropagationDirective,
                    ], template: "<ta-empty [isEmpty]=\"this.files().length === 0\">\n  @if (this.canDisplayFileType('Image')) {\n  <div class=\"files-container\">\n    @for (file of this.files(); track this.trackById($index, file); let i =\n    $index) {\n    <div class=\"info-container\" (click)=\"this.onFileSelected(file, i)\">\n      @if (this.canDeleteFile()) {\n      <div class=\"delete\" (click)=\"this.deleteFile(file)\" appStopPropagation>\n        <div class=\"delete-icon\">\n          <ta-font-icon type=\"sm\" name=\"close\"></ta-font-icon>\n        </div>\n      </div>\n      } @if (file.type === 'Image') {\n      <img [src]=\"file.thumbnailUrl || file.url | safe : 'url'\" />\n      } @else if (file.type === 'Document') {\n      <ta-file-card [file]=\"file\"></ta-file-card>\n      } @if (file.isLoading) {\n      <div class=\"is-loading\">\n        <ta-local-icon\n          class=\"align-middle\"\n          [rotation]=\"file.isLoading\"\n          [type]=\"this.icon.Loader\"\n          [size]=\"'xs'\"\n        ></ta-local-icon>\n      </div>\n      } @if (file.isSelected) {\n      <div class=\"is-selected\">\n        <ta-local-icon\n          class=\"align-middle\"\n          [type]=\"this.icon.Checked\"\n          [size]=\"'xs'\"\n        ></ta-local-icon>\n      </div>\n      }\n    </div>\n    }\n  </div>\n  } @if (canDisplayFileType('Document')) {\n  <div class=\"row g-2 row-cols-1 row-cols-md-2 row-cols-xl-3 mb-space-lg\">\n    @for (file of this.files(); track this.trackById($index, file); let i =\n    $index) {\n    <div>\n      @if (file.type === 'Document') {\n      <ta-file-card\n        (fileSelected)=\"this.onFileSelected(file, i)\"\n        (moreInformationSelected)=\"this.onMoreInformationSelected(file)\"\n        [file]=\"file\"\n      ></ta-file-card>\n      }\n    </div>\n    }\n  </div>\n  }\n</ta-empty>\n", styles: ["img{border-radius:5px;width:100%}.files-container{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;row-gap:1em;column-gap:5%}.files-container .info-container{position:relative;width:30%;margin-top:auto;margin-bottom:auto}.files-container .info-container .delete{position:absolute;width:32px;height:32px;border-radius:32px;top:4px;right:4px;background:var(--ta-neutral-50)}.files-container .info-container .delete .delete-icon{width:fit-content;display:block;height:fit-content;margin:6px auto auto}.files-container .info-container .is-loading,.files-container .info-container .is-selected{width:100%;height:100%;opacity:.5;position:absolute;inset:0;background-color:var(--ta-neutral-100)}.files-container .info-container .is-loading app-local-icon,.files-container .info-container .is-selected app-local-icon{position:relative;transform:translateY(-50%);top:40%}\n"] }]
        }], ctorParameters: () => [] });

class FileEditComponent extends TaBaseComponent {
    constructor() {
        super();
        this.imagePath = input.required();
        this.saveImage$ = input.required();
        this.savedImage = output();
        // control
        this.selection = "";
        this.shapeSelection = "";
        this.colorHexa = "#000000";
        this.colorList = [
            "#ff0d00",
            "#ffa200",
            "#f4ff1f",
            "#34e610",
            "#147001",
            "#00cad1",
            "#0034d1",
            "#3d009e",
            "#000000",
            "#ffffff",
        ];
        this.objectActivated = null;
        this.brushSize = 20;
        this.slider = new InputSlider({
            key: "slider",
            class: "w-100",
            max: 50,
        });
        this.isLight = isLight;
        this._canvasSize = {
            width: 0,
            height: 0,
        };
        this._intoDrawing = false;
        this.onSaveClick = async () => {
            this.requestState.asked();
            const data = this.tuiImageEditor.toDataURL({
                format: "png",
                quality: 0.4,
            });
            const blob = await getBlobImage(data);
            this.savedImage.emit(blob);
            this.requestState.completed();
        };
        this.slider.value = this.brushSize;
        this.slider.createFormControl();
        this._registerSubscription(this.slider.changeValue$.subscribe((value) => this.changeBrushSize(value ?? 0)));
        window.addEventListener("keyup", this.keyPress);
    }
    ngOnInit() {
        const saveImage = this.saveImage$();
        if (saveImage) {
            this._registerSubscription(saveImage.subscribe(() => {
                this.onSaveClick();
            }));
        }
    }
    ngOnDestroy() {
        window.removeEventListener("keyup", this.keyPress);
        this.tuiImageEditor.destroy();
    }
    ngAfterViewInit() {
        this._createImageEditor();
    }
    getHeight() {
        return `${this._canvasSize.height}px`;
    }
    getWidth() {
        return `${this._canvasSize.width}px`;
    }
    keyPress(event) {
        if (event.key === "Enter") {
            this._stopDrawing();
        }
    }
    // control
    showPanel() {
        return this.selection !== "" && !this._intoDrawing;
    }
    changeSelection(newSelection) {
        this.selection = newSelection;
        this._intoDrawing = false;
        if (!this.selection) {
            this._stopDrawing();
            return;
        }
        if (this.selection === "line") {
            this.drawing("FREE_DRAWING");
            this.changeShapeSelection("");
            return;
        }
        if (this.selection === "shape") {
            if (!this.shapeSelection) {
                this.changeShapeSelection("line");
            }
            return;
        }
        if (this.selection === "text") {
            this.text();
            this.changeShapeSelection("");
            return;
        }
    }
    changeShapeSelection(newSelection) {
        this.shapeSelection = newSelection;
        if (!this.shapeSelection) {
            return;
        }
        if (this.shapeSelection === "line") {
            this.drawing("LINE_DRAWING");
            return;
        }
        this.shape(this.shapeSelection);
    }
    undo() {
        this.tuiImageEditor.discardSelection();
        this.tuiImageEditor.undo();
    }
    redo() {
        this.tuiImageEditor.discardSelection();
        this.tuiImageEditor.redo();
    }
    shape(type) {
        this._stopDrawing();
        this.tuiImageEditor.setDrawingShape(type, this._getSettings());
        this.tuiImageEditor.startDrawingMode("SHAPE");
    }
    drawing(type) {
        this._stopDrawing();
        this.tuiImageEditor.startDrawingMode(type, this._getSettings());
    }
    text() {
        this._stopDrawing();
        this.tuiImageEditor.startDrawingMode("TEXT", this._getSettings());
    }
    changeColor(color) {
        this.colorHexa = color;
        this._reflow();
    }
    changeBrushSize(size) {
        this.brushSize = size;
        this._reflow();
    }
    clear() {
        if (this.objectActivated) {
            this.tuiImageEditor.removeActiveObject();
        }
    }
    validation() {
        this.onSaveClick();
    }
    async _createImageEditor() {
        this.tuiImageEditor = new ImageEditor(this._tuiRef.nativeElement, {
            usageStatistics: false,
        });
        const crop = await this.tuiImageEditor.loadImageFromURL(this.imagePath(), "default");
        this._canvasSize = determineNewSize(crop.newHeight, crop.newWidth, this._containerRef.nativeElement.clientWidth, this._containerRef.nativeElement.clientHeight - 70);
        this.tuiImageEditor.resizeCanvasDimension({
            width: this._canvasSize.width,
            height: this._canvasSize.height,
        });
        this.tuiImageEditor.on("mousedown", () => {
            this._intoDrawing = true;
        });
        this.tuiImageEditor.on("objectActivated", (data) => {
            this.objectActivated = data;
        });
        this.tuiImageEditor.on("addText", (pos) => {
            this.tuiImageEditor.addText("TEXTE", {
                ...this._getSettings(),
                ...{ position: pos.originPosition },
            });
        });
    }
    _stopDrawing() {
        this.tuiImageEditor.stopDrawingMode();
        this.objectActivated = null;
    }
    _reflow() {
        if (this.selection === "line") {
            this.tuiImageEditor.setBrush({
                color: this.colorHexa,
                width: this.brushSize,
            });
            return;
        }
        if (this.selection === "shape") {
            this._stopDrawing();
            this.changeShapeSelection(this.shapeSelection);
            return;
        }
    }
    _getSettings() {
        return {
            color: this.colorHexa,
            width: this.brushSize,
            fill: "transparent",
            stroke: this.colorHexa,
            strokeWidth: this.brushSize,
            styles: {
                fill: this.colorHexa,
                fontSize: this.brushSize * 8,
            },
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileEditComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FileEditComponent, isStandalone: true, selector: "ta-files-edit", inputs: { imagePath: { classPropertyName: "imagePath", publicName: "imagePath", isSignal: true, isRequired: true, transformFunction: null }, saveImage$: { classPropertyName: "saveImage$", publicName: "saveImage$", isSignal: true, isRequired: true, transformFunction: null } }, outputs: { savedImage: "savedImage" }, viewQueries: [{ propertyName: "_containerRef", first: true, predicate: ["containerRef"], descendants: true }, { propertyName: "_tuiRef", first: true, predicate: ["tuiRef"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"edit\" #containerRef>\n  <div\n    #tuiRef\n    [style.height]=\"this.getHeight()\"\n    [style.width]=\"this.getWidth()\"\n    class=\"m-a image-container\"\n  ></div>\n\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <div class=\"control\">\n      @if (this.showPanel()) {\n      <div class=\"panel\">\n        @if (this.selection === 'line') {\n        <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n        } @else if (this.selection === 'shape') {\n        <div class=\"row g-0 shape-selection\">\n          <div class=\"col\" (click)=\"this.changeShapeSelection('rect')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'rect' }\"\n            >\n              <ta-material-icon type=\"sm\"\n                >check_box_outline_blank</ta-material-icon\n              >\n            </div>\n          </div>\n          <div class=\"col\" (click)=\"this.changeShapeSelection('triangle')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'triangle' }\"\n            >\n              <ta-material-icon type=\"sm\">change_history</ta-material-icon>\n            </div>\n          </div>\n          <div class=\"col\" (click)=\"this.changeShapeSelection('circle')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'circle' }\"\n            >\n              <ta-material-icon type=\"sm\">circle</ta-material-icon>\n            </div>\n          </div>\n          <div class=\"col\" (click)=\"this.changeShapeSelection('line')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'line' }\"\n            >\n              <ta-material-icon type=\"sm\">straighten</ta-material-icon>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n        } @else if (this.selection === 'text') {\n        <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n        }\n      </div>\n      }\n\n      <div class=\"selection row g-0\">\n        <div class=\"col\" (click)=\"this.changeSelection('')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === '' }\">\n            <ta-material-icon type=\"sm\">pan_tool</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('line')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === 'line' }\">\n            <ta-material-icon type=\"sm\">draw</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('shape')\">\n          <div\n            class=\"item\"\n            [ngClass]=\"{ selected: this.selection === 'shape' }\"\n          >\n            <ta-material-icon type=\"sm\">interests</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('text')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === 'text' }\">\n            <ta-material-icon type=\"sm\">text_fields</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.clear()\">\n          <div class=\"item\" [ngClass]=\"{ disabled: !this.objectActivated }\">\n            <ta-material-icon type=\"sm\">delete</ta-material-icon>\n          </div>\n        </div>\n        <span class=\"separator\"></span>\n        <div class=\"col\" (click)=\"this.undo()\">\n          <div class=\"item\">\n            <ta-material-icon type=\"sm\">undo</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.redo()\">\n          <div class=\"item\">\n            <ta-material-icon type=\"sm\">redo</ta-material-icon>\n          </div>\n        </div>\n        <span class=\"separator\"></span>\n        <div class=\"col\" (click)=\"this.validation()\">\n          <div class=\"item color-success\">\n            <ta-font-icon name=\"check-line\"></ta-font-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ta-loader>\n</div>\n\n<ng-template #Colors>\n  <div class=\"colors\">\n    <div class=\"row g-0\">\n      @for (color of this.colorList; track color) {\n      <div class=\"col\" (click)=\"this.changeColor(color)\">\n        <div\n          class=\"color\"\n          [style.background-color]=\"color\"\n          [ngClass]=\"{ 'is-light': this.isLight(color) }\"\n        >\n          @if (this.colorHexa === color) {\n          <ta-material-icon [type]=\"'sm'\">done</ta-material-icon>\n          }\n        </div>\n      </div>\n      }\n    </div>\n  </div>\n</ng-template>\n<ng-template #Range>\n  <div class=\"range\">\n    <!-- <ta-input-slider [input]=\"this.slider\"></ta-input-slider> -->\n  </div>\n</ng-template>\n", styles: [".edit{position:relative;height:100%;display:flex;padding-bottom:70px;background-color:var(--ta-neutral-main)}.edit .image-container{display:flex;vertical-align:center}.control{border-top:1px solid var(--ta-neutral-400);background-color:var(--ta-neutral-100);padding:10px 20px;position:absolute;bottom:0;left:0;right:0}.control .item{width:20px;height:20px;border-radius:50%;padding:10px;margin:auto}.control .item.selected{background-color:var(--ta-surface-brand-primary);color:var(--ta-neutral-100)}.control .item.disabled{opacity:.5}.control .selection{border:1px solid var(--ta-neutral-400);margin:auto;padding:5px;border-radius:30px;text-align:center}.control .selection .separator{border:1px solid var(--ta-neutral-400);padding:0;width:0}.control .shape-selection{margin:5px 50px}.control .panel{margin-bottom:10px}.range{border:1px solid var(--ta-neutral-400);border-radius:20px;padding:3px 10px;margin-top:5px}.colors{text-align:center;margin:auto}.colors .color{height:24px;width:24px;border-radius:50%;margin:5px auto auto;border:1px solid var(--ta-neutral-400);color:var(--ta-neutral-100)}.colors .color.is-light{color:var(--ta-text-primary)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: MaterialIconComponent, selector: "ta-material-icon", inputs: ["outline", "sharp", "round", "dualTone", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileEditComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-files-edit", standalone: true, imports: [
                        NgClass,
                        FontIconComponent,
                        LoaderComponent,
                        MaterialIconComponent,
                    ], template: "<div class=\"edit\" #containerRef>\n  <div\n    #tuiRef\n    [style.height]=\"this.getHeight()\"\n    [style.width]=\"this.getWidth()\"\n    class=\"m-a image-container\"\n  ></div>\n\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <div class=\"control\">\n      @if (this.showPanel()) {\n      <div class=\"panel\">\n        @if (this.selection === 'line') {\n        <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n        } @else if (this.selection === 'shape') {\n        <div class=\"row g-0 shape-selection\">\n          <div class=\"col\" (click)=\"this.changeShapeSelection('rect')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'rect' }\"\n            >\n              <ta-material-icon type=\"sm\"\n                >check_box_outline_blank</ta-material-icon\n              >\n            </div>\n          </div>\n          <div class=\"col\" (click)=\"this.changeShapeSelection('triangle')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'triangle' }\"\n            >\n              <ta-material-icon type=\"sm\">change_history</ta-material-icon>\n            </div>\n          </div>\n          <div class=\"col\" (click)=\"this.changeShapeSelection('circle')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'circle' }\"\n            >\n              <ta-material-icon type=\"sm\">circle</ta-material-icon>\n            </div>\n          </div>\n          <div class=\"col\" (click)=\"this.changeShapeSelection('line')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'line' }\"\n            >\n              <ta-material-icon type=\"sm\">straighten</ta-material-icon>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n        } @else if (this.selection === 'text') {\n        <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n        }\n      </div>\n      }\n\n      <div class=\"selection row g-0\">\n        <div class=\"col\" (click)=\"this.changeSelection('')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === '' }\">\n            <ta-material-icon type=\"sm\">pan_tool</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('line')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === 'line' }\">\n            <ta-material-icon type=\"sm\">draw</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('shape')\">\n          <div\n            class=\"item\"\n            [ngClass]=\"{ selected: this.selection === 'shape' }\"\n          >\n            <ta-material-icon type=\"sm\">interests</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('text')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === 'text' }\">\n            <ta-material-icon type=\"sm\">text_fields</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.clear()\">\n          <div class=\"item\" [ngClass]=\"{ disabled: !this.objectActivated }\">\n            <ta-material-icon type=\"sm\">delete</ta-material-icon>\n          </div>\n        </div>\n        <span class=\"separator\"></span>\n        <div class=\"col\" (click)=\"this.undo()\">\n          <div class=\"item\">\n            <ta-material-icon type=\"sm\">undo</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.redo()\">\n          <div class=\"item\">\n            <ta-material-icon type=\"sm\">redo</ta-material-icon>\n          </div>\n        </div>\n        <span class=\"separator\"></span>\n        <div class=\"col\" (click)=\"this.validation()\">\n          <div class=\"item color-success\">\n            <ta-font-icon name=\"check-line\"></ta-font-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ta-loader>\n</div>\n\n<ng-template #Colors>\n  <div class=\"colors\">\n    <div class=\"row g-0\">\n      @for (color of this.colorList; track color) {\n      <div class=\"col\" (click)=\"this.changeColor(color)\">\n        <div\n          class=\"color\"\n          [style.background-color]=\"color\"\n          [ngClass]=\"{ 'is-light': this.isLight(color) }\"\n        >\n          @if (this.colorHexa === color) {\n          <ta-material-icon [type]=\"'sm'\">done</ta-material-icon>\n          }\n        </div>\n      </div>\n      }\n    </div>\n  </div>\n</ng-template>\n<ng-template #Range>\n  <div class=\"range\">\n    <!-- <ta-input-slider [input]=\"this.slider\"></ta-input-slider> -->\n  </div>\n</ng-template>\n", styles: [".edit{position:relative;height:100%;display:flex;padding-bottom:70px;background-color:var(--ta-neutral-main)}.edit .image-container{display:flex;vertical-align:center}.control{border-top:1px solid var(--ta-neutral-400);background-color:var(--ta-neutral-100);padding:10px 20px;position:absolute;bottom:0;left:0;right:0}.control .item{width:20px;height:20px;border-radius:50%;padding:10px;margin:auto}.control .item.selected{background-color:var(--ta-surface-brand-primary);color:var(--ta-neutral-100)}.control .item.disabled{opacity:.5}.control .selection{border:1px solid var(--ta-neutral-400);margin:auto;padding:5px;border-radius:30px;text-align:center}.control .selection .separator{border:1px solid var(--ta-neutral-400);padding:0;width:0}.control .shape-selection{margin:5px 50px}.control .panel{margin-bottom:10px}.range{border:1px solid var(--ta-neutral-400);border-radius:20px;padding:3px 10px;margin-top:5px}.colors{text-align:center;margin:auto}.colors .color{height:24px;width:24px;border-radius:50%;margin:5px auto auto;border:1px solid var(--ta-neutral-400);color:var(--ta-neutral-100)}.colors .color.is-light{color:var(--ta-text-primary)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { _containerRef: [{
                type: ViewChild,
                args: ["containerRef"]
            }], _tuiRef: [{
                type: ViewChild,
                args: ["tuiRef"]
            }] } });

class TaTranslationFiles extends TaLazyTranslationService {
    constructor() {
        super('files');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationFiles, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationFiles, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaTranslationFiles, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });

/** Extension d'une pièce : lue sur `filename` en priorité, l'URL pouvant être signée ou sans extension. */
const getDocumentExtension = (document) => {
    if (!document) {
        return EFileExtension.Unknown;
    }
    const fromName = document.filename ? getFileExtension(document.filename) : EFileExtension.Unknown;
    return fromName !== EFileExtension.Unknown ? fromName : getFileExtension(document.url);
};

class ExcelViewerComponent extends TaAbstractComponent {
    constructor() {
        super();
        this.file = input.required();
        //this.requestState.asked();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ExcelViewerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ExcelViewerComponent, isStandalone: true, selector: "ta-excel-viewer", inputs: { file: { classPropertyName: "file", publicName: "file", isSignal: true, isRequired: true, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  @if (this.file()) {\n    <ngx-doc-viewer\n      [url]=\"this.file().url\"\n      viewer=\"office\"\n      style=\"width: 100%; height: 100%\"\n      (loaded)=\"this.requestState.completed()\"\n    ></ngx-doc-viewer>\n  }\n</ta-loader>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: NgxDocViewerModule }, { kind: "component", type: i1.NgxDocViewerComponent, selector: "ngx-doc-viewer", inputs: ["url", "queryParams", "viewerUrl", "googleCheckInterval", "googleMaxChecks", "disableContent", "googleCheckContentLoaded", "viewer", "overrideLocalhost"], outputs: ["loaded"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ExcelViewerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-excel-viewer', standalone: true, imports: [NgxDocViewerModule, LoaderComponent], template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  @if (this.file()) {\n    <ngx-doc-viewer\n      [url]=\"this.file().url\"\n      viewer=\"office\"\n      style=\"width: 100%; height: 100%\"\n      (loaded)=\"this.requestState.completed()\"\n    ></ngx-doc-viewer>\n  }\n</ta-loader>\n" }]
        }], ctorParameters: () => [] });

class ImageViewerComponent {
    constructor() {
        this.file = input.required();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ImageViewerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: ImageViewerComponent, isStandalone: true, selector: "ta-image-viewer", inputs: { file: { classPropertyName: "file", publicName: "file", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: "@if (this.file()) {\n  <div class=\"image-viewer\">\n    <img [src]=\"this.file().url\" [alt]=\"this.file().url\" />\n  </div>\n}\n", styles: [":host{display:block;height:100%}:host-context(.lightbox-stage) .image-viewer{background-color:transparent}.image-viewer{width:100%;height:100%;display:grid;place-items:center;background-color:var(--ta-surface-secondary);overflow:hidden}.image-viewer img{max-width:100%;max-height:100%;min-width:0;min-height:0;width:auto;height:auto;object-fit:contain;display:block}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ImageViewerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-image-viewer', standalone: true, template: "@if (this.file()) {\n  <div class=\"image-viewer\">\n    <img [src]=\"this.file().url\" [alt]=\"this.file().url\" />\n  </div>\n}\n", styles: [":host{display:block;height:100%}:host-context(.lightbox-stage) .image-viewer{background-color:transparent}.image-viewer{width:100%;height:100%;display:grid;place-items:center;background-color:var(--ta-surface-secondary);overflow:hidden}.image-viewer img{max-width:100%;max-height:100%;min-width:0;min-height:0;width:auto;height:auto;object-fit:contain;display:block}\n"] }]
        }] });

class PdfViewerComponent extends TaAbstractComponent {
    constructor() {
        super();
        this.file = input.required();
        // this.requestState.asked();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PdfViewerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: PdfViewerComponent, isStandalone: true, selector: "ta-pdf-viewer", inputs: { file: { classPropertyName: "file", publicName: "file", isSignal: true, isRequired: true, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <ngx-doc-viewer\n    [url]=\"this.file().url\"\n    viewer=\"pdf\"\n    style=\"width: 100%; height: 100%\"\n    (loaded)=\"this.requestState.completed()\"\n  ></ngx-doc-viewer>\n</ta-loader>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: NgxDocViewerModule }, { kind: "component", type: i1.NgxDocViewerComponent, selector: "ngx-doc-viewer", inputs: ["url", "queryParams", "viewerUrl", "googleCheckInterval", "googleMaxChecks", "disableContent", "googleCheckContentLoaded", "viewer", "overrideLocalhost"], outputs: ["loaded"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PdfViewerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-pdf-viewer', standalone: true, imports: [NgxDocViewerModule, LoaderComponent], template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <ngx-doc-viewer\n    [url]=\"this.file().url\"\n    viewer=\"pdf\"\n    style=\"width: 100%; height: 100%\"\n    (loaded)=\"this.requestState.completed()\"\n  ></ngx-doc-viewer>\n</ta-loader>\n" }]
        }], ctorParameters: () => [] });

class WordViewerComponent extends TaAbstractComponent {
    constructor() {
        super();
        this.file = input.required();
        //this.requestState.asked();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: WordViewerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.2.14", type: WordViewerComponent, isStandalone: true, selector: "ta-word-viewer", inputs: { file: { classPropertyName: "file", publicName: "file", isSignal: true, isRequired: true, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <ngx-doc-viewer\n    [url]=\"this.file().url\"\n    viewer=\"google\"\n    style=\"width: 100%; height: 100%\"\n    (loaded)=\"this.requestState.completed()\"\n  ></ngx-doc-viewer>\n</ta-loader>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: NgxDocViewerModule }, { kind: "component", type: i1.NgxDocViewerComponent, selector: "ngx-doc-viewer", inputs: ["url", "queryParams", "viewerUrl", "googleCheckInterval", "googleMaxChecks", "disableContent", "googleCheckContentLoaded", "viewer", "overrideLocalhost"], outputs: ["loaded"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: WordViewerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-word-viewer', standalone: true, imports: [NgxDocViewerModule, LoaderComponent], template: "<ta-loader [isLoading]=\"this.requestState.isLoading()\">\n  <ngx-doc-viewer\n    [url]=\"this.file().url\"\n    viewer=\"google\"\n    style=\"width: 100%; height: 100%\"\n    (loaded)=\"this.requestState.completed()\"\n  ></ngx-doc-viewer>\n</ta-loader>\n" }]
        }], ctorParameters: () => [] });

class FilesPreviewComponent extends TaBaseComponent {
    constructor() {
        super();
        this.initial = input.required();
        this.getDocumentExtension = getDocumentExtension;
        this.EFileExtension = EFileExtension;
        TaTranslationFiles.getInstance();
    }
    download() {
        downloadFile(this.initial().url);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilesPreviewComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FilesPreviewComponent, isStandalone: true, selector: "ta-files-preview", inputs: { initial: { classPropertyName: "initial", publicName: "initial", isSignal: true, isRequired: true, transformFunction: null } }, usesInheritance: true, ngImport: i0, template: "<div class=\"preview-layout\">\n  <div class=\"preview-header\">\n    @if (this.initial().filename; as filename) {\n      <ta-title [level]=\"'3'\">{{ filename }}</ta-title>\n    }\n    <div class=\"flex-start g-space-sm align-center\">\n      @if (this.initial().uploadedDate; as uploadedDate) {\n        <ta-text>{{ uploadedDate | date: 'shortDate' }}</ta-text>\n      }\n      @if (this.initial().size; as size) {\n        <ta-megaoctet [octet]=\"size\"></ta-megaoctet>\n      }\n    </div>\n  </div>\n\n  <div class=\"preview-body\">\n    @switch (this.getDocumentExtension(this.initial())) {\n      @case (this.EFileExtension.Image) {\n        <ta-image-viewer [file]=\"this.initial()\"></ta-image-viewer>\n      }\n      @case (this.EFileExtension.PDF) {\n        <ta-pdf-viewer [file]=\"this.initial()\"></ta-pdf-viewer>\n      }\n      @case (this.EFileExtension.Excel) {\n        <ta-excel-viewer [file]=\"this.initial()\"></ta-excel-viewer>\n      }\n      @case (this.EFileExtension.Word) {\n        <ta-word-viewer [file]=\"this.initial()\"></ta-word-viewer>\n      }\n      @default {\n        {{ 'files.slide.no-viewer' | translate }}\n      }\n    }\n  </div>\n\n  <div class=\"preview-footer\">\n    <ta-button\n      icon=\"download\"\n      (action)=\"this.download()\"\n      [options]=\"this.breakpoints.isMobile ? { circular: 'small' } : {}\"\n    >\n      @if (!this.breakpoints.isMobile) {\n        {{ 'files.slide.download' | translate }}\n      }\n    </ta-button>\n  </div>\n</div>\n", styles: [":host{display:block;position:relative}.preview-layout{position:absolute;inset:0;display:grid;grid-template-rows:auto 1fr auto}.preview-header{display:flex;flex-direction:column;gap:var(--ta-space-sm);padding:var(--ta-space-md);border-bottom:1px solid var(--ta-border-secondary)}.preview-body{overflow:hidden;min-height:0}.preview-body ta-image-viewer,.preview-body ta-pdf-viewer,.preview-body ta-word-viewer,.preview-body ta-excel-viewer{height:100%;width:100%;display:block}.preview-footer{display:flex;align-items:center;padding:var(--ta-space-md);border-top:1px solid var(--ta-border-secondary)}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "pipe", type: i1$1.DatePipe, name: "date" }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$2.TranslatePipe, name: "translate" }, { kind: "component", type: ButtonComponent, selector: "ta-button", inputs: ["state", "type", "size", "icon", "options", "stopPropagationActivation"], outputs: ["action"] }, { kind: "component", type: MegaoctetComponent, selector: "ta-megaoctet", inputs: ["octet", "icon"] }, { kind: "component", type: ImageViewerComponent, selector: "ta-image-viewer", inputs: ["file"] }, { kind: "component", type: PdfViewerComponent, selector: "ta-pdf-viewer", inputs: ["file"] }, { kind: "component", type: ExcelViewerComponent, selector: "ta-excel-viewer", inputs: ["file"] }, { kind: "component", type: WordViewerComponent, selector: "ta-word-viewer", inputs: ["file"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FilesPreviewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-files-preview', standalone: true, imports: [
                        CommonModule,
                        TranslateModule,
                        ButtonComponent,
                        MegaoctetComponent,
                        ImageViewerComponent,
                        PdfViewerComponent,
                        ExcelViewerComponent,
                        WordViewerComponent,
                        TitleComponent,
                        TextComponent,
                    ], template: "<div class=\"preview-layout\">\n  <div class=\"preview-header\">\n    @if (this.initial().filename; as filename) {\n      <ta-title [level]=\"'3'\">{{ filename }}</ta-title>\n    }\n    <div class=\"flex-start g-space-sm align-center\">\n      @if (this.initial().uploadedDate; as uploadedDate) {\n        <ta-text>{{ uploadedDate | date: 'shortDate' }}</ta-text>\n      }\n      @if (this.initial().size; as size) {\n        <ta-megaoctet [octet]=\"size\"></ta-megaoctet>\n      }\n    </div>\n  </div>\n\n  <div class=\"preview-body\">\n    @switch (this.getDocumentExtension(this.initial())) {\n      @case (this.EFileExtension.Image) {\n        <ta-image-viewer [file]=\"this.initial()\"></ta-image-viewer>\n      }\n      @case (this.EFileExtension.PDF) {\n        <ta-pdf-viewer [file]=\"this.initial()\"></ta-pdf-viewer>\n      }\n      @case (this.EFileExtension.Excel) {\n        <ta-excel-viewer [file]=\"this.initial()\"></ta-excel-viewer>\n      }\n      @case (this.EFileExtension.Word) {\n        <ta-word-viewer [file]=\"this.initial()\"></ta-word-viewer>\n      }\n      @default {\n        {{ 'files.slide.no-viewer' | translate }}\n      }\n    }\n  </div>\n\n  <div class=\"preview-footer\">\n    <ta-button\n      icon=\"download\"\n      (action)=\"this.download()\"\n      [options]=\"this.breakpoints.isMobile ? { circular: 'small' } : {}\"\n    >\n      @if (!this.breakpoints.isMobile) {\n        {{ 'files.slide.download' | translate }}\n      }\n    </ta-button>\n  </div>\n</div>\n", styles: [":host{display:block;position:relative}.preview-layout{position:absolute;inset:0;display:grid;grid-template-rows:auto 1fr auto}.preview-header{display:flex;flex-direction:column;gap:var(--ta-space-sm);padding:var(--ta-space-md);border-bottom:1px solid var(--ta-border-secondary)}.preview-body{overflow:hidden;min-height:0}.preview-body ta-image-viewer,.preview-body ta-pdf-viewer,.preview-body ta-word-viewer,.preview-body ta-excel-viewer{height:100%;width:100%;display:block}.preview-footer{display:flex;align-items:center;padding:var(--ta-space-md);border-top:1px solid var(--ta-border-secondary)}\n"] }]
        }], ctorParameters: () => [] });

/** Visionneuse plein écran ; avec `documents`, navigation en galerie. */
class PreviewModal extends TaBaseComponent {
    constructor() {
        super();
        this.open = input.required();
        this.initial = input(null);
        /** Documents parcourables ; vide, seul `initial` est affiché. */
        this.documents = input(null);
        /** Surtitre de contexte (bien, dossier, personne). */
        this.overline = input('');
        this.closeEvent = output();
        this.EFileExtension = EFileExtension;
        this.getDocumentExtension = getDocumentExtension;
        /** Position courante dans la pellicule. */
        this.index = signal(0);
        this.items = computed(() => {
            const documents = this.documents();
            if (documents?.length)
                return documents;
            const single = this.initial();
            return single ? [single] : [];
        });
        this.current = computed(() => this.items()[this.index()] ?? null);
        this.hasGallery = computed(() => this.items().length > 1);
        TaTranslationFiles.getInstance();
    }
    /** Recale la galerie sur `initial` à chaque ouverture (pas d'effet : écriture de signal interdite en Angular 18). */
    ngOnChanges(changes) {
        if (!changes['open'] && !changes['initial'])
            return;
        if (!this.open())
            return;
        const target = this.initial();
        const found = target ? this.items().findIndex(item => item.url === target.url) : -1;
        this.index.set(found > -1 ? found : 0);
    }
    select(index) {
        const total = this.items().length;
        if (!total)
            return;
        this.index.set((index + total) % total);
    }
    previous() {
        this.select(this.index() - 1);
    }
    next() {
        this.select(this.index() + 1);
    }
    download() {
        const current = this.current();
        if (current)
            downloadFile(current.url);
    }
    close() {
        this.closeEvent.emit();
    }
    onKeydown(event) {
        if (!this.open())
            return;
        if (event.key === 'Escape') {
            this.close();
            return;
        }
        if (!this.hasGallery())
            return;
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            this.previous();
        }
        else if (event.key === 'ArrowRight') {
            event.preventDefault();
            this.next();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PreviewModal, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: PreviewModal, isStandalone: true, selector: "ta-files-preview-modal", inputs: { open: { classPropertyName: "open", publicName: "open", isSignal: true, isRequired: true, transformFunction: null }, initial: { classPropertyName: "initial", publicName: "initial", isSignal: true, isRequired: false, transformFunction: null }, documents: { classPropertyName: "documents", publicName: "documents", isSignal: true, isRequired: false, transformFunction: null }, overline: { classPropertyName: "overline", publicName: "overline", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { closeEvent: "closeEvent" }, host: { listeners: { "document:keydown": "this.onKeydown($event)" } }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "@if (this.open()) {\n  <div class=\"lightbox\">\n    <div class=\"lightbox-inner\">\n      <header class=\"lightbox-header\">\n        <div class=\"lightbox-heading\">\n          @if (this.overline()) {\n            <ta-overline size=\"sm\" tone=\"highlight\">{{ this.overline() }}</ta-overline>\n          }\n          <span class=\"lightbox-title\">{{ this.current()?.filename }}</span>\n        </div>\n\n        <div class=\"lightbox-actions\">\n          @if (this.hasGallery()) {\n            <span class=\"lightbox-counter\">{{ this.index() + 1 }} / {{ this.items().length }}</span>\n          }\n          <button\n            type=\"button\"\n            class=\"lightbox-button\"\n            [attr.aria-label]=\"'files.slide.download' | translate\"\n            (click)=\"this.download()\"\n          >\n            <ta-font-icon name=\"download\"></ta-font-icon>\n          </button>\n          <button\n            type=\"button\"\n            class=\"lightbox-button lightbox-button--close\"\n            [attr.aria-label]=\"'files.preview.close' | translate\"\n            (click)=\"this.close()\"\n          >\n            <ta-font-icon name=\"close\"></ta-font-icon>\n          </button>\n        </div>\n      </header>\n\n      <div class=\"lightbox-stage\">\n        @if (this.current(); as document) {\n          @switch (this.getDocumentExtension(document)) {\n            @case (this.EFileExtension.Image) {\n              <ta-image-viewer [file]=\"document\"></ta-image-viewer>\n            }\n            @case (this.EFileExtension.PDF) {\n              <ta-pdf-viewer [file]=\"document\"></ta-pdf-viewer>\n            }\n            @case (this.EFileExtension.Excel) {\n              <ta-excel-viewer [file]=\"document\"></ta-excel-viewer>\n            }\n            @case (this.EFileExtension.Word) {\n              <ta-word-viewer [file]=\"document\"></ta-word-viewer>\n            }\n            @default {\n              <span class=\"lightbox-no-viewer\">{{ 'files.slide.no-viewer' | translate }}</span>\n            }\n          }\n        }\n\n        @if (this.hasGallery()) {\n          <button\n            type=\"button\"\n            class=\"lightbox-nav lightbox-nav--prev\"\n            [attr.aria-label]=\"'files.preview.previous' | translate\"\n            (click)=\"this.previous()\"\n          >\n            <ta-font-icon name=\"chevron_left\"></ta-font-icon>\n          </button>\n          <button\n            type=\"button\"\n            class=\"lightbox-nav lightbox-nav--next\"\n            [attr.aria-label]=\"'files.preview.next' | translate\"\n            (click)=\"this.next()\"\n          >\n            <ta-font-icon name=\"chevron_right\"></ta-font-icon>\n          </button>\n        }\n      </div>\n\n      <div class=\"lightbox-meta\">\n        <span class=\"lightbox-caption\">{{ this.current()?.description }}</span>\n\n        <span class=\"lightbox-hints\">\n          @if (this.hasGallery()) {\n            <kbd class=\"lightbox-key\">&larr;</kbd>\n            <kbd class=\"lightbox-key\">&rarr;</kbd>\n            <span class=\"lightbox-hint-label\">{{ 'files.preview.hint_browse' | translate }}</span>\n          }\n          <kbd class=\"lightbox-key\">Esc</kbd>\n          <span class=\"lightbox-hint-label\">{{ 'files.preview.hint_close' | translate }}</span>\n        </span>\n      </div>\n\n      @if (this.hasGallery()) {\n        <div class=\"lightbox-film\">\n          @for (item of this.items(); track item.url) {\n            <button\n              type=\"button\"\n              class=\"lightbox-thumb\"\n              [class.active]=\"$index === this.index()\"\n              (click)=\"this.select($index)\"\n            >\n              @if (this.getDocumentExtension(item) === this.EFileExtension.Image) {\n                <img [src]=\"item.url\" [alt]=\"item.filename ?? ''\" loading=\"lazy\" />\n              }\n              <span class=\"lightbox-thumb-label\">{{ item.filename }}</span>\n            </button>\n          }\n        </div>\n      }\n    </div>\n  </div>\n}\n", styles: [".lightbox{display:flex;position:fixed;inset:0;z-index:1200;background:var(--ta-components-lightbox-background);padding:var(--ta-space-lg);overflow:auto}.lightbox-inner{display:flex;flex-direction:column;gap:var(--ta-space-md);width:100%;max-width:var(--ta-components-lightbox-max-width);margin:0 auto;min-height:0}.lightbox-header{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;gap:var(--ta-space-md);flex-shrink:0}.lightbox-heading{display:flex;flex-direction:column;gap:var(--ta-space-xs);min-width:0}.lightbox-title{font-family:var(--ta-font-display-family);font-size:var(--ta-font-key-md-default-size);font-weight:var(--ta-font-key-md-bold-weight);line-height:1.2;color:var(--ta-text-invert-primary);overflow-wrap:anywhere}.lightbox-actions{display:flex;align-items:center;gap:var(--ta-space-sm);flex-shrink:0}.lightbox-counter{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-invert-secondary);margin-right:var(--ta-space-xs)}.lightbox-button{display:flex;align-items:center;justify-content:center;width:var(--ta-components-lightbox-control-size);height:var(--ta-components-lightbox-control-size);border:1px solid var(--ta-surface-veil-md);border-radius:var(--ta-radius-rounded);background:var(--ta-surface-veil-sm);color:var(--ta-text-invert-primary);cursor:pointer;transition:background var(--ta-transition-fast)}.lightbox-button:hover{background:var(--ta-surface-veil-md)}.lightbox-button--close{background:var(--ta-neutral-white);border-color:var(--ta-neutral-white);color:var(--ta-text-brand-primary)}.lightbox-button--close:hover{background:var(--ta-neutral-200)}.lightbox-stage{position:relative;flex:1;min-height:0;border-radius:var(--ta-radius-label);overflow:hidden;background:var(--ta-surface-veil-xs)}.lightbox-stage ta-image-viewer,.lightbox-stage ta-pdf-viewer,.lightbox-stage ta-word-viewer,.lightbox-stage ta-excel-viewer{display:block;width:100%;height:100%}.lightbox-no-viewer{display:grid;place-items:center;height:100%;color:var(--ta-text-invert-secondary)}.lightbox-nav{display:flex;align-items:center;justify-content:center;position:absolute;top:50%;transform:translateY(-50%);width:var(--ta-components-lightbox-control-size);height:var(--ta-components-lightbox-control-size);border:1px solid var(--ta-surface-veil-md);border-radius:50%;background:var(--ta-components-lightbox-scrim);color:var(--ta-text-invert-primary);cursor:pointer;transition:background var(--ta-transition-fast)}.lightbox-nav:hover{background:var(--ta-components-lightbox-scrim-hover)}.lightbox-nav--prev{left:var(--ta-space-md)}.lightbox-nav--next{right:var(--ta-space-md)}.lightbox-meta{display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:var(--ta-space-md);flex-wrap:wrap;flex-shrink:0}.lightbox-caption{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);color:var(--ta-text-invert-primary);min-width:0}.lightbox-hints{display:flex;align-items:center;gap:var(--ta-space-xs);flex-shrink:0}.lightbox-key{display:inline-flex;align-items:center;justify-content:center;min-width:var(--ta-components-lightbox-key-size);height:var(--ta-components-lightbox-key-size);padding:0 var(--ta-space-xs);border:1px solid var(--ta-surface-veil-md);border-radius:var(--ta-radius-minimal);background:var(--ta-surface-veil-sm);font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight);color:var(--ta-text-invert-primary)}.lightbox-hint-label{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-invert-secondary);margin-right:var(--ta-space-sm)}.lightbox-film{display:flex;flex-direction:row;gap:var(--ta-space-sm);overflow-x:auto;padding-bottom:var(--ta-space-xs);flex-shrink:0}.lightbox-thumb{position:relative;flex:0 0 auto;width:var(--ta-components-lightbox-thumb-width);height:var(--ta-components-lightbox-thumb-height);padding:0;border:2px solid transparent;border-radius:var(--ta-radius-rounded);background:var(--ta-surface-veil-sm);overflow:hidden;cursor:pointer;transition:border-color var(--ta-transition-fast)}.lightbox-thumb img{display:block;width:100%;height:100%;object-fit:cover}.lightbox-thumb:hover{border-color:var(--ta-surface-veil-lg)}.lightbox-thumb.active{border-color:var(--ta-surface-brand-secondary)}.lightbox-thumb.active .lightbox-thumb-label{color:var(--ta-surface-brand-secondary)}.lightbox-thumb:after{content:\"\";position:absolute;inset:auto 0 0;height:60%;background:linear-gradient(to top,var(--ta-components-lightbox-thumb-gradient),transparent);pointer-events:none}.lightbox-thumb-label{position:absolute;z-index:1;left:var(--ta-space-sm);right:var(--ta-space-xs);bottom:var(--ta-space-xs);font-family:var(--ta-font-display-family);font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-bold-weight);line-height:1;text-transform:uppercase;text-align:left;color:var(--ta-text-invert-primary);text-shadow:var(--ta-components-lightbox-text-shadow);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media screen and (max-width: 576px){.lightbox{padding:var(--ta-space-md)}.lightbox-nav{width:var(--ta-components-lightbox-control-size-mobile);height:var(--ta-components-lightbox-control-size-mobile)}.lightbox-hints{display:none}}\n"], dependencies: [{ kind: "component", type: ExcelViewerComponent, selector: "ta-excel-viewer", inputs: ["file"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: ImageViewerComponent, selector: "ta-image-viewer", inputs: ["file"] }, { kind: "component", type: OverlineComponent, selector: "ta-overline", inputs: ["tone", "size"] }, { kind: "component", type: PdfViewerComponent, selector: "ta-pdf-viewer", inputs: ["file"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$2.TranslatePipe, name: "translate" }, { kind: "component", type: WordViewerComponent, selector: "ta-word-viewer", inputs: ["file"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PreviewModal, decorators: [{
            type: Component,
            args: [{ selector: 'ta-files-preview-modal', standalone: true, imports: [
                        ExcelViewerComponent,
                        FontIconComponent,
                        ImageViewerComponent,
                        OverlineComponent,
                        PdfViewerComponent,
                        TranslateModule,
                        WordViewerComponent,
                    ], host: {
                        '(document:keydown)': 'this.onKeydown($event)',
                    }, template: "@if (this.open()) {\n  <div class=\"lightbox\">\n    <div class=\"lightbox-inner\">\n      <header class=\"lightbox-header\">\n        <div class=\"lightbox-heading\">\n          @if (this.overline()) {\n            <ta-overline size=\"sm\" tone=\"highlight\">{{ this.overline() }}</ta-overline>\n          }\n          <span class=\"lightbox-title\">{{ this.current()?.filename }}</span>\n        </div>\n\n        <div class=\"lightbox-actions\">\n          @if (this.hasGallery()) {\n            <span class=\"lightbox-counter\">{{ this.index() + 1 }} / {{ this.items().length }}</span>\n          }\n          <button\n            type=\"button\"\n            class=\"lightbox-button\"\n            [attr.aria-label]=\"'files.slide.download' | translate\"\n            (click)=\"this.download()\"\n          >\n            <ta-font-icon name=\"download\"></ta-font-icon>\n          </button>\n          <button\n            type=\"button\"\n            class=\"lightbox-button lightbox-button--close\"\n            [attr.aria-label]=\"'files.preview.close' | translate\"\n            (click)=\"this.close()\"\n          >\n            <ta-font-icon name=\"close\"></ta-font-icon>\n          </button>\n        </div>\n      </header>\n\n      <div class=\"lightbox-stage\">\n        @if (this.current(); as document) {\n          @switch (this.getDocumentExtension(document)) {\n            @case (this.EFileExtension.Image) {\n              <ta-image-viewer [file]=\"document\"></ta-image-viewer>\n            }\n            @case (this.EFileExtension.PDF) {\n              <ta-pdf-viewer [file]=\"document\"></ta-pdf-viewer>\n            }\n            @case (this.EFileExtension.Excel) {\n              <ta-excel-viewer [file]=\"document\"></ta-excel-viewer>\n            }\n            @case (this.EFileExtension.Word) {\n              <ta-word-viewer [file]=\"document\"></ta-word-viewer>\n            }\n            @default {\n              <span class=\"lightbox-no-viewer\">{{ 'files.slide.no-viewer' | translate }}</span>\n            }\n          }\n        }\n\n        @if (this.hasGallery()) {\n          <button\n            type=\"button\"\n            class=\"lightbox-nav lightbox-nav--prev\"\n            [attr.aria-label]=\"'files.preview.previous' | translate\"\n            (click)=\"this.previous()\"\n          >\n            <ta-font-icon name=\"chevron_left\"></ta-font-icon>\n          </button>\n          <button\n            type=\"button\"\n            class=\"lightbox-nav lightbox-nav--next\"\n            [attr.aria-label]=\"'files.preview.next' | translate\"\n            (click)=\"this.next()\"\n          >\n            <ta-font-icon name=\"chevron_right\"></ta-font-icon>\n          </button>\n        }\n      </div>\n\n      <div class=\"lightbox-meta\">\n        <span class=\"lightbox-caption\">{{ this.current()?.description }}</span>\n\n        <span class=\"lightbox-hints\">\n          @if (this.hasGallery()) {\n            <kbd class=\"lightbox-key\">&larr;</kbd>\n            <kbd class=\"lightbox-key\">&rarr;</kbd>\n            <span class=\"lightbox-hint-label\">{{ 'files.preview.hint_browse' | translate }}</span>\n          }\n          <kbd class=\"lightbox-key\">Esc</kbd>\n          <span class=\"lightbox-hint-label\">{{ 'files.preview.hint_close' | translate }}</span>\n        </span>\n      </div>\n\n      @if (this.hasGallery()) {\n        <div class=\"lightbox-film\">\n          @for (item of this.items(); track item.url) {\n            <button\n              type=\"button\"\n              class=\"lightbox-thumb\"\n              [class.active]=\"$index === this.index()\"\n              (click)=\"this.select($index)\"\n            >\n              @if (this.getDocumentExtension(item) === this.EFileExtension.Image) {\n                <img [src]=\"item.url\" [alt]=\"item.filename ?? ''\" loading=\"lazy\" />\n              }\n              <span class=\"lightbox-thumb-label\">{{ item.filename }}</span>\n            </button>\n          }\n        </div>\n      }\n    </div>\n  </div>\n}\n", styles: [".lightbox{display:flex;position:fixed;inset:0;z-index:1200;background:var(--ta-components-lightbox-background);padding:var(--ta-space-lg);overflow:auto}.lightbox-inner{display:flex;flex-direction:column;gap:var(--ta-space-md);width:100%;max-width:var(--ta-components-lightbox-max-width);margin:0 auto;min-height:0}.lightbox-header{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-start;gap:var(--ta-space-md);flex-shrink:0}.lightbox-heading{display:flex;flex-direction:column;gap:var(--ta-space-xs);min-width:0}.lightbox-title{font-family:var(--ta-font-display-family);font-size:var(--ta-font-key-md-default-size);font-weight:var(--ta-font-key-md-bold-weight);line-height:1.2;color:var(--ta-text-invert-primary);overflow-wrap:anywhere}.lightbox-actions{display:flex;align-items:center;gap:var(--ta-space-sm);flex-shrink:0}.lightbox-counter{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-invert-secondary);margin-right:var(--ta-space-xs)}.lightbox-button{display:flex;align-items:center;justify-content:center;width:var(--ta-components-lightbox-control-size);height:var(--ta-components-lightbox-control-size);border:1px solid var(--ta-surface-veil-md);border-radius:var(--ta-radius-rounded);background:var(--ta-surface-veil-sm);color:var(--ta-text-invert-primary);cursor:pointer;transition:background var(--ta-transition-fast)}.lightbox-button:hover{background:var(--ta-surface-veil-md)}.lightbox-button--close{background:var(--ta-neutral-white);border-color:var(--ta-neutral-white);color:var(--ta-text-brand-primary)}.lightbox-button--close:hover{background:var(--ta-neutral-200)}.lightbox-stage{position:relative;flex:1;min-height:0;border-radius:var(--ta-radius-label);overflow:hidden;background:var(--ta-surface-veil-xs)}.lightbox-stage ta-image-viewer,.lightbox-stage ta-pdf-viewer,.lightbox-stage ta-word-viewer,.lightbox-stage ta-excel-viewer{display:block;width:100%;height:100%}.lightbox-no-viewer{display:grid;place-items:center;height:100%;color:var(--ta-text-invert-secondary)}.lightbox-nav{display:flex;align-items:center;justify-content:center;position:absolute;top:50%;transform:translateY(-50%);width:var(--ta-components-lightbox-control-size);height:var(--ta-components-lightbox-control-size);border:1px solid var(--ta-surface-veil-md);border-radius:50%;background:var(--ta-components-lightbox-scrim);color:var(--ta-text-invert-primary);cursor:pointer;transition:background var(--ta-transition-fast)}.lightbox-nav:hover{background:var(--ta-components-lightbox-scrim-hover)}.lightbox-nav--prev{left:var(--ta-space-md)}.lightbox-nav--next{right:var(--ta-space-md)}.lightbox-meta{display:flex;flex-direction:row;justify-content:space-between;align-items:center;gap:var(--ta-space-md);flex-wrap:wrap;flex-shrink:0}.lightbox-caption{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight);color:var(--ta-text-invert-primary);min-width:0}.lightbox-hints{display:flex;align-items:center;gap:var(--ta-space-xs);flex-shrink:0}.lightbox-key{display:inline-flex;align-items:center;justify-content:center;min-width:var(--ta-components-lightbox-key-size);height:var(--ta-components-lightbox-key-size);padding:0 var(--ta-space-xs);border:1px solid var(--ta-surface-veil-md);border-radius:var(--ta-radius-minimal);background:var(--ta-surface-veil-sm);font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-default-weight);color:var(--ta-text-invert-primary)}.lightbox-hint-label{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-invert-secondary);margin-right:var(--ta-space-sm)}.lightbox-film{display:flex;flex-direction:row;gap:var(--ta-space-sm);overflow-x:auto;padding-bottom:var(--ta-space-xs);flex-shrink:0}.lightbox-thumb{position:relative;flex:0 0 auto;width:var(--ta-components-lightbox-thumb-width);height:var(--ta-components-lightbox-thumb-height);padding:0;border:2px solid transparent;border-radius:var(--ta-radius-rounded);background:var(--ta-surface-veil-sm);overflow:hidden;cursor:pointer;transition:border-color var(--ta-transition-fast)}.lightbox-thumb img{display:block;width:100%;height:100%;object-fit:cover}.lightbox-thumb:hover{border-color:var(--ta-surface-veil-lg)}.lightbox-thumb.active{border-color:var(--ta-surface-brand-secondary)}.lightbox-thumb.active .lightbox-thumb-label{color:var(--ta-surface-brand-secondary)}.lightbox-thumb:after{content:\"\";position:absolute;inset:auto 0 0;height:60%;background:linear-gradient(to top,var(--ta-components-lightbox-thumb-gradient),transparent);pointer-events:none}.lightbox-thumb-label{position:absolute;z-index:1;left:var(--ta-space-sm);right:var(--ta-space-xs);bottom:var(--ta-space-xs);font-family:var(--ta-font-display-family);font-size:var(--ta-font-body-xs-default-size);font-weight:var(--ta-font-body-xs-bold-weight);line-height:1;text-transform:uppercase;text-align:left;color:var(--ta-text-invert-primary);text-shadow:var(--ta-components-lightbox-text-shadow);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}@media screen and (max-width: 576px){.lightbox{padding:var(--ta-space-md)}.lightbox-nav{width:var(--ta-components-lightbox-control-size-mobile);height:var(--ta-components-lightbox-control-size-mobile)}.lightbox-hints{display:none}}\n"] }]
        }], ctorParameters: () => [] });

class DocumentsListComponent extends TaBaseComponent {
    constructor() {
        super(...arguments);
        this.documentsIds = input.required();
        this.emptyMessage = input("");
        this.actions = input("");
        this.defaultSelected = input([]);
        this.readonly = input(false);
        this.remove = output();
        this.checkedFilesChanged = output();
        this._documentsService = inject(TaDocumentsService);
        this._checkedFiles = [];
        this.FileType = FileType;
    }
    get documents$() {
        return this._documentsService.getDocuments$(this.documentsIds());
    }
    ngOnInit() {
        this._fetch();
    }
    ngOnChanges(changes) {
        // this._fetch();
    }
    openDocument(doc) {
        downloadFile(doc.url);
    }
    removeDocument(doc) {
        this.remove.emit(doc.id);
    }
    isChecked(doc) {
        return this._checkedFiles.find((x) => x.id === doc.id);
    }
    check(doc) {
        if (this.isChecked(doc)) {
            this._checkedFiles = this._checkedFiles.filter((x) => x.id !== doc.id);
        }
        else {
            this._checkedFiles.push({
                id: doc.id,
                name: doc.description,
                url: doc.url,
            });
        }
        this.checkedFilesChanged.emit(this._checkedFiles);
    }
    _fetch() {
        this.requestState.asked();
        this._registerSubscription(this._documentsService.fetchDocuments$(this.documentsIds()).subscribe({
            next: (documents) => {
                this._checkedFiles = documents.filter((doc) => this.defaultSelected().includes(doc.id));
            },
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        }));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DocumentsListComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: DocumentsListComponent, isStandalone: true, selector: "ta-documents-list", inputs: { documentsIds: { classPropertyName: "documentsIds", publicName: "documentsIds", isSignal: true, isRequired: true, transformFunction: null }, emptyMessage: { classPropertyName: "emptyMessage", publicName: "emptyMessage", isSignal: true, isRequired: false, transformFunction: null }, actions: { classPropertyName: "actions", publicName: "actions", isSignal: true, isRequired: false, transformFunction: null }, defaultSelected: { classPropertyName: "defaultSelected", publicName: "defaultSelected", isSignal: true, isRequired: false, transformFunction: null }, readonly: { classPropertyName: "readonly", publicName: "readonly", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { remove: "remove", checkedFilesChanged: "checkedFilesChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "@let documents = this.documents$ | async;\n<ta-loader\n  [isLoading]=\"this.requestState.isLoading()\"\n>\n  <ta-error\n    [message]=\"this.requestState.getErrorMessage()\"\n    [code]=\"this.requestState.getErrorStatus()\"\n  >\n    <ta-empty\n      [isEmpty]=\"!documents || documents.length === 0\"\n      [text]=\"this.emptyMessage()\"\n      [showMessage]=\"!!this.emptyMessage()\"\n    >\n      <div class=\"list flex-column g-space-sm\">\n        @for (doc of documents; track doc) {\n        <div>\n          <ng-container\n            [ngTemplateOutlet]=\"this.actions() !== 'select' ? defaultTemplate : selectTemplate\"\n            [ngTemplateOutletContext]=\"{ doc: doc }\"\n          ></ng-container>\n        </div>\n        }\n      </div>\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n\n<ng-template #defaultTemplate let-doc=\"doc\">\n  <div class=\"flex-row g-space-xs justify-content-between\">\n    <div class=\"align-center\">\n      <ta-font-icon name=\"doc\" size=\"xs\"></ta-font-icon>\n      <div>\n        <ta-link [underline]=\"false\" (action)=\"this.openDocument(doc)\">{{\n          doc.name\n        }}</ta-link>\n        <div class=\"extra flex-row g-space-md\">\n          <ta-time-ago [date]=\"doc.uploadedDate\"></ta-time-ago>\n          <ta-megaoctet [octet]=\"doc.size\"></ta-megaoctet>\n        </div>\n      </div>\n    </div>\n    <div class=\"cta align-content-center\">\n      @if (this.actions() === 'select') {\n      <input\n        [disabled]=\"this.readonly()\"\n        type=\"checkbox\"\n        [checked]=\"this.isChecked(doc)\"\n        (click)=\"this.check(doc)\"\n      />\n      } @else if (this.actions() === 'delete') {\n      <ta-button-tool\n        (action)=\"this.removeDocument(doc)\"\n        icon=\"delete\"\n        [size]=\"'sm'\"\n        [readonly]=\"this.readonly()\"\n      ></ta-button-tool>\n      }\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #selectTemplate let-doc=\"doc\">\n  <div\n    class=\"card-document-upload flex-row g-space-xs justify-content-between\"\n    [class.selected]=\"this.isChecked(doc)\"\n    (click)=\"this.check(doc)\"\n  >\n    <div class=\"display flex-column align-items-start\">\n      <ta-link\n        [bold]=\"true\"\n        [underline]=\"false\"\n        (click)=\"$event.stopPropagation()\"\n        (action)=\"this.openDocument(doc)\"\n      >\n        {{ doc.name }}\n      </ta-link>\n      <div class=\"flex-row g-space-md\">\n        <div class=\"flex-row align-items-center\">\n          <ta-font-icon name=\"doc\" size=\"xs\"></ta-font-icon>\n          <ta-text>\n            {{\n              \"communication.documents.file-type.\" +\n                this.FileType[doc.fileType].toLocaleLowerCase() | translate\n            }}\n          </ta-text>\n        </div>\n        <ta-megaoctet [icon]=\"true\" [octet]=\"doc.size\"></ta-megaoctet>\n      </div>\n    </div>\n    <div class=\"button align-content-center\">\n      @if (this.actions() === 'select') {\n      <input type=\"checkbox\" [checked]=\"this.isChecked(doc)\" />\n      } @else if (this.actions() === 'delete') {\n      <ta-button-tool\n        (action)=\"this.removeDocument(doc)\"\n        icon=\"delete\"\n        [size]=\"'sm'\"\n      ></ta-button-tool>\n      }\n    </div>\n  </div>\n</ng-template>\n", styles: ["ta-font-icon{color:var(--ta-icon-brand-primary)}.extra{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-tertiary)}input{width:20px;height:20px}.button{padding:var(--ta-space-sm)}.card-document-upload{padding:var(--ta-space-md);margin-right:var(--ta-space-sm)}.card-document-upload.selected{border:1px solid var(--ta-border-brand);border-radius:var(--ta-radius-rounded);background-color:var(--ta-surface-brand-tertiary)}.card-document-upload .display{gap:var(--ta-space-sm)}\n"], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: ButtonToolComponent, selector: "ta-button-tool", inputs: ["state", "type", "size", "icon", "stopPropagationActivation", "readonly"], outputs: ["action"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "variant", "isLight", "showMessage", "text", "subtitle", "emptyIcon", "iconSize"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code", "showRetry", "retryLabel"], outputs: ["retry"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: MegaoctetComponent, selector: "ta-megaoctet", inputs: ["octet", "icon"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "component", type: TimeAgoComponent, selector: "ta-time-ago", inputs: ["date", "withHours"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1$2.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DocumentsListComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-documents-list", standalone: true, imports: [
                        NgTemplateOutlet,
                        AsyncPipe,
                        ButtonToolComponent,
                        EmptyComponent,
                        ErrorComponent,
                        FontIconComponent,
                        LinkComponent,
                        LoaderComponent,
                        MegaoctetComponent,
                        TextComponent,
                        TimeAgoComponent,
                        TranslateModule,
                    ], template: "@let documents = this.documents$ | async;\n<ta-loader\n  [isLoading]=\"this.requestState.isLoading()\"\n>\n  <ta-error\n    [message]=\"this.requestState.getErrorMessage()\"\n    [code]=\"this.requestState.getErrorStatus()\"\n  >\n    <ta-empty\n      [isEmpty]=\"!documents || documents.length === 0\"\n      [text]=\"this.emptyMessage()\"\n      [showMessage]=\"!!this.emptyMessage()\"\n    >\n      <div class=\"list flex-column g-space-sm\">\n        @for (doc of documents; track doc) {\n        <div>\n          <ng-container\n            [ngTemplateOutlet]=\"this.actions() !== 'select' ? defaultTemplate : selectTemplate\"\n            [ngTemplateOutletContext]=\"{ doc: doc }\"\n          ></ng-container>\n        </div>\n        }\n      </div>\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n\n<ng-template #defaultTemplate let-doc=\"doc\">\n  <div class=\"flex-row g-space-xs justify-content-between\">\n    <div class=\"align-center\">\n      <ta-font-icon name=\"doc\" size=\"xs\"></ta-font-icon>\n      <div>\n        <ta-link [underline]=\"false\" (action)=\"this.openDocument(doc)\">{{\n          doc.name\n        }}</ta-link>\n        <div class=\"extra flex-row g-space-md\">\n          <ta-time-ago [date]=\"doc.uploadedDate\"></ta-time-ago>\n          <ta-megaoctet [octet]=\"doc.size\"></ta-megaoctet>\n        </div>\n      </div>\n    </div>\n    <div class=\"cta align-content-center\">\n      @if (this.actions() === 'select') {\n      <input\n        [disabled]=\"this.readonly()\"\n        type=\"checkbox\"\n        [checked]=\"this.isChecked(doc)\"\n        (click)=\"this.check(doc)\"\n      />\n      } @else if (this.actions() === 'delete') {\n      <ta-button-tool\n        (action)=\"this.removeDocument(doc)\"\n        icon=\"delete\"\n        [size]=\"'sm'\"\n        [readonly]=\"this.readonly()\"\n      ></ta-button-tool>\n      }\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #selectTemplate let-doc=\"doc\">\n  <div\n    class=\"card-document-upload flex-row g-space-xs justify-content-between\"\n    [class.selected]=\"this.isChecked(doc)\"\n    (click)=\"this.check(doc)\"\n  >\n    <div class=\"display flex-column align-items-start\">\n      <ta-link\n        [bold]=\"true\"\n        [underline]=\"false\"\n        (click)=\"$event.stopPropagation()\"\n        (action)=\"this.openDocument(doc)\"\n      >\n        {{ doc.name }}\n      </ta-link>\n      <div class=\"flex-row g-space-md\">\n        <div class=\"flex-row align-items-center\">\n          <ta-font-icon name=\"doc\" size=\"xs\"></ta-font-icon>\n          <ta-text>\n            {{\n              \"communication.documents.file-type.\" +\n                this.FileType[doc.fileType].toLocaleLowerCase() | translate\n            }}\n          </ta-text>\n        </div>\n        <ta-megaoctet [icon]=\"true\" [octet]=\"doc.size\"></ta-megaoctet>\n      </div>\n    </div>\n    <div class=\"button align-content-center\">\n      @if (this.actions() === 'select') {\n      <input type=\"checkbox\" [checked]=\"this.isChecked(doc)\" />\n      } @else if (this.actions() === 'delete') {\n      <ta-button-tool\n        (action)=\"this.removeDocument(doc)\"\n        icon=\"delete\"\n        [size]=\"'sm'\"\n      ></ta-button-tool>\n      }\n    </div>\n  </div>\n</ng-template>\n", styles: ["ta-font-icon{color:var(--ta-icon-brand-primary)}.extra{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-tertiary)}input{width:20px;height:20px}.button{padding:var(--ta-space-sm)}.card-document-upload{padding:var(--ta-space-md);margin-right:var(--ta-space-sm)}.card-document-upload.selected{border:1px solid var(--ta-border-brand);border-radius:var(--ta-radius-rounded);background-color:var(--ta-surface-brand-tertiary)}.card-document-upload .display{gap:var(--ta-space-sm)}\n"] }]
        }] });

/*
 * Public API Surface of files-basic
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DocumentsListComponent, ExcelViewerComponent, FileEditComponent, FileListComponent, FilesPreviewComponent, ImageViewerComponent, PdfViewerComponent, PreviewModal, TaTranslationFiles, WordViewerComponent, getDocumentExtension };
//# sourceMappingURL=ta-files-basic.mjs.map
