import { Component, EventEmitter, Input, Output, ViewChild, } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { FontIconComponent, MaterialIconComponent } from '@ta/icons';
import { InputSlider } from '@ta/form-model';
import { LoaderComponent } from '@ta/ui';
import { TaBaseComponent, determineNewSize, getBlobImage, isLight } from '@ta/utils';
import ImageEditor from 'tui-image-editor';
import * as i0 from "@angular/core";
export class FileEditComponent extends TaBaseComponent {
    constructor() {
        super();
        this.savedImage = new EventEmitter();
        // control
        this.selection = '';
        this.shapeSelection = '';
        this.colorHexa = '#000000';
        this.colorList = [
            '#ff0d00',
            '#ffa200',
            '#f4ff1f',
            '#34e610',
            '#147001',
            '#00cad1',
            '#0034d1',
            '#3d009e',
            '#000000',
            '#ffffff',
        ];
        this.objectActivated = null;
        this.brushSize = 20;
        this.slider = new InputSlider({
            key: 'slider',
            class: 'w-100',
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
                format: 'png',
                quality: 0.4,
            });
            const blob = await getBlobImage(data);
            this.savedImage.emit(blob);
            this.requestState.completed();
        };
        this.slider.value = this.brushSize;
        this.slider.createFormControl();
        this.slider.changeValue$.subscribe(value => this.changeBrushSize(value ?? 0));
        window.addEventListener('keyup', this.keyPress);
    }
    ngOnInit() {
        if (this.saveImage$) {
            this._registerSubscription(this.saveImage$.subscribe(() => {
                this.onSaveClick();
            }));
        }
    }
    ngOnDestroy() {
        window.removeEventListener('keyup', this.keyPress);
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
        if (event.key === 'Enter') {
            this._stopDrawing();
        }
    }
    // control
    showPanel() {
        return this.selection !== '' && !this._intoDrawing;
    }
    changeSelection(newSelection) {
        this.selection = newSelection;
        this._intoDrawing = false;
        if (!this.selection) {
            this._stopDrawing();
            return;
        }
        if (this.selection === 'line') {
            this.drawing('FREE_DRAWING');
            this.changeShapeSelection('');
            return;
        }
        if (this.selection === 'shape') {
            if (!this.shapeSelection) {
                this.changeShapeSelection('line');
            }
            return;
        }
        if (this.selection === 'text') {
            this.text();
            this.changeShapeSelection('');
            return;
        }
    }
    changeShapeSelection(newSelection) {
        this.shapeSelection = newSelection;
        if (!this.shapeSelection) {
            return;
        }
        if (this.shapeSelection === 'line') {
            this.drawing('LINE_DRAWING');
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
        this.tuiImageEditor.startDrawingMode('SHAPE');
    }
    drawing(type) {
        this._stopDrawing();
        this.tuiImageEditor.startDrawingMode(type, this._getSettings());
    }
    text() {
        this._stopDrawing();
        this.tuiImageEditor.startDrawingMode('TEXT', this._getSettings());
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
        const crop = await this.tuiImageEditor.loadImageFromURL(this.imagePath, 'default');
        this._canvasSize = determineNewSize(crop.newHeight, crop.newWidth, this._containerRef.nativeElement.clientWidth, this._containerRef.nativeElement.clientHeight - 70);
        this.tuiImageEditor.resizeCanvasDimension({
            width: this._canvasSize.width,
            height: this._canvasSize.height,
        });
        this.tuiImageEditor.on('mousedown', () => {
            this._intoDrawing = true;
        });
        this.tuiImageEditor.on('objectActivated', (data) => {
            this.objectActivated = data;
        });
        this.tuiImageEditor.on('addText', (pos) => {
            this.tuiImageEditor.addText('TEXTE', {
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
        if (this.selection === 'line') {
            this.tuiImageEditor.setBrush({
                color: this.colorHexa,
                width: this.brushSize,
            });
            return;
        }
        if (this.selection === 'shape') {
            this._stopDrawing();
            this.changeShapeSelection(this.shapeSelection);
            return;
        }
    }
    _getSettings() {
        return {
            color: this.colorHexa,
            width: this.brushSize,
            fill: 'transparent',
            stroke: this.colorHexa,
            strokeWidth: this.brushSize,
            styles: {
                fill: this.colorHexa,
                fontSize: this.brushSize * 8,
            },
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FileEditComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: FileEditComponent, isStandalone: true, selector: "ta-files-edit", inputs: { imagePath: "imagePath", saveImage$: "saveImage$" }, outputs: { savedImage: "savedImage" }, viewQueries: [{ propertyName: "_containerRef", first: true, predicate: ["containerRef"], descendants: true }, { propertyName: "_tuiRef", first: true, predicate: ["tuiRef"], descendants: true }], usesInheritance: true, ngImport: i0, template: "<div class=\"edit\" #containerRef>\n  <div #tuiRef [style.height]=\"this.getHeight()\" [style.width]=\"this.getWidth()\" class=\"m-a image-container\"></div>\n\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <div class=\"control\">\n      @if (this.showPanel()) {\n        <div class=\"panel\">\n          @if (this.selection === 'line') {\n            <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n            <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n          } @else if (this.selection === 'shape') {\n            <div class=\"row g-0 shape-selection\">\n              <div class=\"col\" (click)=\"this.changeShapeSelection('rect')\">\n                <div class=\"item\" [ngClass]=\"{ selected: this.shapeSelection === 'rect' }\">\n                  <ta-material-icon type=\"sm\">check_box_outline_blank</ta-material-icon>\n                </div>\n              </div>\n              <div class=\"col\" (click)=\"this.changeShapeSelection('triangle')\">\n                <div class=\"item\" [ngClass]=\"{ selected: this.shapeSelection === 'triangle' }\">\n                  <ta-material-icon type=\"sm\">change_history</ta-material-icon>\n                </div>\n              </div>\n              <div class=\"col\" (click)=\"this.changeShapeSelection('circle')\">\n                <div class=\"item\" [ngClass]=\"{ selected: this.shapeSelection === 'circle' }\">\n                  <ta-material-icon type=\"sm\">circle</ta-material-icon>\n                </div>\n              </div>\n              <div class=\"col\" (click)=\"this.changeShapeSelection('line')\">\n                <div class=\"item\" [ngClass]=\"{ selected: this.shapeSelection === 'line' }\">\n                  <ta-material-icon type=\"sm\">straighten</ta-material-icon>\n                </div>\n              </div>\n            </div>\n            <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n            <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n          } @else if (this.selection === 'text') {\n            <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n            <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n          }\n        </div>\n      }\n\n      <div class=\"selection row g-0\">\n        <div class=\"col\" (click)=\"this.changeSelection('')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === '' }\">\n            <ta-material-icon type=\"sm\">pan_tool</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('line')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === 'line' }\">\n            <ta-material-icon type=\"sm\">draw</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('shape')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === 'shape' }\">\n            <ta-material-icon type=\"sm\">interests</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('text')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === 'text' }\">\n            <ta-material-icon type=\"sm\">text_fields</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.clear()\">\n          <div class=\"item\" [ngClass]=\"{ disabled: !this.objectActivated }\">\n            <ta-material-icon type=\"sm\">delete</ta-material-icon>\n          </div>\n        </div>\n        <span class=\"separator\"></span>\n        <div class=\"col\" (click)=\"this.undo()\">\n          <div class=\"item\">\n            <ta-material-icon type=\"sm\">undo</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.redo()\">\n          <div class=\"item\">\n            <ta-material-icon type=\"sm\">redo</ta-material-icon>\n          </div>\n        </div>\n        <span class=\"separator\"></span>\n        <div class=\"col\" (click)=\"this.validation()\">\n          <div class=\"item color-success\">\n            <ta-font-icon name=\"check-line\"></ta-font-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ta-loader>\n</div>\n\n<ng-template #Colors>\n  <div class=\"colors\">\n    <div class=\"row g-0\">\n      @for (color of this.colorList; track color) {\n        <div class=\"col\" (click)=\"this.changeColor(color)\">\n          <div class=\"color\" [style.background-color]=\"color\" [ngClass]=\"{ 'is-light': this.isLight(color) }\">\n            @if (this.colorHexa === color) {\n              <ta-material-icon [type]=\"'sm'\">done</ta-material-icon>\n            }\n          </div>\n        </div>\n      }\n    </div>\n  </div>\n</ng-template>\n<ng-template #Range>\n  <div class=\"range\">\n    <!-- <ta-input-slider [input]=\"this.slider\"></ta-input-slider> -->\n  </div>\n</ng-template>\n", styles: [".edit{position:relative;height:100%;display:flex;padding-bottom:70px;background-color:var(--ta-neutral-main)}.edit .image-container{display:flex;vertical-align:center}.control{border-top:1px solid var(--ta-neutral-400);background-color:var(--ta-neutral-100);padding:10px 20px;position:absolute;bottom:0;left:0;right:0}.control .item{width:20px;height:20px;border-radius:50%;padding:10px;margin:auto}.control .item.selected{background-color:var(--ta-surface-brand-primary);color:var(--ta-neutral-100)}.control .item.disabled{opacity:.5}.control .selection{border:1px solid var(--ta-neutral-400);margin:auto;padding:5px;border-radius:30px;text-align:center}.control .selection .separator{border:1px solid var(--ta-neutral-400);padding:0;width:0}.control .shape-selection{margin:5px 50px}.control .panel{margin-bottom:10px}.range{border:1px solid var(--ta-neutral-400);border-radius:20px;padding:3px 10px;margin-top:5px}.colors{text-align:center;margin:auto}.colors .color{height:24px;width:24px;border-radius:50%;margin:5px auto auto;border:1px solid var(--ta-neutral-400);color:var(--ta-neutral-100)}.colors .color.is-light{color:var(--ta-text-primary)}\n"], dependencies: [{ kind: "directive", type: NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: FontIconComponent, selector: "ta-font-icon", inputs: ["name", "type"] }, { kind: "component", type: LoaderComponent, selector: "ta-loader", inputs: ["isLoading", "skeleton"] }, { kind: "component", type: MaterialIconComponent, selector: "ta-material-icon", inputs: ["outline", "sharp", "round", "dualTone", "type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: FileEditComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-files-edit', standalone: true, imports: [NgIf, NgFor, NgClass, FontIconComponent, LoaderComponent, MaterialIconComponent], template: "<div class=\"edit\" #containerRef>\n  <div #tuiRef [style.height]=\"this.getHeight()\" [style.width]=\"this.getWidth()\" class=\"m-a image-container\"></div>\n\n  <ta-loader [isLoading]=\"this.requestState.isLoading()\">\n    <div class=\"control\">\n      @if (this.showPanel()) {\n        <div class=\"panel\">\n          @if (this.selection === 'line') {\n            <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n            <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n          } @else if (this.selection === 'shape') {\n            <div class=\"row g-0 shape-selection\">\n              <div class=\"col\" (click)=\"this.changeShapeSelection('rect')\">\n                <div class=\"item\" [ngClass]=\"{ selected: this.shapeSelection === 'rect' }\">\n                  <ta-material-icon type=\"sm\">check_box_outline_blank</ta-material-icon>\n                </div>\n              </div>\n              <div class=\"col\" (click)=\"this.changeShapeSelection('triangle')\">\n                <div class=\"item\" [ngClass]=\"{ selected: this.shapeSelection === 'triangle' }\">\n                  <ta-material-icon type=\"sm\">change_history</ta-material-icon>\n                </div>\n              </div>\n              <div class=\"col\" (click)=\"this.changeShapeSelection('circle')\">\n                <div class=\"item\" [ngClass]=\"{ selected: this.shapeSelection === 'circle' }\">\n                  <ta-material-icon type=\"sm\">circle</ta-material-icon>\n                </div>\n              </div>\n              <div class=\"col\" (click)=\"this.changeShapeSelection('line')\">\n                <div class=\"item\" [ngClass]=\"{ selected: this.shapeSelection === 'line' }\">\n                  <ta-material-icon type=\"sm\">straighten</ta-material-icon>\n                </div>\n              </div>\n            </div>\n            <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n            <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n          } @else if (this.selection === 'text') {\n            <ng-template [ngTemplateOutlet]=\"Range\"></ng-template>\n            <ng-template [ngTemplateOutlet]=\"Colors\"></ng-template>\n          }\n        </div>\n      }\n\n      <div class=\"selection row g-0\">\n        <div class=\"col\" (click)=\"this.changeSelection('')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === '' }\">\n            <ta-material-icon type=\"sm\">pan_tool</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('line')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === 'line' }\">\n            <ta-material-icon type=\"sm\">draw</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('shape')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === 'shape' }\">\n            <ta-material-icon type=\"sm\">interests</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.changeSelection('text')\">\n          <div class=\"item\" [ngClass]=\"{ selected: this.selection === 'text' }\">\n            <ta-material-icon type=\"sm\">text_fields</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.clear()\">\n          <div class=\"item\" [ngClass]=\"{ disabled: !this.objectActivated }\">\n            <ta-material-icon type=\"sm\">delete</ta-material-icon>\n          </div>\n        </div>\n        <span class=\"separator\"></span>\n        <div class=\"col\" (click)=\"this.undo()\">\n          <div class=\"item\">\n            <ta-material-icon type=\"sm\">undo</ta-material-icon>\n          </div>\n        </div>\n        <div class=\"col\" (click)=\"this.redo()\">\n          <div class=\"item\">\n            <ta-material-icon type=\"sm\">redo</ta-material-icon>\n          </div>\n        </div>\n        <span class=\"separator\"></span>\n        <div class=\"col\" (click)=\"this.validation()\">\n          <div class=\"item color-success\">\n            <ta-font-icon name=\"check-line\"></ta-font-icon>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ta-loader>\n</div>\n\n<ng-template #Colors>\n  <div class=\"colors\">\n    <div class=\"row g-0\">\n      @for (color of this.colorList; track color) {\n        <div class=\"col\" (click)=\"this.changeColor(color)\">\n          <div class=\"color\" [style.background-color]=\"color\" [ngClass]=\"{ 'is-light': this.isLight(color) }\">\n            @if (this.colorHexa === color) {\n              <ta-material-icon [type]=\"'sm'\">done</ta-material-icon>\n            }\n          </div>\n        </div>\n      }\n    </div>\n  </div>\n</ng-template>\n<ng-template #Range>\n  <div class=\"range\">\n    <!-- <ta-input-slider [input]=\"this.slider\"></ta-input-slider> -->\n  </div>\n</ng-template>\n", styles: [".edit{position:relative;height:100%;display:flex;padding-bottom:70px;background-color:var(--ta-neutral-main)}.edit .image-container{display:flex;vertical-align:center}.control{border-top:1px solid var(--ta-neutral-400);background-color:var(--ta-neutral-100);padding:10px 20px;position:absolute;bottom:0;left:0;right:0}.control .item{width:20px;height:20px;border-radius:50%;padding:10px;margin:auto}.control .item.selected{background-color:var(--ta-surface-brand-primary);color:var(--ta-neutral-100)}.control .item.disabled{opacity:.5}.control .selection{border:1px solid var(--ta-neutral-400);margin:auto;padding:5px;border-radius:30px;text-align:center}.control .selection .separator{border:1px solid var(--ta-neutral-400);padding:0;width:0}.control .shape-selection{margin:5px 50px}.control .panel{margin-bottom:10px}.range{border:1px solid var(--ta-neutral-400);border-radius:20px;padding:3px 10px;margin-top:5px}.colors{text-align:center;margin:auto}.colors .color{height:24px;width:24px;border-radius:50%;margin:5px auto auto;border:1px solid var(--ta-neutral-400);color:var(--ta-neutral-100)}.colors .color.is-light{color:var(--ta-text-primary)}\n"] }]
        }], ctorParameters: () => [], propDecorators: { imagePath: [{
                type: Input
            }], saveImage$: [{
                type: Input
            }], savedImage: [{
                type: Output
            }], _containerRef: [{
                type: ViewChild,
                args: ['containerRef']
            }], _tuiRef: [{
                type: ViewChild,
                args: ['tuiRef']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZXMtZWRpdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZWRpdC9maWxlcy1lZGl0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9lZGl0L2ZpbGVzLWVkaXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFFVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVyRixPQUFPLFdBQVcsTUFBTSxrQkFBa0IsQ0FBQzs7QUFZM0MsTUFBTSxPQUFPLGlCQUFrQixTQUFRLGVBQWU7SUFxRHBEO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUE5Q1YsZUFBVSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSXBELFVBQVU7UUFDSCxjQUFTLEdBQWMsRUFBRSxDQUFDO1FBQzFCLG1CQUFjLEdBQW1CLEVBQUUsQ0FBQztRQUVwQyxjQUFTLEdBQVcsU0FBUyxDQUFDO1FBQzlCLGNBQVMsR0FBYTtZQUMzQixTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FB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aTFKQThHQSw0ckNEbEZ5QixPQUFPLG9GQUFFLGlCQUFpQixtRkFBRSxlQUFlLHlGQUFFLHFCQUFxQjs7NEZBRTlFLGlCQUFpQjtrQkFQN0IsU0FBUzsrQkFDQSxlQUFlLGNBR1gsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLHFCQUFxQixDQUFDO3dEQUkxRixTQUFTO3NCQURSLEtBQUs7Z0JBSU4sVUFBVTtzQkFEVCxLQUFLO2dCQUlOLFVBQVU7c0JBRFQsTUFBTTtnQkFtQ0MsYUFBYTtzQkFEcEIsU0FBUzt1QkFBQyxjQUFjO2dCQUlqQixPQUFPO3NCQURkLFNBQVM7dUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmdJZiwgTmdGb3IsIE5nQ2xhc3MgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9udEljb25Db21wb25lbnQsIE1hdGVyaWFsSWNvbkNvbXBvbmVudCB9IGZyb20gJ0B0YS9pY29ucyc7XG5pbXBvcnQgeyBJbnB1dFNsaWRlciB9IGZyb20gJ0B0YS9mb3JtLW1vZGVsJztcbmltcG9ydCB7IExvYWRlckNvbXBvbmVudCB9IGZyb20gJ0B0YS91aSc7XG5pbXBvcnQgeyBUYUJhc2VDb21wb25lbnQsIGRldGVybWluZU5ld1NpemUsIGdldEJsb2JJbWFnZSwgaXNMaWdodCB9IGZyb20gJ0B0YS91dGlscyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgSW1hZ2VFZGl0b3IgZnJvbSAndHVpLWltYWdlLWVkaXRvcic7XG5cbnR5cGUgU2VsZWN0aW9uID0gJ2xpbmUnIHwgJ3NoYXBlJyB8ICd0ZXh0JyB8ICcnO1xudHlwZSBTaGFwZVNlbGVjdGlvbiA9ICdyZWN0JyB8ICd0cmlhbmdsZScgfCAnY2lyY2xlJyB8ICdsaW5lJyB8ICcnO1xuXG5AQ29tcG9uZW50KHtcbnNlbGVjdG9yOiAndGEtZmlsZXMtZWRpdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9maWxlcy1lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZmlsZXMtZWRpdC5jb21wb25lbnQuc2NzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgTmdGb3IsIE5nQ2xhc3MsIEZvbnRJY29uQ29tcG9uZW50LCBMb2FkZXJDb21wb25lbnQsIE1hdGVyaWFsSWNvbkNvbXBvbmVudF0sXG59KVxuZXhwb3J0IGNsYXNzIEZpbGVFZGl0Q29tcG9uZW50IGV4dGVuZHMgVGFCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBpbWFnZVBhdGghOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgc2F2ZUltYWdlJCE6IE9ic2VydmFibGU8bnVsbD47XG5cbiAgQE91dHB1dCgpXG4gIHNhdmVkSW1hZ2U6IEV2ZW50RW1pdHRlcjxCbG9iPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgdHVpSW1hZ2VFZGl0b3IhOiBJbWFnZUVkaXRvcjtcblxuICAvLyBjb250cm9sXG4gIHB1YmxpYyBzZWxlY3Rpb246IFNlbGVjdGlvbiA9ICcnO1xuICBwdWJsaWMgc2hhcGVTZWxlY3Rpb246IFNoYXBlU2VsZWN0aW9uID0gJyc7XG5cbiAgcHVibGljIGNvbG9ySGV4YTogc3RyaW5nID0gJyMwMDAwMDAnO1xuICBwdWJsaWMgY29sb3JMaXN0OiBzdHJpbmdbXSA9IFtcbiAgICAnI2ZmMGQwMCcsXG4gICAgJyNmZmEyMDAnLFxuICAgICcjZjRmZjFmJyxcbiAgICAnIzM0ZTYxMCcsXG4gICAgJyMxNDcwMDEnLFxuICAgICcjMDBjYWQxJyxcbiAgICAnIzAwMzRkMScsXG4gICAgJyMzZDAwOWUnLFxuICAgICcjMDAwMDAwJyxcbiAgICAnI2ZmZmZmZicsXG4gIF07XG5cbiAgcHVibGljIG9iamVjdEFjdGl2YXRlZCA9IG51bGw7XG5cbiAgcHVibGljIGJydXNoU2l6ZTogbnVtYmVyID0gMjA7XG4gIHB1YmxpYyBzbGlkZXIgPSBuZXcgSW5wdXRTbGlkZXIoe1xuICAgIGtleTogJ3NsaWRlcicsXG4gICAgY2xhc3M6ICd3LTEwMCcsXG4gICAgbWF4OiA1MCxcbiAgfSk7XG5cbiAgcHVibGljIHJlYWRvbmx5IGlzTGlnaHQgPSBpc0xpZ2h0O1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lclJlZicpXG4gIHByaXZhdGUgX2NvbnRhaW5lclJlZiE6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuXG4gIEBWaWV3Q2hpbGQoJ3R1aVJlZicpXG4gIHByaXZhdGUgX3R1aVJlZiE6IEVsZW1lbnRSZWY8SFRNTERpdkVsZW1lbnQ+O1xuICBwcml2YXRlIF9jYW52YXNTaXplOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0gPSB7XG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICB9O1xuXG4gIHByaXZhdGUgX2ludG9EcmF3aW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuc2xpZGVyLnZhbHVlID0gdGhpcy5icnVzaFNpemU7XG4gICAgdGhpcy5zbGlkZXIuY3JlYXRlRm9ybUNvbnRyb2woKTtcbiAgICB0aGlzLnNsaWRlci5jaGFuZ2VWYWx1ZSQuc3Vic2NyaWJlKHZhbHVlID0+IHRoaXMuY2hhbmdlQnJ1c2hTaXplKHZhbHVlID8/IDApKTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMua2V5UHJlc3MpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuc2F2ZUltYWdlJCkge1xuICAgICAgdGhpcy5fcmVnaXN0ZXJTdWJzY3JpcHRpb24oXG4gICAgICAgIHRoaXMuc2F2ZUltYWdlJC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMub25TYXZlQ2xpY2soKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGUgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5rZXlQcmVzcyk7XG5cbiAgICB0aGlzLnR1aUltYWdlRWRpdG9yLmRlc3Ryb3koKTtcbiAgfVxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2NyZWF0ZUltYWdlRWRpdG9yKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0SGVpZ2h0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGAke3RoaXMuX2NhbnZhc1NpemUuaGVpZ2h0fXB4YDtcbiAgfVxuICBwdWJsaWMgZ2V0V2lkdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5fY2FudmFzU2l6ZS53aWR0aH1weGA7XG4gIH1cblxuICBwdWJsaWMga2V5UHJlc3MoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICB0aGlzLl9zdG9wRHJhd2luZygpO1xuICAgIH1cbiAgfVxuICAvLyBjb250cm9sXG4gIHB1YmxpYyBzaG93UGFuZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0aW9uICE9PSAnJyAmJiAhdGhpcy5faW50b0RyYXdpbmc7XG4gIH1cbiAgcHVibGljIGNoYW5nZVNlbGVjdGlvbihuZXdTZWxlY3Rpb246IFNlbGVjdGlvbikge1xuICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uO1xuICAgIHRoaXMuX2ludG9EcmF3aW5nID0gZmFsc2U7XG5cbiAgICBpZiAoIXRoaXMuc2VsZWN0aW9uKSB7XG4gICAgICB0aGlzLl9zdG9wRHJhd2luZygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGlvbiA9PT0gJ2xpbmUnKSB7XG4gICAgICB0aGlzLmRyYXdpbmcoJ0ZSRUVfRFJBV0lORycpO1xuICAgICAgdGhpcy5jaGFuZ2VTaGFwZVNlbGVjdGlvbignJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGlvbiA9PT0gJ3NoYXBlJykge1xuICAgICAgaWYgKCF0aGlzLnNoYXBlU2VsZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlU2hhcGVTZWxlY3Rpb24oJ2xpbmUnKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uID09PSAndGV4dCcpIHtcbiAgICAgIHRoaXMudGV4dCgpO1xuICAgICAgdGhpcy5jaGFuZ2VTaGFwZVNlbGVjdGlvbignJyk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbiAgcHVibGljIGNoYW5nZVNoYXBlU2VsZWN0aW9uKG5ld1NlbGVjdGlvbjogU2hhcGVTZWxlY3Rpb24pIHtcbiAgICB0aGlzLnNoYXBlU2VsZWN0aW9uID0gbmV3U2VsZWN0aW9uO1xuXG4gICAgaWYgKCF0aGlzLnNoYXBlU2VsZWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnNoYXBlU2VsZWN0aW9uID09PSAnbGluZScpIHtcbiAgICAgIHRoaXMuZHJhd2luZygnTElORV9EUkFXSU5HJyk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5zaGFwZSh0aGlzLnNoYXBlU2VsZWN0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyB1bmRvKCkge1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3IuZGlzY2FyZFNlbGVjdGlvbigpO1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3IudW5kbygpO1xuICB9XG4gIHB1YmxpYyByZWRvKCkge1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3IuZGlzY2FyZFNlbGVjdGlvbigpO1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3IucmVkbygpO1xuICB9XG5cbiAgcHVibGljIHNoYXBlKHR5cGU6ICdyZWN0JyB8ICdjaXJjbGUnIHwgJ3RyaWFuZ2xlJykge1xuICAgIHRoaXMuX3N0b3BEcmF3aW5nKCk7XG4gICAgdGhpcy50dWlJbWFnZUVkaXRvci5zZXREcmF3aW5nU2hhcGUodHlwZSwgdGhpcy5fZ2V0U2V0dGluZ3MoKSk7XG4gICAgdGhpcy50dWlJbWFnZUVkaXRvci5zdGFydERyYXdpbmdNb2RlKCdTSEFQRScpO1xuICB9XG5cbiAgcHVibGljIGRyYXdpbmcodHlwZTogJ0xJTkVfRFJBV0lORycgfCAnRlJFRV9EUkFXSU5HJykge1xuICAgIHRoaXMuX3N0b3BEcmF3aW5nKCk7XG4gICAgdGhpcy50dWlJbWFnZUVkaXRvci5zdGFydERyYXdpbmdNb2RlKHR5cGUsIHRoaXMuX2dldFNldHRpbmdzKCkpO1xuICB9XG5cbiAgcHVibGljIHRleHQoKSB7XG4gICAgdGhpcy5fc3RvcERyYXdpbmcoKTtcbiAgICB0aGlzLnR1aUltYWdlRWRpdG9yLnN0YXJ0RHJhd2luZ01vZGUoJ1RFWFQnLCB0aGlzLl9nZXRTZXR0aW5ncygpKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFuZ2VDb2xvcihjb2xvcjogc3RyaW5nKSB7XG4gICAgdGhpcy5jb2xvckhleGEgPSBjb2xvcjtcbiAgICB0aGlzLl9yZWZsb3coKTtcbiAgfVxuICBwdWJsaWMgY2hhbmdlQnJ1c2hTaXplKHNpemU6IG51bWJlcikge1xuICAgIHRoaXMuYnJ1c2hTaXplID0gc2l6ZTtcbiAgICB0aGlzLl9yZWZsb3coKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhcigpIHtcbiAgICBpZiAodGhpcy5vYmplY3RBY3RpdmF0ZWQpIHtcbiAgICAgIHRoaXMudHVpSW1hZ2VFZGl0b3IucmVtb3ZlQWN0aXZlT2JqZWN0KCk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHZhbGlkYXRpb24oKSB7XG4gICAgdGhpcy5vblNhdmVDbGljaygpO1xuICB9XG4gIHB1YmxpYyBvblNhdmVDbGljayA9IGFzeW5jICgpID0+IHtcbiAgICB0aGlzLnJlcXVlc3RTdGF0ZS5hc2tlZCgpO1xuXG4gICAgY29uc3QgZGF0YSA9IHRoaXMudHVpSW1hZ2VFZGl0b3IudG9EYXRhVVJMKHtcbiAgICAgIGZvcm1hdDogJ3BuZycsXG4gICAgICBxdWFsaXR5OiAwLjQsXG4gICAgfSk7XG5cbiAgICBjb25zdCBibG9iID0gYXdhaXQgZ2V0QmxvYkltYWdlKGRhdGEpO1xuICAgIHRoaXMuc2F2ZWRJbWFnZS5lbWl0KGJsb2IpO1xuXG4gICAgdGhpcy5yZXF1ZXN0U3RhdGUuY29tcGxldGVkKCk7XG4gIH07XG4gIHByaXZhdGUgYXN5bmMgX2NyZWF0ZUltYWdlRWRpdG9yKCkge1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3IgPSBuZXcgSW1hZ2VFZGl0b3IodGhpcy5fdHVpUmVmLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIHVzYWdlU3RhdGlzdGljczogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgY3JvcCA9IGF3YWl0IHRoaXMudHVpSW1hZ2VFZGl0b3IubG9hZEltYWdlRnJvbVVSTCh0aGlzLmltYWdlUGF0aCwgJ2RlZmF1bHQnKTtcbiAgICB0aGlzLl9jYW52YXNTaXplID0gZGV0ZXJtaW5lTmV3U2l6ZShcbiAgICAgIGNyb3AubmV3SGVpZ2h0LFxuICAgICAgY3JvcC5uZXdXaWR0aCxcbiAgICAgIHRoaXMuX2NvbnRhaW5lclJlZi5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoLFxuICAgICAgdGhpcy5fY29udGFpbmVyUmVmLm5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0IC0gNzBcbiAgICApO1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3IucmVzaXplQ2FudmFzRGltZW5zaW9uKHtcbiAgICAgIHdpZHRoOiB0aGlzLl9jYW52YXNTaXplLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLl9jYW52YXNTaXplLmhlaWdodCxcbiAgICB9KTtcbiAgICB0aGlzLnR1aUltYWdlRWRpdG9yLm9uKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICB0aGlzLl9pbnRvRHJhd2luZyA9IHRydWU7XG4gICAgfSk7XG4gICAgdGhpcy50dWlJbWFnZUVkaXRvci5vbignb2JqZWN0QWN0aXZhdGVkJywgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgdGhpcy5vYmplY3RBY3RpdmF0ZWQgPSBkYXRhO1xuICAgIH0pO1xuICAgIHRoaXMudHVpSW1hZ2VFZGl0b3Iub24oJ2FkZFRleHQnLCAocG9zOiBhbnkpID0+IHtcbiAgICAgIHRoaXMudHVpSW1hZ2VFZGl0b3IuYWRkVGV4dCgnVEVYVEUnLCB7XG4gICAgICAgIC4uLnRoaXMuX2dldFNldHRpbmdzKCksXG4gICAgICAgIC4uLnsgcG9zaXRpb246IHBvcy5vcmlnaW5Qb3NpdGlvbiB9LFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9zdG9wRHJhd2luZygpIHtcbiAgICB0aGlzLnR1aUltYWdlRWRpdG9yLnN0b3BEcmF3aW5nTW9kZSgpO1xuICAgIHRoaXMub2JqZWN0QWN0aXZhdGVkID0gbnVsbDtcbiAgfVxuICBwcml2YXRlIF9yZWZsb3coKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uID09PSAnbGluZScpIHtcbiAgICAgIHRoaXMudHVpSW1hZ2VFZGl0b3Iuc2V0QnJ1c2goe1xuICAgICAgICBjb2xvcjogdGhpcy5jb2xvckhleGEsXG4gICAgICAgIHdpZHRoOiB0aGlzLmJydXNoU2l6ZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNlbGVjdGlvbiA9PT0gJ3NoYXBlJykge1xuICAgICAgdGhpcy5fc3RvcERyYXdpbmcoKTtcbiAgICAgIHRoaXMuY2hhbmdlU2hhcGVTZWxlY3Rpb24odGhpcy5zaGFwZVNlbGVjdGlvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2dldFNldHRpbmdzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb2xvcjogdGhpcy5jb2xvckhleGEsXG4gICAgICB3aWR0aDogdGhpcy5icnVzaFNpemUsXG4gICAgICBmaWxsOiAndHJhbnNwYXJlbnQnLFxuICAgICAgc3Ryb2tlOiB0aGlzLmNvbG9ySGV4YSxcbiAgICAgIHN0cm9rZVdpZHRoOiB0aGlzLmJydXNoU2l6ZSxcbiAgICAgIHN0eWxlczoge1xuICAgICAgICBmaWxsOiB0aGlzLmNvbG9ySGV4YSxcbiAgICAgICAgZm9udFNpemU6IHRoaXMuYnJ1c2hTaXplICogOCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImVkaXRcIiAjY29udGFpbmVyUmVmPlxuICA8ZGl2ICN0dWlSZWYgW3N0eWxlLmhlaWdodF09XCJ0aGlzLmdldEhlaWdodCgpXCIgW3N0eWxlLndpZHRoXT1cInRoaXMuZ2V0V2lkdGgoKVwiIGNsYXNzPVwibS1hIGltYWdlLWNvbnRhaW5lclwiPjwvZGl2PlxuXG4gIDx0YS1sb2FkZXIgW2lzTG9hZGluZ109XCJ0aGlzLnJlcXVlc3RTdGF0ZS5pc0xvYWRpbmcoKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCI+XG4gICAgICBAaWYgKHRoaXMuc2hvd1BhbmVsKCkpIHtcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsXCI+XG4gICAgICAgICAgQGlmICh0aGlzLnNlbGVjdGlvbiA9PT0gJ2xpbmUnKSB7XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiUmFuZ2VcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIkNvbG9yc1wiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgfSBAZWxzZSBpZiAodGhpcy5zZWxlY3Rpb24gPT09ICdzaGFwZScpIHtcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZy0wIHNoYXBlLXNlbGVjdGlvblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgKGNsaWNrKT1cInRoaXMuY2hhbmdlU2hhcGVTZWxlY3Rpb24oJ3JlY3QnKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgW25nQ2xhc3NdPVwieyBzZWxlY3RlZDogdGhpcy5zaGFwZVNlbGVjdGlvbiA9PT0gJ3JlY3QnIH1cIj5cbiAgICAgICAgICAgICAgICAgIDx0YS1tYXRlcmlhbC1pY29uIHR5cGU9XCJzbVwiPmNoZWNrX2JveF9vdXRsaW5lX2JsYW5rPC90YS1tYXRlcmlhbC1pY29uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLmNoYW5nZVNoYXBlU2VsZWN0aW9uKCd0cmlhbmdsZScpXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIiBbbmdDbGFzc109XCJ7IHNlbGVjdGVkOiB0aGlzLnNoYXBlU2VsZWN0aW9uID09PSAndHJpYW5nbGUnIH1cIj5cbiAgICAgICAgICAgICAgICAgIDx0YS1tYXRlcmlhbC1pY29uIHR5cGU9XCJzbVwiPmNoYW5nZV9oaXN0b3J5PC90YS1tYXRlcmlhbC1pY29uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLmNoYW5nZVNoYXBlU2VsZWN0aW9uKCdjaXJjbGUnKVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgW25nQ2xhc3NdPVwieyBzZWxlY3RlZDogdGhpcy5zaGFwZVNlbGVjdGlvbiA9PT0gJ2NpcmNsZScgfVwiPlxuICAgICAgICAgICAgICAgICAgPHRhLW1hdGVyaWFsLWljb24gdHlwZT1cInNtXCI+Y2lyY2xlPC90YS1tYXRlcmlhbC1pY29uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLmNoYW5nZVNoYXBlU2VsZWN0aW9uKCdsaW5lJylcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIFtuZ0NsYXNzXT1cInsgc2VsZWN0ZWQ6IHRoaXMuc2hhcGVTZWxlY3Rpb24gPT09ICdsaW5lJyB9XCI+XG4gICAgICAgICAgICAgICAgICA8dGEtbWF0ZXJpYWwtaWNvbiB0eXBlPVwic21cIj5zdHJhaWdodGVuPC90YS1tYXRlcmlhbC1pY29uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cIlJhbmdlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJDb2xvcnNcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgIH0gQGVsc2UgaWYgKHRoaXMuc2VsZWN0aW9uID09PSAndGV4dCcpIHtcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJSYW5nZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiQ29sb3JzXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuXG4gICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0aW9uIHJvdyBnLTBcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLmNoYW5nZVNlbGVjdGlvbignJylcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIFtuZ0NsYXNzXT1cInsgc2VsZWN0ZWQ6IHRoaXMuc2VsZWN0aW9uID09PSAnJyB9XCI+XG4gICAgICAgICAgICA8dGEtbWF0ZXJpYWwtaWNvbiB0eXBlPVwic21cIj5wYW5fdG9vbDwvdGEtbWF0ZXJpYWwtaWNvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiAoY2xpY2spPVwidGhpcy5jaGFuZ2VTZWxlY3Rpb24oJ2xpbmUnKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgW25nQ2xhc3NdPVwieyBzZWxlY3RlZDogdGhpcy5zZWxlY3Rpb24gPT09ICdsaW5lJyB9XCI+XG4gICAgICAgICAgICA8dGEtbWF0ZXJpYWwtaWNvbiB0eXBlPVwic21cIj5kcmF3PC90YS1tYXRlcmlhbC1pY29uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLmNoYW5nZVNlbGVjdGlvbignc2hhcGUnKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCIgW25nQ2xhc3NdPVwieyBzZWxlY3RlZDogdGhpcy5zZWxlY3Rpb24gPT09ICdzaGFwZScgfVwiPlxuICAgICAgICAgICAgPHRhLW1hdGVyaWFsLWljb24gdHlwZT1cInNtXCI+aW50ZXJlc3RzPC90YS1tYXRlcmlhbC1pY29uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLmNoYW5nZVNlbGVjdGlvbigndGV4dCcpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIiBbbmdDbGFzc109XCJ7IHNlbGVjdGVkOiB0aGlzLnNlbGVjdGlvbiA9PT0gJ3RleHQnIH1cIj5cbiAgICAgICAgICAgIDx0YS1tYXRlcmlhbC1pY29uIHR5cGU9XCJzbVwiPnRleHRfZmllbGRzPC90YS1tYXRlcmlhbC1pY29uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLmNsZWFyKClcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiIFtuZ0NsYXNzXT1cInsgZGlzYWJsZWQ6ICF0aGlzLm9iamVjdEFjdGl2YXRlZCB9XCI+XG4gICAgICAgICAgICA8dGEtbWF0ZXJpYWwtaWNvbiB0eXBlPVwic21cIj5kZWxldGU8L3RhLW1hdGVyaWFsLWljb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiBjbGFzcz1cInNlcGFyYXRvclwiPjwvc3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLnVuZG8oKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICA8dGEtbWF0ZXJpYWwtaWNvbiB0eXBlPVwic21cIj51bmRvPC90YS1tYXRlcmlhbC1pY29uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbFwiIChjbGljayk9XCJ0aGlzLnJlZG8oKVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICA8dGEtbWF0ZXJpYWwtaWNvbiB0eXBlPVwic21cIj5yZWRvPC90YS1tYXRlcmlhbC1pY29uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzZXBhcmF0b3JcIj48L3NwYW4+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xcIiAoY2xpY2spPVwidGhpcy52YWxpZGF0aW9uKClcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSBjb2xvci1zdWNjZXNzXCI+XG4gICAgICAgICAgICA8dGEtZm9udC1pY29uIG5hbWU9XCJjaGVjay1saW5lXCI+PC90YS1mb250LWljb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvdGEtbG9hZGVyPlxuPC9kaXY+XG5cbjxuZy10ZW1wbGF0ZSAjQ29sb3JzPlxuICA8ZGl2IGNsYXNzPVwiY29sb3JzXCI+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBnLTBcIj5cbiAgICAgIEBmb3IgKGNvbG9yIG9mIHRoaXMuY29sb3JMaXN0OyB0cmFjayBjb2xvcikge1xuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sXCIgKGNsaWNrKT1cInRoaXMuY2hhbmdlQ29sb3IoY29sb3IpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbG9yXCIgW3N0eWxlLmJhY2tncm91bmQtY29sb3JdPVwiY29sb3JcIiBbbmdDbGFzc109XCJ7ICdpcy1saWdodCc6IHRoaXMuaXNMaWdodChjb2xvcikgfVwiPlxuICAgICAgICAgICAgQGlmICh0aGlzLmNvbG9ySGV4YSA9PT0gY29sb3IpIHtcbiAgICAgICAgICAgICAgPHRhLW1hdGVyaWFsLWljb24gW3R5cGVdPVwiJ3NtJ1wiPmRvbmU8L3RhLW1hdGVyaWFsLWljb24+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG48bmctdGVtcGxhdGUgI1JhbmdlPlxuICA8ZGl2IGNsYXNzPVwicmFuZ2VcIj5cbiAgICA8IS0tIDx0YS1pbnB1dC1zbGlkZXIgW2lucHV0XT1cInRoaXMuc2xpZGVyXCI+PC90YS1pbnB1dC1zbGlkZXI+IC0tPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=