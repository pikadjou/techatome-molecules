import { NgFor, NgIf } from '@angular/common';
import { Component, ViewChild, ViewChildren, signal } from '@angular/core';
import { GoogleMapsModule, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MarkerClusterer } from '@googlemaps/markerclusterer';
import { markers } from '../../mock';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/google-maps";
export class MapComponent {
    constructor(http) {
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
        this.directionsRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: true });
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
        this.http
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
        });
    }
    parseDuration(isoDuration) {
        const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
        if (!match)
            return isoDuration;
        const [, hours, minutes] = match;
        return `${hours ? hours + ' h ' : ''}${minutes ? minutes + ' min' : ''}`.trim();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MapComponent, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.13", type: MapComponent, isStandalone: true, selector: "ta-google-maps", viewQueries: [{ propertyName: "infoWindow", first: true, predicate: MapInfoWindow, descendants: true }, { propertyName: "map", first: true, predicate: ["map"], descendants: true }, { propertyName: "mapMarkers", predicate: MapMarker, descendants: true }], ngImport: i0, template: "<google-map #map [options]=\"this.options\">\r\n  @for (marker of this.markers; track marker.position) {\r\n    <map-marker\r\n      #mapMarker=\"mapMarker\"\r\n      [position]=\"marker.position\"\r\n      [title]=\"marker.title\"\r\n      [options]=\"marker.options\"\r\n      (mapClick)=\"this.openInfoWindow(mapMarker)\"\r\n    ></map-marker>\r\n  }\r\n\r\n  <map-info-window>\r\n    {{ this.selectedMarker()?.getTitle() }}\r\n  </map-info-window>\r\n</google-map>\r\n\r\n@if (this.routeSummary) {\r\n  <div>\r\n    <h3>R\u00E9sum\u00E9 du trajet</h3>\r\n    <p>\r\n      Distance : {{ this.routeSummary.distanceKm }} km<br />\r\n      Dur\u00E9e estim\u00E9e : {{ this.routeSummary.duration }}\r\n    </p>\r\n  </div>\r\n}\r\n\r\n@if (routeDetails().length > 0) {\r\n  <div>\r\n    <h3>D\u00E9tails du trajet</h3>\r\n    <ul>\r\n      @for (step of routeDetails(); track step) {\r\n        <li>{{ step.instruction }} \u2014 {{ step.distance }} m \u2014 {{ step.duration }}</li>\r\n      }\r\n    </ul>\r\n  </div>\r\n}\r\n", styles: [""], dependencies: [{ kind: "ngmodule", type: GoogleMapsModule }, { kind: "component", type: i2.GoogleMap, selector: "google-map", inputs: ["height", "width", "mapId", "mapTypeId", "center", "zoom", "options"], outputs: ["mapInitialized", "authFailure", "boundsChanged", "centerChanged", "mapClick", "mapDblclick", "mapDrag", "mapDragend", "mapDragstart", "headingChanged", "idle", "maptypeidChanged", "mapMousemove", "mapMouseout", "mapMouseover", "projectionChanged", "mapRightclick", "tilesloaded", "tiltChanged", "zoomChanged"], exportAs: ["googleMap"] }, { kind: "directive", type: i2.MapInfoWindow, selector: "map-info-window", inputs: ["options", "position"], outputs: ["closeclick", "contentChanged", "domready", "positionChanged", "zindexChanged", "infoWindowInitialized"], exportAs: ["mapInfoWindow"] }, { kind: "directive", type: i2.MapMarker, selector: "map-marker", inputs: ["title", "position", "label", "clickable", "options", "icon", "visible"], outputs: ["animationChanged", "mapClick", "clickableChanged", "cursorChanged", "mapDblclick", "mapDrag", "mapDragend", "draggableChanged", "mapDragstart", "flatChanged", "iconChanged", "mapMousedown", "mapMouseout", "mapMouseover", "mapMouseup", "positionChanged", "mapRightclick", "shapeChanged", "titleChanged", "visibleChanged", "zindexChanged", "markerInitialized"], exportAs: ["mapMarker"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: MapComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ta-google-maps', standalone: true, imports: [GoogleMapsModule, NgIf, NgFor], template: "<google-map #map [options]=\"this.options\">\r\n  @for (marker of this.markers; track marker.position) {\r\n    <map-marker\r\n      #mapMarker=\"mapMarker\"\r\n      [position]=\"marker.position\"\r\n      [title]=\"marker.title\"\r\n      [options]=\"marker.options\"\r\n      (mapClick)=\"this.openInfoWindow(mapMarker)\"\r\n    ></map-marker>\r\n  }\r\n\r\n  <map-info-window>\r\n    {{ this.selectedMarker()?.getTitle() }}\r\n  </map-info-window>\r\n</google-map>\r\n\r\n@if (this.routeSummary) {\r\n  <div>\r\n    <h3>R\u00E9sum\u00E9 du trajet</h3>\r\n    <p>\r\n      Distance : {{ this.routeSummary.distanceKm }} km<br />\r\n      Dur\u00E9e estim\u00E9e : {{ this.routeSummary.duration }}\r\n    </p>\r\n  </div>\r\n}\r\n\r\n@if (routeDetails().length > 0) {\r\n  <div>\r\n    <h3>D\u00E9tails du trajet</h3>\r\n    <ul>\r\n      @for (step of routeDetails(); track step) {\r\n        <li>{{ step.instruction }} \u2014 {{ step.distance }} m \u2014 {{ step.duration }}</li>\r\n      }\r\n    </ul>\r\n  </div>\r\n}\r\n" }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9tYXBzL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvbWFwcy9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU5QyxPQUFPLEVBQWlCLFNBQVMsRUFBYSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRyxPQUFPLEVBQWEsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTdGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7O0FBU3JDLE1BQU0sT0FBTyxZQUFZO0lBb0N2QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBL0IzQixZQUFPLEdBQTJCO1lBQ3pDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtZQUMzQixJQUFJLEVBQUUsQ0FBQztTQUNSLENBQUM7UUFFRixpQkFBWSxHQUFRLElBQUksQ0FBQztRQUN6QixpQkFBWSxHQUFHLE1BQU0sQ0FBUSxFQUFFLENBQUMsQ0FBQztRQUN4QixZQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDeEMsR0FBRyxNQUFNO1lBQ1QsR0FBRztnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENB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ektVLFlBQVk7bUdBQVosWUFBWSxzSEFDWixhQUFhLDZJQUVWLFNBQVMsZ0RDbkJ6QixxZ0NBb0NBLHlERHhCWSxnQkFBZ0I7OzRGQUlmLFlBQVk7a0JBUHhCLFNBQVM7K0JBQ0UsZ0JBQWdCLGNBQ2QsSUFBSSxXQUNQLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQzsrRUFLZCxVQUFVO3NCQUFuQyxTQUFTO3VCQUFDLGFBQWE7Z0JBQ04sR0FBRztzQkFBcEIsU0FBUzt1QkFBQyxLQUFLO2dCQUNTLFVBQVU7c0JBQWxDLFlBQVk7dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nRm9yLCBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBRdWVyeUxpc3QsIFZpZXdDaGlsZCwgVmlld0NoaWxkcmVuLCBzaWduYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR29vZ2xlTWFwLCBHb29nbGVNYXBzTW9kdWxlLCBNYXBJbmZvV2luZG93LCBNYXBNYXJrZXIgfSBmcm9tICdAYW5ndWxhci9nb29nbGUtbWFwcyc7XHJcblxyXG5pbXBvcnQgeyBNYXJrZXJDbHVzdGVyZXIgfSBmcm9tICdAZ29vZ2xlbWFwcy9tYXJrZXJjbHVzdGVyZXInO1xyXG5cclxuaW1wb3J0IHsgbWFya2VycyB9IGZyb20gJy4uLy4uL21vY2snO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YS1nb29nbGUtbWFwcycsXHJcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICBpbXBvcnRzOiBbR29vZ2xlTWFwc01vZHVsZSwgTmdJZiwgTmdGb3JdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9tYXAuY29tcG9uZW50LnNjc3MnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQFZpZXdDaGlsZChNYXBJbmZvV2luZG93KSBpbmZvV2luZG93ITogTWFwSW5mb1dpbmRvdztcclxuICBAVmlld0NoaWxkKCdtYXAnKSBtYXAhOiBHb29nbGVNYXA7XHJcbiAgQFZpZXdDaGlsZHJlbihNYXBNYXJrZXIpIG1hcE1hcmtlcnMhOiBRdWVyeUxpc3Q8TWFwTWFya2VyPjtcclxuXHJcbiAgcmVhZG9ubHkgb3B0aW9uczogZ29vZ2xlLm1hcHMuTWFwT3B0aW9ucyA9IHtcclxuICAgIGNlbnRlcjogeyBsYXQ6IDUwLCBsbmc6IDQgfSxcclxuICAgIHpvb206IDQsXHJcbiAgfTtcclxuXHJcbiAgcm91dGVTdW1tYXJ5OiBhbnkgPSBudWxsO1xyXG4gIHJvdXRlRGV0YWlscyA9IHNpZ25hbDxhbnlbXT4oW10pO1xyXG4gIHJlYWRvbmx5IG1hcmtlcnMgPSBtYXJrZXJzLm1hcChtYXJrZXIgPT4gKHtcclxuICAgIC4uLm1hcmtlcixcclxuICAgIC4uLntcclxuICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXHJcbiAgICAgICAgaWNvbjoge1xyXG4gICAgICAgICAgcGF0aDogZ29vZ2xlLm1hcHMuU3ltYm9sUGF0aC5CQUNLV0FSRF9DTE9TRURfQVJST1csXHJcbiAgICAgICAgICBzY2FsZTogOCxcclxuICAgICAgICAgIGZpbGxDb2xvcjogJyNGRjAwMDAnLFxyXG4gICAgICAgICAgZmlsbE9wYWNpdHk6IDEsXHJcbiAgICAgICAgICBzdHJva2VXZWlnaHQ6IDEsXHJcbiAgICAgICAgICBzdHJva2VDb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pKTtcclxuICByZWFkb25seSBzZWxlY3RlZFBvaW50cyA9IFtcclxuICAgIHsgbGF0OiA1MC44NTAzLCBsbmc6IDQuMzUxNyB9LFxyXG4gICAgeyBsYXQ6IDUwLjYzMjYsIGxuZzogNS41Nzk3IH0sXHJcbiAgICB7IGxhdDogNTEuMjE5NCwgbG5nOiA0LjQwMjUgfSxcclxuICBdO1xyXG4gIGRpcmVjdGlvbnNSZW5kZXJlciE6IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcjtcclxuICBzZWxlY3RlZE1hcmtlciA9IHNpZ25hbDxnb29nbGUubWFwcy5NYXJrZXIgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBjb25zdCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XHJcblxyXG4gICAgdGhpcy5tYXBNYXJrZXJzLmZvckVhY2gobWFya2VyID0+IHtcclxuICAgICAgYm91bmRzLmV4dGVuZChtYXJrZXIuZ2V0UG9zaXRpb24oKSA/PyB7IGxhdDogMCwgbG5nOiAwIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcywgeyB0b3A6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCwgcmlnaHQ6IDUwIH0pO1xyXG5cclxuICAgIG5ldyBNYXJrZXJDbHVzdGVyZXIoe1xyXG4gICAgICBtYXJrZXJzOiB0aGlzLm1hcE1hcmtlcnMubWFwKG0gPT4gbS5tYXJrZXIhKSxcclxuICAgICAgbWFwOiB0aGlzLm1hcC5nb29nbGVNYXAhLFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJSb3V0ZVdpdGhSb3V0ZXNBcGkoKTtcclxuICB9XHJcblxyXG4gIG9wZW5JbmZvV2luZG93KG1hcE1hcmtlcjogTWFwTWFya2VyKSB7XHJcbiAgICBpZiAobWFwTWFya2VyLm1hcmtlcikge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkTWFya2VyLnNldChtYXBNYXJrZXIubWFya2VyKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmluZm9XaW5kb3cpIHtcclxuICAgICAgdGhpcy5pbmZvV2luZG93Lm9wZW4obWFwTWFya2VyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlbmRlclJvdXRlKCkge1xyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQb2ludHMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XHJcbiAgICB0aGlzLmRpcmVjdGlvbnNSZW5kZXJlciA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIoeyBzdXBwcmVzc01hcmtlcnM6IHRydWUgfSk7XHJcbiAgICB0aGlzLmRpcmVjdGlvbnNSZW5kZXJlci5zZXRNYXAodGhpcy5tYXAuZ29vZ2xlTWFwISk7XHJcblxyXG4gICAgY29uc3QgW29yaWdpbiwgLi4ucmVzdF0gPSB0aGlzLnNlbGVjdGVkUG9pbnRzO1xyXG4gICAgY29uc3QgZGVzdGluYXRpb24gPSByZXN0LnBvcCgpOyAvLyBsYXN0IHBvaW50XHJcblxyXG4gICAgZGlyZWN0aW9uc1NlcnZpY2Uucm91dGUoXHJcbiAgICAgIHtcclxuICAgICAgICBvcmlnaW4sXHJcbiAgICAgICAgZGVzdGluYXRpb24sXHJcbiAgICAgICAgdHJhdmVsTW9kZTogZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5EUklWSU5HLFxyXG4gICAgICAgIG9wdGltaXplV2F5cG9pbnRzOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICAocmVzdWx0LCBzdGF0dXMpID0+IHtcclxuICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LICYmIHJlc3VsdCkge1xyXG4gICAgICAgICAgdGhpcy5kaXJlY3Rpb25zUmVuZGVyZXIuc2V0RGlyZWN0aW9ucyhyZXN1bHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgZGUgY2FsY3VsIGRlIGzigJlpdGluw6lyYWlyZSA6Jywgc3RhdHVzKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJSb3V0ZVdpdGhSb3V0ZXNBcGkoKSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFBvaW50cy5sZW5ndGggPCAyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgW29yaWdpbiwgLi4ucmVzdF0gPSB0aGlzLnNlbGVjdGVkUG9pbnRzO1xyXG4gICAgY29uc3QgZGVzdGluYXRpb24gPSByZXN0LnBvcCgpO1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgIG9yaWdpbjoge1xyXG4gICAgICAgIGxvY2F0aW9uOiB7XHJcbiAgICAgICAgICBsYXRMbmc6IHsgbGF0aXR1ZGU6IG9yaWdpbi5sYXQsIGxvbmdpdHVkZTogb3JpZ2luLmxuZyB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGRlc3RpbmF0aW9uOiB7XHJcbiAgICAgICAgbG9jYXRpb246IHtcclxuICAgICAgICAgIGxhdExuZzogeyBsYXRpdHVkZTogZGVzdGluYXRpb24/LmxhdCwgbG9uZ2l0dWRlOiBkZXN0aW5hdGlvbj8ubG5nIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgaW50ZXJtZWRpYXRlczogcmVzdC5tYXAocCA9PiAoe1xyXG4gICAgICAgIGxvY2F0aW9uOiB7IGxhdExuZzogeyBsYXRpdHVkZTogcC5sYXQsIGxvbmdpdHVkZTogcC5sbmcgfSB9LFxyXG4gICAgICB9KSksXHJcbiAgICAgIHRyYXZlbE1vZGU6ICdEUklWRScsXHJcbiAgICAgIG9wdGltaXplV2F5cG9pbnRPcmRlcjogdHJ1ZSxcclxuICAgICAgbGFuZ3VhZ2VDb2RlOiAnZnItRlInLFxyXG4gICAgICBjb21wdXRlQWx0ZXJuYXRpdmVSb3V0ZXM6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBrZXkgPSAnQUl6YVN5RHhkMDNXZER0SVNIQnJNXzZyQ1lTNDI2Z3JmbF9iSzhZJztcclxuICAgIHRoaXMuaHR0cFxyXG4gICAgICAucG9zdChgaHR0cHM6Ly9yb3V0ZXMuZ29vZ2xlYXBpcy5jb20vZGlyZWN0aW9ucy92Mjpjb21wdXRlUm91dGVzP2tleT0ke2tleX1gLCBib2R5LCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICdYLUdvb2ctRmllbGRNYXNrJzogJyonLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIC5zdWJzY3JpYmUoe1xyXG4gICAgICAgIG5leHQ6IChyZXNwb25zZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCByb3V0ZSA9IHJlc3BvbnNlLnJvdXRlc1swXTtcclxuICAgICAgICAgIGNvbnN0IHBvbHlsaW5lID0gcm91dGUucG9seWxpbmUuZW5jb2RlZFBvbHlsaW5lO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGRlY29kZWRQYXRoID0gZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuZW5jb2RpbmcuZGVjb2RlUGF0aChwb2x5bGluZSk7XHJcbiAgICAgICAgICBjb25zdCByb3V0ZVBvbHlsaW5lID0gbmV3IGdvb2dsZS5tYXBzLlBvbHlsaW5lKHtcclxuICAgICAgICAgICAgcGF0aDogZGVjb2RlZFBhdGgsXHJcbiAgICAgICAgICAgIHN0cm9rZUNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMC44LFxyXG4gICAgICAgICAgICBzdHJva2VXZWlnaHQ6IDUsXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICByb3V0ZVBvbHlsaW5lLnNldE1hcCh0aGlzLm1hcC5nb29nbGVNYXAhKTtcclxuXHJcbiAgICAgICAgICAvLyBFeHRyYWlyZSBsZXMgZMOpdGFpbHNcclxuICAgICAgICAgIGNvbnN0IGxlZyA9IHJvdXRlLmxlZ3NbMF07XHJcbiAgICAgICAgICB0aGlzLnJvdXRlRGV0YWlscy5zZXQoXHJcbiAgICAgICAgICAgIGxlZy5zdGVwcy5tYXAoKHN0ZXA6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgICBpbnN0cnVjdGlvbjogc3RlcC5uYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24/Lmluc3RydWN0aW9ucyxcclxuICAgICAgICAgICAgICBkaXN0YW5jZTogc3RlcC5kaXN0YW5jZU1ldGVycyxcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogc3RlcC5kdXJhdGlvbixcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgIGNvbnN0IGRpc3RhbmNlS20gPSAobGVnLmRpc3RhbmNlTWV0ZXJzIC8gMTAwMCkudG9GaXhlZCgxKTtcclxuICAgICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5wYXJzZUR1cmF0aW9uKGxlZy5kdXJhdGlvbik7XHJcblxyXG4gICAgICAgICAgdGhpcy5yb3V0ZVN1bW1hcnkgPSB7XHJcbiAgICAgICAgICAgIGRpc3RhbmNlS20sXHJcbiAgICAgICAgICAgIGR1cmF0aW9uLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiBlcnIgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIFJvdXRlcyBBUEkgOicsIGVycik7XHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwYXJzZUR1cmF0aW9uKGlzb0R1cmF0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbWF0Y2ggPSBpc29EdXJhdGlvbi5tYXRjaCgvUFQoPzooXFxkKylIKT8oPzooXFxkKylNKT8vKTtcclxuICAgIGlmICghbWF0Y2gpIHJldHVybiBpc29EdXJhdGlvbjtcclxuICAgIGNvbnN0IFssIGhvdXJzLCBtaW51dGVzXSA9IG1hdGNoO1xyXG4gICAgcmV0dXJuIGAke2hvdXJzID8gaG91cnMgKyAnIGggJyA6ICcnfSR7bWludXRlcyA/IG1pbnV0ZXMgKyAnIG1pbicgOiAnJ31gLnRyaW0oKTtcclxuICB9XHJcbn1cclxuIiwiPGdvb2dsZS1tYXAgI21hcCBbb3B0aW9uc109XCJ0aGlzLm9wdGlvbnNcIj5cclxuICBAZm9yIChtYXJrZXIgb2YgdGhpcy5tYXJrZXJzOyB0cmFjayBtYXJrZXIucG9zaXRpb24pIHtcclxuICAgIDxtYXAtbWFya2VyXHJcbiAgICAgICNtYXBNYXJrZXI9XCJtYXBNYXJrZXJcIlxyXG4gICAgICBbcG9zaXRpb25dPVwibWFya2VyLnBvc2l0aW9uXCJcclxuICAgICAgW3RpdGxlXT1cIm1hcmtlci50aXRsZVwiXHJcbiAgICAgIFtvcHRpb25zXT1cIm1hcmtlci5vcHRpb25zXCJcclxuICAgICAgKG1hcENsaWNrKT1cInRoaXMub3BlbkluZm9XaW5kb3cobWFwTWFya2VyKVwiXHJcbiAgICA+PC9tYXAtbWFya2VyPlxyXG4gIH1cclxuXHJcbiAgPG1hcC1pbmZvLXdpbmRvdz5cclxuICAgIHt7IHRoaXMuc2VsZWN0ZWRNYXJrZXIoKT8uZ2V0VGl0bGUoKSB9fVxyXG4gIDwvbWFwLWluZm8td2luZG93PlxyXG48L2dvb2dsZS1tYXA+XHJcblxyXG5AaWYgKHRoaXMucm91dGVTdW1tYXJ5KSB7XHJcbiAgPGRpdj5cclxuICAgIDxoMz5Sw6lzdW3DqSBkdSB0cmFqZXQ8L2gzPlxyXG4gICAgPHA+XHJcbiAgICAgIERpc3RhbmNlIDoge3sgdGhpcy5yb3V0ZVN1bW1hcnkuZGlzdGFuY2VLbSB9fSBrbTxiciAvPlxyXG4gICAgICBEdXLDqWUgZXN0aW3DqWUgOiB7eyB0aGlzLnJvdXRlU3VtbWFyeS5kdXJhdGlvbiB9fVxyXG4gICAgPC9wPlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5AaWYgKHJvdXRlRGV0YWlscygpLmxlbmd0aCA+IDApIHtcclxuICA8ZGl2PlxyXG4gICAgPGgzPkTDqXRhaWxzIGR1IHRyYWpldDwvaDM+XHJcbiAgICA8dWw+XHJcbiAgICAgIEBmb3IgKHN0ZXAgb2Ygcm91dGVEZXRhaWxzKCk7IHRyYWNrIHN0ZXApIHtcclxuICAgICAgICA8bGk+e3sgc3RlcC5pbnN0cnVjdGlvbiB9fSDigJQge3sgc3RlcC5kaXN0YW5jZSB9fSBtIOKAlCB7eyBzdGVwLmR1cmF0aW9uIH19PC9saT5cclxuICAgICAgfVxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxufVxyXG4iXX0=