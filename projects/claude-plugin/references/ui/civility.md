# `<ta-civility>` — `CivilityComponent`
**Quand l'utiliser** : Afficher une icône de genre/civilité (homme, femme, inconnu).
**Template canonique** :
```html
<ta-civility [civility]="user.civility" />
```
**Inputs** :
- `civility` (required) : `Civility | null` — enum `Civility` : `Unknown=0`, `Dear=1` (wc), `Madame=2` (woman), `Sir=3` (man)
