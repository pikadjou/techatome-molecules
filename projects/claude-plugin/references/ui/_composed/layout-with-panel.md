# Pattern composé canonique — Layout With Panel

```html
<!-- Layout deux colonnes avec drawer Material -->
<ta-layout-with-panel [open]="isPanelOpen">
  <!-- Colonne principale (ng-content par défaut) -->
  <div class="main-area">
    <ta-layout-title>
      <ta-title [level]="2">Liste</ta-title>
      <ta-button [icon]="'tune'" (action)="isPanelOpen = !isPanelOpen">Filtres</ta-button>
    </ta-layout-title>
    <!-- contenu principal -->
  </div>

  <!-- Panneau latéral (drawer) -->
  <div drawer>
    <ta-layout-side>
      <ta-layout-side-content>
        <!-- formulaire de filtres / détail -->
        <ta-form [inputs]="filterForm" />
      </ta-layout-side-content>
      <ta-layout-side-cta [background]="true">
        <ta-button (action)="applyFilters()">Appliquer</ta-button>
        <ta-button [type]="'secondary'" (action)="isPanelOpen = false">Fermer</ta-button>
      </ta-layout-side-cta>
    </ta-layout-side>
  </div>
</ta-layout-with-panel>

<!-- Full panel flottant (overlay) -->
<ta-layout-full-panel [title]="'Détails'" [width]="'480px'" (closeEvent)="onClose()">
  <ta-layout-side-content>
    <!-- contenu du panneau -->
  </ta-layout-side-content>
  <ta-layout-side-cta>
    <ta-button (action)="save()">Enregistrer</ta-button>
  </ta-layout-side-cta>
</ta-layout-full-panel>
```

**Composants** : `ta-layout-with-panel` · `ta-layout-side` · `ta-layout-side-content` · `ta-layout-side-cta` · `ta-layout-full-panel` · `ta-layout-panel`

**Règles** :
- `ta-layout-with-panel` : contrôlé par `[open]` boolean depuis le composant parent
- `ta-layout-side` : structure interne du panneau (content + cta)
- `ta-layout-side-cta` : toujours en dernier dans `ta-layout-side`
- `ta-layout-full-panel` : alternative flottante non-drawer (pour panneaux superposés)
