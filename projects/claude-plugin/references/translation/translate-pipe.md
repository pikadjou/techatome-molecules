# `TranslatePipe` — pipe de traduction i18n

**Quand l'utiliser** : Traduire toutes les clés i18n dans les templates Angular.

**Import** : `import { TranslatePipe } from '@ta/translation'` (ré-exporte `@ngx-translate/core`)

**Usage dans un template** :
```html
<!-- Traduction simple -->
<span>{{ 'user.name' | translate }}</span>

<!-- Avec interpolation -->
<span>{{ 'user.greeting' | translate: { name: user.firstName } }}</span>

<!-- Dans un attribut -->
<button [title]="'action.save' | translate">{{ 'action.save' | translate }}</button>

<!-- Dans input -->
<ta-input [label]="'form.email' | translate"></ta-input>
```

**Usage dans le TypeScript** (via `TranslateService`) :
```typescript
import { TranslateService } from '@ngx-translate/core';

private _translate = inject(TranslateService);

// Synchrone (key doit être chargée)
const msg = this._translate.instant('user.saved');

// Asynchrone (observable)
this._translate.get('user.greeting', { name: 'John' }).subscribe(msg => ...);
```

**Notes** :
- Toujours utiliser des clés i18n, jamais de texte en dur dans les templates
- Les clés suivent le pattern `<lib>.<feature>.<element>`
- Le `TranslatePipe` est réexporté depuis `@ngx-translate/core`
- Voir `ta-translation-service.md` pour changer la langue dynamiquement
