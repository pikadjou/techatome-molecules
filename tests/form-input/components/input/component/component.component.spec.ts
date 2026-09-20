import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputComponent } from '@ta/form-model';

import { ComponentInputComponent } from '@lib/form-input/components/input/component/component.component';

describe('ComponentInputComponent', () => {
  let component: ComponentInputComponent;
  let fixture: ComponentFixture<ComponentInputComponent>;
  let inputModel: InputComponent;

  beforeEach(async () => {
    inputModel = new InputComponent({ key: 'comp', label: 'Component' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        ComponentInputComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentInputComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have component input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('component');
  });

  it('should open the selector modal with the input model when open is called', () => {
    component.open();
    expect(component.selectorModal.open()).toBe(true);
    expect(component.selectorModal.input()).toBe(inputModel);
  });
});
