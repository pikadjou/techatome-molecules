import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputSlider } from '@ta/form-model';

import { SliderComponent } from './slider.component';

describe('SliderComponent', () => {
  let component: SliderComponent;
  let fixture: ComponentFixture<SliderComponent>;
  let inputModel: InputSlider;

  beforeEach(async () => {
    inputModel = new InputSlider({ key: 'volume', label: 'Volume', min: 0, max: 100, value: 50 });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        SliderComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SliderComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have slider input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('slider');
  });

  it('should expose min and max from input model', () => {
    expect(component.input.min).toBe(0);
    expect(component.input.max).toBe(100);
  });

  it('should emit valueChanged when form control value changes', () => {
    spyOn(component.valueChanged, 'emit');
    inputModel.formControl?.setValue(75);
    expect(component.valueChanged.emit).toHaveBeenCalled();
  });
});
