import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputCheckBox } from '@ta/form-model';

import { ToggleComponent } from './toggle.component';

describe('ToggleComponent', () => {
  let component: ToggleComponent;
  let fixture: ComponentFixture<ToggleComponent>;
  let inputModel: InputCheckBox;

  beforeEach(async () => {
    inputModel = new InputCheckBox({ key: 'enabled', label: 'Enabled', toggle: true });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        ToggleComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ToggleComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have toggle control type', () => {
    expect(component.input.controlType).toBe('toggle');
  });

  it('should emit valueChanged when onChange is called', () => {
    spyOn(component.valueChanged, 'emit');
    component.onChange(true);
    expect(component.valueChanged.emit).toHaveBeenCalledWith(true);
  });
});
