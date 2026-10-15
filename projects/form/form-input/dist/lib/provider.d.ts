import { Provider } from "@angular/core";
export interface TaFormProviderOptions {
    /** Clé Google Maps (Places) utilisée par l'autocomplétion d'adresse. */
    googleMapsApiKey: string;
}
export declare const provideForm: (options: TaFormProviderOptions) => Provider;
