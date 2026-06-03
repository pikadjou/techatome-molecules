# `<ta-logo>` — `LogoComponent`
**Quand l'utiliser** : Afficher le logo de l'application (depuis `assets/partners/logo/`).
**Template canonique** :
```html
<ta-logo />
<ta-logo [color]="'white'" [type]="'oneline'" [widthPercentage]="80" />
```
**Inputs** :
- `color` : `'white' | 'black' | undefined` — variante de couleur du logo
- `type` : `'oneline' | undefined` — version une ligne
- `widthPercentage` : `number` — largeur en % (`100` par défaut)

**Notes** : Le chemin généré est `assets/partners/logo/logo[-oneline][-white|-black].png`.
