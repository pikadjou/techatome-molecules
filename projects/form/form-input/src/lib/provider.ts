import { MatGoogleMapsAutocompleteModule } from "@angular-material-extensions/google-maps-autocomplete";
import { Provider, importProvidersFrom } from "@angular/core";

export interface TaFormProviderOptions {
  /** Clé Google Maps (Places) utilisée par l'autocomplétion d'adresse. */
  googleMapsApiKey: string;
}

export const provideForm = (options: TaFormProviderOptions): Provider => [
  importProvidersFrom(MatGoogleMapsAutocompleteModule.forRoot(options.googleMapsApiKey)),
];
