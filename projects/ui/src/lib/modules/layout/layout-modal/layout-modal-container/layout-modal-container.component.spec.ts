import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TemplateRef } from '@angular/core';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { TemplateModalContainer, TemplateModalContainerData } from './layout-modal-container.component';

describe('TemplateModalContainer', () => {
  let component: TemplateModalContainer;
  let fixture: ComponentFixture<TemplateModalContainer>;
  let mockDialogRef: jasmine.SpyObj<MatDialogRef<any>>;
  let mockTemplateRef: jasmine.SpyObj<TemplateRef<any>>;

  beforeEach(async () => {
    mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close', 'addPanelClass']);
    mockTemplateRef = jasmine.createSpyObj('TemplateRef', ['createEmbeddedView']);

    const mockData: TemplateModalContainerData = {
      template: mockTemplateRef,
    };

    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        TemplateModalContainer,
      ],
      providers: [
        provideRouter([]),
        { provide: MAT_DIALOG_DATA, useValue: mockData },
        { provide: MatDialogRef, useValue: mockDialogRef },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateModalContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default style to full when data has no style', () => {
    expect(component.style).toBe('full');
  });
});
