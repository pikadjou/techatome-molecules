import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Subject } from 'rxjs';

import { FileEditComponent } from './files-edit.component';

describe('FileEditComponent', () => {
  let component: FileEditComponent;
  let fixture: ComponentFixture<FileEditComponent>;
  let saveSubject: Subject<null>;

  beforeEach(async () => {
    saveSubject = new Subject<null>();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FileEditComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FileEditComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('imagePath', 'https://example.com/image.jpg');
    fixture.componentRef.setInput('saveImage$', saveSubject.asObservable());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default color hex', () => {
    expect(component.colorHexa).toBe('#000000');
  });

  it('should have default brush size', () => {
    expect(component.brushSize).toBe(20);
  });

  it('should have default selection as empty', () => {
    expect(component.selection).toBe('');
  });

  it('should have default shapeSelection as empty', () => {
    expect(component.shapeSelection).toBe('');
  });

  it('should have a color list', () => {
    expect(component.colorList.length).toBe(10);
  });

  it('should have objectActivated as null', () => {
    expect(component.objectActivated).toBeNull();
  });

  it('should have slider input model', () => {
    expect(component.slider).toBeDefined();
  });

  it('should expose isLight helper', () => {
    expect(component.isLight).toBeDefined();
  });

  it('showPanel should return false when no selection', () => {
    expect(component.showPanel()).toBe(false);
  });

  it('changeColor should update colorHexa', () => {
    component.changeColor('#ff0000');
    expect(component.colorHexa).toBe('#ff0000');
  });

  it('changeBrushSize should update brushSize', () => {
    component.changeBrushSize(30);
    expect(component.brushSize).toBe(30);
  });

  it('changeSelection to empty should reset selection', () => {
    // Mock tuiImageEditor to avoid null access
    component.tuiImageEditor = {
      stopDrawingMode: jasmine.createSpy('stopDrawingMode'),
      startDrawingMode: jasmine.createSpy('startDrawingMode'),
      setDrawingShape: jasmine.createSpy('setDrawingShape'),
      setBrush: jasmine.createSpy('setBrush'),
    } as any;

    component.changeSelection('');
    expect(component.selection).toBe('');
  });

  it('should have savedImage output emitter', () => {
    expect(component.savedImage).toBeDefined();
  });

  it('getHeight should return formatted height string', () => {
    expect(component.getHeight()).toContain('px');
  });

  it('getWidth should return formatted width string', () => {
    expect(component.getWidth()).toContain('px');
  });
});
