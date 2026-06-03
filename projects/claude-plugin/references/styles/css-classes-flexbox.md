# Classes CSS — Flexbox

Ces classes sont disponibles globalement dans tous les templates Angular.

## Classes de base

| Classe | CSS équivalent |
|--------|----------------|
| `.flex` | `display: flex` |
| `.flex-row` | `display: flex; flex-direction: row` |
| `.flex-column` | `display: flex; flex-direction: column` |
| `.flex-full` | `display: flex; flex: 1 1 100%` |
| `.flex-fill` | `display: flex; flex: 1 1 auto` |
| `.space-between` | `display: flex; justify-content: space-between` |
| `.space-around` | `display: flex; justify-content: space-around` |
| `.flex-start` | `display: flex; flex-wrap: wrap; justify-content: flex-start` |
| `.align-center` | `display: flex; align-items: center` |
| `.align-end` | `display: flex; align-items: flex-end; justify-content: end; margin-left: auto` |
| `.justify-end` | `display: flex; justify-content: flex-end; margin-left: auto` |
| `.full-width` | `flex: 1; width: 100%` |

## Classes responsives

Chaque classe flex a un équivalent responsive préfixé par le nom du breakpoint. Appliquées quand la largeur est **inférieure** au breakpoint (mobile-first).

Format : `.{breakpoint}-{classe}`

```html
<!-- Flex-column en mobile (< 576px), flex-row sinon -->
<div class="flex-row sm-flex-column">

<!-- Full width en tablet (< 768px) -->
<div class="one-half md-full-width">
```

Breakpoints disponibles : `xs`, `sm`, `mobile`, `md`, `tablette`, `lg`, `desktop`, `xl`, `xxl`, `xxxl`

## Exemples d'utilisation

```html
<!-- Header avec espace entre éléments, centré verticalement -->
<div class="space-between align-center p-space-md">
  <h2>Titre</h2>
  <button>Action</button>
</div>

<!-- Colonne de cards avec gap -->
<div class="flex-column g-space-md">
  <ta-card>...</ta-card>
  <ta-card>...</ta-card>
</div>

<!-- Ligne responsive : côte à côte desktop, colonne mobile -->
<div class="flex-row g-space-lg md-flex-column">
  <div class="flex-full">Gauche</div>
  <div class="flex-full">Droite</div>
</div>
```
