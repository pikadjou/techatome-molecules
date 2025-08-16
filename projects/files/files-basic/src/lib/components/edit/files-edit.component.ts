import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { Observable } from 'rxjs';

import ImageEditor from 'tui-image-editor';
import { InputSlider } from '@camelot/form-model';
import {
  CamBaseComponent,
  determineNewSize,
  getBlobImage,
  isLight,
} from '@camelot/utils';

type Selection = 'line' | 'shape' | 'text' | '';
type ShapeSelection = 'rect' | 'triangle' | 'circle' | 'line' | '';

@Component({
  selector: 'cam-files-edit',
  templateUrl: './files-edit.component.html',
  styleUrls: ['./files-edit.component.scss'],
})
export class FileEditComponent
  extends CamBaseComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input()
  imagePath!: string;

  @Input()
  saveImage$!: Observable<null>;

  @Output()
  savedImage: EventEmitter<Blob> = new EventEmitter();

  public tuiImageEditor!: ImageEditor;

  // control
  public selection: Selection = '';
  public shapeSelection: ShapeSelection = '';

  public colorHexa: string = '#000000';
  public colorList: string[] = [
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

  public objectActivated = null;

  public brushSize: number = 20;
  public slider = new InputSlider({
    key: 'slider',
    class: 'w-100',
    max: 50,
  });

  public readonly isLight = isLight;

  @ViewChild('containerRef')
  private _containerRef!: ElementRef<HTMLDivElement>;

  @ViewChild('tuiRef')
  private _tuiRef!: ElementRef<HTMLDivElement>;
  private _canvasSize: { width: number; height: number } = {
    width: 0,
    height: 0,
  };

  private _intoDrawing = false;

  constructor() {
    super();

    this.slider.value = this.brushSize;
    this.slider.createFormControl();
    this.slider.changeValue$.subscribe((value) =>
      this.changeBrushSize(value ?? 0)
    );

    window.addEventListener('keyup', this.keyPress);
  }

  ngOnInit() {
    if (this.saveImage$) {
      this._registerSubscription(
        this.saveImage$.subscribe(() => {
          this.onSaveClick();
        })
      );
    }
  }

  override ngOnDestroy(): void {
    window.removeEventListener('keyup', this.keyPress);

    this.tuiImageEditor.destroy();
  }
  public ngAfterViewInit() {
    this._createImageEditor();
  }

  public getHeight(): string {
    return `${this._canvasSize.height}px`;
  }
  public getWidth(): string {
    return `${this._canvasSize.width}px`;
  }

  public keyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this._stopDrawing();
    }
  }
  // control
  public showPanel() {
    return this.selection !== '' && !this._intoDrawing;
  }
  public changeSelection(newSelection: Selection) {
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
  public changeShapeSelection(newSelection: ShapeSelection) {
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

  public undo() {
    this.tuiImageEditor.discardSelection();
    this.tuiImageEditor.undo();
  }
  public redo() {
    this.tuiImageEditor.discardSelection();
    this.tuiImageEditor.redo();
  }

  public shape(type: 'rect' | 'circle' | 'triangle') {
    this._stopDrawing();
    this.tuiImageEditor.setDrawingShape(type, this._getSettings());
    this.tuiImageEditor.startDrawingMode('SHAPE');
  }

  public drawing(type: 'LINE_DRAWING' | 'FREE_DRAWING') {
    this._stopDrawing();
    this.tuiImageEditor.startDrawingMode(type, this._getSettings());
  }

  public text() {
    this._stopDrawing();
    this.tuiImageEditor.startDrawingMode('TEXT', this._getSettings());
  }

  public changeColor(color: string) {
    this.colorHexa = color;
    this._reflow();
  }
  public changeBrushSize(size: number) {
    this.brushSize = size;
    this._reflow();
  }

  public clear() {
    if (this.objectActivated) {
      this.tuiImageEditor.removeActiveObject();
    }
  }

  public validation() {
    this.onSaveClick();
  }
  public onSaveClick = async () => {
    this.requestState.asked();

    const data = this.tuiImageEditor.toDataURL({
      format: 'png',
      quality: 0.4,
    });

    const blob = await getBlobImage(data);
    this.savedImage.emit(blob);

    this.requestState.completed();
  };
  private async _createImageEditor() {
    this.tuiImageEditor = new ImageEditor(this._tuiRef.nativeElement, {
      usageStatistics: false,
    });
    const crop = await this.tuiImageEditor.loadImageFromURL(
      this.imagePath,
      'default'
    );
    this._canvasSize = determineNewSize(
      crop.newHeight,
      crop.newWidth,
      this._containerRef.nativeElement.clientWidth,
      this._containerRef.nativeElement.clientHeight - 70
    );
    this.tuiImageEditor.resizeCanvasDimension({
      width: this._canvasSize.width,
      height: this._canvasSize.height,
    });
    this.tuiImageEditor.on('mousedown', () => {
      this._intoDrawing = true;
    });
    this.tuiImageEditor.on('objectActivated', (data: any) => {
      this.objectActivated = data;
    });
    this.tuiImageEditor.on('addText', (pos: any) => {
      this.tuiImageEditor.addText('TEXTE', {
        ...this._getSettings(),
        ...{ position: pos.originPosition },
      });
    });
  }

  private _stopDrawing() {
    this.tuiImageEditor.stopDrawingMode();
    this.objectActivated = null;
  }
  private _reflow() {
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
  private _getSettings() {
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
}
