import { ComponentDemo } from "../../demo.types";

export const DEMO: ComponentDemo = {
  id: "ta-search-displayer",
  group: "Recherche",
  summary:
    "Champ de recherche avec historique local, censé encapsuler `ta-search-history-displayer` ; `container` choisirait le déclencheur affiché sous 576px de large.",
  examples: [],
  notRenderable: {
    reason:
      "À largeur de bureau (`!mobileDetection`), `search-displayer.component.html` rend inconditionnellement `<ng-template [ngTemplateOutlet]=\"searchTemplate\" [ngTemplateOutletContext]=\"...\">`, mais `NgTemplateOutlet` (`@angular/common`) ne figure pas dans le tableau `imports` de `SearchDisplayerComponent` (`search-displayer.component.ts` : seulement `FontIconComponent`, `SearchHistoryDisplayerComponent`, `ButtonComponent`). Angular lève `NG0303` (`Can't bind to 'ngTemplateOutlet'`, puis la même erreur pour `'ngTemplateOutletContext'`) dès le premier rendu — vérifié à l'exécution (`ng serve`, console du navigateur) sur cette page : rien ne s'affiche là où le champ de recherche devrait apparaître. `ta-search-history-displayer`, le composant qu'il encapsule, importe correctement `NgTemplateOutlet` et se rend sans problème — voir sa propre démo. Bug antérieur à cette tâche, hors périmètre de la vitrine de le corriger.",
    usage: `<ta-search-displayer
  [placeholder]="'Rechercher une pièce'"
  [searchHistory]="{ type: 'pieces' }"
  (valueCompleted)="this.onSearch($event)"
></ta-search-displayer>`,
  },
  notes:
    "Sur mobile (`BreakpointDetection.isMobile`, < 576px), `container` (`'button' | 'link'`) choisirait le déclencheur affiché à la place du champ direct — non vérifiable ici, ce chemin dépend lui aussi du même `ng-template` défaillant.",
};
