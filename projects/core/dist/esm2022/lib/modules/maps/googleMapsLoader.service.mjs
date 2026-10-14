import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { TA_GOOGLE_MAPS_CONFIG } from "./google-maps.config";
import * as i0 from "@angular/core";
export class TaGoogleMapsLoaderService {
    constructor() {
        this._config = inject(TA_GOOGLE_MAPS_CONFIG);
    }
    get apiKey() {
        return this._config.apiKey;
    }
    load$() {
        return new Observable((subscriber) => {
            const win = window;
            if (win.google?.maps) {
                subscriber.next();
                subscriber.complete();
                return;
            }
            const libraries = (this._config.libraries ?? ["places", "geometry"]).join(",");
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${this._config.apiKey}&libraries=${libraries}&v=weekly&callback=initMapLoader`;
            script.async = true;
            script.defer = true;
            script.onerror = () => subscriber.error(new Error("Google Maps API failed to load."));
            script.setAttribute("data-google-maps-api", "true");
            win.initMapLoader = () => {
                subscriber.next();
                subscriber.complete();
            };
            document.head.appendChild(script);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGoogleMapsLoaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGoogleMapsLoaderService, providedIn: "root" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TaGoogleMapsLoaderService, decorators: [{
            type: Injectable,
            args: [{ providedIn: "root" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlTWFwc0xvYWRlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2xpYi9tb2R1bGVzL21hcHMvZ29vZ2xlTWFwc0xvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0FBSzdELE1BQU0sT0FBTyx5QkFBeUI7SUFEdEM7UUFFbUIsWUFBTyxHQUFHLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0tBK0IxRDtJQTdCQyxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFFTSxLQUFLO1FBQ1YsT0FBTyxJQUFJLFVBQVUsQ0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQ3pDLE1BQU0sR0FBRyxHQUFHLE1BQTBCLENBQUM7WUFDdkMsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUNyQixVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ2xCLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDdEIsT0FBTztZQUNULENBQUM7WUFFRCxNQUFNLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9FLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsTUFBTSxDQUFDLEdBQUcsR0FBRywrQ0FBK0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLGNBQWMsU0FBUyxrQ0FBa0MsQ0FBQztZQUN6SSxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNwQixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNwQixNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1lBQ3RGLE1BQU0sQ0FBQyxZQUFZLENBQUMsc0JBQXNCLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFFcEQsR0FBRyxDQUFDLGFBQWEsR0FBRyxHQUFHLEVBQUU7Z0JBQ3ZCLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbEIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3hCLENBQUMsQ0FBQztZQUVGLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzsrR0EvQlUseUJBQXlCO21IQUF6Qix5QkFBeUIsY0FEWixNQUFNOzs0RkFDbkIseUJBQXlCO2tCQURyQyxVQUFVO21CQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgeyBUQV9HT09HTEVfTUFQU19DT05GSUcgfSBmcm9tIFwiLi9nb29nbGUtbWFwcy5jb25maWdcIjtcblxudHlwZSBHb29nbGVNYXBzV2luZG93ID0gV2luZG93ICYgeyBnb29nbGU/OiB7IG1hcHM/OiB1bmtub3duIH07IGluaXRNYXBMb2FkZXI/OiAoKSA9PiB2b2lkIH07XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogXCJyb290XCIgfSlcbmV4cG9ydCBjbGFzcyBUYUdvb2dsZU1hcHNMb2FkZXJTZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBfY29uZmlnID0gaW5qZWN0KFRBX0dPT0dMRV9NQVBTX0NPTkZJRyk7XG5cbiAgZ2V0IGFwaUtleSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jb25maWcuYXBpS2V5O1xuICB9XG5cbiAgcHVibGljIGxvYWQkKCk6IE9ic2VydmFibGU8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTx2b2lkPigoc3Vic2NyaWJlcikgPT4ge1xuICAgICAgY29uc3Qgd2luID0gd2luZG93IGFzIEdvb2dsZU1hcHNXaW5kb3c7XG4gICAgICBpZiAod2luLmdvb2dsZT8ubWFwcykge1xuICAgICAgICBzdWJzY3JpYmVyLm5leHQoKTtcbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGxpYnJhcmllcyA9ICh0aGlzLl9jb25maWcubGlicmFyaWVzID8/IFtcInBsYWNlc1wiLCBcImdlb21ldHJ5XCJdKS5qb2luKFwiLFwiKTtcbiAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICBzY3JpcHQuc3JjID0gYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JHt0aGlzLl9jb25maWcuYXBpS2V5fSZsaWJyYXJpZXM9JHtsaWJyYXJpZXN9JnY9d2Vla2x5JmNhbGxiYWNrPWluaXRNYXBMb2FkZXJgO1xuICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IHN1YnNjcmliZXIuZXJyb3IobmV3IEVycm9yKFwiR29vZ2xlIE1hcHMgQVBJIGZhaWxlZCB0byBsb2FkLlwiKSk7XG4gICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS1nb29nbGUtbWFwcy1hcGlcIiwgXCJ0cnVlXCIpO1xuXG4gICAgICB3aW4uaW5pdE1hcExvYWRlciA9ICgpID0+IHtcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KCk7XG4gICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgIH07XG5cbiAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9KTtcbiAgfVxufVxuIl19