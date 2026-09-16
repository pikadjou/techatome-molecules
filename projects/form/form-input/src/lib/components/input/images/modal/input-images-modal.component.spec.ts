import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateFakeLoader, TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { ModalState } from '@ta/utils';

import { InputImageModal, InputImagesModalInput } from './input-images-modal.component';

describe('InputImageModal', () => {
  let component: InputImageModal;
  let fixture: ComponentFixture<InputImageModal>;
  let state: ModalState<InputImagesModalInput, string[]>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: TranslateFakeLoader },
        }),
        InputImageModal,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InputImageModal);
    component = fixture.componentInstance;
    state = new ModalState<InputImagesModalInput, string[]>();
    fixture.componentRef.setInput('modalState', state);
    fixture.detectChanges();

    state.asked({ initialSelection: ['url1', 'url2'] });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize selection from the modal input on opening', () => {
    expect(component.isOpen()).toBe(true);
    expect(component.selection).toEqual(['url1', 'url2']);
  });

  it('should toggle file selection', () => {
    component.onFileSelected({ url: 'url3' } as any);
    expect(component.selection).toContain('url3');

    component.onFileSelected({ url: 'url3' } as any);
    expect(component.selection).not.toContain('url3');
  });

  it('should remove already-selected file', () => {
    component.onFileSelected({ url: 'url1' } as any);
    expect(component.selection).not.toContain('url1');
  });

  it('should confirm with the selection on selected()', () => {
    const emitted: string[][] = [];
    component.closeEvent.subscribe(value => emitted.push(value));

    component.selected();

    expect(state.open()).toBe(false);
    expect(state.output()).toEqual(['url1', 'url2']);
    expect(emitted).toEqual([['url1', 'url2']]);
  });

  it('should start again from the input at the next opening', () => {
    component.onFileSelected({ url: 'url3' } as any);
    state.dismissed();
    state.asked({ initialSelection: ['url9'] });
    fixture.detectChanges();

    expect(component.selection).toEqual(['url9']);
  });
});
