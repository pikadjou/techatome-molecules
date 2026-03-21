import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { of } from 'rxjs';

import { TaBaseComponent } from './baseComponent';

@Component({
  standalone: true,
  selector: 'ta-test-base',
  template: '',
})
class TestBaseComponent extends TaBaseComponent {}

describe('TaBaseComponent', () => {
  let component: TestBaseComponent;
  let fixture: ComponentFixture<TestBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestBaseComponent],
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
    fixture = TestBed.createComponent(TestBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('trackById', () => {
    it('should return item id', () => {
      const result = component.trackById(0, { id: 42 });
      expect(result).toBe(42);
    });

    it('should return string id', () => {
      const result = component.trackById(0, { id: 'abc' });
      expect(result).toBe('abc');
    });
  });

  describe('trackByKey', () => {
    it('should return item key', () => {
      const result = component.trackByKey(0, { key: 'myKey' });
      expect(result).toBe('myKey');
    });
  });
});
