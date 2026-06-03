# Pattern composé canonique — Card

```html
<!-- Carte simple -->
<ta-card [shadow]="true">
  <ta-card-header>
    <ta-card-title>Jean Dupont</ta-card-title>
    <ta-card-subtitle>Développeur Senior</ta-card-subtitle>
  </ta-card-header>
  <ta-card-content>
    <ta-text [size]="'sm'">Contenu de la carte</ta-text>
  </ta-card-content>
  <ta-card-cta>
    <ta-button [type]="'secondary'" (action)="onView()">Voir</ta-button>
  </ta-card-cta>
</ta-card>

<!-- Carte cliquable avec image et tag -->
<ta-card [shadow]="true" [isNew]="item.isNew" (click)="onCardClick(item)">
  <ta-card-image [src]="item.thumbnailUrl" />
  <ta-card-tag>
    <ta-badge [value]="'Urgent'" [type]="'danger'" />
  </ta-card-tag>
  <ta-card-header>
    <ta-card-title>{{ item.title }}</ta-card-title>
  </ta-card-header>
  <ta-card-content>
    <ta-expandable-text [height]="80">{{ item.description }}</ta-expandable-text>
  </ta-card-content>
</ta-card>

<!-- Carte horizontale -->
<ta-card [directionCard]="'horizontal'" [highlight]="true">
  <ta-card-header>
    <ta-user-logo [user]="item.user" [size]="'md'" />
    <ta-card-title>{{ item.name }}</ta-card-title>
  </ta-card-header>
  <ta-card-content class="flex-full">
    <!-- contenu -->
  </ta-card-content>
</ta-card>
```

**Composants** : `ta-card` · `ta-card-header` · `ta-card-title` · `ta-card-subtitle` · `ta-card-content` · `ta-card-cta` · `ta-card-image` · `ta-card-tag`

**Règles** :
- `ta-card-image` : toujours avant `ta-card-header`
- `ta-card-tag` : juste après `ta-card-image` ou au début si pas d'image
- `ta-card-cta` : toujours en dernier
- `ta-card-header` : toujours avant `ta-card-content`
- Pour les grilles de cartes : utiliser la grille CSS `<div class="grid">` + `one-third md-one-half sm-full`
