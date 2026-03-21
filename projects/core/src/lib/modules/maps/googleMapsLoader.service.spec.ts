import { TestBed } from '@angular/core/testing';

import { GoogleMapsLoaderService } from './googleMapsLoader.service';

describe('GoogleMapsLoaderService', () => {
  let service: GoogleMapsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleMapsLoaderService],
    });
    service = TestBed.inject(GoogleMapsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an apiKey defined', () => {
    expect(service.apiKey).toBeDefined();
    expect(typeof service.apiKey).toBe('string');
    expect(service.apiKey.length).toBeGreaterThan(0);
  });

  describe('load', () => {
    it('should return a Promise', () => {
      // Mock to prevent actual script injection
      spyOn(document.head, 'appendChild');
      const result = service.load();
      expect(result instanceof Promise).toBeTrue();
    });

    it('should resolve immediately if google.maps is already loaded', async () => {
      (window as any).google = { maps: {} };

      await expectAsync(service.load()).toBeResolved();

      delete (window as any).google;
    });
  });
});
