import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputImages } from '@ta/form-model';
import { TaDocumentsService } from '@ta/services';

import { InputImagesComponent } from './input-images.component';

describe('InputImagesComponent', () => {
  let component: InputImagesComponent;
  let fixture: ComponentFixture<InputImagesComponent>;
  let inputModel: InputImages;
  let documentsServiceSpy: jasmine.SpyObj<TaDocumentsService>;

  beforeEach(async () => {
    documentsServiceSpy = jasmine.createSpyObj('TaDocumentsService', ['addDocument$']);

    inputModel = new InputImages({ key: 'images', label: 'Images' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputImagesComponent,
      ],
      providers: [{ provide: TaDocumentsService, useValue: documentsServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(InputImagesComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have images input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('images');
  });

  it('should remove a file from value on onFileDeleted', () => {
    inputModel.value = [
      { id: '1', url: 'url1', description: 'doc1' },
      { id: '2', url: 'url2', description: 'doc2' },
    ] as any;
    component.onFileDeleted({ id: '1', url: 'url1', description: 'doc1' } as any);
    expect(inputModel.value?.length).toBe(1);
    expect(inputModel.value?.[0].url).toBe('url2');
  });

  it('should do nothing on onFileDeleted when value is null', () => {
    inputModel.value = null;
    expect(() => component.onFileDeleted({ id: '1', url: 'url1' } as any)).not.toThrow();
  });
});
