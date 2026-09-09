import { ComponentDemo } from "../../demo.types";

export const DEMO: ComponentDemo = {
  id: "ta-google-maps",
  group: "Divers",
  summary:
    "Carte Google Maps avec marqueurs groupés, fenêtre d'info et tracé d'itinéraire via l'API Routes ; ne déclare aucun input.",
  examples: [],
  notRenderable: {
    reason:
      "`MapComponent` ne déclare aucun input : ses marqueurs (`readonly markers = markers.map(...)`) et son itinéraire (`selectedPoints`) viennent d'un fichier de mock interne au module (`modules/maps/mock.ts`), et sa clé d'API Google Maps est câblée dans `GoogleMapsLoaderService` (interne à `@ta/core`, non paramétrable depuis l'extérieur). Le montage exige en plus `provideGoogleMaps()` — un `APP_INITIALIZER` qui charge dynamiquement `https://maps.googleapis.com/maps/api/js` avant que `GoogleMap`/`MapMarker` (`@angular/google-maps`) puissent s'initialiser — et suppose `window.google` réellement chargé au moment du rendu. La vitrine ne fournit ni clé ni chargement de script tiers, et n'en ajoute aucune ici.",
    usage: `<ta-google-maps></ta-google-maps>`,
  },
  notes:
    "`provideGoogleMaps()` (exporté par `@ta/core`) s'ajoute aux providers de la route ou de l'application hébergeant `ta-google-maps` ; il ne prend aucun paramètre de clé, celle-ci étant fixée dans `GoogleMapsLoaderService`.",
};
