/// <reference types="google.maps" />
import { AfterViewInit } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { TaBaseComponent } from '@ta/utils';
import * as i0 from "@angular/core";
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
export declare class MapComponent extends TaBaseComponent implements AfterViewInit {
    /** Points affichés sur la carte, regroupés automatiquement. */
    markers: import("@angular/core").InputSignal<TaMapMarker[]>;
    /** Étapes de l'itinéraire à tracer (au moins deux points). */
    routePoints: import("@angular/core").InputSignal<google.maps.LatLngLiteral[]>;
    options: import("@angular/core").InputSignal<google.maps.MapOptions>;
    readonly infoWindow: import("@angular/core").Signal<MapInfoWindow | undefined>;
    readonly map: import("@angular/core").Signal<GoogleMap | undefined>;
    readonly mapMarkers: import("@angular/core").Signal<readonly MapMarker[]>;
    readonly markerOptions: import("@angular/core").Signal<{
        options: {
            animation: google.maps.Animation;
            icon: {
                path: google.maps.SymbolPath;
                scale: number;
                fillColor: string;
                fillOpacity: number;
                strokeWeight: number;
                strokeColor: string;
            };
        };
        position: google.maps.LatLngLiteral;
        title: string;
    }[]>;
    readonly routeSummary: import("@angular/core").WritableSignal<TaMapRouteSummary | null>;
    readonly routeDetails: import("@angular/core").WritableSignal<TaMapRouteStep[]>;
    readonly selectedMarker: import("@angular/core").WritableSignal<google.maps.Marker | null>;
    private readonly _http;
    private readonly _config;
    private _directionsRenderer;
    constructor();
    ngAfterViewInit(): void;
    openInfoWindow(mapMarker: MapMarker): void;
    renderRoute(): void;
    renderRouteWithRoutesApi(): void;
    parseDuration(isoDuration: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapComponent, "ta-google-maps", never, { "markers": { "alias": "markers"; "required": false; "isSignal": true; }; "routePoints": { "alias": "routePoints"; "required": false; "isSignal": true; }; "options": { "alias": "options"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
