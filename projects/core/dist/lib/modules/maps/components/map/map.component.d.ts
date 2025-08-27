/// <reference types="googlemaps" />
/// <reference types="google.maps" />
/// <reference types="googlemaps" />
/// <reference types="googlemaps" />
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, QueryList } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import * as i0 from "@angular/core";
export declare class MapComponent implements AfterViewInit {
    private http;
    infoWindow: MapInfoWindow;
    map: GoogleMap;
    mapMarkers: QueryList<MapMarker>;
    readonly options: google.maps.MapOptions;
    routeSummary: any;
    routeDetails: import("@angular/core").WritableSignal<any[]>;
    readonly markers: {
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
        position: {
            lat: number;
            lng: number;
        };
        title: string;
    }[];
    readonly selectedPoints: {
        lat: number;
        lng: number;
    }[];
    directionsRenderer: google.maps.DirectionsRenderer;
    selectedMarker: import("@angular/core").WritableSignal<google.maps.Marker | null>;
    constructor(http: HttpClient);
    ngAfterViewInit(): void;
    openInfoWindow(mapMarker: MapMarker): void;
    renderRoute(): void;
    renderRouteWithRoutesApi(): void;
    parseDuration(isoDuration: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapComponent, "ta-google-maps", never, {}, {}, never, never, true, never>;
}
