import { Provider } from "@angular/core";
import { GoogleMapsLoaderService } from "./googleMapsLoader.service";
export declare function initializeGoogleMaps(loader: GoogleMapsLoaderService): () => Promise<void>;
export declare const provideGoogleMaps: () => Provider;
