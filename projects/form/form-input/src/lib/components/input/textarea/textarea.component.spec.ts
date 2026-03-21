import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputTextarea } from '@ta/form-model';

import { TextareaComponent } from './textarea.component';

describe('TextareaComponent', () => {
  let component: TextareaComponent;
  let fixture: ComponentFixture<TextareaComponent>;
  let inputModel: InputTextarea;

  beforeEach(async () => {
    inputModel = new InputTextarea({ key: 'description', label: 'Description' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TextareaComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TextareaComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the textarea input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('textarea');
  });

  it('should emit valueChanged when form control value changes', () => {
    spyOn(component.valueChanged, 'emit');
    inputModel.formControl?.setValue('new text');
    expect(component.valueChanged.emit).toHaveBeenCalled();
  });
});
