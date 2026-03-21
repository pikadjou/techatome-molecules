import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputTextBox } from '@ta/form-model';

import { TaAbstractInputComponent } from './abstract.component';

@Component({
  selector: 'ta-test-input',
  template: '',
  standalone: true,
})
class TestInputComponent extends TaAbstractInputComponent<InputTextBox, string> {}

describe('TaAbstractInputComponent', () => {
  let component: TestInputComponent;
  let fixture: ComponentFixture<TestInputComponent>;
  let inputModel: InputTextBox;

  beforeEach(async () => {
    inputModel = new InputTextBox({ key: 'test', label: 'Test' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TestInputComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TestInputComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the input model via getter', () => {
    expect(component.input).toBe(inputModel);
  });

  it('should have validators property from Angular Validators', () => {
    expect(component.validators).toBeTruthy();
  });

  it('should emit valueChanged when onChange is called', () => {
    spyOn(component.valueChanged, 'emit');
    component.onChange('new value');
    expect(component.valueChanged.emit).toHaveBeenCalledWith('new value');
  });

  it('should subscribe to input changeValue$ on init', () => {
    spyOn(component.valueChanged, 'emit');
    inputModel.formControl?.setValue('changed');
    expect(component.valueChanged.emit).toHaveBeenCalled();
  });

  it('should default standalone to false', () => {
    expect(component.standalone).toBeFalse();
  });

  it('should default onFocus to undefined', () => {
    expect(component.onFocus).toBeUndefined();
  });
});
