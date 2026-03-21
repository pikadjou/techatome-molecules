import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Validators } from '@angular/forms';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { FormLabelComponent } from './label.component';

describe('FormLabelComponent', () => {
  let component: FormLabelComponent;
  let fixture: ComponentFixture<FormLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        FormLabelComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(FormLabelComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', { label: 'Test Label', validators: [] });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the input model', () => {
    expect(component.inputModel()).toEqual({ label: 'Test Label', validators: [] });
  });

  it('should default withMarginBottom to true', () => {
    expect(component.withMarginBottom()).toBeTrue();
  });

  it('should expose Angular Validators', () => {
    expect(component.validators).toBe(Validators);
  });

  it('should accept input with validators', () => {
    fixture.componentRef.setInput('input', {
      label: 'Required Field',
      validators: [Validators.required],
    });
    fixture.detectChanges();
    expect(component.inputModel().validators.length).toBe(1);
  });
});
