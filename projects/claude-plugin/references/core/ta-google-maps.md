# `<ta-google-maps>` — `MapComponent`
**Quand l'utiliser** : Carte Google Maps avec marqueurs clusterisés et calcul d'itinéraire.
**Template canonique** :
```html
<ta-google-maps [markers]="this.markers" [routePoints]="this.routePoints"></ta-google-maps>
```
**Inputs** : `markers: TaMapMarker[]` (`{ position, title }`), `routePoints: google.maps.LatLngLiteral[]` (au moins deux points pour tracer l'itinéraire), `options: google.maps.MapOptions`.
**Notes** : Requiert `provideGoogleMaps({ apiKey })` dans les providers de l'application. Utilise `@angular/google-maps` + `@googlemaps/markerclusterer` ; les libellés du résumé d'itinéraire viennent du module de traduction `maps`.
