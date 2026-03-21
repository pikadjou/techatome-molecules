import { APP_INITIALIZER } from '@angular/core';

import { initializeGoogleMaps, provideGoogleMaps } from './provide';
import { GoogleMapsLoaderService } from './googleMapsLoader.service';

describe('provideGoogleMaps', () => {
  it('should return an array of providers', () => {
    const providers = provideGoogleMaps();
    expect(Array.isArray(providers)).toBeTrue();
  });

  it('should contain an APP_INITIALIZER provider', () => {
    const providers = provideGoogleMaps() as any[];
    const appInitProvider = providers.find((p: any) => p.provide === APP_INITIALIZER);

    expect(appInitProvider).toBeTruthy();
    expect(appInitProvider.multi).toBeTrue();
  });

  it('should have GoogleMapsLoaderService as a dependency', () => {
    const providers = provideGoogleMaps() as any[];
    const appInitProvider = providers.find((p: any) => p.provide === APP_INITIALIZER);

    expect(appInitProvider.deps).toContain(GoogleMapsLoaderService);
  });
});

describe('initializeGoogleMaps', () => {
  it('should return a function that calls loader.load()', () => {
    const mockLoader = jasmine.createSpyObj('GoogleMapsLoaderService', ['load']);
    mockLoader.load.and.returnValue(Promise.resolve());

    const initFn = initializeGoogleMaps(mockLoader);

    expect(typeof initFn).toBe('function');
    initFn();
    expect(mockLoader.load).toHaveBeenCalled();
  });
});
