import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { FilesPreviewComponent } from './preview.component';

describe('FilesPreviewComponent', () => {
  let component: FilesPreviewComponent;
  let fixture: ComponentFixture<FilesPreviewComponent>;

  const mockDocument = {
    filename: 'report.pdf',
    url: 'https://example.com/report.pdf',
    uploadedDate: '2024-01-15',
    size: 1024000,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FilesPreviewComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FilesPreviewComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('initial', mockDocument);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept initial input', () => {
    expect(component.initial()).toEqual(mockDocument);
  });

  it('should expose getFileExtension helper', () => {
    expect(component.getFileExtension).toBeDefined();
  });

  it('should expose EFileExtension enum', () => {
    expect(component.EFileExtension).toBeDefined();
  });

  it('should have download method', () => {
    expect(component.download).toBeDefined();
    expect(typeof component.download).toBe('function');
  });
});
