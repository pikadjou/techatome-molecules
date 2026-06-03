# `<ta-trigram>` — `TrigramComponent`
**Quand l'utiliser** : Avatar textuel avec les 3 premières lettres d'un nom (fallback sans photo).
**Template canonique** :
```html
<ta-trigram [value]="user.firstname" [size]="35" />
```
**Inputs** :
- `value` (required) : `string | null` — prénom ou nom source
- `size` : `number` — diamètre en pixels (`35` par défaut)

**Notes** : Extrait les caractères 0, 2, 3 en majuscules. Pour un avatar utilisateur complet, préférer `<ta-user-logo>`.
