# `<ta-card>` — `CardComponent`
**Quand l'utiliser** : Conteneur carte principal. Voir `_composed/card.md` pour le pattern complet.
**Template canonique** :
```html
<ta-card [shadow]="true" [highlight]="false" (click)="onCardClick()">
  <ta-card-header>...</ta-card-header>
  <ta-card-content>...</ta-card-content>
</ta-card>
```
**Inputs** :
- `highlight` : `boolean` — `false` (défaut) — bordure accent
- `shadow` : `boolean` — `true` (défaut) — ombre portée
- `fullHeight` : `boolean` — `false`
- `noContent` : `boolean` — `false`
- `directionCard` : `'vertical' | 'horizontal' | null` — `null` par défaut
- `isNew` : `boolean` — affiche un indicateur "nouveau" (`false` par défaut)

**Outputs** : `(click)` — clic sur la carte.
