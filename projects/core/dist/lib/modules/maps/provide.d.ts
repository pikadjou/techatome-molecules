import { Provider } from "@angular/core";
import { Observable } from "rxjs";
import { TaGoogleMapsConfig } from "./google-maps.config";
import { TaGoogleMapsLoaderService } from "./googleMapsLoader.service";
export declare function initializeGoogleMaps(loader: TaGoogleMapsLoaderService): () => Observable<void>;
export declare const provideGoogleMaps: (config: TaGoogleMapsConfig) => Provider;
