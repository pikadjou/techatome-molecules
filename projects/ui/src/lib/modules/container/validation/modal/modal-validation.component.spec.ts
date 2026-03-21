import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ValidationModal } from './modal-validation.component';

describe('ValidationModal', () => {
  let component: ValidationModal;
  let fixture: ComponentFixture<ValidationModal>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<ValidationModal>>;

  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close', 'addPanelClass']);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        ValidationModal,
      ],
      providers: [
        provideRouter([]),
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: undefined },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return default title when data is undefined', () => {
    expect(component.title).toBe('validation.modal.title');
  });

  it('should return default subtitle when data is undefined', () => {
    expect(component.subtitle).toBe('validation.modal.content');
  });

  it('should close dialog with false when onNoClick is called', () => {
    component.onNoClick();
    expect(mockDialogRef.close).toHaveBeenCalledWith(false);
  });

  it('should close dialog with true when onYesClick is called', () => {
    component.onYesClick();
    expect(mockDialogRef.close).toHaveBeenCalledWith(true);
  });
});

describe('ValidationModal with custom data', () => {
  let component: ValidationModal;
  let fixture: ComponentFixture<ValidationModal>;

  beforeEach(async () => {
    const mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close', 'addPanelClass']);

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        ValidationModal,
      ],
      providers: [
        provideRouter([]),
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: { title: 'Custom Title', subtitle: 'Custom Subtitle' } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return custom title from data', () => {
    expect(component.title).toBe('Custom Title');
  });

  it('should return custom subtitle from data', () => {
    expect(component.subtitle).toBe('Custom Subtitle');
  });
});
