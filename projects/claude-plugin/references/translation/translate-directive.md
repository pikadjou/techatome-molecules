# `TranslateDirective` — directive de traduction

**Quand l'utiliser** : Alternative au pipe `translate` pour traduire le contenu textuel d'un élément.

**Import** : `import { TranslateDirective } from '@ta/translation'`

**Usage** :
```html
<!-- Équivalent à {{ 'key' | translate }} -->
<span translate>user.name</span>
<span [translate]="'user.name'"></span>

<!-- Avec paramètres -->
<span [translate]="'user.greeting'" [translateParams]="{ name: user.firstName }"></span>
```

**Notes** :
- Ré-exportée depuis `@ngx-translate/core`
- Préférer le **pipe** `| translate` dans la plupart des cas (plus lisible)
- La directive est utile pour les cas où le pipe n'est pas applicable (contenu dynamique non-interpolé)
