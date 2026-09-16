import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';

import { of } from 'rxjs';

import { ModalState } from '../helpers/modal/state';
import { TaBaseModal } from './baseModal';

@Component({
  standalone: true,
  selector: 'ta-test-modal',
  template: '',
})
class TestBaseModal extends TaBaseModal<{ id: number }, boolean> {}

describe('TaBaseModal', () => {
  let component: TestBaseModal;
  let fixture: ComponentFixture<TestBaseModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestBaseModal],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { params: of({}), queryParams: of({}) },
        },
        {
          provide: Router,
          useValue: { url: '/test' },
        },
        {
          provide: Location,
          useValue: {},
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(TestBaseModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should extend TaAbstractComponent', () => {
    expect(component.requestState).toBeTruthy();
    expect(component.breakpoints).toBeTruthy();
  });

  it('should be closed without a modal state', () => {
    expect(component.isOpen()).toBe(false);
  });

  it('should follow the modal state and emit the result on confirm', () => {
    const state = new ModalState<{ id: number }, boolean>();
    const emitted: boolean[] = [];
    fixture.componentRef.setInput('modalState', state);
    component.closeEvent.subscribe(value => emitted.push(value));

    state.asked({ id: 1 });
    expect(component.isOpen()).toBe(true);

    component.confirm(true);
    expect(component.isOpen()).toBe(false);
    expect(state.output()).toBe(true);
    expect(emitted).toEqual([true]);
  });

  it('should close without result on dismiss', () => {
    const state = new ModalState<{ id: number }, boolean>();
    fixture.componentRef.setInput('modalState', state);
    state.asked({ id: 1 });

    component.dismiss();
    expect(component.isOpen()).toBe(false);
    expect(state.output()).toBeNull();
  });
});
