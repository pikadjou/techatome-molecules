import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputTextBox } from '@ta/form-model';

import { InputLayoutComponent } from './input-layout.component';

describe('InputLayoutComponent', () => {
  let component: InputLayoutComponent;
  let fixture: ComponentFixture<InputLayoutComponent>;
  let inputModel: InputTextBox;

  beforeEach(async () => {
    inputModel = new InputTextBox({ key: 'test', label: 'Test' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputLayoutComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputLayoutComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the input model', () => {
    expect(component.inputModel()).toBe(inputModel);
  });

  it('should default width to 100%', () => {
    expect(component.width()).toBe('100%');
  });

  it('should default height to 100%', () => {
    expect(component.height()).toBe('100%');
  });

  it('should compute containerStyles from width and height', () => {
    expect(component.containerStyles).toEqual({
      width: '100%',
      height: '100%',
    });
  });

  it('should update containerStyles when width changes', () => {
    fixture.componentRef.setInput('width', '50%');
    fixture.detectChanges();
    expect(component.containerStyles.width).toBe('50%');
  });

  it('should update containerStyles when height changes', () => {
    fixture.componentRef.setInput('height', '200px');
    fixture.detectChanges();
    expect(component.containerStyles.height).toBe('200px');
  });
});
