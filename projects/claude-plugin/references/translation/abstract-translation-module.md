# `TaAbstractTranslationModule` — module de traduction statique (deprecated)

**Statut** : **DEPRECATED** — utiliser `TaLazyTranslationService` à la place.

**Import** : `import { TaAbstractTranslationModule } from '@ta/translation'`

**Ancienne API** :
```typescript
// Ancienne façon (ne plus utiliser)
export class TaTranslationMyLib extends TaAbstractTranslationModule {
  constructor() {
    super('mylib', { en: enJson, fr: frJson, nl: nlJson, es: esJson });
  }
}
```

**Migration vers `TaLazyTranslationService`** :
```typescript
// Nouvelle façon
@Injectable({ providedIn: 'root' })
export class TaTranslationMyLib extends TaLazyTranslationService {
  constructor() {
    super('mylib');
  }
  static override getInstance() {
    return inject(this);
  }
}
```

**Différences clés** :
- `TaAbstractTranslationModule` : traductions inline dans le bundle TypeScript
- `TaLazyTranslationService` : traductions dans fichiers JSON chargés à la demande (plus léger)

**Notes** :
- La classe abstraite supporte `{ en, fr, nl, es }` — 4 langues hardcodées
- Les librairies existantes qui l'utilisent encore doivent être migrées progressivement
