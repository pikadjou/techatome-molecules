import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class GoogleMapsLoaderService {
    constructor() {
        this.apiKey = "AIzaSyDxd03WdDtISHBrM_6rCYS426grfl_bK8Y";
    }
    load() {
        return new Promise((resolve, reject) => {
            if (window.google?.maps) {
                resolve();
                return;
            }
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${this.apiKey}&libraries=places,geometry&v=weekly&callback=initMapLoader`;
            script.async = true;
            script.defer = true;
            script.onerror = () => reject(new Error("Google Maps API failed to load."));
            script.setAttribute("data-google-maps-api", "true");
            window.initMapLoader = () => {
                resolve();
            };
            document.head.appendChild(script);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GoogleMapsLoaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GoogleMapsLoaderService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: GoogleMapsLoaderService, decorators: [{
            type: Injectable,
            args: [{ providedIn: "root" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlTWFwc0xvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL21hcHMvZ29vZ2xlTWFwc0xvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRzNDLE1BQU0sT0FBTyx1QkFBdUI7SUFEcEM7UUFFVyxXQUFNLEdBQUcseUNBQXlDLENBQUM7S0F3QjdEO0lBdEJDLElBQUk7UUFDRixPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQzNDLElBQUssTUFBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUM7Z0JBQ1YsT0FBTztZQUNULENBQUM7WUFFRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxHQUFHLEdBQUcsK0NBQStDLElBQUksQ0FBQyxNQUFNLDREQUE0RCxDQUFDO1lBQ3BJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQ3BCLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7WUFDdkQsTUFBTSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUVuRCxNQUFjLENBQUMsYUFBYSxHQUFHLEdBQUcsRUFBRTtnQkFDbkMsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLENBQUM7WUFFRixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7K0dBeEJVLHVCQUF1QjttSEFBdkIsdUJBQXVCLGNBRFYsTUFBTTs7NEZBQ25CLHVCQUF1QjtrQkFEbkMsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiBcInJvb3RcIiB9KVxuZXhwb3J0IGNsYXNzIEdvb2dsZU1hcHNMb2FkZXJTZXJ2aWNlIHtcbiAgcmVhZG9ubHkgYXBpS2V5ID0gXCJBSXphU3lEeGQwM1dkRHRJU0hCck1fNnJDWVM0MjZncmZsX2JLOFlcIjtcblxuICBsb2FkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoKHdpbmRvdyBhcyBhbnkpLmdvb2dsZT8ubWFwcykge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgIHNjcmlwdC5zcmMgPSBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT0ke3RoaXMuYXBpS2V5fSZsaWJyYXJpZXM9cGxhY2VzLGdlb21ldHJ5JnY9d2Vla2x5JmNhbGxiYWNrPWluaXRNYXBMb2FkZXJgO1xuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJHb29nbGUgTWFwcyBBUEkgZmFpbGVkIHRvIGxvYWQuXCIpKTtcbiAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWdvb2dsZS1tYXBzLWFwaVwiLCBcInRydWVcIik7XG5cbiAgICAgICh3aW5kb3cgYXMgYW55KS5pbml0TWFwTG9hZGVyID0gKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9O1xuXG4gICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==