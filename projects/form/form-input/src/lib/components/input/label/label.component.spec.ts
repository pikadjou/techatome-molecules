import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputLabel } from '@ta/form-model';

import { LabelComponent } from './label.component';

describe('LabelComponent (input)', () => {
  let component: LabelComponent;
  let fixture: ComponentFixture<LabelComponent>;
  let inputModel: InputLabel;

  beforeEach(async () => {
    inputModel = new InputLabel({ key: 'info', label: 'Information', level: 2 });

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        LabelComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LabelComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have label input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('label');
  });

  it('should expose label properties', () => {
    expect(component.input.label).toBe('Information');
    expect(component.input.level).toBe(2);
  });
});
