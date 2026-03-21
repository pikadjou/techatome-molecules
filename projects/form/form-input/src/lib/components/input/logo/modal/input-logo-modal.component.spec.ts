import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputLogo } from '@ta/form-model';

import { InputLogoModal } from './input-logo-modal.component';

describe('InputLogoModal', () => {
  let component: InputLogoModal;
  let fixture: ComponentFixture<InputLogoModal>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<InputLogoModal>>;

  const mockInput = new InputLogo({ key: 'logo', label: 'Logo' });
  const mockDialogData = {
    input: mockInput,
    selection: 'https://example.com/logo.png',
  };

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close', 'addPanelClass']);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputLogoModal,
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: mockDialogData },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputLogoModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize selection from dialog data', () => {
    expect(component.selection).toBe('https://example.com/logo.png');
  });

  it('should add panel class on construction', () => {
    expect(dialogRefSpy.addPanelClass).toHaveBeenCalledWith(['full-screen-modal', 'forced']);
  });

  it('should toggle file selection', () => {
    component.onFileSelected({ url: 'https://example.com/other.png' } as any);
    expect(component.selection).toBe('https://example.com/other.png');
  });

  it('should deselect when same file is selected', () => {
    component.onFileSelected({ url: 'https://example.com/logo.png' } as any);
    expect(component.selection).toBeNull();
  });

  it('should close dialog with selection on selected()', () => {
    component.selected();
    expect(dialogRefSpy.close).toHaveBeenCalledWith('https://example.com/logo.png');
  });

  it('should close dialog with undefined on cancel()', () => {
    component.cancel();
    expect(dialogRefSpy.close).toHaveBeenCalledWith(undefined);
  });

  it('should clear selection on clearSelection()', () => {
    component.clearSelection();
    expect(component.selection).toBeNull();
  });
});
