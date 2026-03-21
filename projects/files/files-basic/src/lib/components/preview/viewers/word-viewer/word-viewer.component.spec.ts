import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { WordViewerComponent } from './word-viewer.component';

describe('WordViewerComponent', () => {
  let component: WordViewerComponent;
  let fixture: ComponentFixture<WordViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        WordViewerComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(WordViewerComponent);
    component = fixture.componentInstance;
    component.file = {
      url: 'https://example.com/document.docx',
      filename: 'document.docx',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept file input', () => {
    expect(component.file.url).toBe('https://example.com/document.docx');
  });
});
