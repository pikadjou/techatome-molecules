import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputImages } from '@ta/form-model';

import { InputImageModal } from './input-images-modal.component';

describe('InputImageModal', () => {
  let component: InputImageModal;
  let fixture: ComponentFixture<InputImageModal>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<InputImageModal>>;

  const mockInput = new InputImages({ key: 'images', label: 'Images' });
  const mockDialogData = {
    input: mockInput,
    selection: ['url1', 'url2'],
  };

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close', 'addPanelClass']);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputImageModal,
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputImageModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize selection from dialog data', () => {
    expect(component.selection).toEqual(['url1', 'url2']);
  });

  it('should add panel class on construction', () => {
    expect(dialogRefSpy.addPanelClass).toHaveBeenCalledWith(['full-screen-modal', 'forced']);
  });

  it('should toggle file selection', () => {
    component.onFileSelected({ url: 'url3' } as any);
    expect(component.selection).toContain('url3');

    component.onFileSelected({ url: 'url3' } as any);
    expect(component.selection).not.toContain('url3');
  });

  it('should remove already-selected file', () => {
    component.onFileSelected({ url: 'url1' } as any);
    expect(component.selection).not.toContain('url1');
  });

  it('should close dialog with selection on selected()', () => {
    component.selected();
    expect(dialogRefSpy.close).toHaveBeenCalledWith(['url1', 'url2']);
  });
});
