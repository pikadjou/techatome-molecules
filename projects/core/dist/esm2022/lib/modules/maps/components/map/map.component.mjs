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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MapComponent, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: MapComponent, isStandalone: true, selector: "ta-google-maps", viewQueries: [{ propertyName: "infoWindow", first: true, predicate: MapInfoWindow, descendants: true }, { propertyName: "map", first: true, predicate: ["map"], descendants: true }, { propertyName: "mapMarkers", predicate: MapMarker, descendants: true }], ngImport: i0, template: "<google-map #map [options]=\"this.options\">\n  @for (marker of this.markers; track marker.position) {\n  <map-marker\n    #mapMarker=\"mapMarker\"\n    [position]=\"marker.position\"\n    [title]=\"marker.title\"\n    [options]=\"marker.options\"\n    (mapClick)=\"this.openInfoWindow(mapMarker)\"\n  ></map-marker>\n  }\n\n  <map-info-window>\n    {{ this.selectedMarker()?.getTitle() }}\n  </map-info-window>\n</google-map>\n\n@if (this.routeSummary) {\n<div>\n  <h3>R\u00E9sum\u00E9 du trajet</h3>\n  <p>\n    Distance : {{ this.routeSummary.distanceKm }} km<br />\n    Dur\u00E9e estim\u00E9e : {{ this.routeSummary.duration }}\n  </p>\n</div>\n} @if (routeDetails().length > 0) {\n<div>\n  <h3>D\u00E9tails du trajet</h3>\n  <ul>\n    @for (step of routeDetails(); track step) {\n    <li>\n      {{ step.instruction }} \u2014 {{ step.distance }} m \u2014 {{ step.duration }}\n    </li>\n    }\n  </ul>\n</div>\n}\n", styles: [""], dependencies: [{ kind: "ngmodule", type: GoogleMapsModule }, { kind: "component", type: i2.GoogleMap, selector: "google-map", inputs: ["height", "width", "mapId", "mapTypeId", "center", "zoom", "options"], outputs: ["mapInitialized", "authFailure", "boundsChanged", "centerChanged", "mapClick", "mapDblclick", "mapDrag", "mapDragend", "mapDragstart", "headingChanged", "idle", "maptypeidChanged", "mapMousemove", "mapMouseout", "mapMouseover", "projectionChanged", "mapRightclick", "tilesloaded", "tiltChanged", "zoomChanged"], exportAs: ["googleMap"] }, { kind: "directive", type: i2.MapInfoWindow, selector: "map-info-window", inputs: ["options", "position"], outputs: ["closeclick", "contentChanged", "domready", "positionChanged", "zindexChanged", "infoWindowInitialized"], exportAs: ["mapInfoWindow"] }, { kind: "directive", type: i2.MapMarker, selector: "map-marker", inputs: ["title", "position", "label", "clickable", "options", "icon", "visible"], outputs: ["animationChanged", "mapClick", "clickableChanged", "cursorChanged", "mapDblclick", "mapDrag", "mapDragend", "draggableChanged", "mapDragstart", "flatChanged", "iconChanged", "mapMousedown", "mapMouseout", "mapMouseover", "mapMouseup", "positionChanged", "mapRightclick", "shapeChanged", "titleChanged", "visibleChanged", "zindexChanged", "markerInitialized"], exportAs: ["mapMarker"] }] }); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9tYXBzL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvbWFwcy9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFpQixTQUFTLEVBQWEsU0FBUyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFhLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFOUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQVNyQyxNQUFNLE9BQU8sWUFBWTtJQW9DdkIsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQS9CM0IsWUFBTyxHQUEyQjtZQUN6QyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxFQUFFLENBQUM7U0FDUixDQUFDO1FBRUYsaUJBQVksR0FBUSxJQUFJLENBQUM7UUFDekIsaUJBQVksR0FBRyxNQUFNLENBQVEsRUFBRSxDQUFDLENBQUM7UUFDeEIsWUFBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3hDLEdBQUcsTUFBTTtZQUNULEdBQUc7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJO29CQUNyQyxJQUFJLEVBQUU7d0JBQ0osSUFBSSxFQUFFLE1B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QkFvQ0EseUREekJZLGdCQUFnQjs7NEZBSWYsWUFBWTtrQkFQeEIsU0FBUzsrQkFDRSxnQkFBZ0IsY0FDZCxJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsQ0FBQzsrRUFLRCxVQUFVO3NCQUFuQyxTQUFTO3VCQUFDLGFBQWE7Z0JBQ04sR0FBRztzQkFBcEIsU0FBUzt1QkFBQyxLQUFLO2dCQUNTLFVBQVU7c0JBQWxDLFlBQVk7dUJBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkLCBWaWV3Q2hpbGRyZW4sIHNpZ25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgR29vZ2xlTWFwLCBHb29nbGVNYXBzTW9kdWxlLCBNYXBJbmZvV2luZG93LCBNYXBNYXJrZXIgfSBmcm9tICdAYW5ndWxhci9nb29nbGUtbWFwcyc7XG5cbmltcG9ydCB7IE1hcmtlckNsdXN0ZXJlciB9IGZyb20gJ0Bnb29nbGVtYXBzL21hcmtlcmNsdXN0ZXJlcic7XG5cbmltcG9ydCB7IG1hcmtlcnMgfSBmcm9tICcuLi8uLi9tb2NrJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGEtZ29vZ2xlLW1hcHMnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbR29vZ2xlTWFwc01vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXAuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vbWFwLmNvbXBvbmVudC5zY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgTWFwQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBWaWV3Q2hpbGQoTWFwSW5mb1dpbmRvdykgaW5mb1dpbmRvdyE6IE1hcEluZm9XaW5kb3c7XG4gIEBWaWV3Q2hpbGQoJ21hcCcpIG1hcCE6IEdvb2dsZU1hcDtcbiAgQFZpZXdDaGlsZHJlbihNYXBNYXJrZXIpIG1hcE1hcmtlcnMhOiBRdWVyeUxpc3Q8TWFwTWFya2VyPjtcblxuICByZWFkb25seSBvcHRpb25zOiBnb29nbGUubWFwcy5NYXBPcHRpb25zID0ge1xuICAgIGNlbnRlcjogeyBsYXQ6IDUwLCBsbmc6IDQgfSxcbiAgICB6b29tOiA0LFxuICB9O1xuXG4gIHJvdXRlU3VtbWFyeTogYW55ID0gbnVsbDtcbiAgcm91dGVEZXRhaWxzID0gc2lnbmFsPGFueVtdPihbXSk7XG4gIHJlYWRvbmx5IG1hcmtlcnMgPSBtYXJrZXJzLm1hcChtYXJrZXIgPT4gKHtcbiAgICAuLi5tYXJrZXIsXG4gICAgLi4ue1xuICAgICAgb3B0aW9uczoge1xuICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxuICAgICAgICBpY29uOiB7XG4gICAgICAgICAgcGF0aDogZ29vZ2xlLm1hcHMuU3ltYm9sUGF0aC5CQUNLV0FSRF9DTE9TRURfQVJST1csXG4gICAgICAgICAgc2NhbGU6IDgsXG4gICAgICAgICAgZmlsbENvbG9yOiAnI0ZGMDAwMCcsXG4gICAgICAgICAgZmlsbE9wYWNpdHk6IDEsXG4gICAgICAgICAgc3Ryb2tlV2VpZ2h0OiAxLFxuICAgICAgICAgIHN0cm9rZUNvbG9yOiAnI2ZmZmZmZicsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pKTtcbiAgcmVhZG9ubHkgc2VsZWN0ZWRQb2ludHMgPSBbXG4gICAgeyBsYXQ6IDUwLjg1MDMsIGxuZzogNC4zNTE3IH0sXG4gICAgeyBsYXQ6IDUwLjYzMjYsIGxuZzogNS41Nzk3IH0sXG4gICAgeyBsYXQ6IDUxLjIxOTQsIGxuZzogNC40MDI1IH0sXG4gIF07XG4gIGRpcmVjdGlvbnNSZW5kZXJlciE6IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcjtcbiAgc2VsZWN0ZWRNYXJrZXIgPSBzaWduYWw8Z29vZ2xlLm1hcHMuTWFya2VyIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG5cbiAgICB0aGlzLm1hcE1hcmtlcnMuZm9yRWFjaChtYXJrZXIgPT4ge1xuICAgICAgYm91bmRzLmV4dGVuZChtYXJrZXIuZ2V0UG9zaXRpb24oKSA/PyB7IGxhdDogMCwgbG5nOiAwIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tYXAuZml0Qm91bmRzKGJvdW5kcywgeyB0b3A6IDUwLCBib3R0b206IDUwLCBsZWZ0OiA1MCwgcmlnaHQ6IDUwIH0pO1xuXG4gICAgbmV3IE1hcmtlckNsdXN0ZXJlcih7XG4gICAgICBtYXJrZXJzOiB0aGlzLm1hcE1hcmtlcnMubWFwKG0gPT4gbS5tYXJrZXIhKSxcbiAgICAgIG1hcDogdGhpcy5tYXAuZ29vZ2xlTWFwISxcbiAgICB9KTtcblxuICAgIHRoaXMucmVuZGVyUm91dGVXaXRoUm91dGVzQXBpKCk7XG4gIH1cblxuICBvcGVuSW5mb1dpbmRvdyhtYXBNYXJrZXI6IE1hcE1hcmtlcikge1xuICAgIGlmIChtYXBNYXJrZXIubWFya2VyKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkTWFya2VyLnNldChtYXBNYXJrZXIubWFya2VyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaW5mb1dpbmRvdykge1xuICAgICAgdGhpcy5pbmZvV2luZG93Lm9wZW4obWFwTWFya2VyKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJSb3V0ZSgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFBvaW50cy5sZW5ndGggPCAyKSByZXR1cm47XG5cbiAgICBjb25zdCBkaXJlY3Rpb25zU2VydmljZSA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zU2VydmljZSgpO1xuICAgIHRoaXMuZGlyZWN0aW9uc1JlbmRlcmVyID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcih7XG4gICAgICBzdXBwcmVzc01hcmtlcnM6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5kaXJlY3Rpb25zUmVuZGVyZXIuc2V0TWFwKHRoaXMubWFwLmdvb2dsZU1hcCEpO1xuXG4gICAgY29uc3QgW29yaWdpbiwgLi4ucmVzdF0gPSB0aGlzLnNlbGVjdGVkUG9pbnRzO1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uOiBhbnkgPSByZXN0LnBvcCgpOyAvLyBsYXN0IHBvaW50XG5cbiAgICBkaXJlY3Rpb25zU2VydmljZS5yb3V0ZShcbiAgICAgIHtcbiAgICAgICAgb3JpZ2luLFxuICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgdHJhdmVsTW9kZTogZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5EUklWSU5HLFxuICAgICAgICBvcHRpbWl6ZVdheXBvaW50czogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAocmVzdWx0LCBzdGF0dXMpID0+IHtcbiAgICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSyAmJiByZXN1bHQpIHtcbiAgICAgICAgICB0aGlzLmRpcmVjdGlvbnNSZW5kZXJlci5zZXREaXJlY3Rpb25zKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGRlIGNhbGN1bCBkZSBs4oCZaXRpbsOpcmFpcmUgOicsIHN0YXR1cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyUm91dGVXaXRoUm91dGVzQXBpKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkUG9pbnRzLmxlbmd0aCA8IDIpIHJldHVybjtcblxuICAgIGNvbnN0IFtvcmlnaW4sIC4uLnJlc3RdID0gdGhpcy5zZWxlY3RlZFBvaW50cztcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHJlc3QucG9wKCk7XG5cbiAgICBjb25zdCBib2R5ID0ge1xuICAgICAgb3JpZ2luOiB7XG4gICAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgICAgbGF0TG5nOiB7IGxhdGl0dWRlOiBvcmlnaW4ubGF0LCBsb25naXR1ZGU6IG9yaWdpbi5sbmcgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBkZXN0aW5hdGlvbjoge1xuICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgIGxhdExuZzogeyBsYXRpdHVkZTogZGVzdGluYXRpb24/LmxhdCwgbG9uZ2l0dWRlOiBkZXN0aW5hdGlvbj8ubG5nIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgaW50ZXJtZWRpYXRlczogcmVzdC5tYXAocCA9PiAoe1xuICAgICAgICBsb2NhdGlvbjogeyBsYXRMbmc6IHsgbGF0aXR1ZGU6IHAubGF0LCBsb25naXR1ZGU6IHAubG5nIH0gfSxcbiAgICAgIH0pKSxcbiAgICAgIHRyYXZlbE1vZGU6ICdEUklWRScsXG4gICAgICBvcHRpbWl6ZVdheXBvaW50T3JkZXI6IHRydWUsXG4gICAgICBsYW5ndWFnZUNvZGU6ICdmci1GUicsXG4gICAgICBjb21wdXRlQWx0ZXJuYXRpdmVSb3V0ZXM6IGZhbHNlLFxuICAgIH07XG5cbiAgICBjb25zdCBrZXkgPSAnQUl6YVN5RHhkMDNXZER0SVNIQnJNXzZyQ1lTNDI2Z3JmbF9iSzhZJztcbiAgICB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KGBodHRwczovL3JvdXRlcy5nb29nbGVhcGlzLmNvbS9kaXJlY3Rpb25zL3YyOmNvbXB1dGVSb3V0ZXM/a2V5PSR7a2V5fWAsIGJvZHksIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ1gtR29vZy1GaWVsZE1hc2snOiAnKicsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3Qgcm91dGUgPSByZXNwb25zZS5yb3V0ZXNbMF07XG4gICAgICAgICAgY29uc3QgcG9seWxpbmUgPSByb3V0ZS5wb2x5bGluZS5lbmNvZGVkUG9seWxpbmU7XG5cbiAgICAgICAgICBjb25zdCBkZWNvZGVkUGF0aCA9IGdvb2dsZS5tYXBzLmdlb21ldHJ5LmVuY29kaW5nLmRlY29kZVBhdGgocG9seWxpbmUpO1xuICAgICAgICAgIGNvbnN0IHJvdXRlUG9seWxpbmUgPSBuZXcgZ29vZ2xlLm1hcHMuUG9seWxpbmUoe1xuICAgICAgICAgICAgcGF0aDogZGVjb2RlZFBhdGgsXG4gICAgICAgICAgICBzdHJva2VDb2xvcjogJ3JlZCcsXG4gICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAwLjgsXG4gICAgICAgICAgICBzdHJva2VXZWlnaHQ6IDUsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByb3V0ZVBvbHlsaW5lLnNldE1hcCh0aGlzLm1hcC5nb29nbGVNYXAhKTtcblxuICAgICAgICAgIC8vIEV4dHJhaXJlIGxlcyBkw6l0YWlsc1xuICAgICAgICAgIGNvbnN0IGxlZyA9IHJvdXRlLmxlZ3NbMF07XG4gICAgICAgICAgdGhpcy5yb3V0ZURldGFpbHMuc2V0KFxuICAgICAgICAgICAgbGVnLnN0ZXBzLm1hcCgoc3RlcDogYW55KSA9PiAoe1xuICAgICAgICAgICAgICBpbnN0cnVjdGlvbjogc3RlcC5uYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24/Lmluc3RydWN0aW9ucyxcbiAgICAgICAgICAgICAgZGlzdGFuY2U6IHN0ZXAuZGlzdGFuY2VNZXRlcnMsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBzdGVwLmR1cmF0aW9uLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnN0IGRpc3RhbmNlS20gPSAobGVnLmRpc3RhbmNlTWV0ZXJzIC8gMTAwMCkudG9GaXhlZCgxKTtcbiAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMucGFyc2VEdXJhdGlvbihsZWcuZHVyYXRpb24pO1xuXG4gICAgICAgICAgdGhpcy5yb3V0ZVN1bW1hcnkgPSB7XG4gICAgICAgICAgICBkaXN0YW5jZUttLFxuICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIFJvdXRlcyBBUEkgOicsIGVycik7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgfVxuXG4gIHBhcnNlRHVyYXRpb24oaXNvRHVyYXRpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbWF0Y2ggPSBpc29EdXJhdGlvbi5tYXRjaCgvUFQoPzooXFxkKylIKT8oPzooXFxkKylNKT8vKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gaXNvRHVyYXRpb247XG4gICAgY29uc3QgWywgaG91cnMsIG1pbnV0ZXNdID0gbWF0Y2g7XG4gICAgcmV0dXJuIGAke2hvdXJzID8gaG91cnMgKyAnIGggJyA6ICcnfSR7bWludXRlcyA/IG1pbnV0ZXMgKyAnIG1pbicgOiAnJ31gLnRyaW0oKTtcbiAgfVxufVxuIiwiPGdvb2dsZS1tYXAgI21hcCBbb3B0aW9uc109XCJ0aGlzLm9wdGlvbnNcIj5cbiAgQGZvciAobWFya2VyIG9mIHRoaXMubWFya2VyczsgdHJhY2sgbWFya2VyLnBvc2l0aW9uKSB7XG4gIDxtYXAtbWFya2VyXG4gICAgI21hcE1hcmtlcj1cIm1hcE1hcmtlclwiXG4gICAgW3Bvc2l0aW9uXT1cIm1hcmtlci5wb3NpdGlvblwiXG4gICAgW3RpdGxlXT1cIm1hcmtlci50aXRsZVwiXG4gICAgW29wdGlvbnNdPVwibWFya2VyLm9wdGlvbnNcIlxuICAgIChtYXBDbGljayk9XCJ0aGlzLm9wZW5JbmZvV2luZG93KG1hcE1hcmtlcilcIlxuICA+PC9tYXAtbWFya2VyPlxuICB9XG5cbiAgPG1hcC1pbmZvLXdpbmRvdz5cbiAgICB7eyB0aGlzLnNlbGVjdGVkTWFya2VyKCk/LmdldFRpdGxlKCkgfX1cbiAgPC9tYXAtaW5mby13aW5kb3c+XG48L2dvb2dsZS1tYXA+XG5cbkBpZiAodGhpcy5yb3V0ZVN1bW1hcnkpIHtcbjxkaXY+XG4gIDxoMz5Sw6lzdW3DqSBkdSB0cmFqZXQ8L2gzPlxuICA8cD5cbiAgICBEaXN0YW5jZSA6IHt7IHRoaXMucm91dGVTdW1tYXJ5LmRpc3RhbmNlS20gfX0ga208YnIgLz5cbiAgICBEdXLDqWUgZXN0aW3DqWUgOiB7eyB0aGlzLnJvdXRlU3VtbWFyeS5kdXJhdGlvbiB9fVxuICA8L3A+XG48L2Rpdj5cbn0gQGlmIChyb3V0ZURldGFpbHMoKS5sZW5ndGggPiAwKSB7XG48ZGl2PlxuICA8aDM+RMOpdGFpbHMgZHUgdHJhamV0PC9oMz5cbiAgPHVsPlxuICAgIEBmb3IgKHN0ZXAgb2Ygcm91dGVEZXRhaWxzKCk7IHRyYWNrIHN0ZXApIHtcbiAgICA8bGk+XG4gICAgICB7eyBzdGVwLmluc3RydWN0aW9uIH19IOKAlCB7eyBzdGVwLmRpc3RhbmNlIH19IG0g4oCUIHt7IHN0ZXAuZHVyYXRpb24gfX1cbiAgICA8L2xpPlxuICAgIH1cbiAgPC91bD5cbjwvZGl2PlxufVxuIl19