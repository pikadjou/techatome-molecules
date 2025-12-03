import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { Provider, importProvidersFrom } from '@angular/core';

export const provideForm = (): Provider => [
  importProvidersFrom(MatGoogleMapsAutocompleteModule.forRoot('AIzaSyA4s5KmUyZ8uvXiWA3RMmKoNoKTxIh9nO8')),
];
