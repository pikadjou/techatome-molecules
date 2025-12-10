import { NgFor, NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import {
  AfterViewInit,
  Component,
  QueryList,
  ViewChild,
  ViewChildren,
  signal,
} from "@angular/core";
import {
  GoogleMap,
  GoogleMapsModule,
  MapInfoWindow,
  MapMarker,
} from "@angular/google-maps";

import { MarkerClusterer } from "@googlemaps/markerclusterer";

import { markers } from "../../mock";

@Component({
  selector: "ta-google-maps",
  standalone: true,
  imports: [GoogleMapsModule, NgIf, NgFor],
  templateUrl: "./map.component.html",
  styleUrl: "./map.component.scss",
})
export class MapComponent implements AfterViewInit {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;
  @ViewChild("map") map!: GoogleMap;
  @ViewChildren(MapMarker) mapMarkers!: QueryList<MapMarker>;

  readonly options: google.maps.MapOptions = {
    center: { lat: 50, lng: 4 },
    zoom: 4,
  };

  routeSummary: any = null;
  routeDetails = signal<any[]>([]);
  readonly markers = markers.map((marker) => ({
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
  readonly selectedPoints = [
    { lat: 50.8503, lng: 4.3517 },
    { lat: 50.6326, lng: 5.5797 },
    { lat: 51.2194, lng: 4.4025 },
  ];
  directionsRenderer!: google.maps.DirectionsRenderer;
  selectedMarker = signal<google.maps.Marker | null>(null);

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    const bounds = new google.maps.LatLngBounds();

    this.mapMarkers.forEach((marker) => {
      bounds.extend(marker.getPosition() ?? { lat: 0, lng: 0 });
    });

    this.map.fitBounds(bounds, { top: 50, bottom: 50, left: 50, right: 50 });

    new MarkerClusterer({
      markers: this.mapMarkers.map((m) => m.marker!),
      map: this.map.googleMap!,
    });

    this.renderRouteWithRoutesApi();
  }

  openInfoWindow(mapMarker: MapMarker) {
    if (mapMarker.marker) {
      this.selectedMarker.set(mapMarker.marker);
    }
    if (this.infoWindow) {
      this.infoWindow.open(mapMarker);
    }
  }

  renderRoute() {
    if (this.selectedPoints.length < 2) return;

    const directionsService = new google.maps.DirectionsService();
    this.directionsRenderer = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
    });
    this.directionsRenderer.setMap(this.map.googleMap!);

    const [origin, ...rest] = this.selectedPoints;
    const destination = rest.pop(); // last point

    directionsService.route(
      {
        origin,
        destination,
        travelMode: google.maps.TravelMode.DRIVING,
        optimizeWaypoints: true,
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          this.directionsRenderer.setDirections(result);
        } else {
          console.error("Erreur de calcul de l’itinéraire :", status);
        }
      }
    );
  }

  renderRouteWithRoutesApi() {
    if (this.selectedPoints.length < 2) return;

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
      .post(
        `https://routes.googleapis.com/directions/v2:computeRoutes?key=${key}`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
            "X-Goog-FieldMask": "*",
          },
        }
      )
      .subscribe({
        next: (response: any) => {
          const route = response.routes[0];
          const polyline = route.polyline.encodedPolyline;

          const decodedPath =
            google.maps.geometry.encoding.decodePath(polyline);
          const routePolyline = new google.maps.Polyline({
            path: decodedPath,
            strokeColor: "red",
            strokeOpacity: 0.8,
            strokeWeight: 5,
          });

          routePolyline.setMap(this.map.googleMap!);

          // Extraire les détails
          const leg = route.legs[0];
          this.routeDetails.set(
            leg.steps.map((step: any) => ({
              instruction: step.navigationInstruction?.instructions,
              distance: step.distanceMeters,
              duration: step.duration,
            }))
          );

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

  parseDuration(isoDuration: string): string {
    const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
    if (!match) return isoDuration;
    const [, hours, minutes] = match;
    return `${hours ? hours + " h " : ""}${
      minutes ? minutes + " min" : ""
    }`.trim();
  }
}
