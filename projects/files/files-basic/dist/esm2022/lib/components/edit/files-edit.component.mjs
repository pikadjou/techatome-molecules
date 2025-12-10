import { Component, EventEmitter, Input, Output, ViewChild, } from "@angular/core";
import { NgIf, NgFor, NgClass } from "@angular/common";
import { FontIconComponent, MaterialIconComponent } from "@ta/icons";
import { InputSlider } from "@ta/form-model";
import { LoaderComponent } from "@ta/ui";
import { TaBaseComponent, determineNewSize, getBlobImage, isLight, } from "@ta/utils";
import ImageEditor from "tui-image-editor";
import * as i0 from "@angular/core";
export class FileEditComponent extends TaBaseComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZWRpdC9maWxlcy1lZGl0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9lZGl0L2ZpbGVzLWVkaXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixPQUFPLEdBQ1IsTUFBTSxXQUFXLENBQUM7QUFFbkIsT0FBTyxXQUFXLE1BQU0sa0JBQWtCLENBQUM7O0FBbUIzQyxNQUFNLE9BQU8saUJBQ1gsU0FBUSxlQUFlO0lBdUR2QjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBOUNWLGVBQVUsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUlwRCxVQUFVO1FBQ0gsY0FBUyxHQUFjLEVBQUUsQ0FBQztRQUMxQixtQkFBYyxHQUFtQixFQUFFLENBQUM7UUFFcEMsY0FBUyxHQUFXLFNBQVMsQ0FBQztRQUM5QixjQUFTLEdBQWE7WUFDM0IsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNB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WUMxQzlCLGdnS0F3SUEsNHJDRHBHSSxPQUFPLG9GQUNQLGlCQUFpQixtRkFDakIsZUFBZSx5R0FDZixxQkFBcUI7OzRGQUdaLGlCQUFpQjtrQkFkN0IsU0FBUzsrQkFDRSxlQUFlLGNBR2IsSUFBSSxXQUNQO3dCQUNQLElBQUk7d0JBQ0osS0FBSzt3QkFDTCxPQUFPO3dCQUNQLGlCQUFpQjt3QkFDakIsZUFBZTt3QkFDZixxQkFBcUI7cUJBQ3RCO3dEQU9ELFNBQVM7c0JBRFIsS0FBSztnQkFJTixVQUFVO3NCQURULEtBQUs7Z0JBSU4sVUFBVTtzQkFEVCxNQUFNO2dCQW1DQyxhQUFhO3NCQURwQixTQUFTO3VCQUFDLGNBQWM7Z0JBSWpCLE9BQU87c0JBRGQsU0FBUzt1QkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE5nSWYsIE5nRm9yLCBOZ0NsYXNzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQsIE1hdGVyaWFsSWNvbkNvbXBvbmVudCB9IGZyb20gXCJAdGEvaWNvbnNcIjtcbmltcG9ydCB7IElucHV0U2xpZGVyIH0gZnJvbSBcIkB0YS9mb3JtLW1vZGVsXCI7XG5pbXBvcnQgeyBMb2FkZXJDb21wb25lbnQgfSBmcm9tIFwiQHRhL3VpXCI7XG5pbXBvcnQge1xuICBUYUJhc2VDb21wb25lbnQsXG4gIGRldGVybWluZU5ld1NpemUsXG4gIGdldEJsb2JJbWFnZSxcbiAgaXNMaWdodCxcbn0gZnJvbSBcIkB0YS91dGlsc1wiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgSW1hZ2VFZGl0b3IgZnJvbSBcInR1aS1pbWFnZS1lZGl0b3JcIjtcblxudHlwZSBTZWxlY3Rpb24gPSBcImxpbmVcIiB8IFwic2hhcGVcIiB8IFwidGV4dFwiIHwgXCJcIjtcbnR5cGUgU2hhcGVTZWxlY3Rpb24gPSBcInJlY3RcIiB8IFwidHJpYW5nbGVcIiB8IFwiY2lyY2xlXCIgfCBcImxpbmVcIiB8IFwiXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJ0YS1maWxlcy1lZGl0XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZmlsZXMtZWRpdC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vZmlsZXMtZWRpdC5jb21wb25lbnQuc2Nzc1wiXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW1xuICAgIE5nSWYsXG4gICAgTmdGb3IsXG4gICAgTmdDbGFzcyxcbiAgICBGb250SWNvbkNvbXBvbmVudCxcbiAgICBMb2FkZXJDb21wb25lbnQsXG4gICAgTWF0ZXJpYWxJY29uQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGaWxlRWRpdENvbXBvbmVudFxuICBleHRlbmRzIFRhQmFzZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95XG57XG4gIEBJbnB1dCgpXG4gIGltYWdlUGF0aCE6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzYXZlSW1hZ2UkITogT2JzZXJ2YWJsZTxudWxsPjtcblxuICBAT3V0cHV0KClcbiAgc2F2ZWRJbWFnZTogRXZlbnRFbWl0dGVyPEJsb2I+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyB0dWlJbWFnZUVkaXRvciE6IEltYWdlRWRpdG9yO1xuXG4gIC8vIGNvbnRyb2xcbiAgcHVibGljIHNlbGVjdGlvbjogU2VsZWN0aW9uID0gXCJcIjtcbiAgcHVibGljIHNoYXBlU2VsZWN0aW9uOiBTaGFwZVNlbGVjdGlvbiA9IFwiXCI7XG5cbiAgcHVibGljIGNvbG9ySGV4YTogc3RyaW5nID0gXCIjMDAwMDAwXCI7XG4gIHB1YmxpYyBjb2xvckxpc3Q6IHN0cmluZ1tdID0gW1xuICAgIFwiI2ZmMGQwMFwiLFxuICAgIFwiI2ZmYTIwMFwiLFxuICAgIFwiI2Y0ZmYxZlwiLFxuICAgIFwiIzM0ZTYxMFwiLFxuICAgIFwiIzE0NzAwMVwiLFxuICAgIFwiIzAwY2FkMVwiLFxuICAgIFwiIzAwMzRkMVwiLFxuICAgIFwiIzNkMDA5ZVwiLFxuICAgIFwiIzAwMDAwMFwiLFxuICAgIFwiI2ZmZmZmZlwiLFxuICBdO1xuXG4gIHB1YmxpYyBvYmplY3RBY3RpdmF0ZWQgPSBudWxsO1xuXG4gIHB1YmxpYyBicnVzaFNpemU6IG51bWJlciA9IDIwO1xuICBwdWJsaWMgc2xpZGVyID0gbmV3IElucHV0U2xpZGVyKHtcbiAgICBrZXk6IFwic2xpZGVyXCIsXG4gICAgY2xhc3M6IFwidy0xMDBcIixcbiAgICBtYXg6IDUwLFxuICB9KTtcblxuICBwdWJsaWMgcmVhZG9ubHkgaXNMaWdodCA9IGlzTGlnaHQ7XG5cbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclJlZlwiKVxuICBwcml2YXRlIF9jb250YWluZXJSZWYhOiBFbGVtZW50UmVmPEhUTUxEaXZFbGVtZW50PjtcblxuICBAVmlld0NoaWxkKFwidHVpUmVmXCIpXG4gIHByaXZhdGUgX3R1aVJlZiE6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBwcml2YXRlIF9jYW52YXNTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICB9O1xuXG4gIHByaXZhdGUgX2ludG9EcmF3aW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2xpZGVyLnZhbHVlID0gdGhpcy5icnVzaFNpemU7XG4gICAgdGhpcy5zbGlkZXIuY3JlYXRlRm9ybUNvbnRyb2woKTtcbiAgICB0aGlzLnNsaWRlci5jaGFuZ2VWYWx1ZSQuc3Vic2NyaWJlKCh2YWx1ZSkgPT5cbiAgICAgIHRoaXMuY2hhbmdlQnJ1c2hTaXplKHZhbHVlID8/IDApXG4gICAgKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlQcmVzcyk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5zYXZlSW1hZ2UkKSB7XG4gICAgICB0aGlzLl9yZWdpc3RlclN1YnNjcmlwdGlvbihcbiAgICAgICAgdGhpcy5zYXZlSW1hZ2UkLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5vblNhdmVDbGljaygpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBvdmVycmlkZSBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHRoaXMua2V5UHJlc3MpO1xuXG4gICAgdGhpcy50dWlJbWFnZUVkaXRvci5kZXN0cm95KCk7XG4gIH1cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLl9jcmVhdGVJbWFnZUVkaXRvcigpO1xuICB9XG5cbiAgcHVibGljIGdldEhlaWdodCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLl9jYW52YXNTaXplLmhlaWdodH1weGA7XG4gIH1cbiAgcHVibGljIGdldFdpZHRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuX2NhbnZhc1NpemUud2lkdGh9cHhgO1xuICB9XG5cbiAgcHVibGljIGtleVByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICB0aGlzLl9zdG9wRHJhd2luZygpO1xuICAgIH1cbiAgfVxuICAvLyBjb250cm9sXG4gIHB1YmxpYyBzaG93UGFuZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uICE9PSBcIlwiICYmICF0aGlzLl9pbnRvRHJhd2luZztcbiAgfVxuICBwdWJsaWMgY2hhbmdlU2VsZWN0aW9uKG5ld1NlbGVjdGlvbjogU2VsZWN0aW9uKSB7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXdTZWxlY3Rpb247XG4gICAgdGhpcy5faW50b0RyYXdpbmcgPSBmYWxzZTtcblxuICAgIGlmICghdGhpcy5zZWxlY3Rpb24pIHtcbiAgICAgIHRoaXMuX3N0b3BEcmF3aW5nKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uID09PSBcImxpbmVcIikge1xuICAgICAgdGhpcy5kcmF3aW5nKFwiRlJFRV9EUkFXSU5HXCIpO1xuICAgICAgdGhpcy5jaGFuZ2VTaGFwZVNlbGVjdGlvbihcIlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uID09PSBcInNoYXBlXCIpIHtcbiAgICAgIGlmICghdGhpcy5zaGFwZVNlbGVjdGlvbikge1xuICAgICAgICB0aGlzLmNoYW5nZVNoYXBlU2VsZWN0aW9uKFwibGluZVwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uID09PSBcInRleHRcIikge1xuICAgICAgdGhpcy50ZXh0KCk7XG4gICAgICB0aGlzLmNoYW5nZVNoYXBlU2VsZWN0aW9uKFwiXCIpO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHB1YmxpYyBjaGFuZ2VTaGFwZVNlbGVjdGlvbihuZXdTZWxlY3Rpb246IFNoYXBlU2VsZWN0aW9uKSB7XG4gICAgdGhpcy5zaGFwZVNlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbjtcblxuICAgIGlmICghdGhpcy5zaGFwZVNlbGVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaGFwZVNlbGVjdGlvbiA9PT0gXCJsaW5lXCIpIHtcbiAgICAgIHRoaXMuZHJhd2luZyhcIkxJTkVfRFJBV0lOR1wiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnNoYXBlKHRoaXMuc2hhcGVTZWxlY3Rpb24pO1xuICB9XG5cbiAgcHVibGljIHVuZG8oKSB7XG4gICAgdGhpcy50dWlJbWFnZUVkaXRvci5kaXNjYXJkU2VsZWN0aW9uKCk7XG4gICAgdGhpcy50dWlJbWFnZUVkaXRvci51bmRvKCk7XG4gIH1cbiAgcHVibGljIHJlZG8oKSB7XG4gICAgdGhpcy50dWlJbWFnZUVkaXRvci5kaXNjYXJkU2VsZWN0aW9uKCk7XG4gICAgdGhpcy50dWlJbWFnZUVkaXRvci5yZWRvKCk7XG4gIH1cblxuICBwdWJsaWMgc2hhcGUodHlwZTogXCJyZWN0XCIgfCBcImNpcmNsZVwiIHwgXCJ0cmlhbmdsZVwiKSB7XG4gICAgdGhpcy5fc3RvcERyYXdpbmcoKTtcbiAgICB0aGlzLnR1aUltYWdlRWRpdG9yLnNldERyYXdpbmdTaGFwZSh0eXBlLCB0aGlzLl9nZXRTZXR0aW5ncygpKTtcbiAgICB0aGlzLnR1aUltYWdlRWRpdG9yLnN0YXJ0RHJhd2luZ01vZGUoXCJTSEFQRVwiKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3aW5nKHR5cGU6IFwiTElORV9EUkFXSU5HXCIgfCBcIkZSRUVfRFJBV0lOR1wiKSB7XG4gICAgdGhpcy5fc3RvcERyYXdpbmcoKTtcbiAgICB0aGlzLnR1aUltYWdlRWRpdG9yLnN0YXJ0RHJhd2luZ01vZGUodHlwZSwgdGhpcy5fZ2V0U2V0dGluZ3MoKSk7XG4gIH1cblxuICBwdWJsaWMgdGV4dCgpIHtcbiAgICB0aGlzLl9zdG9wRHJhd2luZygpO1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3Iuc3RhcnREcmF3aW5nTW9kZShcIlRFWFRcIiwgdGhpcy5fZ2V0U2V0dGluZ3MoKSk7XG4gIH1cblxuICBwdWJsaWMgY2hhbmdlQ29sb3IoY29sb3I6IHN0cmluZykge1xuICAgIHRoaXMuY29sb3JIZXhhID0gY29sb3I7XG4gICAgdGhpcy5fcmVmbG93KCk7XG4gIH1cbiAgcHVibGljIGNoYW5nZUJydXNoU2l6ZShzaXplOiBudW1iZXIpIHtcbiAgICB0aGlzLmJydXNoU2l6ZSA9IHNpemU7XG4gICAgdGhpcy5fcmVmbG93KCk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMub2JqZWN0QWN0aXZhdGVkKSB7XG4gICAgICB0aGlzLnR1aUltYWdlRWRpdG9yLnJlbW92ZUFjdGl2ZU9iamVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB2YWxpZGF0aW9uKCkge1xuICAgIHRoaXMub25TYXZlQ2xpY2soKTtcbiAgfVxuICBwdWJsaWMgb25TYXZlQ2xpY2sgPSBhc3luYyAoKSA9PiB7XG4gICAgdGhpcy5yZXF1ZXN0U3RhdGUuYXNrZWQoKTtcblxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnR1aUltYWdlRWRpdG9yLnRvRGF0YVVSTCh7XG4gICAgICBmb3JtYXQ6IFwicG5nXCIsXG4gICAgICBxdWFsaXR5OiAwLjQsXG4gICAgfSk7XG5cbiAgICBjb25zdCBibG9iID0gYXdhaXQgZ2V0QmxvYkltYWdlKGRhdGEpO1xuICAgIHRoaXMuc2F2ZWRJbWFnZS5lbWl0KGJsb2IpO1xuXG4gICAgdGhpcy5yZXF1ZXN0U3RhdGUuY29tcGxldGVkKCk7XG4gIH07XG4gIHByaXZhdGUgYXN5bmMgX2NyZWF0ZUltYWdlRWRpdG9yKCkge1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3IgPSBuZXcgSW1hZ2VFZGl0b3IodGhpcy5fdHVpUmVmLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIHVzYWdlU3RhdGlzdGljczogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgY3JvcCA9IGF3YWl0IHRoaXMudHVpSW1hZ2VFZGl0b3IubG9hZEltYWdlRnJvbVVSTChcbiAgICAgIHRoaXMuaW1hZ2VQYXRoLFxuICAgICAgXCJkZWZhdWx0XCJcbiAgICApO1xuICAgIHRoaXMuX2NhbnZhc1NpemUgPSBkZXRlcm1pbmVOZXdTaXplKFxuICAgICAgY3JvcC5uZXdIZWlnaHQsXG4gICAgICBjcm9wLm5ld1dpZHRoLFxuICAgICAgdGhpcy5fY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgsXG4gICAgICB0aGlzLl9jb250YWluZXJSZWYubmF0aXZlRWxlbWVudC5jbGllbnRIZWlnaHQgLSA3MFxuICAgICk7XG4gICAgdGhpcy50dWlJbWFnZUVkaXRvci5yZXNpemVDYW52YXNEaW1lbnNpb24oe1xuICAgICAgd2lkdGg6IHRoaXMuX2NhbnZhc1NpemUud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuX2NhbnZhc1NpemUuaGVpZ2h0LFxuICAgIH0pO1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3Iub24oXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xuICAgICAgdGhpcy5faW50b0RyYXdpbmcgPSB0cnVlO1xuICAgIH0pO1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3Iub24oXCJvYmplY3RBY3RpdmF0ZWRcIiwgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdGhpcy5vYmplY3RBY3RpdmF0ZWQgPSBkYXRhO1xuICAgIH0pO1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3Iub24oXCJhZGRUZXh0XCIsIChwb3M6IGFueSkgPT4ge1xuICAgICAgdGhpcy50dWlJbWFnZUVkaXRvci5hZGRUZXh0KFwiVEVYVEVcIiwge1xuICAgICAgICAuLi50aGlzLl9nZXRTZXR0aW5ncygpLFxuICAgICAgICAuLi57IHBvc2l0aW9uOiBwb3Mub3JpZ2luUG9zaXRpb24gfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RvcERyYXdpbmcoKSB7XG4gICAgdGhpcy50dWlJbWFnZUVkaXRvci5zdG9wRHJhd2luZ01vZGUoKTtcbiAgICB0aGlzLm9iamVjdEFjdGl2YXRlZCA9IG51bGw7XG4gIH1cbiAgcHJpdmF0ZSBfcmVmbG93KCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbiA9PT0gXCJsaW5lXCIpIHtcbiAgICAgIHRoaXMudHVpSW1hZ2VFZGl0b3Iuc2V0QnJ1c2goe1xuICAgICAgICBjb2xvcjogdGhpcy5jb2xvckhleGEsXG4gICAgICAgIHdpZHRoOiB0aGlzLmJydXNoU2l6ZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGlvbiA9PT0gXCJzaGFwZVwiKSB7XG4gICAgICB0aGlzLl9zdG9wRHJhd2luZygpO1xuICAgICAgdGhpcy5jaGFuZ2VTaGFwZVNlbGVjdGlvbih0aGlzLnNoYXBlU2VsZWN0aW9uKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgcHJpdmF0ZSBfZ2V0U2V0dGluZ3MoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9ySGV4YSxcbiAgICAgIHdpZHRoOiB0aGlzLmJydXNoU2l6ZSxcbiAgICAgIGZpbGw6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgIHN0cm9rZTogdGhpcy5jb2xvckhleGEsXG4gICAgICBzdHJva2VXaWR0aDogdGhpcy5icnVzaFNpemUsXG4gICAgICBzdHlsZXM6IHtcbiAgICAgICAgZmlsbDogdGhpcy5jb2xvckhleGEsXG4gICAgICAgIGZvbnRTaXplOiB0aGlzLmJydXNoU2l6ZSAqIDgsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJlZGl0XCIgI2NvbnRhaW5lclJlZj5cbiAgPGRpdlxuICAgICN0dWlSZWZcbiAgICBbc3R5bGUuaGVpZ2h0XT1cInRoaXMuZ2V0SGVpZ2h0KClcIlxuICAgIFtzdHlsZS53aWR0aF09XCJ0aGlzLmdldFdpZHRoKClcIlxuICAgIGNsYXNzPVwibS1hIGltYWdlLWNvbnRhaW5lclwiXG4gID48L2Rpdj5cblxuICA8dGEtbG9hZGVyIFtpc0xvYWRpbmddPVwidGhpcy5yZXF1ZXN0U3RhdGUuaXNMb2FkaW5nKClcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgQGlmICh0aGlzLnNob3dQYW5lbCgpKSB7XG4gICAgICA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cbiAgICAgICAgQGlmICh0aGlzLnNlbGVjdGlvbiA9PT0gJ2xpbmUnKSB7XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJSYW5nZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJDb2xvcnNcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICB9IEBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbiA9PT0gJ3NoYXBlJykge1xuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGctMCBzaGFwZS1zZWxlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgKGNsaWNrKT1cInRoaXMuY2hhbmdlU2hhcGVTZWxlY3Rpb24oJ3JlY3QnKVwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1cIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7IHNlbGVjdGVkOiB0aGlzLnNoYXBlU2VsZWN0aW9uID09PSAncmVjdCcgfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0YS1tYXRlcmlhbC1pY29uIHR5cGU9XCJzbVwiXG4gICAgICAgICAgICAgICAgPmNoZWNrX2JveF9vdXRsaW5lX2JsYW5rPC90YS1tYXRlcmlhbC1pY29uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiAoY2xpY2spPVwidGhpcy5jaGFuZ2VTaGFwZVNlbGVjdGlvbigndHJpYW5nbGUnKVwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1cIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7IHNlbGVjdGVkOiB0aGlzLnNoYXBlU2VsZWN0aW9uID09PSAndHJpYW5nbGUnIH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGEtbWF0ZXJpYWwtaWNvbiB0eXBlPVwic21cIj5jaGFuZ2VfaGlzdG9yeTwvdGEtbWF0ZXJpYWwtaWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiAoY2xpY2spPVwidGhpcy5jaGFuZ2VTaGFwZVNlbGVjdGlvbignY2lyY2xlJylcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtXCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyBzZWxlY3RlZDogdGhpcy5zaGFwZVNlbGVjdGlvbiA9PT0gJ2NpcmNsZScgfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0YS1tYXRlcmlhbC1pY29uIHR5cGU9XCJzbVwiPmNpcmNsZTwvdGEtbWF0ZXJpYWwtaWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiAoY2xpY2spPVwidGhpcy5jaGFuZ2VTaGFwZVNlbGVjdGlvbignbGluZScpXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiaXRlbVwiXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgc2VsZWN0ZWQ6IHRoaXMuc2hhcGVTZWxlY3Rpb24gPT09ICdsaW5lJyB9XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRhLW1hdGVyaWFsLWljb24gdHlwZT1cInNtXCI+c3RyYWlnaHRlbjwvdGEtbWF0ZXJpYWwtaWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIlJhbmdlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIkNvbG9yc1wiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIH0gQGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uID09PSAndGV4dCcpIHtcbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIlJhbmdlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIkNvbG9yc1wiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgfVxuXG4gICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0aW9uIHJvdyBnLTBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLmNoYW5nZVNlbGVjdGlvbignJylcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIFtuZ0NsYXNzXT1cInsgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0aW9uID09PSAnJyB9XCI+XG4gICAgICAgICAgICA8dGEtbWF0ZXJpYWwtaWNvbiB0eXBlPVwic21cIj5wYW5fdG9vbDwvdGEtbWF0ZXJpYWwtaWNvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiAoY2xpY2spPVwidGhpcy5jaGFuZ2VTZWxlY3Rpb24oJ2xpbmUnKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgW25nQ2xhc3NdPVwieyBzZWxlY3RlZDogdGhpcy5zZWxlY3Rpb24gPT09ICdsaW5lJyB9XCI+XG4gICAgICAgICAgICA8dGEtbWF0ZXJpYWwtaWNvbiB0eXBlPVwic21cIj5kcmF3PC90YS1tYXRlcmlhbC1pY29uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLmNoYW5nZVNlbGVjdGlvbignc2hhcGUnKVwiPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiaXRlbVwiXG4gICAgICAgICAgICBbbmdDbGFzc109XCJ7IHNlbGVjdGVkOiB0aGlzLnNlbGVjdGlvbiA9PT0gJ3NoYXBlJyB9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dGEtbWF0ZXJpYWwtaWNvbiB0eXBlPVwic21cIj5pbnRlcmVzdHM8L3RhLW1hdGVyaWFsLWljb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgKGNsaWNrKT1cInRoaXMuY2hhbmdlU2VsZWN0aW9uKCd0ZXh0JylcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIFtuZ0NsYXNzXT1cInsgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0aW9uID09PSAndGV4dCcgfVwiPlxuICAgICAgICAgICAgPHRhLW1hdGVyaWFsLWljb24gdHlwZT1cInNtXCI+dGV4dF9maWVsZHM8L3RhLW1hdGVyaWFsLWljb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgKGNsaWNrKT1cInRoaXMuY2xlYXIoKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgW25nQ2xhc3NdPVwieyBkaXNhYmxlZDogIXRoaXMub2JqZWN0QWN0aXZhdGVkIH1cIj5cbiAgICAgICAgICAgIDx0YS1tYXRlcmlhbC1pY29uIHR5cGU9XCJzbVwiPmRlbGV0ZTwvdGEtbWF0ZXJpYWwtaWNvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2VwYXJhdG9yXCI+PC9zcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgKGNsaWNrKT1cInRoaXMudW5kbygpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgIDx0YS1tYXRlcmlhbC1pY29uIHR5cGU9XCJzbVwiPnVuZG88L3RhLW1hdGVyaWFsLWljb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgKGNsaWNrKT1cInRoaXMucmVkbygpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgIDx0YS1tYXRlcmlhbC1pY29uIHR5cGU9XCJzbVwiPnJlZG88L3RhLW1hdGVyaWFsLWljb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNlcGFyYXRvclwiPjwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLnZhbGlkYXRpb24oKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIGNvbG9yLXN1Y2Nlc3NcIj5cbiAgICAgICAgICAgIDx0YS1mb250LWljb24gbmFtZT1cImNoZWNrLWxpbmVcIj48L3RhLWZvbnQtaWNvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC90YS1sb2FkZXI+XG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNDb2xvcnM+XG4gIDxkaXYgY2xhc3M9XCJjb2xvcnNcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGctMFwiPlxuICAgICAgQGZvciAoY29sb3Igb2YgdGhpcy5jb2xvckxpc3Q7IHRyYWNrIGNvbG9yKSB7XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgKGNsaWNrKT1cInRoaXMuY2hhbmdlQ29sb3IoY29sb3IpXCI+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImNvbG9yXCJcbiAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl09XCJjb2xvclwiXG4gICAgICAgICAgW25nQ2xhc3NdPVwieyAnaXMtbGlnaHQnOiB0aGlzLmlzTGlnaHQoY29sb3IpIH1cIlxuICAgICAgICA+XG4gICAgICAgICAgQGlmICh0aGlzLmNvbG9ySGV4YSA9PT0gY29sb3IpIHtcbiAgICAgICAgICA8dGEtbWF0ZXJpYWwtaWNvbiBbdHlwZV09XCInc20nXCI+ZG9uZTwvdGEtbWF0ZXJpYWwtaWNvbj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbjxuZy10ZW1wbGF0ZSAjUmFuZ2U+XG4gIDxkaXYgY2xhc3M9XCJyYW5nZVwiPlxuICAgIDwhLS0gPHRhLWlucHV0LXNsaWRlciBbaW5wdXRdPVwidGhpcy5zbGlkZXJcIj48L3RhLWlucHV0LXNsaWRlcj4gLS0+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==