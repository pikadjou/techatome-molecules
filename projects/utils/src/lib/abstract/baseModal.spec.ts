import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { of } from 'rxjs';

import { TaBaseModal } from './baseModal';

@Component({
  standalone: true,
  selector: 'ta-test-modal',
  template: '',
})
class TestBaseModal extends TaBaseModal {}

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
});
