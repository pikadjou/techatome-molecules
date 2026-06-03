# `JoinPipe` — `join` — joindre un tableau en chaîne

**Quand l'utiliser** : Afficher un tableau de valeurs séparées par un délimiteur.

**Import** : `JoinPipe` depuis `@ta/utils`

**Template** :
```html
{{ ['Paris', 'Lyon', 'Marseille'] | join }}
<!-- Résultat : "Paris, Lyon, Marseille" -->

{{ tags | join:' · ' }}
<!-- Résultat : "Tag1 · Tag2 · Tag3" -->
```

**Signature** : `transform(input: Array<any>, sep: string = ', '): string`

**Notes** : Utilise `Array.join()` en interne. Standalone.
