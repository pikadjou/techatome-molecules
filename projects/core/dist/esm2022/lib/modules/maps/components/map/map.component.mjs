import { Component, ViewChild, ViewChildren, signal } from '@angular/core';
import { GoogleMapsModule, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { TaBaseComponent } from '@ta/utils';
import { markers } from '../../mock';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/google-maps";
export class MapComponent extends TaBaseComponent {
    constructor(http) {
        super();
        this.http = http;
        this.options = {
            center: { lat: 50, lng: 4 },
            zoom: 4,
        };
        this.routeSummary = null;
        this.routeDetails = signal([]);
        this.markers = markers.map(marker => ({
            ...marker,
            ...{
                options: {
                    animation: google.maps.Animation.DROP,
                    icon: {
                        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                        scale: 8,
                        fillColor: '#FF0000',
                        fillOpacity: 1,
                        strokeWeight: 1,
                        strokeColor: '#ffffff',
                    },
                },
            },
        }));
        this.selectedPoints = [
            { lat: 50.8503, lng: 4.3517 },
            { lat: 50.6326, lng: 5.5797 },
            { lat: 51.2194, lng: 4.4025 },
        ];
        this.selectedMarker = signal(null);
    }
    ngAfterViewInit() {
        const bounds = new google.maps.LatLngBounds();
        this.mapMarkers.forEach(marker => {
            bounds.extend(marker.getPosition() ?? { lat: 0, lng: 0 });
        });
        this.map.fitBounds(bounds, { top: 50, bottom: 50, left: 50, right: 50 });
        new MarkerClusterer({
            markers: this.mapMarkers.map(m => m.marker),
            map: this.map.googleMap,
        });
        this.renderRouteWithRoutesApi();
    }
    openInfoWindow(mapMarker) {
        if (mapMarker.marker) {
            this.selectedMarker.set(mapMarker.marker);
        }
        if (this.infoWindow) {
            this.infoWindow.open(mapMarker);
        }
    }
    renderRoute() {
        if (this.selectedPoints.length < 2)
            return;
        const directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer({
            suppressMarkers: true,
        });
        this.directionsRenderer.setMap(this.map.googleMap);
        const [origin, ...rest] = this.selectedPoints;
        const destination = rest.pop(); // last point
        directionsService.route({
            origin,
            destination,
            travelMode: google.maps.TravelMode.DRIVING,
            optimizeWaypoints: true,
        }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK && result) {
                this.directionsRenderer.setDirections(result);
            }
            else {
                console.error('Erreur de calcul de l’itinéraire :', status);
            }
        });
    }
    renderRouteWithRoutesApi() {
        if (this.selectedPoints.length < 2)
            return;
        const [origin, ...rest] = this.selectedPoints;
        const destination = rest.pop();
        const body = {
            origin: {
                location: {
                    latLng: { latitude: origin.lat, longitude: origin.lng },
                },
            },
            destination: {
                location: {
                    latLng: { latitude: destination?.lat, longitude: destination?.lng },
                },
            },
            intermediates: rest.map(p => ({
                location: { latLng: { latitude: p.lat, longitude: p.lng } },
            })),
            travelMode: 'DRIVE',
            optimizeWaypointOrder: true,
            languageCode: 'fr-FR',
            computeAlternativeRoutes: false,
        };
        const key = 'AIzaSyDxd03WdDtISHBrM_6rCYS426grfl_bK8Y';
        this._registerSubscription(this.http
            .post(`https://routes.googleapis.com/directions/v2:computeRoutes?key=${key}`, body, {
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-FieldMask': '*',
            },
        })
            .subscribe({
            next: (response) => {
                const route = response.routes[0];
                const polyline = route.polyline.encodedPolyline;
                const decodedPath = google.maps.geometry.encoding.decodePath(polyline);
                const routePolyline = new google.maps.Polyline({
                    path: decodedPath,
                    strokeColor: 'red',
                    strokeOpacity: 0.8,
                    strokeWeight: 5,
                });
                routePolyline.setMap(this.map.googleMap);
                // Extraire les détails
                const leg = route.legs[0];
                this.routeDetails.set(leg.steps.map((step) => ({
                    instruction: step.navigationInstruction?.instructions,
                    distance: step.distanceMeters,
                    duration: step.duration,
                })));
                const distanceKm = (leg.distanceMeters / 1000).toFixed(1);
                const duration = this.parseDuration(leg.duration);
                this.routeSummary = {
                    distanceKm,
                    duration,
                };
            },
            error: err => {
                console.error('Erreur Routes API :', err);
            },
        }));
    }
    parseDuration(isoDuration) {
        const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
        if (!match)
            return isoDuration;
        const [, hours, minutes] = match;
        return `${hours ? hours + ' h ' : ''}${minutes ? minutes + ' min' : ''}`.trim();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MapComponent, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: MapComponent, isStandalone: true, selector: "ta-google-maps", viewQueries: [{ propertyName: "infoWindow", first: true, predicate: MapInfoWindow, descendants: true }, { propertyName: "map", first: true, predicate: ["map"], descendants: true }, { propertyName: "mapMarkers", predicate: MapMarker, descendants: true }], usesInheritance: true, ngImport: i0, template: "<google-map #map [options]=\"this.options\">\n  @for (marker of this.markers; track marker.position) {\n  <map-marker\n    #mapMarker=\"mapMarker\"\n    [position]=\"marker.position\"\n    [title]=\"marker.title\"\n    [options]=\"marker.options\"\n    (mapClick)=\"this.openInfoWindow(mapMarker)\"\n  ></map-marker>\n  }\n\n  <map-info-window>\n    {{ this.selectedMarker()?.getTitle() }}\n  </map-info-window>\n</google-map>\n\n@if (this.routeSummary) {\n<div>\n  <h3>R\u00E9sum\u00E9 du trajet</h3>\n  <p>\n    Distance : {{ this.routeSummary.distanceKm }} km<br />\n    Dur\u00E9e estim\u00E9e : {{ this.routeSummary.duration }}\n  </p>\n</div>\n} @if (routeDetails().length > 0) {\n<div>\n  <h3>D\u00E9tails du trajet</h3>\n  <ul>\n    @for (step of routeDetails(); track step) {\n    <li>\n      {{ step.instruction }} \u2014 {{ step.distance }} m \u2014 {{ step.duration }}\n    </li>\n    }\n  </ul>\n</div>\n}\n", styles: [""], dependencies: [{ kind: "ngmodule", type: GoogleMapsModule }, { kind: "component", type: i2.GoogleMap, selector: "google-map", inputs: ["height", "width", "mapId", "mapTypeId", "center", "zoom", "options"], outputs: ["mapInitialized", "authFailure", "boundsChanged", "centerChanged", "mapClick", "mapDblclick", "mapDrag", "mapDragend", "mapDragstart", "headingChanged", "idle", "maptypeidChanged", "mapMousemove", "mapMouseout", "mapMouseover", "projectionChanged", "mapRightclick", "tilesloaded", "tiltChanged", "zoomChanged"], exportAs: ["googleMap"] }, { kind: "directive", type: i2.MapInfoWindow, selector: "map-info-window", inputs: ["options", "position"], outputs: ["closeclick", "contentChanged", "domready", "positionChanged", "zindexChanged", "infoWindowInitialized"], exportAs: ["mapInfoWindow"] }, { kind: "directive", type: i2.MapMarker, selector: "map-marker", inputs: ["title", "position", "label", "clickable", "options", "icon", "visible"], outputs: ["animationChanged", "mapClick", "clickableChanged", "cursorChanged", "mapDblclick", "mapDrag", "mapDragend", "draggableChanged", "mapDragstart", "flatChanged", "iconChanged", "mapMousedown", "mapMouseout", "mapMouseover", "mapMouseup", "positionChanged", "mapRightclick", "shapeChanged", "titleChanged", "visibleChanged", "zindexChanged", "markerInitialized"], exportAs: ["mapMarker"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MapComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-google-maps', standalone: true, imports: [GoogleMapsModule], template: "<google-map #map [options]=\"this.options\">\n  @for (marker of this.markers; track marker.position) {\n  <map-marker\n    #mapMarker=\"mapMarker\"\n    [position]=\"marker.position\"\n    [title]=\"marker.title\"\n    [options]=\"marker.options\"\n    (mapClick)=\"this.openInfoWindow(mapMarker)\"\n  ></map-marker>\n  }\n\n  <map-info-window>\n    {{ this.selectedMarker()?.getTitle() }}\n  </map-info-window>\n</google-map>\n\n@if (this.routeSummary) {\n<div>\n  <h3>R\u00E9sum\u00E9 du trajet</h3>\n  <p>\n    Distance : {{ this.routeSummary.distanceKm }} km<br />\n    Dur\u00E9e estim\u00E9e : {{ this.routeSummary.duration }}\n  </p>\n</div>\n} @if (routeDetails().length > 0) {\n<div>\n  <h3>D\u00E9tails du trajet</h3>\n  <ul>\n    @for (step of routeDetails(); track step) {\n    <li>\n      {{ step.instruction }} \u2014 {{ step.distance }} m \u2014 {{ step.duration }}\n    </li>\n    }\n  </ul>\n</div>\n}\n" }]
        }], ctorParameters: () => [{ type: i1.HttpClient }], propDecorators: { infoWindow: [{
                type: ViewChild,
                args: [MapInfoWindow]
            }], map: [{
                type: ViewChild,
                args: ['map']
            }], mapMarkers: [{
                type: ViewChildren,
                args: [MapMarker]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9tYXBzL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvbWFwcy9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFpQixTQUFTLEVBQWEsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFhLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU1QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7O0FBU3JDLE1BQU0sT0FBTyxZQUFhLFNBQVEsZUFBZTtJQW9DL0MsWUFBb0IsSUFBZ0I7UUFDbEMsS0FBSyxFQUFFLENBQUM7UUFEVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBL0IzQixZQUFPLEdBQTJCO1lBQ3pDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtZQUMzQixJQUFJLEVBQUUsQ0FBQztTQUNSLENBQUM7UUFFRixpQkFBWSxHQUFRLElBQUksQ0FBQztRQUN6QixpQkFBWSxHQUFHLE1BQU0sQ0FBUSxFQUFFLENBQUMsQ0FBQztRQUN4QixZQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEMsR0FBRyxNQUFNO1lBQ1QsR0FBRztnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsU0FBUyxFQUFF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QyxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsRixDQUFDOytHQS9LVSxZQUFZO21HQUFaLFlBQVksc0hBQ1osYUFBYSw2SUFFVixTQUFTLHVFQ3BCekIsMDVCQW9DQSx5RER2QlksZ0JBQWdCOzs0RkFJZixZQUFZO2tCQVB4QixTQUFTOytCQUNFLGdCQUFnQixjQUNkLElBQUksV0FDUCxDQUFDLGdCQUFnQixDQUFDOytFQUtELFVBQVU7c0JBQW5DLFNBQVM7dUJBQUMsYUFBYTtnQkFDTixHQUFHO3NCQUFwQixTQUFTO3VCQUFDLEtBQUs7Z0JBQ1MsVUFBVTtzQkFBbEMsWUFBWTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgUXVlcnlMaXN0LCBWaWV3Q2hpbGQsIFZpZXdDaGlsZHJlbiwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHb29nbGVNYXAsIEdvb2dsZU1hcHNNb2R1bGUsIE1hcEluZm9XaW5kb3csIE1hcE1hcmtlciB9IGZyb20gJ0Bhbmd1bGFyL2dvb2dsZS1tYXBzJztcblxuaW1wb3J0IHsgTWFya2VyQ2x1c3RlcmVyIH0gZnJvbSAnQGdvb2dsZW1hcHMvbWFya2VyY2x1c3RlcmVyJztcblxuaW1wb3J0IHsgVGFCYXNlQ29tcG9uZW50IH0gZnJvbSAnQHRhL3V0aWxzJztcblxuaW1wb3J0IHsgbWFya2VycyB9IGZyb20gJy4uLy4uL21vY2snO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YS1nb29nbGUtbWFwcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtHb29nbGVNYXBzTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL21hcC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9tYXAuY29tcG9uZW50LnNjc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBNYXBDb21wb25lbnQgZXh0ZW5kcyBUYUJhc2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZChNYXBJbmZvV2luZG93KSBpbmZvV2luZG93ITogTWFwSW5mb1dpbmRvdztcbiAgQFZpZXdDaGlsZCgnbWFwJykgbWFwITogR29vZ2xlTWFwO1xuICBAVmlld0NoaWxkcmVuKE1hcE1hcmtlcikgbWFwTWFya2VycyE6IFF1ZXJ5TGlzdDxNYXBNYXJrZXI+O1xuXG4gIHJlYWRvbmx5IG9wdGlvbnM6IGdvb2dsZS5tYXBzLk1hcE9wdGlvbnMgPSB7XG4gICAgY2VudGVyOiB7IGxhdDogNTAsIGxuZzogNCB9LFxuICAgIHpvb206IDQsXG4gIH07XG5cbiAgcm91dGVTdW1tYXJ5OiBhbnkgPSBudWxsO1xuICByb3V0ZURldGFpbHMgPSBzaWduYWw8YW55W10+KFtdKTtcbiAgcmVhZG9ubHkgbWFya2VycyA9IG1hcmtlcnMubWFwKG1hcmtlciA9PiAoe1xuICAgIC4uLm1hcmtlcixcbiAgICAuLi57XG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICBwYXRoOiBnb29nbGUubWFwcy5TeW1ib2xQYXRoLkJBQ0tXQVJEX0NMT1NFRF9BUlJPVyxcbiAgICAgICAgICBzY2FsZTogOCxcbiAgICAgICAgICBmaWxsQ29sb3I6ICcjRkYwMDAwJyxcbiAgICAgICAgICBmaWxsT3BhY2l0eTogMSxcbiAgICAgICAgICBzdHJva2VXZWlnaHQ6IDEsXG4gICAgICAgICAgc3Ryb2tlQ29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSkpO1xuICByZWFkb25seSBzZWxlY3RlZFBvaW50cyA9IFtcbiAgICB7IGxhdDogNTAuODUwMywgbG5nOiA0LjM1MTcgfSxcbiAgICB7IGxhdDogNTAuNjMyNiwgbG5nOiA1LjU3OTcgfSxcbiAgICB7IGxhdDogNTEuMjE5NCwgbG5nOiA0LjQwMjUgfSxcbiAgXTtcbiAgZGlyZWN0aW9uc1JlbmRlcmVyITogZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyO1xuICBzZWxlY3RlZE1hcmtlciA9IHNpZ25hbDxnb29nbGUubWFwcy5NYXJrZXIgfCBudWxsPihudWxsKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IGJvdW5kcyA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmdCb3VuZHMoKTtcblxuICAgIHRoaXMubWFwTWFya2Vycy5mb3JFYWNoKG1hcmtlciA9PiB7XG4gICAgICBib3VuZHMuZXh0ZW5kKG1hcmtlci5nZXRQb3NpdGlvbigpID8/IHsgbGF0OiAwLCBsbmc6IDAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzLCB7IHRvcDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwLCByaWdodDogNTAgfSk7XG5cbiAgICBuZXcgTWFya2VyQ2x1c3RlcmVyKHtcbiAgICAgIG1hcmtlcnM6IHRoaXMubWFwTWFya2Vycy5tYXAobSA9PiBtLm1hcmtlciEpLFxuICAgICAgbWFwOiB0aGlzLm1hcC5nb29nbGVNYXAhLFxuICAgIH0pO1xuXG4gICAgdGhpcy5yZW5kZXJSb3V0ZVdpdGhSb3V0ZXNBcGkoKTtcbiAgfVxuXG4gIG9wZW5JbmZvV2luZG93KG1hcE1hcmtlcjogTWFwTWFya2VyKSB7XG4gICAgaWYgKG1hcE1hcmtlci5tYXJrZXIpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRNYXJrZXIuc2V0KG1hcE1hcmtlci5tYXJrZXIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbmZvV2luZG93KSB7XG4gICAgICB0aGlzLmluZm9XaW5kb3cub3BlbihtYXBNYXJrZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlclJvdXRlKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkUG9pbnRzLmxlbmd0aCA8IDIpIHJldHVybjtcblxuICAgIGNvbnN0IGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG4gICAgdGhpcy5kaXJlY3Rpb25zUmVuZGVyZXIgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKHtcbiAgICAgIHN1cHByZXNzTWFya2VyczogdHJ1ZSxcbiAgICB9KTtcbiAgICB0aGlzLmRpcmVjdGlvbnNSZW5kZXJlci5zZXRNYXAodGhpcy5tYXAuZ29vZ2xlTWFwISk7XG5cbiAgICBjb25zdCBbb3JpZ2luLCAuLi5yZXN0XSA9IHRoaXMuc2VsZWN0ZWRQb2ludHM7XG4gICAgY29uc3QgZGVzdGluYXRpb246IGFueSA9IHJlc3QucG9wKCk7IC8vIGxhc3QgcG9pbnRcblxuICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKFxuICAgICAge1xuICAgICAgICBvcmlnaW4sXG4gICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICB0cmF2ZWxNb2RlOiBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkcsXG4gICAgICAgIG9wdGltaXplV2F5cG9pbnRzOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIChyZXN1bHQsIHN0YXR1cykgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LICYmIHJlc3VsdCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0aW9uc1JlbmRlcmVyLnNldERpcmVjdGlvbnMocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgZGUgY2FsY3VsIGRlIGzigJlpdGluw6lyYWlyZSA6Jywgc3RhdHVzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICByZW5kZXJSb3V0ZVdpdGhSb3V0ZXNBcGkoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQb2ludHMubGVuZ3RoIDwgMikgcmV0dXJuO1xuXG4gICAgY29uc3QgW29yaWdpbiwgLi4ucmVzdF0gPSB0aGlzLnNlbGVjdGVkUG9pbnRzO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcmVzdC5wb3AoKTtcblxuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICBvcmlnaW46IHtcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICBsYXRMbmc6IHsgbGF0aXR1ZGU6IG9yaWdpbi5sYXQsIGxvbmdpdHVkZTogb3JpZ2luLmxuZyB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGRlc3RpbmF0aW9uOiB7XG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgbGF0TG5nOiB7IGxhdGl0dWRlOiBkZXN0aW5hdGlvbj8ubGF0LCBsb25naXR1ZGU6IGRlc3RpbmF0aW9uPy5sbmcgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBpbnRlcm1lZGlhdGVzOiByZXN0Lm1hcChwID0+ICh7XG4gICAgICAgIGxvY2F0aW9uOiB7IGxhdExuZzogeyBsYXRpdHVkZTogcC5sYXQsIGxvbmdpdHVkZTogcC5sbmcgfSB9LFxuICAgICAgfSkpLFxuICAgICAgdHJhdmVsTW9kZTogJ0RSSVZFJyxcbiAgICAgIG9wdGltaXplV2F5cG9pbnRPcmRlcjogdHJ1ZSxcbiAgICAgIGxhbmd1YWdlQ29kZTogJ2ZyLUZSJyxcbiAgICAgIGNvbXB1dGVBbHRlcm5hdGl2ZVJvdXRlczogZmFsc2UsXG4gICAgfTtcblxuICAgIGNvbnN0IGtleSA9ICdBSXphU3lEeGQwM1dkRHRJU0hCck1fNnJDWVM0MjZncmZsX2JLOFknO1xuICAgIHRoaXMuX3JlZ2lzdGVyU3Vic2NyaXB0aW9uKFxuICAgICAgdGhpcy5odHRwXG4gICAgICAgIC5wb3N0KGBodHRwczovL3JvdXRlcy5nb29nbGVhcGlzLmNvbS9kaXJlY3Rpb25zL3YyOmNvbXB1dGVSb3V0ZXM/a2V5PSR7a2V5fWAsIGJvZHksIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgJ1gtR29vZy1GaWVsZE1hc2snOiAnKicsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgICAgbmV4dDogKHJlc3BvbnNlOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlID0gcmVzcG9uc2Uucm91dGVzWzBdO1xuICAgICAgICAgICAgY29uc3QgcG9seWxpbmUgPSByb3V0ZS5wb2x5bGluZS5lbmNvZGVkUG9seWxpbmU7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWRQYXRoID0gZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuZW5jb2RpbmcuZGVjb2RlUGF0aChwb2x5bGluZSk7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVBvbHlsaW5lID0gbmV3IGdvb2dsZS5tYXBzLlBvbHlsaW5lKHtcbiAgICAgICAgICAgICAgcGF0aDogZGVjb2RlZFBhdGgsXG4gICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAncmVkJyxcbiAgICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMC44LFxuICAgICAgICAgICAgICBzdHJva2VXZWlnaHQ6IDUsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcm91dGVQb2x5bGluZS5zZXRNYXAodGhpcy5tYXAuZ29vZ2xlTWFwISk7XG5cbiAgICAgICAgICAgIC8vIEV4dHJhaXJlIGxlcyBkw6l0YWlsc1xuICAgICAgICAgICAgY29uc3QgbGVnID0gcm91dGUubGVnc1swXTtcbiAgICAgICAgICAgIHRoaXMucm91dGVEZXRhaWxzLnNldChcbiAgICAgICAgICAgICAgbGVnLnN0ZXBzLm1hcCgoc3RlcDogYW55KSA9PiAoe1xuICAgICAgICAgICAgICAgIGluc3RydWN0aW9uOiBzdGVwLm5hdmlnYXRpb25JbnN0cnVjdGlvbj8uaW5zdHJ1Y3Rpb25zLFxuICAgICAgICAgICAgICAgIGRpc3RhbmNlOiBzdGVwLmRpc3RhbmNlTWV0ZXJzLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBzdGVwLmR1cmF0aW9uLFxuICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpc3RhbmNlS20gPSAobGVnLmRpc3RhbmNlTWV0ZXJzIC8gMTAwMCkudG9GaXhlZCgxKTtcbiAgICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wYXJzZUR1cmF0aW9uKGxlZy5kdXJhdGlvbik7XG5cbiAgICAgICAgICAgIHRoaXMucm91dGVTdW1tYXJ5ID0ge1xuICAgICAgICAgICAgICBkaXN0YW5jZUttLFxuICAgICAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgICBlcnJvcjogZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0VycmV1ciBSb3V0ZXMgQVBJIDonLCBlcnIpO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHBhcnNlRHVyYXRpb24oaXNvRHVyYXRpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbWF0Y2ggPSBpc29EdXJhdGlvbi5tYXRjaCgvUFQoPzooXFxkKylIKT8oPzooXFxkKylNKT8vKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gaXNvRHVyYXRpb247XG4gICAgY29uc3QgWywgaG91cnMsIG1pbnV0ZXNdID0gbWF0Y2g7XG4gICAgcmV0dXJuIGAke2hvdXJzID8gaG91cnMgKyAnIGggJyA6ICcnfSR7bWludXRlcyA/IG1pbnV0ZXMgKyAnIG1pbicgOiAnJ31gLnRyaW0oKTtcbiAgfVxufVxuIiwiPGdvb2dsZS1tYXAgI21hcCBbb3B0aW9uc109XCJ0aGlzLm9wdGlvbnNcIj5cbiAgQGZvciAobWFya2VyIG9mIHRoaXMubWFya2VyczsgdHJhY2sgbWFya2VyLnBvc2l0aW9uKSB7XG4gIDxtYXAtbWFya2VyXG4gICAgI21hcE1hcmtlcj1cIm1hcE1hcmtlclwiXG4gICAgW3Bvc2l0aW9uXT1cIm1hcmtlci5wb3NpdGlvblwiXG4gICAgW3RpdGxlXT1cIm1hcmtlci50aXRsZVwiXG4gICAgW29wdGlvbnNdPVwibWFya2VyLm9wdGlvbnNcIlxuICAgIChtYXBDbGljayk9XCJ0aGlzLm9wZW5JbmZvV2luZG93KG1hcE1hcmtlcilcIlxuICA+PC9tYXAtbWFya2VyPlxuICB9XG5cbiAgPG1hcC1pbmZvLXdpbmRvdz5cbiAgICB7eyB0aGlzLnNlbGVjdGVkTWFya2VyKCk/LmdldFRpdGxlKCkgfX1cbiAgPC9tYXAtaW5mby13aW5kb3c+XG48L2dvb2dsZS1tYXA+XG5cbkBpZiAodGhpcy5yb3V0ZVN1bW1hcnkpIHtcbjxkaXY+XG4gIDxoMz5Sw6lzdW3DqSBkdSB0cmFqZXQ8L2gzPlxuICA8cD5cbiAgICBEaXN0YW5jZSA6IHt7IHRoaXMucm91dGVTdW1tYXJ5LmRpc3RhbmNlS20gfX0ga208YnIgLz5cbiAgICBEdXLDqWUgZXN0aW3DqWUgOiB7eyB0aGlzLnJvdXRlU3VtbWFyeS5kdXJhdGlvbiB9fVxuICA8L3A+XG48L2Rpdj5cbn0gQGlmIChyb3V0ZURldGFpbHMoKS5sZW5ndGggPiAwKSB7XG48ZGl2PlxuICA8aDM+RMOpdGFpbHMgZHUgdHJhamV0PC9oMz5cbiAgPHVsPlxuICAgIEBmb3IgKHN0ZXAgb2Ygcm91dGVEZXRhaWxzKCk7IHRyYWNrIHN0ZXApIHtcbiAgICA8bGk+XG4gICAgICB7eyBzdGVwLmluc3RydWN0aW9uIH19IOKAlCB7eyBzdGVwLmRpc3RhbmNlIH19IG0g4oCUIHt7IHN0ZXAuZHVyYXRpb24gfX1cbiAgICA8L2xpPlxuICAgIH1cbiAgPC91bD5cbjwvZGl2PlxufVxuIl19