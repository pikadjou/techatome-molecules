import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ModalState } from '@ta/utils';

import { ModalParameter } from '../common-modal';
import { ValidationModal } from './modal-validation.component';

describe('ValidationModal', () => {
  let component: ValidationModal;
  let fixture: ComponentFixture<ValidationModal>;
  let state: ModalState<ModalParameter | undefined, boolean>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        ValidationModal,
      ],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ValidationModal);
    component = fixture.componentInstance;
    state = new ModalState<ModalParameter | undefined, boolean>();
    fixture.componentRef.setInput('modalState', state);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be closed until asked', () => {
    expect(component.isOpen()).toBe(false);
    state.asked(undefined);
    expect(component.isOpen()).toBe(true);
  });

  it('should return default title and subtitle without params', () => {
    state.asked(undefined);
    expect(component.title).toBe('validation.modal.title');
    expect(component.subtitle).toBe('validation.modal.content');
  });

  it('should return the title and subtitle given as input', () => {
    state.asked({ title: 'Custom Title', subtitle: 'Custom Subtitle' });
    expect(component.title).toBe('Custom Title');
    expect(component.subtitle).toBe('Custom Subtitle');
  });

  it('should dismiss without result when onNoClick is called', () => {
    const emitted: boolean[] = [];
    component.closeEvent.subscribe(value => emitted.push(value));
    state.asked(undefined);

    component.onNoClick();

    expect(state.open()).toBe(false);
    expect(state.output()).toBeNull();
    expect(emitted).toEqual([]);
  });

  it('should confirm with true when onYesClick is called', () => {
    const emitted: boolean[] = [];
    component.closeEvent.subscribe(value => emitted.push(value));
    state.asked(undefined);

    component.onYesClick();

    expect(state.open()).toBe(false);
    expect(state.output()).toBe(true);
    expect(emitted).toEqual([true]);
  });
});
