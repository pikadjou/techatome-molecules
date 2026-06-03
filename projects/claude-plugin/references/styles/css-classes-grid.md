# Classes CSS — Grille

Système de grille CSS (CSS Grid) à 12 colonnes avec breakpoints responsive.

## Conteneur

```html
<div class="grid">       <!-- Grille CSS standard -->
<div class="grid-responsive"> <!-- Grille CSS avec comportement adaptatif -->
```

## Colonnes (dans `.grid` ou `.grid-responsive`)

| Classe | Largeur |
|--------|---------|
| `.full` | 100% (12 colonnes) |
| `.two-thirds` | 66.66% (8 colonnes) |
| `.one-half` | 50% (6 colonnes) |
| `.one-third` | 33.33% (4 colonnes) |
| `.one-fourth` | 25% (3 colonnes) |
| `.one-sixth` | 16.66% (2 colonnes) |
| `.five-sixths` | 83.33% (10 colonnes) |

## Responsive — préfixes de breakpoint

Chaque classe de colonne a des variantes responsive qui s'appliquent **en dessous** du breakpoint (max-width).

Format : `.{breakpoint}-{colonne}`

```html
<div class="grid">
  <!-- 50% desktop, 100% en dessous de 768px -->
  <div class="one-half md-full">...</div>

  <!-- 33% desktop, 50% tablet, 100% mobile -->
  <div class="one-third md-one-half sm-full">...</div>

  <!-- 25% desktop, 100% tablet -->
  <div class="one-fourth tablette-full">...</div>
</div>
```

## Grilles standalone (sans `.grid` parent)

Classes qui définissent elles-mêmes un contexte grid :

| Classe | Description |
|--------|-------------|
| `.grid-full` | Grille 1 colonne |
| `.grid-one-half` | Grille 2 colonnes |
| `.grid-one-third` | Grille 3 colonnes |
| `.grid-one-fourth` | Grille 4 colonnes |
| `.grid-one-sixth` | Grille 6 colonnes |

Avec variantes responsive : `.grid-md-full`, `.grid-sm-one-half`, etc.

## Exemple complet

```html
<div class="grid g-space-md">
  <div class="one-third md-one-half sm-full">
    <ta-card>Carte 1</ta-card>
  </div>
  <div class="one-third md-one-half sm-full">
    <ta-card>Carte 2</ta-card>
  </div>
  <div class="one-third md-full">
    <ta-card>Carte 3</ta-card>
  </div>
</div>
```
