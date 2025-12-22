import { NgIf, NgFor, NgClass, AsyncPipe, CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, Output, Input, Component, ViewChild, inject, NgModule } from '@angular/core';
import { TaIconType, FontIconComponent, LocalIconComponent, MaterialIconComponent, TaIconsModule } from '@ta/icons';
import { BadgeComponent, CardComponent, CardContentComponent, CardCtaComponent, CardHeaderComponent, CardTagComponent, CardTitleComponent, TitleComponent, TrigramComponent, EmptyComponent, LoaderComponent, ButtonToolComponent, ErrorComponent, LinkComponent, MegaoctetComponent, TextComponent, TimeAgoComponent, TaUiModule, TaCardModule, TaContainerModule } from '@ta/ui';
import { EFileExtension, TaBaseComponent, SafePipe, StopPropagationDirective, isLight, getBlobImage, determineNewSize, downloadFile, TaDirectivePipeModule } from '@ta/utils';
import { InputSlider } from '@ta/form-model';
import ImageEditor from 'tui-image-editor';
import * as i1 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import { TaDocumentsService, FileType } from '@ta/services';
import { TranslatePipe } from '@ta/translation';

class FileCardComponent {
    constructor() {
        this.fileSelected = new EventEmitter();
        this.moreInformationSelected = new EventEmitter();
    }
    get localIcon() {
        switch (this.file.fileExtension) {
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
        return this.file.fileMetaData?.fileType?.translatedValue || null;
    }
    get userTrigram() {
        return this.file.fileMetaData?.owner?.naming?.trigram || null;
    }
    get fileSize() {
        return this.file.fileMetaData?.fileSize || null;
    }
    get fileName() {
        return this.file.fileMetaData?.fileName || null;
    }
    onHeaderClicked() {
        this.moreInformationSelected.emit(this.file);
    }
    onBodyClicked() {
        this.fileSelected.emit(this.file);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileCardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: FileCardComponent, isStandalone: true, selector: "ta-file-card", inputs: { file: "file" }, outputs: { fileSelected: "fileSelected", moreInformationSelected: "moreInformationSelected" }, ngImport: i0, template: "<ta-card>\n  <ta-card-header>\n    <ta-card-tag class=\"space-between\">\n      <ta-trigram [value]=\"this.userTrigram\"> </ta-trigram>\n      <div (click)=\"this.onHeaderClicked()\">\n        <ta-font-icon name=\"more\" size=\"xs\"></ta-font-icon>\n      </div>\n    </ta-card-tag>\n    <ta-card-title>\n      <ta-title [level]=\"4\">{{ this.fileName }}</ta-title>\n    </ta-card-title>\n  </ta-card-header>\n  <ta-card-content>\n    <div (click)=\"this.onBodyClicked()\">\n      <ta-local-icon [type]=\"this.localIcon\" size=\"md\"></ta-local-icon>\n    </div>\n  </ta-card-content>\n  <ta-card-cta>\n    <ta-badge [value]=\"this.fileType ?? ''\"> </ta-badge>\n  </ta-card-cta>\n</ta-card>\n", styles: [".title{font-size:var(--ta-font-body-md-default-size);font-weight:var(--ta-font-body-md-default-weight)}\n"], dependencies: [{ kind: "component", type: BadgeComponent, selector: "ta-badge", inputs: ["value", "type", "showClickOption", "icon"], outputs: ["clickAction"] }, { kind: "component", type: CardComponent, selector: "ta-card", inputs: ["highlight", "shadow", "fullHeight", "noContent", "directionCard", "isNew"], outputs: ["click"] }, { kind: "component", type: CardContentComponent, selector: "ta-card-content" }, { kind: "component", type: CardCtaComponent, selector: "ta-card-cta" }, { kind: "component", type: CardHeaderComponent, selector: "ta-card-header" }, { kind: "component", type: CardTagComponent, selector: "ta-card-tag" }, { kind: "component", type: CardTitleComponent, selector: "ta-card-title" }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "component", type: TitleComponent, selector: "ta-title", inputs: ["level", "isTheme", "isBold", "icon"] }, { kind: "component", type: TrigramComponent, selector: "ta-trigram", inputs: ["value", "size"] }] }); }
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
        }], propDecorators: { file: [{
                type: Input
            }], fileSelected: [{
                type: Output
            }], moreInformationSelected: [{
                type: Output
            }] } });

