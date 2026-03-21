import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { InputComponent } from '@ta/form-model';

import { ComponentInputComponent } from './component.component';

describe('ComponentInputComponent', () => {
  let component: ComponentInputComponent;
  let fixture: ComponentFixture<ComponentInputComponent>;
  let inputModel: InputComponent;
  let dialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(async () => {
    dialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    inputModel = new InputComponent({ key: 'comp', label: 'Component' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        MatDialogModule,
        ComponentInputComponent,
      ],
      providers: [{ provide: MatDialog, useValue: dialogSpy }],
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

  it('should open dialog when open is called', () => {
    component.open();
    expect(dialogSpy.open).toHaveBeenCalled();
  });
});
