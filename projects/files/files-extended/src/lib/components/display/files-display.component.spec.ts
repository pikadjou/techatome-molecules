import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { Menu } from '@ta/menu';

import { FilesDisplayComponent } from './files-display.component';

describe('FilesDisplayComponent', () => {
  let component: FilesDisplayComponent;
  let fixture: ComponentFixture<FilesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FilesDisplayComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FilesDisplayComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('files$', of([]));
    fixture.componentRef.setInput('menu', new Menu({ elements: [], direction: 'horizontal' }));
    fixture.componentRef.setInput('tempFiles', []);
    fixture.componentRef.setInput('fileType', 'Document');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have canAddFile default to true', () => {
    expect(component.canAddFile()).toBe(true);
  });

  it('should return false for canSelectMultipleFiles for Document type', () => {
    expect(component.canSelectMultipleFiles).toBe(false);
  });

  it('should return true for canSelectMultipleFiles for Image type', () => {
    fixture.componentRef.setInput('fileType', 'Image');
    fixture.detectChanges();
    expect(component.canSelectMultipleFiles).toBe(true);
  });

  it('should return false for canDisplayTempsFiles when no temp files', () => {
    expect(component.canDisplayTempsFiles).toBe(false);
  });

  it('should return true for canDisplayTempsFiles with temp files', () => {
    fixture.componentRef.setInput('tempFiles', [{ name: 'temp.jpg' }]);
    fixture.detectChanges();
    expect(component.canDisplayTempsFiles).toBe(true);
  });

  it('should return upload-file feature for Document type', () => {
    expect(component.getFeature()).toEqual(['upload-file']);
  });

  it('should return upload-pic feature for Image type', () => {
    fixture.componentRef.setInput('fileType', 'Image');
    fixture.detectChanges();
    expect(component.getFeature()).toEqual(['upload-pic']);
  });

  it('should return empty features for unknown type', () => {
    fixture.componentRef.setInput('fileType', 'Unknown');
    fixture.detectChanges();
    expect(component.getFeature()).toEqual([]);
  });
});
