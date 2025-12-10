import { NgFor, NgIf } from "@angular/common";
import { Component, ViewChild, ViewChildren, signal, } from "@angular/core";
import { GoogleMapsModule, MapInfoWindow, MapMarker, } from "@angular/google-maps";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import { markers } from "../../mock";
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
        this.markers = markers.map((marker) => ({
            ...marker,
            ...{
                options: {
                    animation: google.maps.Animation.DROP,
                    icon: {
                        path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                        scale: 8,
                        fillColor: "#FF0000",
                        fillOpacity: 1,
                        strokeWeight: 1,
                        strokeColor: "#ffffff",
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
        this.mapMarkers.forEach((marker) => {
            bounds.extend(marker.getPosition() ?? { lat: 0, lng: 0 });
        });
        this.map.fitBounds(bounds, { top: 50, bottom: 50, left: 50, right: 50 });
        new MarkerClusterer({
            markers: this.mapMarkers.map((m) => m.marker),
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
                console.error("Erreur de calcul de l’itinéraire :", status);
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
            intermediates: rest.map((p) => ({
                location: { latLng: { latitude: p.lat, longitude: p.lng } },
            })),
            travelMode: "DRIVE",
            optimizeWaypointOrder: true,
            languageCode: "fr-FR",
            computeAlternativeRoutes: false,
        };
        const key = "AIzaSyDxd03WdDtISHBrM_6rCYS426grfl_bK8Y";
        this.http
            .post(`https://routes.googleapis.com/directions/v2:computeRoutes?key=${key}`, body, {
            headers: {
                "Content-Type": "application/json",
                "X-Goog-FieldMask": "*",
            },
        })
            .subscribe({
            next: (response) => {
                const route = response.routes[0];
                const polyline = route.polyline.encodedPolyline;
                const decodedPath = google.maps.geometry.encoding.decodePath(polyline);
                const routePolyline = new google.maps.Polyline({
                    path: decodedPath,
                    strokeColor: "red",
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
            error: (err) => {
                console.error("Erreur Routes API :", err);
            },
        });
    }
    parseDuration(isoDuration) {
        const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
        if (!match)
            return isoDuration;
        const [, hours, minutes] = match;
        return `${hours ? hours + " h " : ""}${minutes ? minutes + " min" : ""}`.trim();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MapComponent, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.14", type: MapComponent, isStandalone: true, selector: "ta-google-maps", viewQueries: [{ propertyName: "infoWindow", first: true, predicate: MapInfoWindow, descendants: true }, { propertyName: "map", first: true, predicate: ["map"], descendants: true }, { propertyName: "mapMarkers", predicate: MapMarker, descendants: true }], ngImport: i0, template: "<google-map #map [options]=\"this.options\">\n  @for (marker of this.markers; track marker.position) {\n  <map-marker\n    #mapMarker=\"mapMarker\"\n    [position]=\"marker.position\"\n    [title]=\"marker.title\"\n    [options]=\"marker.options\"\n    (mapClick)=\"this.openInfoWindow(mapMarker)\"\n  ></map-marker>\n  }\n\n  <map-info-window>\n    {{ this.selectedMarker()?.getTitle() }}\n  </map-info-window>\n</google-map>\n\n@if (this.routeSummary) {\n<div>\n  <h3>R\u00E9sum\u00E9 du trajet</h3>\n  <p>\n    Distance : {{ this.routeSummary.distanceKm }} km<br />\n    Dur\u00E9e estim\u00E9e : {{ this.routeSummary.duration }}\n  </p>\n</div>\n} @if (routeDetails().length > 0) {\n<div>\n  <h3>D\u00E9tails du trajet</h3>\n  <ul>\n    @for (step of routeDetails(); track step) {\n    <li>\n      {{ step.instruction }} \u2014 {{ step.distance }} m \u2014 {{ step.duration }}\n    </li>\n    }\n  </ul>\n</div>\n}\n", styles: [""], dependencies: [{ kind: "ngmodule", type: GoogleMapsModule }, { kind: "component", type: i2.GoogleMap, selector: "google-map", inputs: ["height", "width", "mapId", "mapTypeId", "center", "zoom", "options"], outputs: ["mapInitialized", "authFailure", "boundsChanged", "centerChanged", "mapClick", "mapDblclick", "mapDrag", "mapDragend", "mapDragstart", "headingChanged", "idle", "maptypeidChanged", "mapMousemove", "mapMouseout", "mapMouseover", "projectionChanged", "mapRightclick", "tilesloaded", "tiltChanged", "zoomChanged"], exportAs: ["googleMap"] }, { kind: "directive", type: i2.MapInfoWindow, selector: "map-info-window", inputs: ["options", "position"], outputs: ["closeclick", "contentChanged", "domready", "positionChanged", "zindexChanged", "infoWindowInitialized"], exportAs: ["mapInfoWindow"] }, { kind: "directive", type: i2.MapMarker, selector: "map-marker", inputs: ["title", "position", "label", "clickable", "options", "icon", "visible"], outputs: ["animationChanged", "mapClick", "clickableChanged", "cursorChanged", "mapDblclick", "mapDrag", "mapDragend", "draggableChanged", "mapDragstart", "flatChanged", "iconChanged", "mapMousedown", "mapMouseout", "mapMouseover", "mapMouseup", "positionChanged", "mapRightclick", "shapeChanged", "titleChanged", "visibleChanged", "zindexChanged", "markerInitialized"], exportAs: ["mapMarker"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MapComponent, decorators: [{
            type: Component,
            args: [{ selector: "ta-google-maps", standalone: true, imports: [GoogleMapsModule, NgIf, NgFor], template: "<google-map #map [options]=\"this.options\">\n  @for (marker of this.markers; track marker.position) {\n  <map-marker\n    #mapMarker=\"mapMarker\"\n    [position]=\"marker.position\"\n    [title]=\"marker.title\"\n    [options]=\"marker.options\"\n    (mapClick)=\"this.openInfoWindow(mapMarker)\"\n  ></map-marker>\n  }\n\n  <map-info-window>\n    {{ this.selectedMarker()?.getTitle() }}\n  </map-info-window>\n</google-map>\n\n@if (this.routeSummary) {\n<div>\n  <h3>R\u00E9sum\u00E9 du trajet</h3>\n  <p>\n    Distance : {{ this.routeSummary.distanceKm }} km<br />\n    Dur\u00E9e estim\u00E9e : {{ this.routeSummary.duration }}\n  </p>\n</div>\n} @if (routeDetails().length > 0) {\n<div>\n  <h3>D\u00E9tails du trajet</h3>\n  <ul>\n    @for (step of routeDetails(); track step) {\n    <li>\n      {{ step.instruction }} \u2014 {{ step.distance }} m \u2014 {{ step.duration }}\n    </li>\n    }\n  </ul>\n</div>\n}\n" }]
        }], ctorParameters: () => [{ type: i1.HttpClient }], propDecorators: { infoWindow: [{
                type: ViewChild,
                args: [MapInfoWindow]
            }], map: [{
                type: ViewChild,
                args: ["map"]
            }], mapMarkers: [{
                type: ViewChildren,
                args: [MapMarker]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9saWIvbW9kdWxlcy9tYXBzL2NvbXBvbmVudHMvbWFwL21hcC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbGliL21vZHVsZXMvbWFwcy9jb21wb25lbnRzL21hcC9tYXAuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUU5QyxPQUFPLEVBRUwsU0FBUyxFQUVULFNBQVMsRUFDVCxZQUFZLEVBQ1osTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLFNBQVMsR0FDVixNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDOzs7O0FBU3JDLE1BQU0sT0FBTyxZQUFZO0lBb0N2QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBL0IzQixZQUFPLEdBQTJCO1lBQ3pDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRTtZQUMzQixJQUFJLEVBQUUsQ0FBQztTQUNSLENBQUM7UUFFRixpQkFBWSxHQUFRLElBQUksQ0FBQztRQUN6QixpQkFBWSxHQUFHLE1BQU0sQ0FBUSxFQUFFLENBQUMsQ0FBQztRQUN4QixZQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMxQyxHQUFHLE1BQU07WUFDVCxHQUFHO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxTQUFTLEVBQUUsTUFBTSxDQUFDLElB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QUFJLEVBQUUsQ0FBQztJQUNaLENBQUM7K0dBbExVLFlBQVk7bUdBQVosWUFBWSxzSEFDWixhQUFhLDZJQUVWLFNBQVMsZ0RDL0J6QiwwNUJBb0NBLHlERFpZLGdCQUFnQjs7NEZBSWYsWUFBWTtrQkFQeEIsU0FBUzsrQkFDRSxnQkFBZ0IsY0FDZCxJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDOytFQUtkLFVBQVU7c0JBQW5DLFNBQVM7dUJBQUMsYUFBYTtnQkFDTixHQUFHO3NCQUFwQixTQUFTO3VCQUFDLEtBQUs7Z0JBQ1MsVUFBVTtzQkFBbEMsWUFBWTt1QkFBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdGb3IsIE5nSWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG4gIHNpZ25hbCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEdvb2dsZU1hcCxcbiAgR29vZ2xlTWFwc01vZHVsZSxcbiAgTWFwSW5mb1dpbmRvdyxcbiAgTWFwTWFya2VyLFxufSBmcm9tIFwiQGFuZ3VsYXIvZ29vZ2xlLW1hcHNcIjtcblxuaW1wb3J0IHsgTWFya2VyQ2x1c3RlcmVyIH0gZnJvbSBcIkBnb29nbGVtYXBzL21hcmtlcmNsdXN0ZXJlclwiO1xuXG5pbXBvcnQgeyBtYXJrZXJzIH0gZnJvbSBcIi4uLy4uL21vY2tcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcInRhLWdvb2dsZS1tYXBzXCIsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtHb29nbGVNYXBzTW9kdWxlLCBOZ0lmLCBOZ0Zvcl0sXG4gIHRlbXBsYXRlVXJsOiBcIi4vbWFwLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsOiBcIi4vbWFwLmNvbXBvbmVudC5zY3NzXCIsXG59KVxuZXhwb3J0IGNsYXNzIE1hcENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKE1hcEluZm9XaW5kb3cpIGluZm9XaW5kb3chOiBNYXBJbmZvV2luZG93O1xuICBAVmlld0NoaWxkKFwibWFwXCIpIG1hcCE6IEdvb2dsZU1hcDtcbiAgQFZpZXdDaGlsZHJlbihNYXBNYXJrZXIpIG1hcE1hcmtlcnMhOiBRdWVyeUxpc3Q8TWFwTWFya2VyPjtcblxuICByZWFkb25seSBvcHRpb25zOiBnb29nbGUubWFwcy5NYXBPcHRpb25zID0ge1xuICAgIGNlbnRlcjogeyBsYXQ6IDUwLCBsbmc6IDQgfSxcbiAgICB6b29tOiA0LFxuICB9O1xuXG4gIHJvdXRlU3VtbWFyeTogYW55ID0gbnVsbDtcbiAgcm91dGVEZXRhaWxzID0gc2lnbmFsPGFueVtdPihbXSk7XG4gIHJlYWRvbmx5IG1hcmtlcnMgPSBtYXJrZXJzLm1hcCgobWFya2VyKSA9PiAoe1xuICAgIC4uLm1hcmtlcixcbiAgICAuLi57XG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGFuaW1hdGlvbjogZ29vZ2xlLm1hcHMuQW5pbWF0aW9uLkRST1AsXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICBwYXRoOiBnb29nbGUubWFwcy5TeW1ib2xQYXRoLkJBQ0tXQVJEX0NMT1NFRF9BUlJPVyxcbiAgICAgICAgICBzY2FsZTogOCxcbiAgICAgICAgICBmaWxsQ29sb3I6IFwiI0ZGMDAwMFwiLFxuICAgICAgICAgIGZpbGxPcGFjaXR5OiAxLFxuICAgICAgICAgIHN0cm9rZVdlaWdodDogMSxcbiAgICAgICAgICBzdHJva2VDb2xvcjogXCIjZmZmZmZmXCIsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pKTtcbiAgcmVhZG9ubHkgc2VsZWN0ZWRQb2ludHMgPSBbXG4gICAgeyBsYXQ6IDUwLjg1MDMsIGxuZzogNC4zNTE3IH0sXG4gICAgeyBsYXQ6IDUwLjYzMjYsIGxuZzogNS41Nzk3IH0sXG4gICAgeyBsYXQ6IDUxLjIxOTQsIGxuZzogNC40MDI1IH0sXG4gIF07XG4gIGRpcmVjdGlvbnNSZW5kZXJlciE6IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcjtcbiAgc2VsZWN0ZWRNYXJrZXIgPSBzaWduYWw8Z29vZ2xlLm1hcHMuTWFya2VyIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zdCBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG5cbiAgICB0aGlzLm1hcE1hcmtlcnMuZm9yRWFjaCgobWFya2VyKSA9PiB7XG4gICAgICBib3VuZHMuZXh0ZW5kKG1hcmtlci5nZXRQb3NpdGlvbigpID8/IHsgbGF0OiAwLCBsbmc6IDAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzLCB7IHRvcDogNTAsIGJvdHRvbTogNTAsIGxlZnQ6IDUwLCByaWdodDogNTAgfSk7XG5cbiAgICBuZXcgTWFya2VyQ2x1c3RlcmVyKHtcbiAgICAgIG1hcmtlcnM6IHRoaXMubWFwTWFya2Vycy5tYXAoKG0pID0+IG0ubWFya2VyISksXG4gICAgICBtYXA6IHRoaXMubWFwLmdvb2dsZU1hcCEsXG4gICAgfSk7XG5cbiAgICB0aGlzLnJlbmRlclJvdXRlV2l0aFJvdXRlc0FwaSgpO1xuICB9XG5cbiAgb3BlbkluZm9XaW5kb3cobWFwTWFya2VyOiBNYXBNYXJrZXIpIHtcbiAgICBpZiAobWFwTWFya2VyLm1hcmtlcikge1xuICAgICAgdGhpcy5zZWxlY3RlZE1hcmtlci5zZXQobWFwTWFya2VyLm1hcmtlcik7XG4gICAgfVxuICAgIGlmICh0aGlzLmluZm9XaW5kb3cpIHtcbiAgICAgIHRoaXMuaW5mb1dpbmRvdy5vcGVuKG1hcE1hcmtlcik7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyUm91dGUoKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRQb2ludHMubGVuZ3RoIDwgMikgcmV0dXJuO1xuXG4gICAgY29uc3QgZGlyZWN0aW9uc1NlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1NlcnZpY2UoKTtcbiAgICB0aGlzLmRpcmVjdGlvbnNSZW5kZXJlciA9IG5ldyBnb29nbGUubWFwcy5EaXJlY3Rpb25zUmVuZGVyZXIoe1xuICAgICAgc3VwcHJlc3NNYXJrZXJzOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMuZGlyZWN0aW9uc1JlbmRlcmVyLnNldE1hcCh0aGlzLm1hcC5nb29nbGVNYXAhKTtcblxuICAgIGNvbnN0IFtvcmlnaW4sIC4uLnJlc3RdID0gdGhpcy5zZWxlY3RlZFBvaW50cztcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHJlc3QucG9wKCk7IC8vIGxhc3QgcG9pbnRcblxuICAgIGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKFxuICAgICAge1xuICAgICAgICBvcmlnaW4sXG4gICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICB0cmF2ZWxNb2RlOiBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkcsXG4gICAgICAgIG9wdGltaXplV2F5cG9pbnRzOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIChyZXN1bHQsIHN0YXR1cykgPT4ge1xuICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LICYmIHJlc3VsdCkge1xuICAgICAgICAgIHRoaXMuZGlyZWN0aW9uc1JlbmRlcmVyLnNldERpcmVjdGlvbnMocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGRlIGNhbGN1bCBkZSBs4oCZaXRpbsOpcmFpcmUgOlwiLCBzdGF0dXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclJvdXRlV2l0aFJvdXRlc0FwaSgpIHtcbiAgICBpZiAodGhpcy5zZWxlY3RlZFBvaW50cy5sZW5ndGggPCAyKSByZXR1cm47XG5cbiAgICBjb25zdCBbb3JpZ2luLCAuLi5yZXN0XSA9IHRoaXMuc2VsZWN0ZWRQb2ludHM7XG4gICAgY29uc3QgZGVzdGluYXRpb24gPSByZXN0LnBvcCgpO1xuXG4gICAgY29uc3QgYm9keSA9IHtcbiAgICAgIG9yaWdpbjoge1xuICAgICAgICBsb2NhdGlvbjoge1xuICAgICAgICAgIGxhdExuZzogeyBsYXRpdHVkZTogb3JpZ2luLmxhdCwgbG9uZ2l0dWRlOiBvcmlnaW4ubG5nIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZGVzdGluYXRpb246IHtcbiAgICAgICAgbG9jYXRpb246IHtcbiAgICAgICAgICBsYXRMbmc6IHsgbGF0aXR1ZGU6IGRlc3RpbmF0aW9uPy5sYXQsIGxvbmdpdHVkZTogZGVzdGluYXRpb24/LmxuZyB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIGludGVybWVkaWF0ZXM6IHJlc3QubWFwKChwKSA9PiAoe1xuICAgICAgICBsb2NhdGlvbjogeyBsYXRMbmc6IHsgbGF0aXR1ZGU6IHAubGF0LCBsb25naXR1ZGU6IHAubG5nIH0gfSxcbiAgICAgIH0pKSxcbiAgICAgIHRyYXZlbE1vZGU6IFwiRFJJVkVcIixcbiAgICAgIG9wdGltaXplV2F5cG9pbnRPcmRlcjogdHJ1ZSxcbiAgICAgIGxhbmd1YWdlQ29kZTogXCJmci1GUlwiLFxuICAgICAgY29tcHV0ZUFsdGVybmF0aXZlUm91dGVzOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY29uc3Qga2V5ID0gXCJBSXphU3lEeGQwM1dkRHRJU0hCck1fNnJDWVM0MjZncmZsX2JLOFlcIjtcbiAgICB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KFxuICAgICAgICBgaHR0cHM6Ly9yb3V0ZXMuZ29vZ2xlYXBpcy5jb20vZGlyZWN0aW9ucy92Mjpjb21wdXRlUm91dGVzP2tleT0ke2tleX1gLFxuICAgICAgICBib2R5LFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBcIlgtR29vZy1GaWVsZE1hc2tcIjogXCIqXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSh7XG4gICAgICAgIG5leHQ6IChyZXNwb25zZTogYW55KSA9PiB7XG4gICAgICAgICAgY29uc3Qgcm91dGUgPSByZXNwb25zZS5yb3V0ZXNbMF07XG4gICAgICAgICAgY29uc3QgcG9seWxpbmUgPSByb3V0ZS5wb2x5bGluZS5lbmNvZGVkUG9seWxpbmU7XG5cbiAgICAgICAgICBjb25zdCBkZWNvZGVkUGF0aCA9XG4gICAgICAgICAgICBnb29nbGUubWFwcy5nZW9tZXRyeS5lbmNvZGluZy5kZWNvZGVQYXRoKHBvbHlsaW5lKTtcbiAgICAgICAgICBjb25zdCByb3V0ZVBvbHlsaW5lID0gbmV3IGdvb2dsZS5tYXBzLlBvbHlsaW5lKHtcbiAgICAgICAgICAgIHBhdGg6IGRlY29kZWRQYXRoLFxuICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAwLjgsXG4gICAgICAgICAgICBzdHJva2VXZWlnaHQ6IDUsXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICByb3V0ZVBvbHlsaW5lLnNldE1hcCh0aGlzLm1hcC5nb29nbGVNYXAhKTtcblxuICAgICAgICAgIC8vIEV4dHJhaXJlIGxlcyBkw6l0YWlsc1xuICAgICAgICAgIGNvbnN0IGxlZyA9IHJvdXRlLmxlZ3NbMF07XG4gICAgICAgICAgdGhpcy5yb3V0ZURldGFpbHMuc2V0KFxuICAgICAgICAgICAgbGVnLnN0ZXBzLm1hcCgoc3RlcDogYW55KSA9PiAoe1xuICAgICAgICAgICAgICBpbnN0cnVjdGlvbjogc3RlcC5uYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24/Lmluc3RydWN0aW9ucyxcbiAgICAgICAgICAgICAgZGlzdGFuY2U6IHN0ZXAuZGlzdGFuY2VNZXRlcnMsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiBzdGVwLmR1cmF0aW9uLFxuICAgICAgICAgICAgfSkpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnN0IGRpc3RhbmNlS20gPSAobGVnLmRpc3RhbmNlTWV0ZXJzIC8gMTAwMCkudG9GaXhlZCgxKTtcbiAgICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRoaXMucGFyc2VEdXJhdGlvbihsZWcuZHVyYXRpb24pO1xuXG4gICAgICAgICAgdGhpcy5yb3V0ZVN1bW1hcnkgPSB7XG4gICAgICAgICAgICBkaXN0YW5jZUttLFxuICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIFJvdXRlcyBBUEkgOlwiLCBlcnIpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gIH1cblxuICBwYXJzZUR1cmF0aW9uKGlzb0R1cmF0aW9uOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1hdGNoID0gaXNvRHVyYXRpb24ubWF0Y2goL1BUKD86KFxcZCspSCk/KD86KFxcZCspTSk/Lyk7XG4gICAgaWYgKCFtYXRjaCkgcmV0dXJuIGlzb0R1cmF0aW9uO1xuICAgIGNvbnN0IFssIGhvdXJzLCBtaW51dGVzXSA9IG1hdGNoO1xuICAgIHJldHVybiBgJHtob3VycyA/IGhvdXJzICsgXCIgaCBcIiA6IFwiXCJ9JHtcbiAgICAgIG1pbnV0ZXMgPyBtaW51dGVzICsgXCIgbWluXCIgOiBcIlwiXG4gICAgfWAudHJpbSgpO1xuICB9XG59XG4iLCI8Z29vZ2xlLW1hcCAjbWFwIFtvcHRpb25zXT1cInRoaXMub3B0aW9uc1wiPlxuICBAZm9yIChtYXJrZXIgb2YgdGhpcy5tYXJrZXJzOyB0cmFjayBtYXJrZXIucG9zaXRpb24pIHtcbiAgPG1hcC1tYXJrZXJcbiAgICAjbWFwTWFya2VyPVwibWFwTWFya2VyXCJcbiAgICBbcG9zaXRpb25dPVwibWFya2VyLnBvc2l0aW9uXCJcbiAgICBbdGl0bGVdPVwibWFya2VyLnRpdGxlXCJcbiAgICBbb3B0aW9uc109XCJtYXJrZXIub3B0aW9uc1wiXG4gICAgKG1hcENsaWNrKT1cInRoaXMub3BlbkluZm9XaW5kb3cobWFwTWFya2VyKVwiXG4gID48L21hcC1tYXJrZXI+XG4gIH1cblxuICA8bWFwLWluZm8td2luZG93PlxuICAgIHt7IHRoaXMuc2VsZWN0ZWRNYXJrZXIoKT8uZ2V0VGl0bGUoKSB9fVxuICA8L21hcC1pbmZvLXdpbmRvdz5cbjwvZ29vZ2xlLW1hcD5cblxuQGlmICh0aGlzLnJvdXRlU3VtbWFyeSkge1xuPGRpdj5cbiAgPGgzPlLDqXN1bcOpIGR1IHRyYWpldDwvaDM+XG4gIDxwPlxuICAgIERpc3RhbmNlIDoge3sgdGhpcy5yb3V0ZVN1bW1hcnkuZGlzdGFuY2VLbSB9fSBrbTxiciAvPlxuICAgIER1csOpZSBlc3RpbcOpZSA6IHt7IHRoaXMucm91dGVTdW1tYXJ5LmR1cmF0aW9uIH19XG4gIDwvcD5cbjwvZGl2PlxufSBAaWYgKHJvdXRlRGV0YWlscygpLmxlbmd0aCA+IDApIHtcbjxkaXY+XG4gIDxoMz5Ew6l0YWlscyBkdSB0cmFqZXQ8L2gzPlxuICA8dWw+XG4gICAgQGZvciAoc3RlcCBvZiByb3V0ZURldGFpbHMoKTsgdHJhY2sgc3RlcCkge1xuICAgIDxsaT5cbiAgICAgIHt7IHN0ZXAuaW5zdHJ1Y3Rpb24gfX0g4oCUIHt7IHN0ZXAuZGlzdGFuY2UgfX0gbSDigJQge3sgc3RlcC5kdXJhdGlvbiB9fVxuICAgIDwvbGk+XG4gICAgfVxuICA8L3VsPlxuPC9kaXY+XG59XG4iXX0=