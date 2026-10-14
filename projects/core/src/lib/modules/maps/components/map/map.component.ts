import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, computed, inject, input, signal, viewChild, viewChildren } from '@angular/core';
import { GoogleMap, GoogleMapsModule, MapInfoWindow, MapMarker } from '@angular/google-maps';

import { MarkerClusterer } from '@googlemaps/markerclusterer';

import { Logger } from '@ta/server';
import { TranslatePipe } from '@ta/translation';
import { TaBaseComponent } from '@ta/utils';

import { TA_GOOGLE_MAPS_CONFIG } from '../../google-maps.config';
import { TaTranslationMaps } from '../../translation.service';

export interface TaMapMarker {
  position: google.maps.LatLngLiteral;
  title: string;
}

export interface TaMapRouteStep {
  instruction: string;
  distance: number;
  duration: string;
}

export interface TaMapRouteSummary {
  distanceKm: string;
  duration: string;
}

interface RoutesApiResponse {
  routes: {
    polyline: { encodedPolyline: string };
    legs: {
      distanceMeters: number;
      duration: string;
      steps: { navigationInstruction?: { instructions: string }; distanceMeters: number; duration: string }[];
    }[];
  }[];
}

@Component({
  selector: 'ta-google-maps',
  standalone: true,
  imports: [GoogleMapsModule, TranslatePipe],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss',
})
export class MapComponent extends TaBaseComponent implements AfterViewInit {
  /** Points affichés sur la carte, regroupés automatiquement. */
  markers = input<TaMapMarker[]>([]);

  /** Étapes de l'itinéraire à tracer (au moins deux points). */
  routePoints = input<google.maps.LatLngLiteral[]>([]);

  options = input<google.maps.MapOptions>({ center: { lat: 50, lng: 4 }, zoom: 4 });

  readonly infoWindow = viewChild(MapInfoWindow);
  readonly map = viewChild<GoogleMap>('map');
  readonly mapMarkers = viewChildren(MapMarker);

  readonly markerOptions = computed(() =>
    this.markers().map(marker => ({
      ...marker,
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
    }))
  );
  readonly routeSummary = signal<TaMapRouteSummary | null>(null);
  readonly routeDetails = signal<TaMapRouteStep[]>([]);
  readonly selectedMarker = signal<google.maps.Marker | null>(null);

  private readonly _http = inject(HttpClient);
  private readonly _config = inject(TA_GOOGLE_MAPS_CONFIG);
  private _directionsRenderer: google.maps.DirectionsRenderer | null = null;

  constructor() {
    super();
    TaTranslationMaps.getInstance();
  }

  ngAfterViewInit() {
    const map = this.map()?.googleMap;
    if (!map) {
      return;
    }

    const bounds = new google.maps.LatLngBounds();
    const markers = this.mapMarkers();

    markers.forEach(marker => {
      bounds.extend(marker.getPosition() ?? { lat: 0, lng: 0 });
    });

    if (markers.length > 0) {
      this.map()?.fitBounds(bounds, { top: 50, bottom: 50, left: 50, right: 50 });
    }

    new MarkerClusterer({ markers: markers.map(m => m.marker!), map });

    this.renderRouteWithRoutesApi();
  }

  public openInfoWindow(mapMarker: MapMarker) {
    if (mapMarker.marker) {
      this.selectedMarker.set(mapMarker.marker);
    }
    this.infoWindow()?.open(mapMarker);
  }

  public renderRoute() {
    const points = this.routePoints();
    if (points.length < 2) return;

    const directionsService = new google.maps.DirectionsService();
    this._directionsRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: true });
    this._directionsRenderer.setMap(this.map()?.googleMap ?? null);

    const [origin, ...rest] = points;
    const destination = rest.pop()!;

    directionsService.route(
      { origin, destination, travelMode: google.maps.TravelMode.DRIVING, optimizeWaypoints: true },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK && result) {
          this._directionsRenderer?.setDirections(result);
        } else {
          Logger.LogError('[ta-google-maps] route computation failed', status);
        }
      }
    );
  }

  public renderRouteWithRoutesApi() {
    const points = this.routePoints();
    if (points.length < 2) return;

    const [origin, ...rest] = points;
    const destination = rest.pop()!;

    const body = {
      origin: { location: { latLng: { latitude: origin.lat, longitude: origin.lng } } },
      destination: { location: { latLng: { latitude: destination.lat, longitude: destination.lng } } },
      intermediates: rest.map(p => ({ location: { latLng: { latitude: p.lat, longitude: p.lng } } })),
      travelMode: 'DRIVE',
      optimizeWaypointOrder: true,
      languageCode: 'fr-FR',
      computeAlternativeRoutes: false,
    };

    this._registerSubscription(
      this._http
        .post<RoutesApiResponse>(
          `https://routes.googleapis.com/directions/v2:computeRoutes?key=${this._config.apiKey}`,
          body,
          { headers: { 'Content-Type': 'application/json', 'X-Goog-FieldMask': '*' } }
        )
        .subscribe({
          next: response => {
            const route = response.routes[0];
            if (!route) return;

            const decodedPath = google.maps.geometry.encoding.decodePath(route.polyline.encodedPolyline);
            new google.maps.Polyline({
              path: decodedPath,
              strokeColor: 'red',
              strokeOpacity: 0.8,
              strokeWeight: 5,
            }).setMap(this.map()?.googleMap ?? null);

            const leg = route.legs[0];
            this.routeDetails.set(
              leg.steps.map(step => ({
                instruction: step.navigationInstruction?.instructions ?? '',
                distance: step.distanceMeters,
                duration: step.duration,
              }))
            );
            this.routeSummary.set({
              distanceKm: (leg.distanceMeters / 1000).toFixed(1),
              duration: this.parseDuration(leg.duration),
            });
          },
          error: err => Logger.LogError('[ta-google-maps] Routes API error', err),
        })
    );
  }

  public parseDuration(isoDuration: string): string {
    const match = isoDuration.match(/PT(?:(\d+)H)?(?:(\d+)M)?/);
    if (!match) return isoDuration;
    const [, hours, minutes] = match;
    return `${hours ? hours + ' h ' : ''}${minutes ? minutes + ' min' : ''}`.trim();
  }
}
