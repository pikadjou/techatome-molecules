import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { InputUpload } from '@ta/form-model';
import { TaDocumentsService } from '@ta/services';

import { UploadComponent } from './upload.component';

describe('UploadComponent', () => {
  let component: UploadComponent;
  let fixture: ComponentFixture<UploadComponent>;
  let inputModel: InputUpload;
  let documentsServiceSpy: jasmine.SpyObj<TaDocumentsService>;

  beforeEach(async () => {
    documentsServiceSpy = jasmine.createSpyObj('TaDocumentsService', [
      'addDocument$',
      'fetchDocuments$',
      'getDocuments',
    ]);
    documentsServiceSpy.addDocument$.and.returnValue(
      of({ id: 'doc1', url: 'https://example.com/doc.pdf', description: 'test.pdf' } as any)
    );

    inputModel = new InputUpload({ key: 'upload', label: 'Upload', confirmButton: false });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        UploadComponent,
      ],
      providers: [{ provide: TaDocumentsService, useValue: documentsServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have upload input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('upload');
  });

  it('should start with empty inProgressFiles', () => {
    expect(component.inProgressFiles).toEqual([]);
  });

  it('should return false for isValidDocumentList when no files', () => {
    expect(component.isValidDocumentList()).toBeFalse();
  });

  it('should return false for isValidDocumentList when files are in progress', () => {
    component.inProgressFiles = [{ name: 'file.pdf', progress: 50, completed: null }];
    expect(component.isValidDocumentList()).toBeFalse();
  });

  it('should return true for isValidDocumentList when all files are complete', () => {
    component.inProgressFiles = [
      { name: 'file.pdf', progress: 100, completed: { id: '1', url: 'url', description: '' } as any },
    ];
    expect(component.isValidDocumentList()).toBeTrue();
  });

  it('should add file to inProgressFiles on prepareFilesList', fakeAsync(() => {
    const file = new File(['content'], 'test.pdf', { type: 'application/pdf' });
    component.prepareFilesList([file]);
    tick();
    expect(component.inProgressFiles.length).toBe(1);
    expect(component.inProgressFiles[0].name).toBe('test.pdf');
    expect(component.inProgressFiles[0].progress).toBe(100);
  }));

  it('should emit uploadStatusChanged on prepareFilesList', fakeAsync(() => {
    spyOn(component.uploadStatusChanged, 'emit');
    const file = new File(['content'], 'test.pdf', { type: 'application/pdf' });
    component.prepareFilesList([file]);
    tick();
    expect(component.uploadStatusChanged.emit).toHaveBeenCalledWith(false);
    expect(component.uploadStatusChanged.emit).toHaveBeenCalledWith(true);
  }));

  it('should call prepareFilesList on onFileDropped', () => {
    spyOn(component, 'prepareFilesList');
    const files = [new File(['a'], 'a.pdf')];
    component.onFileDropped(files);
    expect(component.prepareFilesList).toHaveBeenCalledWith(files);
  });

  it('should delete in-progress file by name', () => {
    component.inProgressFiles = [
      { name: 'a.pdf', progress: 50, completed: null },
      { name: 'b.pdf', progress: 100, completed: { id: '2' } as any },
    ];
    component.deleteInProgressFile('a.pdf');
    expect(component.inProgressFiles.length).toBe(1);
    expect(component.inProgressFiles[0].name).toBe('b.pdf');
  });

  it('should delete completed file by id', () => {
    component.inProgressFiles = [
      { name: 'a.pdf', progress: 100, completed: { id: '1' } as any },
      { name: 'b.pdf', progress: 100, completed: { id: '2' } as any },
    ];
    component.deleteFile('1');
    expect(component.inProgressFiles.length).toBe(1);
    expect(component.inProgressFiles[0].completed?.id).toBe('2');
  });

  it('should call validation and set form control values', fakeAsync(() => {
    component.inProgressFiles = [
      {
        name: 'test.pdf',
        progress: 100,
        completed: { id: 'doc1', url: 'url1', description: 'test.pdf' } as any,
      },
    ];
    component.validation();
    expect(inputModel.formControl?.value).toBeTruthy();
  }));
});
