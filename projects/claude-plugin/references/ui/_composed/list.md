# Pattern composé canonique — List

```html
<!-- Liste complète avec tous les sous-composants -->
<ta-list-container>
  @for (item of items; track item.id) {
    <ta-list-element
      [withSeparator]="true"
      [flexColumn]="false"
      (action)="onSelect(item)"
    >
      <!-- Titre principal -->
      <ta-list-title>{{ item.name }}</ta-list-title>

      <!-- Sous-titre secondaire -->
      <ta-list-sub-title>{{ item.role }}</ta-list-sub-title>

      <!-- Tags/badges -->
      <ta-list-tag>
        <ta-badge [value]="item.status" [type]="getStatusType(item.status)" />
      </ta-list-tag>

      <!-- Info complémentaire à droite -->
      <ta-list-extra-information>
        <ta-time-ago [date]="item.updatedAt" />
      </ta-list-extra-information>
    </ta-list-element>
  }
</ta-list-container>

<!-- Liste verticale (flexColumn) -->
<ta-list-container>
  @for (item of items; track item.id) {
    <ta-list-element [flexColumn]="true">
      <ta-list-title>{{ item.title }}</ta-list-title>
      <ta-list-sub-title>{{ item.description }}</ta-list-sub-title>
    </ta-list-element>
  }
</ta-list-container>
```

**Composants** : `ta-list-container` · `ta-list-element` · `ta-list-title` · `ta-list-sub-title` · `ta-list-tag` · `ta-list-extra-information`

**Règles** :
- `ta-list-title` : toujours présent dans `ta-list-element`
- `ta-list-extra-information` : positionné automatiquement à droite
- `ta-list-tag` : pour les badges/statuts
- `[withSeparator]="false"` : sur le dernier élément ou quand non souhaité
