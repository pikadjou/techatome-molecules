import { TestBed } from '@angular/core/testing';
import { Overlay } from '@angular/cdk/overlay';
import { Injector } from '@angular/core';

import { Logger } from '@ta/server';

import { TaOverlayService } from '@lib/ui/modules/overlay-panel/overlay.service';

describe('TaOverlayService', () => {
  let service: TaOverlayService;
  let mockOverlay: jasmine.SpyObj<Overlay>;

  beforeEach(() => {
    mockOverlay = jasmine.createSpyObj('Overlay', ['create', 'position', 'scrollStrategies']);
    mockOverlay.scrollStrategies = { close: jasmine.createSpy('close').and.returnValue({}) } as any;

    TestBed.configureTestingModule({
      providers: [
        TaOverlayService,
        { provide: Overlay, useValue: mockOverlay },
        Injector,
      ],
    });

    service = TestBed.inject(TaOverlayService);
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
    spyOn(Logger, 'LogWarning');
    service.openMenu({ menuComponent: class {} as any });
    expect(Logger.LogWarning).toHaveBeenCalledWith('TaOverlayService: triggerElement is required.');
  });

  it('should log and return when openMenu is called without menuComponent', () => {
    spyOn(Logger, 'LogWarning');
    service.openMenu({ triggerElement: document.createElement('div') });
    expect(Logger.LogWarning).toHaveBeenCalledWith('TaOverlayService: menuComponent is required.');
  });
});
