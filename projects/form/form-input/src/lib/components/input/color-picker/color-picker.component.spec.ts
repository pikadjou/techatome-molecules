import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputColorPicker } from '@ta/form-model';

import { ColorPickerComponent } from './color-picker.component';

describe('ColorPickerComponent', () => {
  let component: ColorPickerComponent;
  let fixture: ComponentFixture<ColorPickerComponent>;
  let inputModel: InputColorPicker;

  beforeEach(async () => {
    inputModel = new InputColorPicker({ key: 'color', label: 'Color', value: '#ff0000' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        ColorPickerComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorPickerComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have color picker input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('colorPicker');
  });

  it('should update form control value when onChangeValue is called', () => {
    component.onChangeValue('#00ff00');
    expect(inputModel.formControl?.value).toBe('#00ff00');
  });

  it('should not throw if formControl is not set', () => {
    const bareInput = new InputColorPicker({ key: 'bare', label: 'Bare' });
    fixture.componentRef.setInput('input', bareInput);
    fixture.detectChanges();
    expect(() => component.onChangeValue('#0000ff')).not.toThrow();
  });
});
