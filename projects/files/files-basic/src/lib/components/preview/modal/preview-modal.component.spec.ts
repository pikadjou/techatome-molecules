import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { PreviewDocumentDto } from '../type';
import { PreviewModal } from './preview-modal.component';

describe('PreviewModal', () => {
  let component: PreviewModal;
  let fixture: ComponentFixture<PreviewModal>;

  const documents: PreviewDocumentDto[] = [
    { filename: 'Séjour', url: 'https://example.com/sejour.jpg' },
    { filename: 'Cuisine', url: 'https://example.com/cuisine.jpg' },
    { filename: 'Chambre', url: 'https://example.com/chambre.jpg' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        PreviewModal,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(PreviewModal);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('open', false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fall back to the single document when no gallery is given', () => {
    fixture.componentRef.setInput('initial', documents[0]);
    fixture.detectChanges();

    expect(component.items()).toEqual([documents[0]]);
    expect(component.hasGallery()).toBe(false);
  });

  it('should open on the requested document', () => {
    fixture.componentRef.setInput('documents', documents);
    fixture.componentRef.setInput('initial', documents[2]);
    fixture.componentRef.setInput('open', true);
    fixture.detectChanges();

    expect(component.index()).toBe(2);
    expect(component.current()).toEqual(documents[2]);
    expect(component.hasGallery()).toBe(true);
  });

  it('should wrap around when browsing', () => {
    fixture.componentRef.setInput('documents', documents);
    fixture.componentRef.setInput('initial', documents[0]);
    fixture.componentRef.setInput('open', true);
    fixture.detectChanges();

    component.previous();
    expect(component.index()).toBe(2);

    component.next();
    expect(component.index()).toBe(0);
  });

  it('should forget the browsed position once closed', () => {
    fixture.componentRef.setInput('documents', documents);
    fixture.componentRef.setInput('initial', documents[1]);
    fixture.componentRef.setInput('open', true);
    fixture.detectChanges();

    component.select(2);
    expect(component.index()).toBe(2);

    fixture.componentRef.setInput('open', false);
    fixture.detectChanges();
    fixture.componentRef.setInput('open', true);
    fixture.detectChanges();

    expect(component.index()).toBe(1);
  });

  it('should emit on close', () => {
    const spy = jasmine.createSpy('close');
    component.closeEvent.subscribe(spy);

    component.close();

    expect(spy).toHaveBeenCalled();
  });
});
