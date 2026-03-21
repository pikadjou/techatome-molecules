import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Observable, of } from 'rxjs';

import { TaBasePage } from './basePage';

@Component({
  standalone: true,
  selector: 'ta-test-page',
  template: '',
})
class TestBasePage extends TaBasePage {
  getPathParams<T extends object>(data: T): Observable<T> {
    return this._getPathParams(data);
  }

  getQueryParams<T extends object>(data: T): Observable<T> {
    return this._getQueryParams(data);
  }
}

describe('TaBasePage', () => {
  let component: TestBasePage;
  let fixture: ComponentFixture<TestBasePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestBasePage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '42' }),
            queryParams: of({ search: 'test' }),
          },
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
    fixture = TestBed.createComponent(TestBasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should extend TaAbstractComponent', () => {
    expect(component.requestState).toBeTruthy();
  });

  it('should get path params as observable', (done) => {
    component.getPathParams({ id: '' }).subscribe((params) => {
      expect(params).toBeTruthy();
      done();
    });
  });

  it('should get query params as observable', (done) => {
    component.getQueryParams({ search: '' }).subscribe((params) => {
      expect(params).toBeTruthy();
      done();
    });
  });

  it('should convert numeric path params to numbers', (done) => {
    component.getPathParams({ id: 0 }).subscribe((params) => {
      expect(params.id).toBe(42);
      done();
    });
  });
});
