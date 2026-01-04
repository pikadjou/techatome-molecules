import { Component, EventEmitter, Output, ViewChild, input, } from "@angular/core";
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
        this.imagePath = input.required();
        this.saveImage$ = input.required();
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
                        NgIf,
                        NgFor,
                        NgClass,
                        FontIconComponent,
                        LoaderComponent,
                        MaterialIconComponent,
                    ], template: "<div class=\"edit\" #containerRef>\n  <div\n    #tuiRef\n    [style.height]=\"this.getHeight()\"\n    [style.width]=\"this.getWidth()\"\n    class=\"m-a image-container\"\n  ></div>\n\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <div class=\"control\">\n      @if (this.showPanel()) {\n      <div class=\"panel\">\n        @if (this.selection === 'line') {\n        <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n        } @else if (this.selection === 'shape') {\n        <div class=\"row g-0 shape-selection\">\n          <div class=\"col\" (click)=\"this.changeShapeSelection('rect')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'rect' }\"\n            >\n              <ta-material-icon type=\"sm\"\n                >check_box_outline_blank</ta-material-icon\n              >\n            </div>\n          </div>\n          <div class=\"col\" (click)=\"this.changeShapeSelection('triangle')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'triangle' }\"\n            >\n              <ta-material-icon type=\"sm\">change_history</ta-material-icon>\n            </div>\n          </div>\n          <div class=\"col\" (click)=\"this.changeShapeSelection('circle')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'circle' }\"\n            >\n              <ta-material-icon type=\"sm\">circle</ta-material-icon>\n            </div>\n          </div>\n          <div class=\"col\" (click)=\"this.changeShapeSelection('line')\">\n            <div\n              class=\"item\"\n              [ngClass]=\"{ selected: this.shapeSelection === 'line' }\"\n            >\n              <ta-material-icon type=\"sm\">straighten</ta-material-icon>\n            </div>\n          </div>\n        </div>\n        <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n        } @else if (this.selection === 'text') {\n        <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n        <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n        }\n      </div>\n      }\n\n      <div class=\"selection row g-0\">\n        <div class=\"col\" (click)=\"this.changeSelection('')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === '' }\">\n            <ta-material-icon type=\"sm\">pan_tool</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('line')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === 'line' }\">\n            <ta-material-icon type=\"sm\">draw</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('shape')\">\n          <div\n            class=\"item\"\n            [ngClass]=\"{ selected: this.selection === 'shape' }\"\n          >\n            <ta-material-icon type=\"sm\">interests</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('text')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === 'text' }\">\n            <ta-material-icon type=\"sm\">text_fields</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.clear()\">\n          <div class=\"item\" [ngClass]=\"{ disabled: !this.objectActivated }\">\n            <ta-material-icon type=\"sm\">delete</ta-material-icon>\n          </div>\n        </div>\n        <span class=\"separator\"></span>\n        <div class=\"col\" (click)=\"this.undo()\">\n          <div class=\"item\">\n            <ta-material-icon type=\"sm\">undo</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.redo()\">\n          <div class=\"item\">\n            <ta-material-icon type=\"sm\">redo</ta-material-icon>\n          </div>\n        </div>\n        <span class=\"separator\"></span>\n        <div class=\"col\" (click)=\"this.validation()\">\n          <div class=\"item color-success\">\n            <ta-font-icon name=\"check-line\"></ta-font-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ta-loader>\n</div>\n\n<ng-template #Colors>\n  <div class=\"colors\">\n    <div class=\"row g-0\">\n      @for (color of this.colorList; track color) {\n      <div class=\"col\" (click)=\"this.changeColor(color)\">\n        <div\n          class=\"color\"\n          [style.background-color]=\"color\"\n          [ngClass]=\"{ 'is-light': this.isLight(color) }\"\n        >\n          @if (this.colorHexa === color) {\n          <ta-material-icon [type]=\"'sm'\">done</ta-material-icon>\n          }\n        </div>\n      </div>\n      }\n    </div>\n  </div>\n</ng-template>\n<ng-template #Range>\n  <div class=\"range\">\n    <!-- <ta-input-slider [input]=\"this.slider\"></ta-input-slider> -->\n  </div>\n</ng-template>\n", styles: [".edit{position:relative;height:100%;display:flex;padding-bottom:70px;background-color:var(--ta-neutral-main)}.edit .image-container{display:flex;vertical-align:center}.control{border-top:1px solid var(--ta-neutral-400);background-color:var(--ta-neutral-100);padding:10px 20px;position:absolute;bottom:0;left:0;right:0}.control .item{width:20px;height:20px;border-radius:50%;padding:10px;margin:auto}.control .item.selected{background-color:var(--ta-surface-brand-primary);color:var(--ta-neutral-100)}.control .item.disabled{opacity:.5}.control .selection{border:1px solid var(--ta-neutral-400);margin:auto;padding:5px;border-radius:30px;text-align:center}.control .selection .separator{border:1px solid var(--ta-neutral-400);padding:0;width:0}.control .shape-selection{margin:5px 50px}.control .panel{margin-bottom:10px}.range{border:1px solid var(--ta-neutral-400);border-radius:20px;padding:3px 10px;margin-top:5px}.colors{text-align:center;margin:auto}.colors .color{height:24px;width:24px;border-radius:50%;margin:5px auto auto;border:1px solid var(--ta-neutral-400);color:var(--ta-neutral-100)}.colors .color.is-light{color:var(--ta-text-primary)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { savedImage: [{
                type: Output
            }], _containerRef: [{
                type: ViewChild,
                args: ["containerRef"]
            }], _tuiRef: [{
                type: ViewChild,
                args: ["tuiRef"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZWRpdC9maWxlcy1lZGl0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9lZGl0L2ZpbGVzLWVkaXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBR1osTUFBTSxFQUNOLFNBQVMsRUFDVCxLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3pDLE9BQU8sRUFDTCxlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLFlBQVksRUFDWixPQUFPLEdBQ1IsTUFBTSxXQUFXLENBQUM7QUFFbkIsT0FBTyxXQUFXLE1BQU0sa0JBQWtCLENBQUM7O0FBbUIzQyxNQUFNLE9BQU8saUJBQ1gsU0FBUSxlQUFlO0lBcUR2QjtRQUNFLEtBQUssRUFBRSxDQUFDO1FBbkRWLGNBQVMsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFVLENBQUM7UUFFckMsZUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQW9CLENBQUM7UUFHaEQsZUFBVSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSXBELFVBQVU7UUFDSCxjQUFTLEdBQWMsRUFBRSxDQUFDO1FBQzFCLG1CQUFjLEdBQW1CLEVBQUUsQ0FBQztRQUVwQyxjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzlCLGNBQVMs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RSxJQUFJLENBQUMsU0FBUztnQkFDcEIsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQzthQUM3QjtTQUNGLENBQUM7SUFDSixDQUFDOytHQXRRVSxpQkFBaUI7bUdBQWpCLGlCQUFpQiwrbEJDMUM5QixnZ0tBd0lBLDRyQ0RwR0ksT0FBTyxvRkFDUCxpQkFBaUIsbUZBQ2pCLGVBQWUseUdBQ2YscUJBQXFCOzs0RkFHWixpQkFBaUI7a0JBZDdCLFNBQVM7K0JBQ0UsZUFBZSxjQUdiLElBQUksV0FDUDt3QkFDUCxJQUFJO3dCQUNKLEtBQUs7d0JBQ0wsT0FBTzt3QkFDUCxpQkFBaUI7d0JBQ2pCLGVBQWU7d0JBQ2YscUJBQXFCO3FCQUN0Qjt3REFXRCxVQUFVO3NCQURULE1BQU07Z0JBbUNDLGFBQWE7c0JBRHBCLFNBQVM7dUJBQUMsY0FBYztnQkFJakIsT0FBTztzQkFEZCxTQUFTO3VCQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBpbnB1dCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgTmdJZiwgTmdGb3IsIE5nQ2xhc3MgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBGb250SWNvbkNvbXBvbmVudCwgTWF0ZXJpYWxJY29uQ29tcG9uZW50IH0gZnJvbSBcIkB0YS9pY29uc1wiO1xuaW1wb3J0IHsgSW5wdXRTbGlkZXIgfSBmcm9tIFwiQHRhL2Zvcm0tbW9kZWxcIjtcbmltcG9ydCB7IExvYWRlckNvbXBvbmVudCB9IGZyb20gXCJAdGEvdWlcIjtcbmltcG9ydCB7XG4gIFRhQmFzZUNvbXBvbmVudCxcbiAgZGV0ZXJtaW5lTmV3U2l6ZSxcbiAgZ2V0QmxvYkltYWdlLFxuICBpc0xpZ2h0LFxufSBmcm9tIFwiQHRhL3V0aWxzXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCBJbWFnZUVkaXRvciBmcm9tIFwidHVpLWltYWdlLWVkaXRvclwiO1xuXG50eXBlIFNlbGVjdGlvbiA9IFwibGluZVwiIHwgXCJzaGFwZVwiIHwgXCJ0ZXh0XCIgfCBcIlwiO1xudHlwZSBTaGFwZVNlbGVjdGlvbiA9IFwicmVjdFwiIHwgXCJ0cmlhbmdsZVwiIHwgXCJjaXJjbGVcIiB8IFwibGluZVwiIHwgXCJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWZpbGVzLWVkaXRcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9maWxlcy1lZGl0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9maWxlcy1lZGl0LmNvbXBvbmVudC5zY3NzXCJdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTmdJZixcbiAgICBOZ0ZvcixcbiAgICBOZ0NsYXNzLFxuICAgIEZvbnRJY29uQ29tcG9uZW50LFxuICAgIExvYWRlckNvbXBvbmVudCxcbiAgICBNYXRlcmlhbEljb25Db21wb25lbnQsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVFZGl0Q29tcG9uZW50XG4gIGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3lcbntcbiAgaW1hZ2VQYXRoID0gaW5wdXQucmVxdWlyZWQ8c3RyaW5nPigpO1xuXG4gIHNhdmVJbWFnZSQgPSBpbnB1dC5yZXF1aXJlZDxPYnNlcnZhYmxlPG51bGw+PigpO1xuXG4gIEBPdXRwdXQoKVxuICBzYXZlZEltYWdlOiBFdmVudEVtaXR0ZXI8QmxvYj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIHR1aUltYWdlRWRpdG9yITogSW1hZ2VFZGl0b3I7XG5cbiAgLy8gY29udHJvbFxuICBwdWJsaWMgc2VsZWN0aW9uOiBTZWxlY3Rpb24gPSBcIlwiO1xuICBwdWJsaWMgc2hhcGVTZWxlY3Rpb246IFNoYXBlU2VsZWN0aW9uID0gXCJcIjtcblxuICBwdWJsaWMgY29sb3JIZXhhOiBzdHJpbmcgPSBcIiMwMDAwMDBcIjtcbiAgcHVibGljIGNvbG9yTGlzdDogc3RyaW5nW10gPSBbXG4gICAgXCIjZmYwZDAwXCIsXG4gICAgXCIjZmZhMjAwXCIsXG4gICAgXCIjZjRmZjFmXCIsXG4gICAgXCIjMzRlNjEwXCIsXG4gICAgXCIjMTQ3MDAxXCIsXG4gICAgXCIjMDBjYWQxXCIsXG4gICAgXCIjMDAzNGQxXCIsXG4gICAgXCIjM2QwMDllXCIsXG4gICAgXCIjMDAwMDAwXCIsXG4gICAgXCIjZmZmZmZmXCIsXG4gIF07XG5cbiAgcHVibGljIG9iamVjdEFjdGl2YXRlZCA9IG51bGw7XG5cbiAgcHVibGljIGJydXNoU2l6ZTogbnVtYmVyID0gMjA7XG4gIHB1YmxpYyBzbGlkZXIgPSBuZXcgSW5wdXRTbGlkZXIoe1xuICAgIGtleTogXCJzbGlkZXJcIixcbiAgICBjbGFzczogXCJ3LTEwMFwiLFxuICAgIG1heDogNTAsXG4gIH0pO1xuXG4gIHB1YmxpYyByZWFkb25seSBpc0xpZ2h0ID0gaXNMaWdodDtcblxuICBAVmlld0NoaWxkKFwiY29udGFpbmVyUmVmXCIpXG4gIHByaXZhdGUgX2NvbnRhaW5lclJlZiE6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIEBWaWV3Q2hpbGQoXCJ0dWlSZWZcIilcbiAgcHJpdmF0ZSBfdHVpUmVmITogRWxlbWVudFJlZjxIVE1MRGl2RWxlbWVudD47XG4gIHByaXZhdGUgX2NhbnZhc1NpemU6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSA9IHtcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gIH07XG5cbiAgcHJpdmF0ZSBfaW50b0RyYXdpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5zbGlkZXIudmFsdWUgPSB0aGlzLmJydXNoU2l6ZTtcbiAgICB0aGlzLnNsaWRlci5jcmVhdGVGb3JtQ29udHJvbCgpO1xuICAgIHRoaXMuc2xpZGVyLmNoYW5nZVZhbHVlJC5zdWJzY3JpYmUoKHZhbHVlKSA9PlxuICAgICAgdGhpcy5jaGFuZ2VCcnVzaFNpemUodmFsdWUgPz8gMClcbiAgICApO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmtleVByZXNzKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnN0IHNhdmVJbWFnZSA9IHRoaXMuc2F2ZUltYWdlJCgpO1xuICAgIGlmIChzYXZlSW1hZ2UpIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgICBzYXZlSW1hZ2Uuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICB0aGlzLm9uU2F2ZUNsaWNrKCk7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIG92ZXJyaWRlIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5rZXlQcmVzcyk7XG5cbiAgICB0aGlzLnR1aUltYWdlRWRpdG9yLmRlc3Ryb3koKTtcbiAgfVxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2NyZWF0ZUltYWdlRWRpdG9yKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGVpZ2h0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuX2NhbnZhc1NpemUuaGVpZ2h0fXB4YDtcbiAgfVxuICBwdWJsaWMgZ2V0V2lkdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fY2FudmFzU2l6ZS53aWR0aH1weGA7XG4gIH1cblxuICBwdWJsaWMga2V5UHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIHRoaXMuX3N0b3BEcmF3aW5nKCk7XG4gICAgfVxuICB9XG4gIC8vIGNvbnRyb2xcbiAgcHVibGljIHNob3dQYW5lbCgpIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24gIT09IFwiXCIgJiYgIXRoaXMuX2ludG9EcmF3aW5nO1xuICB9XG4gIHB1YmxpYyBjaGFuZ2VTZWxlY3Rpb24obmV3U2VsZWN0aW9uOiBTZWxlY3Rpb24pIHtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ld1NlbGVjdGlvbjtcbiAgICB0aGlzLl9pbnRvRHJhd2luZyA9IGZhbHNlO1xuXG4gICAgaWYgKCF0aGlzLnNlbGVjdGlvbikge1xuICAgICAgdGhpcy5fc3RvcERyYXdpbmcoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3Rpb24gPT09IFwibGluZVwiKSB7XG4gICAgICB0aGlzLmRyYXdpbmcoXCJGUkVFX0RSQVdJTkdcIik7XG4gICAgICB0aGlzLmNoYW5nZVNoYXBlU2VsZWN0aW9uKFwiXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3Rpb24gPT09IFwic2hhcGVcIikge1xuICAgICAgaWYgKCF0aGlzLnNoYXBlU2VsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlU2hhcGVTZWxlY3Rpb24oXCJsaW5lXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3Rpb24gPT09IFwidGV4dFwiKSB7XG4gICAgICB0aGlzLnRleHQoKTtcbiAgICAgIHRoaXMuY2hhbmdlU2hhcGVTZWxlY3Rpb24oXCJcIik7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgcHVibGljIGNoYW5nZVNoYXBlU2VsZWN0aW9uKG5ld1NlbGVjdGlvbjogU2hhcGVTZWxlY3Rpb24pIHtcbiAgICB0aGlzLnNoYXBlU2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uO1xuXG4gICAgaWYgKCF0aGlzLnNoYXBlU2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnNoYXBlU2VsZWN0aW9uID09PSBcImxpbmVcIikge1xuICAgICAgdGhpcy5kcmF3aW5nKFwiTElORV9EUkFXSU5HXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hhcGUodGhpcy5zaGFwZVNlbGVjdGlvbik7XG4gIH1cblxuICBwdWJsaWMgdW5kbygpIHtcbiAgICB0aGlzLnR1aUltYWdlRWRpdG9yLmRpc2NhcmRTZWxlY3Rpb24oKTtcbiAgICB0aGlzLnR1aUltYWdlRWRpdG9yLnVuZG8oKTtcbiAgfVxuICBwdWJsaWMgcmVkbygpIHtcbiAgICB0aGlzLnR1aUltYWdlRWRpdG9yLmRpc2NhcmRTZWxlY3Rpb24oKTtcbiAgICB0aGlzLnR1aUltYWdlRWRpdG9yLnJlZG8oKTtcbiAgfVxuXG4gIHB1YmxpYyBzaGFwZSh0eXBlOiBcInJlY3RcIiB8IFwiY2lyY2xlXCIgfCBcInRyaWFuZ2xlXCIpIHtcbiAgICB0aGlzLl9zdG9wRHJhd2luZygpO1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3Iuc2V0RHJhd2luZ1NoYXBlKHR5cGUsIHRoaXMuX2dldFNldHRpbmdzKCkpO1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3Iuc3RhcnREcmF3aW5nTW9kZShcIlNIQVBFXCIpO1xuICB9XG5cbiAgcHVibGljIGRyYXdpbmcodHlwZTogXCJMSU5FX0RSQVdJTkdcIiB8IFwiRlJFRV9EUkFXSU5HXCIpIHtcbiAgICB0aGlzLl9zdG9wRHJhd2luZygpO1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3Iuc3RhcnREcmF3aW5nTW9kZSh0eXBlLCB0aGlzLl9nZXRTZXR0aW5ncygpKTtcbiAgfVxuXG4gIHB1YmxpYyB0ZXh0KCkge1xuICAgIHRoaXMuX3N0b3BEcmF3aW5nKCk7XG4gICAgdGhpcy50dWlJbWFnZUVkaXRvci5zdGFydERyYXdpbmdNb2RlKFwiVEVYVFwiLCB0aGlzLl9nZXRTZXR0aW5ncygpKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5jb2xvckhleGEgPSBjb2xvcjtcbiAgICB0aGlzLl9yZWZsb3coKTtcbiAgfVxuICBwdWJsaWMgY2hhbmdlQnJ1c2hTaXplKHNpemU6IG51bWJlcikge1xuICAgIHRoaXMuYnJ1c2hTaXplID0gc2l6ZTtcbiAgICB0aGlzLl9yZWZsb3coKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICBpZiAodGhpcy5vYmplY3RBY3RpdmF0ZWQpIHtcbiAgICAgIHRoaXMudHVpSW1hZ2VFZGl0b3IucmVtb3ZlQWN0aXZlT2JqZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5vblNhdmVDbGljaygpO1xuICB9XG4gIHB1YmxpYyBvblNhdmVDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICB0aGlzLnJlcXVlc3RTdGF0ZS5hc2tlZCgpO1xuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMudHVpSW1hZ2VFZGl0b3IudG9EYXRhVVJMKHtcbiAgICAgIGZvcm1hdDogXCJwbmdcIixcbiAgICAgIHF1YWxpdHk6IDAuNCxcbiAgICB9KTtcblxuICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBnZXRCbG9iSW1hZ2UoZGF0YSk7XG4gICAgdGhpcy5zYXZlZEltYWdlLmVtaXQoYmxvYik7XG5cbiAgICB0aGlzLnJlcXVlc3RTdGF0ZS5jb21wbGV0ZWQoKTtcbiAgfTtcbiAgcHJpdmF0ZSBhc3luYyBfY3JlYXRlSW1hZ2VFZGl0b3IoKSB7XG4gICAgdGhpcy50dWlJbWFnZUVkaXRvciA9IG5ldyBJbWFnZUVkaXRvcih0aGlzLl90dWlSZWYubmF0aXZlRWxlbWVudCwge1xuICAgICAgdXNhZ2VTdGF0aXN0aWNzOiBmYWxzZSxcbiAgICB9KTtcbiAgICBjb25zdCBjcm9wID0gYXdhaXQgdGhpcy50dWlJbWFnZUVkaXRvci5sb2FkSW1hZ2VGcm9tVVJMKFxuICAgICAgdGhpcy5pbWFnZVBhdGgoKSxcbiAgICAgIFwiZGVmYXVsdFwiXG4gICAgKTtcbiAgICB0aGlzLl9jYW52YXNTaXplID0gZGV0ZXJtaW5lTmV3U2l6ZShcbiAgICAgIGNyb3AubmV3SGVpZ2h0LFxuICAgICAgY3JvcC5uZXdXaWR0aCxcbiAgICAgIHRoaXMuX2NvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgdGhpcy5fY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gNzBcbiAgICApO1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3IucmVzaXplQ2FudmFzRGltZW5zaW9uKHtcbiAgICAgIHdpZHRoOiB0aGlzLl9jYW52YXNTaXplLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLl9jYW52YXNTaXplLmhlaWdodCxcbiAgICB9KTtcbiAgICB0aGlzLnR1aUltYWdlRWRpdG9yLm9uKFwibW91c2Vkb3duXCIsICgpID0+IHtcbiAgICAgIHRoaXMuX2ludG9EcmF3aW5nID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB0aGlzLnR1aUltYWdlRWRpdG9yLm9uKFwib2JqZWN0QWN0aXZhdGVkXCIsIChkYXRhOiBhbnkpID0+IHtcbiAgICAgIHRoaXMub2JqZWN0QWN0aXZhdGVkID0gZGF0YTtcbiAgICB9KTtcbiAgICB0aGlzLnR1aUltYWdlRWRpdG9yLm9uKFwiYWRkVGV4dFwiLCAocG9zOiBhbnkpID0+IHtcbiAgICAgIHRoaXMudHVpSW1hZ2VFZGl0b3IuYWRkVGV4dChcIlRFWFRFXCIsIHtcbiAgICAgICAgLi4udGhpcy5fZ2V0U2V0dGluZ3MoKSxcbiAgICAgICAgLi4ueyBwb3NpdGlvbjogcG9zLm9yaWdpblBvc2l0aW9uIH0sXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0b3BEcmF3aW5nKCkge1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3Iuc3RvcERyYXdpbmdNb2RlKCk7XG4gICAgdGhpcy5vYmplY3RBY3RpdmF0ZWQgPSBudWxsO1xuICB9XG4gIHByaXZhdGUgX3JlZmxvdygpIHtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24gPT09IFwibGluZVwiKSB7XG4gICAgICB0aGlzLnR1aUltYWdlRWRpdG9yLnNldEJydXNoKHtcbiAgICAgICAgY29sb3I6IHRoaXMuY29sb3JIZXhhLFxuICAgICAgICB3aWR0aDogdGhpcy5icnVzaFNpemUsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3Rpb24gPT09IFwic2hhcGVcIikge1xuICAgICAgdGhpcy5fc3RvcERyYXdpbmcoKTtcbiAgICAgIHRoaXMuY2hhbmdlU2hhcGVTZWxlY3Rpb24odGhpcy5zaGFwZVNlbGVjdGlvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2dldFNldHRpbmdzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjogdGhpcy5jb2xvckhleGEsXG4gICAgICB3aWR0aDogdGhpcy5icnVzaFNpemUsXG4gICAgICBmaWxsOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICBzdHJva2U6IHRoaXMuY29sb3JIZXhhLFxuICAgICAgc3Ryb2tlV2lkdGg6IHRoaXMuYnJ1c2hTaXplLFxuICAgICAgc3R5bGVzOiB7XG4gICAgICAgIGZpbGw6IHRoaXMuY29sb3JIZXhhLFxuICAgICAgICBmb250U2l6ZTogdGhpcy5icnVzaFNpemUgKiA4LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZWRpdFwiICNjb250YWluZXJSZWY+XG4gIDxkaXZcbiAgICAjdHVpUmVmXG4gICAgW3N0eWxlLmhlaWdodF09XCJ0aGlzLmdldEhlaWdodCgpXCJcbiAgICBbc3R5bGUud2lkdGhdPVwidGhpcy5nZXRXaWR0aCgpXCJcbiAgICBjbGFzcz1cIm0tYSBpbWFnZS1jb250YWluZXJcIlxuICA+PC9kaXY+XG5cbiAgPHRhLWxvYWRlciBbaXNMb2FkaW5nXT1cInRoaXMucmVxdWVzdFN0YXRlLmlzTG9hZGluZygpXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIj5cbiAgICAgIEBpZiAodGhpcy5zaG93UGFuZWwoKSkge1xuICAgICAgPGRpdiBjbGFzcz1cInBhbmVsXCI+XG4gICAgICAgIEBpZiAodGhpcy5zZWxlY3Rpb24gPT09ICdsaW5lJykge1xuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiUmFuZ2VcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiQ29sb3JzXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgfSBAZWxzZSBpZiAodGhpcy5zZWxlY3Rpb24gPT09ICdzaGFwZScpIHtcbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBnLTAgc2hhcGUtc2VsZWN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLmNoYW5nZVNoYXBlU2VsZWN0aW9uKCdyZWN0JylcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtXCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyBzZWxlY3RlZDogdGhpcy5zaGFwZVNlbGVjdGlvbiA9PT0gJ3JlY3QnIH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGEtbWF0ZXJpYWwtaWNvbiB0eXBlPVwic21cIlxuICAgICAgICAgICAgICAgID5jaGVja19ib3hfb3V0bGluZV9ibGFuazwvdGEtbWF0ZXJpYWwtaWNvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgKGNsaWNrKT1cInRoaXMuY2hhbmdlU2hhcGVTZWxlY3Rpb24oJ3RyaWFuZ2xlJylcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3M9XCJpdGVtXCJcbiAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyBzZWxlY3RlZDogdGhpcy5zaGFwZVNlbGVjdGlvbiA9PT0gJ3RyaWFuZ2xlJyB9XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRhLW1hdGVyaWFsLWljb24gdHlwZT1cInNtXCI+Y2hhbmdlX2hpc3Rvcnk8L3RhLW1hdGVyaWFsLWljb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgKGNsaWNrKT1cInRoaXMuY2hhbmdlU2hhcGVTZWxlY3Rpb24oJ2NpcmNsZScpXCI+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiaXRlbVwiXG4gICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsgc2VsZWN0ZWQ6IHRoaXMuc2hhcGVTZWxlY3Rpb24gPT09ICdjaXJjbGUnIH1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGEtbWF0ZXJpYWwtaWNvbiB0eXBlPVwic21cIj5jaXJjbGU8L3RhLW1hdGVyaWFsLWljb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgKGNsaWNrKT1cInRoaXMuY2hhbmdlU2hhcGVTZWxlY3Rpb24oJ2xpbmUnKVwiPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cIml0ZW1cIlxuICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7IHNlbGVjdGVkOiB0aGlzLnNoYXBlU2VsZWN0aW9uID09PSAnbGluZScgfVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0YS1tYXRlcmlhbC1pY29uIHR5cGU9XCJzbVwiPnN0cmFpZ2h0ZW48L3RhLW1hdGVyaWFsLWljb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJSYW5nZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJDb2xvcnNcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICB9IEBlbHNlIGlmICh0aGlzLnNlbGVjdGlvbiA9PT0gJ3RleHQnKSB7XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJSYW5nZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJDb2xvcnNcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIH1cblxuICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdGlvbiByb3cgZy0wXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiAoY2xpY2spPVwidGhpcy5jaGFuZ2VTZWxlY3Rpb24oJycpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIiBbbmdDbGFzc109XCJ7IHNlbGVjdGVkOiB0aGlzLnNlbGVjdGlvbiA9PT0gJycgfVwiPlxuICAgICAgICAgICAgPHRhLW1hdGVyaWFsLWljb24gdHlwZT1cInNtXCI+cGFuX3Rvb2w8L3RhLW1hdGVyaWFsLWljb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgKGNsaWNrKT1cInRoaXMuY2hhbmdlU2VsZWN0aW9uKCdsaW5lJylcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIFtuZ0NsYXNzXT1cInsgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0aW9uID09PSAnbGluZScgfVwiPlxuICAgICAgICAgICAgPHRhLW1hdGVyaWFsLWljb24gdHlwZT1cInNtXCI+ZHJhdzwvdGEtbWF0ZXJpYWwtaWNvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiAoY2xpY2spPVwidGhpcy5jaGFuZ2VTZWxlY3Rpb24oJ3NoYXBlJylcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cIml0ZW1cIlxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieyBzZWxlY3RlZDogdGhpcy5zZWxlY3Rpb24gPT09ICdzaGFwZScgfVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHRhLW1hdGVyaWFsLWljb24gdHlwZT1cInNtXCI+aW50ZXJlc3RzPC90YS1tYXRlcmlhbC1pY29uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLmNoYW5nZVNlbGVjdGlvbigndGV4dCcpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIiBbbmdDbGFzc109XCJ7IHNlbGVjdGVkOiB0aGlzLnNlbGVjdGlvbiA9PT0gJ3RleHQnIH1cIj5cbiAgICAgICAgICAgIDx0YS1tYXRlcmlhbC1pY29uIHR5cGU9XCJzbVwiPnRleHRfZmllbGRzPC90YS1tYXRlcmlhbC1pY29uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLmNsZWFyKClcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIFtuZ0NsYXNzXT1cInsgZGlzYWJsZWQ6ICF0aGlzLm9iamVjdEFjdGl2YXRlZCB9XCI+XG4gICAgICAgICAgICA8dGEtbWF0ZXJpYWwtaWNvbiB0eXBlPVwic21cIj5kZWxldGU8L3RhLW1hdGVyaWFsLWljb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNlcGFyYXRvclwiPjwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLnVuZG8oKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICA8dGEtbWF0ZXJpYWwtaWNvbiB0eXBlPVwic21cIj51bmRvPC90YS1tYXRlcmlhbC1pY29uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLnJlZG8oKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICA8dGEtbWF0ZXJpYWwtaWNvbiB0eXBlPVwic21cIj5yZWRvPC90YS1tYXRlcmlhbC1pY29uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzZXBhcmF0b3JcIj48L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiAoY2xpY2spPVwidGhpcy52YWxpZGF0aW9uKClcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBjb2xvci1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8dGEtZm9udC1pY29uIG5hbWU9XCJjaGVjay1saW5lXCI+PC90YS1mb250LWljb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvdGEtbG9hZGVyPlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjQ29sb3JzPlxuICA8ZGl2IGNsYXNzPVwiY29sb3JzXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBnLTBcIj5cbiAgICAgIEBmb3IgKGNvbG9yIG9mIHRoaXMuY29sb3JMaXN0OyB0cmFjayBjb2xvcikge1xuICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLmNoYW5nZUNvbG9yKGNvbG9yKVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJjb2xvclwiXG4gICAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sb3JcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cInsgJ2lzLWxpZ2h0JzogdGhpcy5pc0xpZ2h0KGNvbG9yKSB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIEBpZiAodGhpcy5jb2xvckhleGEgPT09IGNvbG9yKSB7XG4gICAgICAgICAgPHRhLW1hdGVyaWFsLWljb24gW3R5cGVdPVwiJ3NtJ1wiPmRvbmU8L3RhLW1hdGVyaWFsLWljb24+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI1JhbmdlPlxuICA8ZGl2IGNsYXNzPVwicmFuZ2VcIj5cbiAgICA8IS0tIDx0YS1pbnB1dC1zbGlkZXIgW2lucHV0XT1cInRoaXMuc2xpZGVyXCI+PC90YS1pbnB1dC1zbGlkZXI+IC0tPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=