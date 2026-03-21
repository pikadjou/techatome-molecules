import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

import { InputLogo } from '@ta/form-model';
import { TaDocumentsService } from '@ta/services';

import { InputLogoComponent } from './input-logo.component';

describe('InputLogoComponent', () => {
  let component: InputLogoComponent;
  let fixture: ComponentFixture<InputLogoComponent>;
  let inputModel: InputLogo;
  let documentsServiceSpy: jasmine.SpyObj<TaDocumentsService>;

  beforeEach(async () => {
    documentsServiceSpy = jasmine.createSpyObj('TaDocumentsService', ['addDocument$']);
    documentsServiceSpy.addDocument$.and.returnValue(
      of({ id: '1', url: 'https://example.com/logo.png', description: 'logo' } as any)
    );

    inputModel = new InputLogo({ key: 'logo', label: 'Logo' });
    inputModel.createFormControl();

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputLogoComponent,
      ],
      providers: [{ provide: TaDocumentsService, useValue: documentsServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(InputLogoComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('input', inputModel);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have logo input model', () => {
    expect(component.input).toBe(inputModel);
    expect(component.input.controlType).toBe('logo');
  });

  it('should clear the logo value on removeLogo', () => {
    inputModel.value = 'https://example.com/logo.png';
    component.removeLogo();
    expect(inputModel.value).toBe('');
  });
});
