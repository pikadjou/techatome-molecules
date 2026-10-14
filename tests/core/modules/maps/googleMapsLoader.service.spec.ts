import { TestBed } from '@angular/core/testing';

import { Observable, firstValueFrom } from 'rxjs';

import { TA_GOOGLE_MAPS_CONFIG } from '@lib/core/modules/maps/google-maps.config';
import { TaGoogleMapsLoaderService } from '@lib/core/modules/maps/googleMapsLoader.service';

describe('TaGoogleMapsLoaderService', () => {
  let service: TaGoogleMapsLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaGoogleMapsLoaderService, { provide: TA_GOOGLE_MAPS_CONFIG, useValue: { apiKey: 'test-key' } }],
    });
    service = TestBed.inject(TaGoogleMapsLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expose the configured apiKey', () => {
    expect(service.apiKey).toBe('test-key');
  });

  describe('load$', () => {
    it('should return an Observable', () => {
      spyOn(document.head, 'appendChild');
      expect(service.load$() instanceof Observable).toBeTrue();
    });

    it('should complete immediately if google.maps is already loaded', async () => {
      (window as any).google = { maps: {} };

      await expectAsync(firstValueFrom(service.load$())).toBeResolved();

      delete (window as any).google;
    });

    it('should inject the script with the configured key', () => {
      const appendChild = spyOn(document.head, 'appendChild');
      service.load$().subscribe();

      const script = appendChild.calls.mostRecent().args[0] as HTMLScriptElement;
      expect(script.src).toContain('key=test-key');
      expect(script.src).toContain('libraries=places,geometry');
    });
  });
});