class FileListComponent extends TaBaseComponent {
    constructor() {
        super();
        this.files = [];
        this.canDeleteFile = false;
        this.fileSelected = new EventEmitter();
        this.moreInformationSelected = new EventEmitter();
        this.fileDeleted = new EventEmitter();
    }
    canDisplayFileType(fileType) {
        if (this.files && this.files[0])
            return this.files[0].type === fileType;
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FileListComponent, isStandalone: true, selector: "ta-files-list", inputs: { files: "files", canDeleteFile: "canDeleteFile" }, outputs: { fileSelected: "fileSelected", moreInformationSelected: "moreInformationSelected", fileDeleted: "fileDeleted" }, usesInheritance: true, ngImport: i0, template: "<ta-empty [isEmpty]=\"this.files.length === 0\">\n  @if (this.canDisplayFileType('Image')) {\n  <div class=\"files-container\">\n    @for (file of this.files; track this.trackById($index, file); let i =\n    $index) {\n    <div class=\"info-container\" (click)=\"this.onFileSelected(file, i)\">\n      @if (this.canDeleteFile) {\n      <div class=\"delete\" (click)=\"this.deleteFile(file)\" appStopPropagation>\n        <div class=\"delete-icon\">\n          <ta-font-icon type=\"sm\" name=\"close\"></ta-font-icon>\n        </div>\n      </div>\n      } @if (file.type === 'Image') {\n      <img [src]=\"file.thumbnailUrl || file.url | safe : 'url'\" />\n      } @else if (file.type === 'Document') {\n      <ta-file-card [file]=\"file\"></ta-file-card>\n      } @if (file.isLoading) {\n      <div class=\"is-loading\">\n        <ta-local-icon\n          class=\"align-middle\"\n          [rotation]=\"file.isLoading\"\n          [type]=\"this.icon.Loader\"\n          [size]=\"'xs'\"\n        ></ta-local-icon>\n      </div>\n      } @if (file.isSelected) {\n      <div class=\"is-selected\">\n        <ta-local-icon\n          class=\"align-middle\"\n          [type]=\"this.icon.Checked\"\n          [size]=\"'xs'\"\n        ></ta-local-icon>\n      </div>\n      }\n    </div>\n    }\n  </div>\n  } @if (canDisplayFileType('Document')) {\n  <div class=\"row g-2 row-cols-1 row-cols-md-2 row-cols-xl-3 mb-space-lg\">\n    @for (file of this.files; track this.trackById($index, file); let i =\n    $index) {\n    <div>\n      @if (file.type === 'Document') {\n      <ta-file-card\n        (fileSelected)=\"this.onFileSelected(file, i)\"\n        (moreInformationSelected)=\"this.onMoreInformationSelected(file)\"\n        [file]=\"file\"\n      ></ta-file-card>\n      }\n    </div>\n    }\n  </div>\n  }\n</ta-empty>\n", styles: ["img{border-radius:5px;width:100%}.files-container{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;row-gap:1em;column-gap:5%}.files-container .info-container{position:relative;width:30%;margin-top:auto;margin-bottom:auto}.files-container .info-container .delete{position:absolute;width:32px;height:32px;border-radius:32px;top:4px;right:4px;background:var(--ta-neutral-50)}.files-container .info-container .delete .delete-icon{width:fit-content;display:block;height:fit-content;margin:6px auto auto}.files-container .info-container .is-loading,.files-container .info-container .is-selected{width:100%;height:100%;opacity:.5;position:absolute;inset:0;background-color:var(--ta-neutral-100)}.files-container .info-container .is-loading app-local-icon,.files-container .info-container .is-selected app-local-icon{position:relative;transform:translateY(-50%);top:40%}\n"], dependencies: [{ kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: FileCardComponent, selector: "ta-file-card", inputs: ["file"], outputs: ["fileSelected", "moreInformationSelected"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LocalIconComponent, selector: "ta-local-icon", inputs: ["type", "size", "rotation"] }, { kind: "pipe", type: SafePipe, name: "safe" }, { kind: "directive", type: StopPropagationDirective, selector: "[appStopPropagation]", inputs: ["stopPropagationActivation"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileListComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-files-list", standalone: true, imports: [
                        NgIf,
                        NgFor,
                        EmptyComponent,
                        FileCardComponent,
                        FontIconComponent,
                        LocalIconComponent,
                        SafePipe,
                        StopPropagationDirective,
                    ], template: "<ta-empty [isEmpty]=\"this.files.length === 0\">\n  @if (this.canDisplayFileType('Image')) {\n  <div class=\"files-container\">\n    @for (file of this.files; track this.trackById($index, file); let i =\n    $index) {\n    <div class=\"info-container\" (click)=\"this.onFileSelected(file, i)\">\n      @if (this.canDeleteFile) {\n      <div class=\"delete\" (click)=\"this.deleteFile(file)\" appStopPropagation>\n        <div class=\"delete-icon\">\n          <ta-font-icon type=\"sm\" name=\"close\"></ta-font-icon>\n        </div>\n      </div>\n      } @if (file.type === 'Image') {\n      <img [src]=\"file.thumbnailUrl || file.url | safe : 'url'\" />\n      } @else if (file.type === 'Document') {\n      <ta-file-card [file]=\"file\"></ta-file-card>\n      } @if (file.isLoading) {\n      <div class=\"is-loading\">\n        <ta-local-icon\n          class=\"align-middle\"\n          [rotation]=\"file.isLoading\"\n          [type]=\"this.icon.Loader\"\n          [size]=\"'xs'\"\n        ></ta-local-icon>\n      </div>\n      } @if (file.isSelected) {\n      <div class=\"is-selected\">\n        <ta-local-icon\n          class=\"align-middle\"\n          [type]=\"this.icon.Checked\"\n          [size]=\"'xs'\"\n        ></ta-local-icon>\n      </div>\n      }\n    </div>\n    }\n  </div>\n  } @if (canDisplayFileType('Document')) {\n  <div class=\"row g-2 row-cols-1 row-cols-md-2 row-cols-xl-3 mb-space-lg\">\n    @for (file of this.files; track this.trackById($index, file); let i =\n    $index) {\n    <div>\n      @if (file.type === 'Document') {\n      <ta-file-card\n        (fileSelected)=\"this.onFileSelected(file, i)\"\n        (moreInformationSelected)=\"this.onMoreInformationSelected(file)\"\n        [file]=\"file\"\n      ></ta-file-card>\n      }\n    </div>\n    }\n  </div>\n  }\n</ta-empty>\n", styles: ["img{border-radius:5px;width:100%}.files-container{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:flex-start;row-gap:1em;column-gap:5%}.files-container .info-container{position:relative;width:30%;margin-top:auto;margin-bottom:auto}.files-container .info-container .delete{position:absolute;width:32px;height:32px;border-radius:32px;top:4px;right:4px;background:var(--ta-neutral-50)}.files-container .info-container .delete .delete-icon{width:fit-content;display:block;height:fit-content;margin:6px auto auto}.files-container .info-container .is-loading,.files-container .info-container .is-selected{width:100%;height:100%;opacity:.5;position:absolute;inset:0;background-color:var(--ta-neutral-100)}.files-container .info-container .is-loading app-local-icon,.files-container .info-container .is-selected app-local-icon{position:relative;transform:translateY(-50%);top:40%}\n"] }]
        }], ctorParameters: () => [], propDecorators: { files: [{
                type: Input
            }], canDeleteFile: [{
                type: Input
            }], fileSelected: [{
                type: Output
            }], moreInformationSelected: [{
                type: Output
            }], fileDeleted: [{
                type: Output
            }] } });

