# `LetDirective` — `*ngLet` — assigner une variable en template

**Quand l'utiliser** : Stocker le résultat d'un `async` pipe ou d'une expression calculée dans une variable de template, pour éviter les appels répétés.

**Import** : `LetDirective` depuis `@ta/utils`

**Template** :
```html
<ng-container *ngLet="(data$ | async) as data">
  @if (data) {
    <span>{{ data.name }}</span>
  }
</ng-container>
```

**Input** :
- `ngLet` — `T` — valeur à assigner à la variable de contexte

**Contexte disponible** :
- `$implicit` — même valeur que `ngLet` (utilisable avec `as`)
- `ngLet` — idem

**Notes** : Utilise Angular `effect()` en interne pour réagir aux changements. Compatible avec les signal inputs. Le sélecteur est `[ngLet]` (directive structurelle).
