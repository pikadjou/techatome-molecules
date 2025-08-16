import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GoogleMapsLoaderService {
  readonly apiKey = 'AIzaSyDxd03WdDtISHBrM_6rCYS426grfl_bK8Y';

  load(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      if ((window as any).google?.maps) {
        resolve();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places,geometry&v=weekly&callback=initMapLoader`;
      script.async = true;
      script.defer = true;
      script.onerror = () => reject(new Error('Google Maps API failed to load.'));
      script.setAttribute('data-google-maps-api', 'true');

      (window as any).initMapLoader = () => {
        resolve();
      };

      document.head.appendChild(script);
    });
  }
}
