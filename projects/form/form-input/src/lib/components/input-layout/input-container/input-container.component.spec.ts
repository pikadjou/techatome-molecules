import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputTextBox } from '@ta/form-model';

import { InputContainerComponent } from './input-container.component';

describe('InputContainerComponent', () => {
  let component: InputContainerComponent;
  let fixture: ComponentFixture<InputContainerComponent>;
  let inputModel: InputTextBox;

  beforeEach(async () => {
    inputModel = new InputTextBox({ key: 'test', label: 'Test' });

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputContainerComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputContainerComponent);
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
