import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { InputRadio } from '@ta/form-model';

import { RadioComponent } from './radio.component';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;
  let inputModel: InputRadio<string>;

  const mockOptions = [
    { id: 'a', name: 'Option A' },
    { id: 'b', name: 'Option B' },
    { id: 'c', name: '' },
  ];

  beforeEach(async () => {
    inputModel = new InputRadio<string>({
      key: 'choice',
      label: 'Choice',
      options: of(mockOptions),
    });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        RadioComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have radio input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('radio');
  });

  it('should detect if option has a label', () => {
    expect(component.hasLabel({ name: 'Option A' })).toBeTrue();
    expect(component.hasLabel({ name: '' })).toBeFalse();
    expect(component.hasLabel({})).toBeFalse();
  });

  it('should return xs icon size when option has a label', () => {
    expect(component.iconSize({ name: 'Option A' })).toBe('xs');
  });

  it('should return sm icon size when option has no label', () => {
    expect(component.iconSize({ name: '' })).toBe('sm');
    expect(component.iconSize({})).toBe('sm');
  });

  it('should select an option when clicked', () => {
    component.onOptionClicked('a');
    expect(inputModel.formControl?.value).toBe('a');
  });

  it('should deselect when the same option is clicked again', () => {
    inputModel.formControl?.setValue('a');
    component.onOptionClicked('a');
    expect(inputModel.formControl?.value).toBeNull();
  });

  it('should not change value when input is disabled', () => {
    inputModel.formControl?.setValue('a');
    inputModel.disabled = true;
    component.onOptionClicked('b');
    expect(inputModel.formControl?.value).toBe('a');
  });
});
