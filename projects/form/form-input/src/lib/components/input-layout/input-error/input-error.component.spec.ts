import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputTextBox } from '@ta/form-model';

import { InputErrorComponent } from './input-error.component';

describe('InputErrorComponent', () => {
  let component: InputErrorComponent;
  let fixture: ComponentFixture<InputErrorComponent>;
  let inputModel: InputTextBox;

  beforeEach(async () => {
    inputModel = new InputTextBox({ key: 'test', label: 'Test' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputErrorComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputErrorComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the input model', () => {
    expect(component.input()).toBe(inputModel);
  });
});
