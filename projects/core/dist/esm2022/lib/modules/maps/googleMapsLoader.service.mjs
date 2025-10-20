import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class GoogleMapsLoaderService {
    constructor() {
        this.apiKey = 'AIzaSyDxd03WdDtISHBrM_6rCYS426grfl_bK8Y';
    }
    load() {
        return new Promise((resolve, reject) => {
            if (window.google?.maps) {
                resolve();
                return;
            }
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places,geometry&v=weekly&callback=initMapLoader`;
            script.async = true;
            script.defer = true;
            script.onerror = () => reject(new Error('Google Maps API failed to load.'));
            script.setAttribute('data-google-maps-api', 'true');
            window.initMapLoader = () => {
                resolve();
            };
            document.head.appendChild(script);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GoogleMapsLoaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GoogleMapsLoaderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GoogleMapsLoaderService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlTWFwc0xvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL21hcHMvZ29vZ2xlTWFwc0xvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBTyx1QkFBdUI7SUFEcEM7UUFFVyxXQUFNLEdBQUcseUNBQXlDLENBQUM7S0F1QjdEO0lBckJDLElBQUk7UUFDRixPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzNDLElBQUssTUFBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsT0FBTztZQUNULENBQUM7WUFFRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxHQUFHLEdBQUcsK0NBQStDLElBQUksQ0FBQyxNQUFNLDREQUE0RCxDQUFDO1lBQ3BJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQztZQUM1RSxNQUFNLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRW5ELE1BQWMsQ0FBQyxhQUFhLEdBQUcsR0FBRyxFQUFFO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUMsQ0FBQztZQUVGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0F2QlUsdUJBQXVCO21IQUF2Qix1QkFBdUIsY0FEVixNQUFNOzs0RkFDbkIsdUJBQXVCO2tCQURuQyxVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVNYXBzTG9hZGVyU2VydmljZSB7XHJcbiAgcmVhZG9ubHkgYXBpS2V5ID0gJ0FJemFTeUR4ZDAzV2REdElTSEJyTV82ckNZUzQyNmdyZmxfYks4WSc7XHJcblxyXG4gIGxvYWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLmdvb2dsZT8ubWFwcykge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICBzY3JpcHQuc3JjID0gYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JHt0aGlzLmFwaUtleX0mbGlicmFyaWVzPXBsYWNlcyxnZW9tZXRyeSZ2PXdlZWtseSZjYWxsYmFjaz1pbml0TWFwTG9hZGVyYDtcclxuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcclxuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PiByZWplY3QobmV3IEVycm9yKCdHb29nbGUgTWFwcyBBUEkgZmFpbGVkIHRvIGxvYWQuJykpO1xyXG4gICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdkYXRhLWdvb2dsZS1tYXBzLWFwaScsICd0cnVlJyk7XHJcblxyXG4gICAgICAod2luZG93IGFzIGFueSkuaW5pdE1hcExvYWRlciA9ICgpID0+IHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19