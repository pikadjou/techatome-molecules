import { ComponentDemo } from "../../demo.types";

export const DEMO: ComponentDemo = {
  id: "ta-bottom-sheet-template-generic",
  group: "Menu",
  summary:
    "Coquille générique d'un `MatBottomSheet` : un `TemplateRef` et un contexte libres, fournis via `MAT_BOTTOM_SHEET_DATA` — mais le contenu projeté ne s'affiche jamais (voir ci-dessous).",
  examples: [],
  notRenderable: {
    reason:
      "`bottom-sheet-template-generic.component.html` lie `[ngTemplateOutlet]` et `[ngTemplateOutletContext]` sur son `<ng-template>` interne, mais `BottomSheetTemplateGenericComponent` (standalone) n'importe que `NgStyle` dans son tableau `imports` — `NgTemplateOutlet` en est absent, dans la source comme dans le `dist` publié. Constaté à l'exécution (`ng serve`, page montée avec `MAT_BOTTOM_SHEET_DATA` fourni comme pour `ta-bottom-sheet-template-basic`) : Angular lève `NG0303: Can't bind to 'ngTemplateOutlet' since it isn't a known property of 'ng-template'` dans la console, et seule la poignée (`.handler`) du composant s'affiche — `data.template` n'est jamais projeté, quel que soit son contenu. Le défaut est dans le composant de bibliothèque lui-même, reproductible dans n'importe quel contexte (y compris via `MatBottomSheet.open()` en production) ; hors périmètre de la vitrine de le corriger — il suffirait d'ajouter `NgTemplateOutlet` à `imports`.",
    usage: `this._bottomSheet.open(BottomSheetTemplateGenericComponent, {
  data: {
    template: this.contentTemplate,
    context: { titre: "Actions rapides" },
    maxHeight: 320,
  },
});`,
  },
  notes:
    "`data.maxHeight` (non démontrable, voir ci-dessus) contraint `.bottom-sheet-template-generic` via `[ngStyle]`, sans règle de défilement associée dans son SCSS. `ta-bottom-sheet-template-basic`, l'autre gabarit du même dossier, n'a pas ce défaut : son `BottomSheetTemplateBasicComponent` importe bien `NgTemplateOutlet`.",
};
