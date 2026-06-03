# `<ta-title>` — `TitleComponent`
**Quand l'utiliser** : Titre hiérarchique (H1-H6) avec style optionnel thématique.
**Template canonique** :
```html
<ta-title [level]="2" [isBold]="true">Mon titre</ta-title>
<ta-title [level]="3" [isTheme]="true" [icon]="'star'">Titre thématique</ta-title>
```
**Inputs** :
- `level` : `1 | 2 | 3 | 4 | 5 | 6` — niveau H (`1` par défaut)
- `isTheme` : `boolean` — applique le style thématique CSS (`false` par défaut)
- `isBold` : `boolean` — `false` par défaut
- `icon` : `string` — icône Material optionnelle avant le texte
