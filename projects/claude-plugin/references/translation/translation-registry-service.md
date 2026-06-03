# `TaTranslationRegistryService` — registre des sources de traduction

**Quand l'utiliser** : Rarement utilisé directement — géré automatiquement par `TaLazyTranslationService` et `TaAbstractTranslationModule`.

**Import** : `import { TaTranslationRegistryService } from '@ta/translation'`

**API** :
```typescript
class TaTranslationRegistryService {
  registered: ITranslation[];
  newRegistrationSubscription$: Subject<any>;

  register(source: ITranslation): void      // enregistre une nouvelle source
  getTranslations(lang: string): Observable<object | null>[]  // toutes les traductions
}

interface ITranslation {
  id: string;
  getTranslation(lang: string): Observable<object | null>;
}
```

**Fonctionnement** :
- `TaTranslationService` écoute `newRegistrationSubscription$` et recharge les traductions quand une nouvelle source est enregistrée
- Chaque `TaLazyTranslationService` s'enregistre automatiquement dans son constructeur

**Notes** :
- Utiliser `TaLazyTranslationService` plutôt que d'implémenter `ITranslation` directement
- `TaAbstractTranslationModule` est **deprecated** — utiliser `TaLazyTranslationService`
