# `OnRenderDirective` — `[TaOnRender]` — détecter un changement de valeur

**Quand l'utiliser** : Déclencher un événement quand une propriété change de valeur (utile pour détecter un re-rendu conditionnel).

**Import** : `OnRenderDirective` depuis `@ta/utils`

**Template** :
```html
<div [TaOnRender]="this.isVisible()" (rendered)="onPanelRendered()">
  Contenu
</div>
```

**Input** :
- `onRender` — `boolean` (required) — valeur surveillée

**Output** :
- `rendered: EventEmitter` — émis à chaque changement de `onRender`

**Notes** : Utilise `ngOnChanges` + comparaison previous/current. Ne s'active pas au premier rendu si la valeur ne change pas.
