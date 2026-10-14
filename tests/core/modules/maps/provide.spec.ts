import { APP_INITIALIZER } from '@angular/core';

import { of } from 'rxjs';

import { TA_GOOGLE_MAPS_CONFIG } from '@lib/core/modules/maps/google-maps.config';
import { TaGoogleMapsLoaderService } from '@lib/core/modules/maps/googleMapsLoader.service';
import { initializeGoogleMaps, provideGoogleMaps } from '@lib/core/modules/maps/provide';

describe('provideGoogleMaps', () => {
  const providers = () => provideGoogleMaps({ apiKey: 'test-key' }) as any[];

  it('should return an array of providers', () => {
    expect(Array.isArray(providers())).toBeTrue();
  });

  it('should provide the configuration token', () => {
    const configProvider = providers().find((p: any) => p.provide === TA_GOOGLE_MAPS_CONFIG);

    expect(configProvider.useValue).toEqual({ apiKey: 'test-key' });
  });

  it('should contain an APP_INITIALIZER provider', () => {
    const appInitProvider = providers().find((p: any) => p.provide === APP_INITIALIZER);

    expect(appInitProvider).toBeTruthy();
    expect(appInitProvider.multi).toBeTrue();
  });

  it('should have TaGoogleMapsLoaderService as a dependency', () => {
    const appInitProvider = providers().find((p: any) => p.provide === APP_INITIALIZER);

    expect(appInitProvider.deps).toContain(TaGoogleMapsLoaderService);
  });
});

describe('initializeGoogleMaps', () => {
  it('should return a function that calls loader.load$()', () => {
    const mockLoader = jasmine.createSpyObj('TaGoogleMapsLoaderService', ['load$']);
    mockLoader.load$.and.returnValue(of(undefined));

    const initFn = initializeGoogleMaps(mockLoader);

    expect(typeof initFn).toBe('function');
    initFn();
    expect(mockLoader.load$).toHaveBeenCalled();
  });
});
