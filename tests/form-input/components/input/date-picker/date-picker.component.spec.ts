import { provideHttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerToggle } from '@angular/material/datepicker';
import { By } from '@angular/platform-browser';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { Apollo } from 'apollo-angular';

import { InputDatePicker } from '@ta/form-model';
import { TRANSLATION_SOURCE_CONFIG, TranslationSourceType } from '@ta/translation';

import { DatePickerComponent } from '@lib/form-input/components/input/date-picker/date-picker.component';

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;
  let inputModel: InputDatePicker;

  beforeEach(async () => {
    inputModel = new InputDatePicker({ key: 'date', label: 'Date' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        MatNativeDateModule,
        DatePickerComponent,
      ],
      providers: [
        provideNoopAnimations(),
        provideHttpClient(),
        provideRouter([]),
        { provide: Apollo, useValue: {} },
        {
          provide: TRANSLATION_SOURCE_CONFIG,
          useValue: { filePath: '', type: TranslationSourceType.FILE },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have datePicker input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('datePicker');
  });

  it('should have a range FormGroup with start and end controls', () => {
    expect(component.range).toBeTruthy();
    expect(component.range.get('start')).toBeTruthy();
    expect(component.range.get('end')).toBeTruthy();
  });

  it('should set input value when onDateSelect is called with a value', () => {
    const date = new Date(2025, 0, 15);
    component.onDateSelect({ value: date } as any);
    expect(component.input.value).toEqual(date);
  });

  it('should not set input value when onDateSelect is called without a value', () => {
    const originalValue = component.input.value;
    component.onDateSelect({ value: null } as any);
    expect(component.input.value).toBe(originalValue);
  });

  it('should update input value when range values change with equal start and end', () => {
    const date = new Date(2025, 5, 10);
    component.range.setValue({ start: date, end: date });
    expect(component.input.value).toEqual(date);
  });

  it('should open the picker when the input is clicked', () => {
    const open = spyOn(component.picker(), 'open');
    (fixture.nativeElement as HTMLElement).querySelector('input')?.click();
    expect(open).toHaveBeenCalled();
  });

  it('should bind the toggle to the picker', () => {
    const toggle = fixture.debugElement.query(By.directive(MatDatepickerToggle)).componentInstance;
    expect(toggle.datepicker).toBe(component.picker());
  });
});
