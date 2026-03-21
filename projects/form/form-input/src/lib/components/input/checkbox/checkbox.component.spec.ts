import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputCheckBox } from '@ta/form-model';

import { CheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;
  let inputModel: InputCheckBox;

  beforeEach(async () => {
    inputModel = new InputCheckBox({ key: 'agree', label: 'Agree' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        CheckboxComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have checkbox input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('checkbox');
  });

  it('should default value to false', () => {
    expect(component.input.value).toBeFalse();
  });

  it('should emit valueChanged when onChange is called', () => {
    spyOn(component.valueChanged, 'emit');
    component.onChange(true);
    expect(component.valueChanged.emit).toHaveBeenCalledWith(true);
  });
});