class FileEditComponent extends TaBaseComponent {
    constructor() {
        super();
        this.savedImage = new EventEmitter();
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
        this.slider.changeValue$.subscribe((value) => this.changeBrushSize(value ?? 0));
        window.addEventListener("keyup", this.keyPress);
    }
    ngOnInit() {
        if (this.saveImage$) {
            this._registerSubscription(this.saveImage$.subscribe(() => {
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
        const crop = await this.tuiImageEditor.loadImageFromURL(this.imagePath, "default");
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
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: FileEditComponent, isStandalone: true, selector: "ta-files-edit", inputs: { imagePath: "imagePath", saveImage$: "saveImage$" }, outputs: { savedImage: "savedImage" }, viewQueries: [{ propertyName: "_containerRef", first: true, predicate: ["containerRef"], descendants: true }, { propertyName: "_tuiRef", first: true, predicate: ["tuiRef"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"edit\" #containerRef>\n  <div\n    #tuiRef\n    [style.height]=\"this.getHeight()\"\n    [style.width]=\"this.getWidth()\"\n    class=\"m-a image-container\"\n  ></div>\n\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <div class=\"control\">\n      @if (this.showPanel()) {\n      <div class=\"panel\">\n        @if (this.selection === 'line') {\n        <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n        } @else if (this.selection === 'shape') {\n        <div class=\"row g-0 shape-selection\">\n          <div class=\"col\" (click)=\"this.changeShapeSelection('rect')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'rect' }\"\n            >\n              <ta-material-icon type=\"sm\"\n                >check_box_outline_blank</ta-material-icon\n              >\n            </div>\n          </div>\n          <div class=\"col\" (click)=\"this.changeShapeSelection('triangle')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'triangle' }\"\n            >\n              <ta-material-icon type=\"sm\">change_history</ta-material-icon>\n            </div>\n          </div>\n          <div class=\"col\" (click)=\"this.changeShapeSelection('circle')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'circle' }\"\n            >\n              <ta-material-icon type=\"sm\">circle</ta-material-icon>\n            </div>\n          </div>\n          <div class=\"col\" (click)=\"this.changeShapeSelection('line')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'line' }\"\n            >\n              <ta-material-icon type=\"sm\">straighten</ta-material-icon>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n        } @else if (this.selection === 'text') {\n        <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n        }\n      </div>\n      }\n\n      <div class=\"selection row g-0\">\n        <div class=\"col\" (click)=\"this.changeSelection('')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === '' }\">\n            <ta-material-icon type=\"sm\">pan_tool</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('line')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === 'line' }\">\n            <ta-material-icon type=\"sm\">draw</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('shape')\">\n          <div\n            class=\"item\"\n            [ngClass]=\"{ selected: this.selection === 'shape' }\"\n          >\n            <ta-material-icon type=\"sm\">interests</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('text')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === 'text' }\">\n            <ta-material-icon type=\"sm\">text_fields</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.clear()\">\n          <div class=\"item\" [ngClass]=\"{ disabled: !this.objectActivated }\">\n            <ta-material-icon type=\"sm\">delete</ta-material-icon>\n          </div>\n        </div>\n        <span class=\"separator\"></span>\n        <div class=\"col\" (click)=\"this.undo()\">\n          <div class=\"item\">\n            <ta-material-icon type=\"sm\">undo</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.redo()\">\n          <div class=\"item\">\n            <ta-material-icon type=\"sm\">redo</ta-material-icon>\n          </div>\n        </div>\n        <span class=\"separator\"></span>\n        <div class=\"col\" (click)=\"this.validation()\">\n          <div class=\"item color-success\">\n            <ta-font-icon name=\"check-line\"></ta-font-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ta-loader>\n</div>\n\n<ng-template #Colors>\n  <div class=\"colors\">\n    <div class=\"row g-0\">\n      @for (color of this.colorList; track color) {\n      <div class=\"col\" (click)=\"this.changeColor(color)\">\n        <div\n          class=\"color\"\n          [style.background-color]=\"color\"\n          [ngClass]=\"{ 'is-light': this.isLight(color) }\"\n        >\n          @if (this.colorHexa === color) {\n          <ta-material-icon [type]=\"'sm'\">done</ta-material-icon>\n          }\n        </div>\n      </div>\n      }\n    </div>\n  </div>\n</ng-template>\n<ng-template #Range>\n  <div class=\"range\">\n    <!-- <ta-input-slider [input]=\"this.slider\"></ta-input-slider> -->\n  </div>\n</ng-template>\n", styles: [".edit{position:relative;height:100%;display:flex;padding-bottom:70px;background-color:var(--ta-neutral-main)}.edit .image-container{display:flex;vertical-align:center}.control{border-top:1px solid var(--ta-neutral-400);background-color:var(--ta-neutral-100);padding:10px 20px;position:absolute;bottom:0;left:0;right:0}.control .item{width:20px;height:20px;border-radius:50%;padding:10px;margin:auto}.control .item.selected{background-color:var(--ta-surface-brand-primary);color:var(--ta-neutral-100)}.control .item.disabled{opacity:.5}.control .selection{border:1px solid var(--ta-neutral-400);margin:auto;padding:5px;border-radius:30px;text-align:center}.control .selection .separator{border:1px solid var(--ta-neutral-400);padding:0;width:0}.control .shape-selection{margin:5px 50px}.control .panel{margin-bottom:10px}.range{border:1px solid var(--ta-neutral-400);border-radius:20px;padding:3px 10px;margin-top:5px}.colors{text-align:center;margin:auto}.colors .color{height:24px;width:24px;border-radius:50%;margin:5px auto auto;border:1px solid var(--ta-neutral-400);color:var(--ta-neutral-100)}.colors .color.is-light{color:var(--ta-text-primary)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: MaterialIconComponent, selector: "ta-material-icon", inputs: ["outline", "sharp", "round", "dualTone", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: FileEditComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-files-edit", standalone: true, imports: [
                        NgIf,
                        NgFor,
                        NgClass,
                        FontIconComponent,
                        LoaderComponent,
                        MaterialIconComponent,
                    ], template: "<div class=\"edit\" #containerRef>\n  <div\n    #tuiRef\n    [style.height]=\"this.getHeight()\"\n    [style.width]=\"this.getWidth()\"\n    class=\"m-a image-container\"\n  ></div>\n\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <div class=\"control\">\n      @if (this.showPanel()) {\n      <div class=\"panel\">\n        @if (this.selection === 'line') {\n        <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n        } @else if (this.selection === 'shape') {\n        <div class=\"row g-0 shape-selection\">\n          <div class=\"col\" (click)=\"this.changeShapeSelection('rect')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'rect' }\"\n            >\n              <ta-material-icon type=\"sm\"\n                >check_box_outline_blank</ta-material-icon\n              >\n            </div>\n          </div>\n          <div class=\"col\" (click)=\"this.changeShapeSelection('triangle')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'triangle' }\"\n            >\n              <ta-material-icon type=\"sm\">change_history</ta-material-icon>\n            </div>\n          </div>\n          <div class=\"col\" (click)=\"this.changeShapeSelection('circle')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'circle' }\"\n            >\n              <ta-material-icon type=\"sm\">circle</ta-material-icon>\n            </div>\n          </div>\n          <div class=\"col\" (click)=\"this.changeShapeSelection('line')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'line' }\"\n            >\n              <ta-material-icon type=\"sm\">straighten</ta-material-icon>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n        } @else if (this.selection === 'text') {\n        <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n        }\n      </div>\n      }\n\n      <div class=\"selection row g-0\">\n        <div class=\"col\" (click)=\"this.changeSelection('')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === '' }\">\n            <ta-material-icon type=\"sm\">pan_tool</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('line')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === 'line' }\">\n            <ta-material-icon type=\"sm\">draw</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('shape')\">\n          <div\n            class=\"item\"\n            [ngClass]=\"{ selected: this.selection === 'shape' }\"\n          >\n            <ta-material-icon type=\"sm\">interests</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('text')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === 'text' }\">\n            <ta-material-icon type=\"sm\">text_fields</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.clear()\">\n          <div class=\"item\" [ngClass]=\"{ disabled: !this.objectActivated }\">\n            <ta-material-icon type=\"sm\">delete</ta-material-icon>\n          </div>\n        </div>\n        <span class=\"separator\"></span>\n        <div class=\"col\" (click)=\"this.undo()\">\n          <div class=\"item\">\n            <ta-material-icon type=\"sm\">undo</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.redo()\">\n          <div class=\"item\">\n            <ta-material-icon type=\"sm\">redo</ta-material-icon>\n          </div>\n        </div>\n        <span class=\"separator\"></span>\n        <div class=\"col\" (click)=\"this.validation()\">\n          <div class=\"item color-success\">\n            <ta-font-icon name=\"check-line\"></ta-font-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ta-loader>\n</div>\n\n<ng-template #Colors>\n  <div class=\"colors\">\n    <div class=\"row g-0\">\n      @for (color of this.colorList; track color) {\n      <div class=\"col\" (click)=\"this.changeColor(color)\">\n        <div\n          class=\"color\"\n          [style.background-color]=\"color\"\n          [ngClass]=\"{ 'is-light': this.isLight(color) }\"\n        >\n          @if (this.colorHexa === color) {\n          <ta-material-icon [type]=\"'sm'\">done</ta-material-icon>\n          }\n        </div>\n      </div>\n      }\n    </div>\n  </div>\n</ng-template>\n<ng-template #Range>\n  <div class=\"range\">\n    <!-- <ta-input-slider [input]=\"this.slider\"></ta-input-slider> -->\n  </div>\n</ng-template>\n", styles: [".edit{position:relative;height:100%;display:flex;padding-bottom:70px;background-color:var(--ta-neutral-main)}.edit .image-container{display:flex;vertical-align:center}.control{border-top:1px solid var(--ta-neutral-400);background-color:var(--ta-neutral-100);padding:10px 20px;position:absolute;bottom:0;left:0;right:0}.control .item{width:20px;height:20px;border-radius:50%;padding:10px;margin:auto}.control .item.selected{background-color:var(--ta-surface-brand-primary);color:var(--ta-neutral-100)}.control .item.disabled{opacity:.5}.control .selection{border:1px solid var(--ta-neutral-400);margin:auto;padding:5px;border-radius:30px;text-align:center}.control .selection .separator{border:1px solid var(--ta-neutral-400);padding:0;width:0}.control .shape-selection{margin:5px 50px}.control .panel{margin-bottom:10px}.range{border:1px solid var(--ta-neutral-400);border-radius:20px;padding:3px 10px;margin-top:5px}.colors{text-align:center;margin:auto}.colors .color{height:24px;width:24px;border-radius:50%;margin:5px auto auto;border:1px solid var(--ta-neutral-400);color:var(--ta-neutral-100)}.colors .color.is-light{color:var(--ta-text-primary)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { imagePath: [{
                type: Input
            }], saveImage$: [{
                type: Input
            }], savedImage: [{
                type: Output
            }], _containerRef: [{
                type: ViewChild,
                args: ["containerRef"]
            }], _tuiRef: [{
                type: ViewChild,
                args: ["tuiRef"]
            }] } });

class DocumentsListComponent extends TaBaseComponent {
    constructor() {
        super(...arguments);
        this.emptyMessage = "";
        this.actions = "";
        this.defaultSelected = [];
        this.readonly = false;
        this.remove = new EventEmitter();
        this.checkedFilesChanged = new EventEmitter();
        this._documentsService = inject(TaDocumentsService);
        this._checkedFiles = [];
        this.FileType = FileType;
    }
    get documents$() {
        return this._documentsService.getDocuments$(this.documentsIds);
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
        this._documentsService.fetchDocuments$(this.documentsIds).subscribe({
            next: (documents) => {
                this._checkedFiles = documents.filter((doc) => this.defaultSelected.includes(doc.id));
            },
            complete: () => this.requestState.completed(),
            error: (error) => {
                this.requestState.onError(error.status, error.statusText);
            },
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DocumentsListComponent, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: DocumentsListComponent, isStandalone: true, selector: "ta-documents-list", inputs: { documentsIds: "documentsIds", emptyMessage: "emptyMessage", actions: "actions", defaultSelected: "defaultSelected", readonly: "readonly" }, outputs: { remove: "remove", checkedFilesChanged: "checkedFilesChanged" }, usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ta-loader\n  [isLoading]=\"this.requestState.isLoading()\"\n  *ngLet=\"this.documents$ | async as documents\"\n>\n  <ta-error\n    [message]=\"this.requestState.getErrorMessage()\"\n    [code]=\"this.requestState.getErrorStatus()\"\n  >\n    <ta-empty\n      [isEmpty]=\"!documents || documents.length === 0\"\n      [text]=\"this.emptyMessage\"\n      [showMessage]=\"!!this.emptyMessage\"\n    >\n      <div class=\"list flex-column g-space-sm\">\n        @for (doc of documents; track doc) {\n        <div>\n          <ng-container\n            *ngTemplateOutlet=\"\n              this.actions !== 'select' ? defaultTemplate : selectTemplate;\n              context: { doc: doc }\n            \"\n          ></ng-container>\n        </div>\n        }\n      </div>\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n\n<ng-template #defaultTemplate let-doc=\"doc\">\n  <div class=\"flex-row g-space-xs justify-content-between\">\n    <div class=\"align-center\">\n      <ta-font-icon name=\"doc\" size=\"xs\"></ta-font-icon>\n      <div>\n        <ta-link [underline]=\"false\" (action)=\"this.openDocument(doc)\">{{\n          doc.name\n        }}</ta-link>\n        <div class=\"extra flex-row g-space-md\">\n          <ta-time-ago [date]=\"doc.uploadedDate\"></ta-time-ago>\n          <ta-megaoctet [octet]=\"doc.size\"></ta-megaoctet>\n        </div>\n      </div>\n    </div>\n    <div class=\"cta align-content-center\">\n      @if (this.actions === 'select') {\n      <input\n        [disabled]=\"this.readonly\"\n        type=\"checkbox\"\n        [checked]=\"this.isChecked(doc)\"\n        (click)=\"this.check(doc)\"\n      />\n      } @else if (this.actions === 'delete') {\n      <ta-button-tool\n        (action)=\"this.removeDocument(doc)\"\n        icon=\"delete\"\n        [size]=\"'sm'\"\n        [readonly]=\"this.readonly\"\n      ></ta-button-tool>\n      }\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #selectTemplate let-doc=\"doc\">\n  <div\n    class=\"card-document-upload flex-row g-space-xs justify-content-between\"\n    [class.selected]=\"this.isChecked(doc)\"\n    (click)=\"this.check(doc)\"\n  >\n    <div class=\"display flex-column align-items-start\">\n      <ta-link\n        [bold]=\"true\"\n        [underline]=\"false\"\n        (click)=\"$event.stopPropagation()\"\n        (action)=\"this.openDocument(doc)\"\n      >\n        {{ doc.name }}\n      </ta-link>\n      <div class=\"flex-row g-space-md\">\n        <div class=\"flex-row align-items-center\">\n          <ta-font-icon name=\"doc\" size=\"xs\"></ta-font-icon>\n          <ta-text>\n            {{\n              \"communication.documents.file-type.\" +\n                this.FileType[doc.fileType].toLocaleLowerCase() | translate\n            }}\n          </ta-text>\n        </div>\n        <ta-megaoctet [icon]=\"true\" [octet]=\"doc.size\"></ta-megaoctet>\n      </div>\n    </div>\n    <div class=\"button align-content-center\">\n      @if (this.actions === 'select') {\n      <input type=\"checkbox\" [checked]=\"this.isChecked(doc)\" />\n      } @else if (this.actions === 'delete') {\n      <ta-button-tool\n        (action)=\"this.removeDocument(doc)\"\n        icon=\"delete\"\n        [size]=\"'sm'\"\n      ></ta-button-tool>\n      }\n    </div>\n  </div>\n</ng-template>\n", styles: ["ta-font-icon{color:var(--ta-icon-brand-primary)}.extra{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-tertiary)}input{width:20px;height:20px}.button{padding:var(--ta-space-sm)}.card-document-upload{padding:var(--ta-space-md);margin-right:var(--ta-space-sm)}.card-document-upload.selected{border:1px solid var(--ta-border-brand);border-radius:var(--ta-radius-rounded);background-color:var(--ta-surface-brand-tertiary)}.card-document-upload .display{gap:var(--ta-space-sm)}\n"], dependencies: [{ kind: "pipe", type: AsyncPipe, name: "async" }, { kind: "component", type: ButtonToolComponent, selector: "ta-button-tool", inputs: ["state", "type", "size", "icon", "stopPropagationActivation", "readonly"], outputs: ["action"] }, { kind: "component", type: EmptyComponent, selector: "ta-empty", inputs: ["isEmpty", "isLight", "showMessage", "text", "type", "icon", "iconSize"] }, { kind: "component", type: ErrorComponent, selector: "ta-error", inputs: ["message", "code"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LinkComponent, selector: "ta-link", inputs: ["state", "underline", "bold", "size", "icon"], outputs: ["action"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton", "size", "text"] }, { kind: "component", type: MegaoctetComponent, selector: "ta-megaoctet", inputs: ["octet", "icon"] }, { kind: "component", type: TextComponent, selector: "ta-text", inputs: ["size", "isBold", "color"] }, { kind: "component", type: TimeAgoComponent, selector: "ta-time-ago", inputs: ["date", "withHours"] }, { kind: "ngmodule", type: TranslateModule }, { kind: "pipe", type: i1.TranslatePipe, name: "translate" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DocumentsListComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-documents-list", standalone: true, imports: [
                        NgIf,
                        NgFor,
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
                    ], template: "<ta-loader\n  [isLoading]=\"this.requestState.isLoading()\"\n  *ngLet=\"this.documents$ | async as documents\"\n>\n  <ta-error\n    [message]=\"this.requestState.getErrorMessage()\"\n    [code]=\"this.requestState.getErrorStatus()\"\n  >\n    <ta-empty\n      [isEmpty]=\"!documents || documents.length === 0\"\n      [text]=\"this.emptyMessage\"\n      [showMessage]=\"!!this.emptyMessage\"\n    >\n      <div class=\"list flex-column g-space-sm\">\n        @for (doc of documents; track doc) {\n        <div>\n          <ng-container\n            *ngTemplateOutlet=\"\n              this.actions !== 'select' ? defaultTemplate : selectTemplate;\n              context: { doc: doc }\n            \"\n          ></ng-container>\n        </div>\n        }\n      </div>\n    </ta-empty>\n  </ta-error>\n</ta-loader>\n\n<ng-template #defaultTemplate let-doc=\"doc\">\n  <div class=\"flex-row g-space-xs justify-content-between\">\n    <div class=\"align-center\">\n      <ta-font-icon name=\"doc\" size=\"xs\"></ta-font-icon>\n      <div>\n        <ta-link [underline]=\"false\" (action)=\"this.openDocument(doc)\">{{\n          doc.name\n        }}</ta-link>\n        <div class=\"extra flex-row g-space-md\">\n          <ta-time-ago [date]=\"doc.uploadedDate\"></ta-time-ago>\n          <ta-megaoctet [octet]=\"doc.size\"></ta-megaoctet>\n        </div>\n      </div>\n    </div>\n    <div class=\"cta align-content-center\">\n      @if (this.actions === 'select') {\n      <input\n        [disabled]=\"this.readonly\"\n        type=\"checkbox\"\n        [checked]=\"this.isChecked(doc)\"\n        (click)=\"this.check(doc)\"\n      />\n      } @else if (this.actions === 'delete') {\n      <ta-button-tool\n        (action)=\"this.removeDocument(doc)\"\n        icon=\"delete\"\n        [size]=\"'sm'\"\n        [readonly]=\"this.readonly\"\n      ></ta-button-tool>\n      }\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #selectTemplate let-doc=\"doc\">\n  <div\n    class=\"card-document-upload flex-row g-space-xs justify-content-between\"\n    [class.selected]=\"this.isChecked(doc)\"\n    (click)=\"this.check(doc)\"\n  >\n    <div class=\"display flex-column align-items-start\">\n      <ta-link\n        [bold]=\"true\"\n        [underline]=\"false\"\n        (click)=\"$event.stopPropagation()\"\n        (action)=\"this.openDocument(doc)\"\n      >\n        {{ doc.name }}\n      </ta-link>\n      <div class=\"flex-row g-space-md\">\n        <div class=\"flex-row align-items-center\">\n          <ta-font-icon name=\"doc\" size=\"xs\"></ta-font-icon>\n          <ta-text>\n            {{\n              \"communication.documents.file-type.\" +\n                this.FileType[doc.fileType].toLocaleLowerCase() | translate\n            }}\n          </ta-text>\n        </div>\n        <ta-megaoctet [icon]=\"true\" [octet]=\"doc.size\"></ta-megaoctet>\n      </div>\n    </div>\n    <div class=\"button align-content-center\">\n      @if (this.actions === 'select') {\n      <input type=\"checkbox\" [checked]=\"this.isChecked(doc)\" />\n      } @else if (this.actions === 'delete') {\n      <ta-button-tool\n        (action)=\"this.removeDocument(doc)\"\n        icon=\"delete\"\n        [size]=\"'sm'\"\n      ></ta-button-tool>\n      }\n    </div>\n  </div>\n</ng-template>\n", styles: ["ta-font-icon{color:var(--ta-icon-brand-primary)}.extra{font-size:var(--ta-font-body-sm-default-size);font-weight:var(--ta-font-body-sm-default-weight);color:var(--ta-text-tertiary)}input{width:20px;height:20px}.button{padding:var(--ta-space-sm)}.card-document-upload{padding:var(--ta-space-md);margin-right:var(--ta-space-sm)}.card-document-upload.selected{border:1px solid var(--ta-border-brand);border-radius:var(--ta-radius-rounded);background-color:var(--ta-surface-brand-tertiary)}.card-document-upload .display{gap:var(--ta-space-sm)}\n"] }]
        }], propDecorators: { documentsIds: [{
                type: Input
            }], emptyMessage: [{
                type: Input
            }], actions: [{
                type: Input
            }], defaultSelected: [{
                type: Input
            }], readonly: [{
                type: Input
            }], remove: [{
                type: Output
            }], checkedFilesChanged: [{
                type: Output
            }] } });

/**
 * @deprecated Use standalone components instead.
 * This module will be removed in a future version.
 *
 * @example
 * // Instead of importing the module:
 * // import { TaFilesBasicModule } from '@ta/library-name';
 *
 * // Import the standalone components directly:
 * import { FileListComponent, FileEditComponent, DocumentsListComponent } from '@ta/library-name';
 */
class TaFilesBasicModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFilesBasicModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: TaFilesBasicModule, imports: [CommonModule,
            TaDirectivePipeModule,
            TaUiModule,
            TaCardModule,
            TaContainerModule,
            TaIconsModule,
            TranslatePipe,
            SafePipe,
            FileListComponent,
            FileCardComponent,
            FileEditComponent,
            DocumentsListComponent], exports: [FileListComponent, FileEditComponent, DocumentsListComponent] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFilesBasicModule, imports: [CommonModule,
            TaDirectivePipeModule,
            TaUiModule,
            TaCardModule,
            TaContainerModule,
            TaIconsModule,
            FileListComponent,
            FileCardComponent,
            FileEditComponent,
            DocumentsListComponent] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaFilesBasicModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule,
                        TaDirectivePipeModule,
                        TaUiModule,
                        TaCardModule,
                        TaContainerModule,
                        TaIconsModule,
                        TranslatePipe,
                        SafePipe,
                        FileListComponent,
                        FileCardComponent,
                        FileEditComponent,
                        DocumentsListComponent,
                    ],
                    exports: [FileListComponent, FileEditComponent, DocumentsListComponent],
                }]
        }] });

/*
 * Public API Surface of files-basic
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DocumentsListComponent, FileEditComponent, FileListComponent, TaFilesBasicModule };
//# sourceMappingURL=ta-files-basic.mjs.map
