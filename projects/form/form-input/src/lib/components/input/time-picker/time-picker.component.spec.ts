import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputTimePicker } from '@ta/form-model';

import { TimePickerComponent } from './time-picker.component';

describe('TimePickerComponent', () => {
  let component: TimePickerComponent;
  let fixture: ComponentFixture<TimePickerComponent>;
  let inputModel: InputTimePicker;

  beforeEach(async () => {
    inputModel = new InputTimePicker({ key: 'time', label: 'Time' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TimePickerComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TimePickerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have timePicker input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('timePicker');
  });

  it('should have time type', () => {
    expect(component.input.type).toBe('time');
  });
});
