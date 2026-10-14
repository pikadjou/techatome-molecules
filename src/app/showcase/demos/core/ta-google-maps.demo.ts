import { ComponentDemo } from "../../demo.types";

export const DEMO: ComponentDemo = {
  id: "ta-google-maps",
  group: "Divers",
  summary:
    "Carte Google Maps avec marqueurs groupés (`markers`), fenêtre d'info et tracé d'itinéraire via l'API Routes (`routePoints`).",
  examples: [],
  notRenderable: {
    reason:
      "Le montage exige `provideGoogleMaps({ apiKey })` — un `APP_INITIALIZER` qui charge dynamiquement `https://maps.googleapis.com/maps/api/js` avant que `GoogleMap`/`MapMarker` (`@angular/google-maps`) puissent s'initialiser — et suppose `window.google` réellement chargé au moment du rendu. La vitrine ne fournit ni clé d'API ni chargement de script tiers, et n'en ajoute aucune ici.",
    usage: `<ta-google-maps [markers]="this.markers" [routePoints]="this.routePoints"></ta-google-maps>`,
  },
  notes:
    "`provideGoogleMaps({ apiKey, libraries? })` (exporté par `@ta/core`) s'ajoute aux providers de l'application hébergeant `ta-google-maps` ; la clé n'est jamais embarquée dans la lib. Le composant lit la même configuration (`TA_GOOGLE_MAPS_CONFIG`) pour appeler l'API Routes.",
};
