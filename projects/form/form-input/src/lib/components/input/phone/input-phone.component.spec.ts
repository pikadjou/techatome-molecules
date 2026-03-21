import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Renderer2 } from '@angular/core';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputPhone } from '@ta/form-model';

import { InputPhoneComponent } from './input-phone.component';

describe('InputPhoneComponent', () => {
  let component: InputPhoneComponent;
  let fixture: ComponentFixture<InputPhoneComponent>;
  let inputModel: InputPhone;

  beforeEach(async () => {
    inputModel = new InputPhone({ key: 'phone', label: 'Phone' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputPhoneComponent,
      ],
      providers: [Renderer2],
    }).compileComponents();

    fixture = TestBed.createComponent(InputPhoneComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have phone input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('phone');
  });

  it('should have tel type', () => {
    expect(component.input.type).toBe('tel');
  });
});
