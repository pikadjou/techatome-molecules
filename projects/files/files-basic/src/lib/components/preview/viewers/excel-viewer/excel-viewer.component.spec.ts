import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ExcelViewerComponent } from './excel-viewer.component';

describe('ExcelViewerComponent', () => {
  let component: ExcelViewerComponent;
  let fixture: ComponentFixture<ExcelViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        ExcelViewerComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ExcelViewerComponent);
    component = fixture.componentInstance;
    component.file = {
      url: 'https://example.com/spreadsheet.xlsx',
      filename: 'spreadsheet.xlsx',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should accept file input', () => {
    expect(component.file.url).toBe('https://example.com/spreadsheet.xlsx');
  });
});
