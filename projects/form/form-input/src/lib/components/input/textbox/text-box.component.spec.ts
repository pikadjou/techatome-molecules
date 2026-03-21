import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputPassword, InputTextBox } from '@ta/form-model';

import { TextBoxComponent } from './text-box.component';

describe('TextBoxComponent', () => {
  let component: TextBoxComponent;
  let fixture: ComponentFixture<TextBoxComponent>;
  let inputModel: InputTextBox;

  beforeEach(async () => {
    inputModel = new InputTextBox({ key: 'name', label: 'Name', value: 'John' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TextBoxComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TextBoxComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default space to true', () => {
    expect(component.space()).toBeTrue();
  });

  it('should not be password type for a regular textbox', () => {
    expect(component.isPassword).toBeFalse();
  });

  it('should not hide by default for non-password inputs', () => {
    expect(component.hide).toBeFalse();
  });

  it('should call iconClicked on the input model when iconClicked is invoked', () => {
    const spy = jasmine.createSpy('iconClicked');
    inputModel.iconClicked = spy;
    component.iconClicked();
    expect(spy).toHaveBeenCalled();
  });

  it('should do nothing if iconClicked is not defined on input model', () => {
    inputModel.iconClicked = undefined;
    expect(() => component.iconClicked()).not.toThrow();
  });

  describe('with password input', () => {
    let passwordInput: InputPassword;

    beforeEach(async () => {
      passwordInput = new InputPassword({ key: 'password', label: 'Password' });
      passwordInput.createFormControl();

      fixture.componentRef.setInput('input', passwordInput);
      component.ngOnInit();
      fixture.detectChanges();
    });

    it('should detect password type', () => {
      expect(component.isPassword).toBeTrue();
    });

    it('should set hide to true for password inputs', () => {
      expect(component.hide).toBeTrue();
    });
  });
});
