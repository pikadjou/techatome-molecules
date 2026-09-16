import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ModalState } from '@ta/utils';

import { InputLogoModal, InputLogoModalInput } from './input-logo-modal.component';

describe('InputLogoModal', () => {
  let component: InputLogoModal;
  let fixture: ComponentFixture<InputLogoModal>;
  let state: ModalState<InputLogoModalInput, string | null>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputLogoModal,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputLogoModal);
    component = fixture.componentInstance;
    state = new ModalState<InputLogoModalInput, string | null>();
    fixture.componentRef.setInput('modalState', state);
    fixture.detectChanges();

    state.asked({ initialSelection: 'https://example.com/logo.png' });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize selection from the modal input on opening', () => {
    expect(component.isOpen()).toBe(true);
    expect(component.selection).toBe('https://example.com/logo.png');
  });

  it('should toggle file selection', () => {
    component.onFileSelected({ url: 'https://example.com/other.png' } as any);
    expect(component.selection).toBe('https://example.com/other.png');
  });

  it('should deselect when same file is selected', () => {
    component.onFileSelected({ url: 'https://example.com/logo.png' } as any);
    expect(component.selection).toBeNull();
  });

  it('should confirm with the selection on selected()', () => {
    const emitted: (string | null)[] = [];
    component.closeEvent.subscribe(value => emitted.push(value));

    component.selected();

    expect(state.open()).toBe(false);
    expect(state.output()).toBe('https://example.com/logo.png');
    expect(emitted).toEqual(['https://example.com/logo.png']);
  });

  it('should dismiss without result on cancel()', () => {
    const emitted: (string | null)[] = [];
    component.closeEvent.subscribe(value => emitted.push(value));

    component.cancel();

    expect(state.open()).toBe(false);
    expect(state.output()).toBeNull();
    expect(emitted).toEqual([]);
  });

  it('should clear selection on clearSelection()', () => {
    component.clearSelection();
    expect(component.selection).toBeNull();
  });
});
