import { TestBed } from '@angular/core/testing';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { Injector } from '@angular/core';

import { OverlayService } from './overlay.service';

describe('OverlayService', () => {
  let service: OverlayService;
  let mockOverlay: jasmine.SpyObj<Overlay>;

  beforeEach(() => {
    mockOverlay = jasmine.createSpyObj('Overlay', ['create', 'position', 'scrollStrategies']);
    mockOverlay.scrollStrategies = { close: jasmine.createSpy('close').and.returnValue({}) } as any;

    TestBed.configureTestingModule({
      providers: [
        OverlayService,
        { provide: Overlay, useValue: mockOverlay },
        Injector,
      ],
    });

    service = TestBed.inject(OverlayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an onClose$ observable', () => {
    expect(service.onClose$).toBeDefined();
  });

  it('should not throw when closeMenu is called without an open menu', () => {
    expect(() => service.closeMenu()).not.toThrow();
  });

  it('should emit onClose$ when closeMenu is called', (done) => {
    service.onClose$.subscribe(() => {
      expect(true).toBe(true);
      done();
    });
    service.closeMenu();
  });

  it('should log and return when openMenu is called without triggerElement', () => {
    spyOn(console, 'log');
    service.openMenu({ menuComponent: class {} as any });
    expect(console.log).toHaveBeenCalledWith('OverlayService: triggerElement is required.');
  });

  it('should log and return when openMenu is called without menuComponent', () => {
    spyOn(console, 'log');
    service.openMenu({ triggerElement: document.createElement('div') });
    expect(console.log).toHaveBeenCalledWith('OverlayService: menuComponent is required.');
  });
});
