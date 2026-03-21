import { TestBed } from '@angular/core/testing';

import { IPwaConfig, PWA_CONFIG_KEY, TaPwaService } from './pwa.service';

describe('TaPwaService', () => {
  describe('with active config', () => {
    let service: TaPwaService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          TaPwaService,
          { provide: PWA_CONFIG_KEY, useValue: { active: true } as IPwaConfig },
        ],
      });
      service = TestBed.inject(TaPwaService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should have isPWaCapability$ initialized to false', () => {
      expect(service.isPWaCapability$.getValue()).toBe(false);
    });

    it('should return false for isPWaCapability when no prompt event', () => {
      expect(service.isPWaCapability()).toBe(false);
    });

    it('should have launchInstall method', () => {
      expect(service.launchInstall).toBeDefined();
      expect(typeof service.launchInstall).toBe('function');
    });

    it('should not throw when launchInstall called without prompt event', () => {
      expect(() => service.launchInstall()).not.toThrow();
    });
  });

  describe('with inactive config', () => {
    let service: TaPwaService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          TaPwaService,
          { provide: PWA_CONFIG_KEY, useValue: { active: false } as IPwaConfig },
        ],
      });
      service = TestBed.inject(TaPwaService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return false for isPWaCapability', () => {
      expect(service.isPWaCapability()).toBe(false);
    });
  });
});

describe('PWA_CONFIG_KEY', () => {
  it('should be defined', () => {
    expect(PWA_CONFIG_KEY).toBeDefined();
    expect(PWA_CONFIG_KEY).toBe('config_pwa');
  });
});
