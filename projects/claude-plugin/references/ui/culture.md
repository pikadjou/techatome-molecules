# `<ta-culture>` — `CultureComponent`
**Quand l'utiliser** : Afficher une ou plusieurs cultures/langues associées à un utilisateur ou ressource.
**Template canonique** :
```html
<ta-culture [cultures]="['fr', 'nl']" />
```
**Inputs** :
- `cultures` (required) : `Culture[]` — tableau de codes de culture (enum `Culture` depuis `@ta/utils`)
