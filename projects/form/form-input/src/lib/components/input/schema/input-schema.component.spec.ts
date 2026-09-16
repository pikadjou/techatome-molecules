import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputSchema } from '@ta/form-model';

import { InputSchemaComponent } from './input-schema.component';

describe('InputSchemaComponent', () => {
  let component: InputSchemaComponent;
  let fixture: ComponentFixture<InputSchemaComponent>;
  let inputModel: InputSchema;

  beforeEach(async () => {
    inputModel = new InputSchema({ key: 'schema', label: 'Schema' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputSchemaComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputSchemaComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have schema input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('schema');
  });

  it('should return null pics when value is null', () => {
    inputModel.value = null;
    expect(component.pics).toBeNull();
  });

  it('should return pics array when value is set', () => {
    inputModel.value = 'data:image/png;base64,abc123';
    expect(component.pics).toEqual([{ id: 0, type: 'Image', url: 'data:image/png;base64,abc123' }]);
  });

  it('should return false for isCircularButton when no pics', () => {
    inputModel.value = null;
    expect(component.isCircularButton).toBeFalse();
  });

  it('should return true for isCircularButton when pics exist', () => {
    inputModel.value = 'data:image/png;base64,abc123';
    expect(component.isCircularButton).toBeTrue();
  });

  it('should update formControl when selection is set', () => {
    component.selection = 'new-value';
    expect(inputModel.formControl?.value).toBe('new-value');
  });

  it('should open the schema modal when openDialog is called', () => {
    component.openDialog();
    expect(component.schemaModal.open()).toBe(true);
  });
});
