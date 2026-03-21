import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputCulture } from '@ta/form-model';

import { CultureComponent } from './culture.component';

describe('CultureComponent', () => {
  let component: CultureComponent;
  let fixture: ComponentFixture<CultureComponent>;
  let inputModel: InputCulture;

  beforeEach(async () => {
    inputModel = new InputCulture({ key: 'culture', label: 'Culture' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        CultureComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CultureComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have culture input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('culture');
  });
});
