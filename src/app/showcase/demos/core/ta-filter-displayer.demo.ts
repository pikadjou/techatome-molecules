import { ComponentDemo } from "../../demo.types";

export const DEMO: ComponentDemo = {
  id: "ta-filter-displayer",
  group: "Filtres",
  summary: "Déclencheur (bouton ou lien) censé ouvrir un `ta-filter-container` en panneau plein écran ; sur mobile, une feuille du bas.",
  examples: [],
  notRenderable: {
    reason:
      "Le déclencheur s'affiche sans problème (`container=\"button\"` rend un `ta-button` circulaire, `container=\"link\"` l'icône seule), mais l'ouvrir lève une erreur dès le premier clic : `filter-displayer.component.html` (ligne 11) lie `[ngTemplateOutlet]=\"filterTemplate\"` sur un `<ng-template>`, alors que `NgTemplateOutlet` (`@angular/common`) ne figure pas dans le tableau `imports` de `FilterDisplayerComponent` (`filter-displayer.component.ts` : seulement `FontIconComponent`, `LayoutFullPanelComponent`, `FilterContainerComponent`, `ButtonComponent`). Angular lève alors `NG0303 : Can't bind to 'ngTemplateOutlet' since it isn't a known property of 'ng-template'` — vérifié à l'exécution (`ng serve`, console du navigateur) sur cette page : le panneau reste vide. Le panneau de filtres, seule raison d'être du composant, ne se rend donc jamais. Bug antérieur à cette tâche, hors périmètre de la vitrine de le corriger.",
    usage: `<ta-filter-displayer
  container="button"
  [form]="this.filterInputs"
  (filtersSelected)="this.onFiltersApplied($event)"
></ta-filter-displayer>`,
  },
  notes:
    "`iconType` (défaut `\"filter\"`) choisit l'icône du déclencheur. Sur mobile (`BreakpointDetection.isMobile`, < 576px), l'ouverture passerait par une feuille du bas Material (`MatBottomSheet`) au lieu du panneau plein écran — même dépendance à `filterTemplate`, donc vraisemblablement soumise au même bug.",
};
