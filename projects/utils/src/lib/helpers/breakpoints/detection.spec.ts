import { TestBed } from '@angular/core/testing';
import { BreakpointObserver } from '@angular/cdk/layout';

import { of } from 'rxjs';

import { BreakpointDetection } from './detection';

describe('BreakpointDetection', () => {
  let service: BreakpointDetection;
  let breakpointObserverSpy: jasmine.SpyObj<BreakpointObserver>;

  beforeEach(() => {
    breakpointObserverSpy = jasmine.createSpyObj('BreakpointObserver', [
      'observe',
      'isMatched',
    ]);
    breakpointObserverSpy.isMatched.and.returnValue(false);
    breakpointObserverSpy.observe.and.returnValue(
      of({ matches: false, breakpoints: {} })
    );

    TestBed.configureTestingModule({
      providers: [
        BreakpointDetection,
        { provide: BreakpointObserver, useValue: breakpointObserverSpy },
      ],
    });
    service = TestBed.inject(BreakpointDetection);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have breakpointObserver injected', () => {
    expect(service.breakpointObserver).toBeTruthy();
  });

  it('should expose isMobile property', () => {
    expect(service.isMobile).toBeDefined();
  });

  it('should expose isDesktop property', () => {
    expect(service.isDesktop).toBeDefined();
  });

  it('should expose isTablette property', () => {
    expect(service.isTablette).toBeDefined();
  });

  it('should expose isLessThanXS property', () => {
    expect(service.isLessThanXS).toBeDefined();
  });

  it('should expose isLessThanSM property', () => {
    expect(service.isLessThanSM).toBeDefined();
  });

  it('should expose isLessThanMD property', () => {
    expect(service.isLessThanMD).toBeDefined();
  });

  it('should expose isLessThanLG property', () => {
    expect(service.isLessThanLG).toBeDefined();
  });

  it('should expose isMoreThanXS property', () => {
    expect(service.isMoreThanXS).toBeDefined();
  });

  it('should expose isMoreThanSM property', () => {
    expect(service.isMoreThanSM).toBeDefined();
  });

  it('should expose isMoreThanMD property', () => {
    expect(service.isMoreThanMD).toBeDefined();
  });

  it('should expose isMoreThanLG property', () => {
    expect(service.isMoreThanLG).toBeDefined();
  });

  it('should expose observable streams', () => {
    expect(service.isMobile$).toBeTruthy();
    expect(service.isDesktop$).toBeTruthy();
    expect(service.isTablette$).toBeTruthy();
    expect(service.isLessThanXS$).toBeTruthy();
    expect(service.isLessThanSM$).toBeTruthy();
    expect(service.isLessThanMD$).toBeTruthy();
    expect(service.isLessThanLG$).toBeTruthy();
    expect(service.isMoreThanXS$).toBeTruthy();
    expect(service.isMoreThanSM$).toBeTruthy();
    expect(service.isMoreThanMD$).toBeTruthy();
    expect(service.isMoreThanLG$).toBeTruthy();
  });
});
