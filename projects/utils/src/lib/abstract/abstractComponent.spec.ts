import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Subscription, of } from 'rxjs';

import { TaAbstractComponent } from './abstractComponent';

@Component({
  standalone: true,
  selector: 'ta-test-abstract',
  template: '',
})
class TestAbstractComponent extends TaAbstractComponent {
  registerSub(sub: Subscription) {
    this._registerSubscription(sub);
  }
}

describe('TaAbstractComponent', () => {
  let component: TestAbstractComponent;
  let fixture: ComponentFixture<TestAbstractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestAbstractComponent],
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
    fixture = TestBed.createComponent(TestAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a requestState', () => {
    expect(component.requestState).toBeTruthy();
  });

  it('should have breakpoints injected', () => {
    expect(component.breakpoints).toBeTruthy();
  });

  it('should have icon reference', () => {
    expect(component.icon).toBeTruthy();
  });

  it('should expose isMobile getter', () => {
    expect(component.isMobile).toBeDefined();
  });

  it('should expose isDesktop getter', () => {
    expect(component.isDesktop).toBeDefined();
  });

  it('should register subscriptions', () => {
    const sub = new Subscription();
    component.registerSub(sub);
    expect((component as any)._subscriberHandler._subscriptionList.length).toBe(1);
  });

  it('should unsubscribe all on destroy', () => {
    const sub = new Subscription();
    spyOn(sub, 'unsubscribe');
    component.registerSub(sub);
    component.ngOnDestroy();
    expect(sub.unsubscribe).toHaveBeenCalled();
  });
});
