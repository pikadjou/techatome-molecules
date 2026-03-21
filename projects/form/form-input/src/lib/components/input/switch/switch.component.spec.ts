import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { InputSwitch } from '@ta/form-model';

import { SwitchComponent } from './switch.component';

describe('SwitchComponent', () => {
  let component: SwitchComponent;
  let fixture: ComponentFixture<SwitchComponent>;
  let inputModel: InputSwitch;

  beforeEach(async () => {
    inputModel = new InputSwitch({
      key: 'switch',
      label: 'Switch',
      match: of({ type: 'textbox', prop: { key: 'text', label: 'Text' } }),
    });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        SwitchComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SwitchComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have switch input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('switch');
  });

  it('should set matchtype from the match observable', () => {
    expect(inputModel.matchtype()).toBe('textbox');
  });
});
